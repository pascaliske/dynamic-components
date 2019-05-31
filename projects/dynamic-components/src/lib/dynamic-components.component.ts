import {
    Component,
    OnInit,
    Input,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
} from '@angular/core'
import { upperFirst, camelCase, reverse } from './helpers'
import { ComponentManifest } from './typings'

@Component({
    selector: 'cmp-dynamic-components',
    template: '<ng-template dynamic-components-host></ng-template>',
})
export class DynamicComponentsComponent implements OnInit {
    /**
     * The components which should be rendered dynamically.
     *
     * @param components - Array of component manifests
     */
    @Input()
    public components: ComponentManifest[] = []

    /**
     * Initializes the component.
     *
     * @param componentFactoryResolver - The component factory resolver service
     */
    public constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {}

    /**
     * Triggers the rendering.
     */
    public ngOnInit(): void {
        this.viewContainerRef.clear()

        for (const component of reverse(this.components)) {
            this.resolveComponent(component)
        }
    }

    /**
     * Resolve a component and inject it into the host.
     *
     * @param manifest - A manifest describing a dynamic component
     * @returns A component reference
     */
    private resolveComponent(manifest: ComponentManifest): ComponentRef<any> {
        const id = this.formatComponentName(manifest.componentName)
        const component = this.resolveComponentFactory(id)

        if (!component) {
            console.log(`Unknown component: ${id}`)
            return
        }

        // pre resolve children components
        let children: any[]
        if (manifest.children && manifest.children.length > 0) {
            children = manifest.children.map(child => this.resolveComponent(child))
            children = children.filter(child => child !== undefined)
            children = children.map(child => child.location.nativeElement)
        }

        // resolve actual factory and create its component
        const factory = this.componentFactoryResolver.resolveComponentFactory(component)
        const ref: ComponentRef<any> = this.viewContainerRef.createComponent(
            factory,
            0,
            undefined,
            [children],
        )

        // inject params to instance
        if (manifest.params && Object.keys(manifest.params).length > 0) {
            for (const key in manifest.params) {
                if (manifest.params.hasOwnProperty(key)) {
                    ref.instance[key] = manifest.params[key]
                }
            }
        }

        return ref
    }

    /**
     * Format a component name from dashed to camel cased.
     *
     * @param name - The dashed component name
     * @returns The camel cased component name
     */
    private formatComponentName(name: string): string {
        if (!name.includes('-')) {
            return null
        }

        // remove prefix and suffix if available
        name = name.replace('cmp', '')
        name = name.replace('component', '')

        // transform name and append suffix
        return `${upperFirst(camelCase(name))}Component`
    }

    /**
     * Resolve a factory by name.
     *
     * @param name - The component name as a string
     * @returns The component factory
     */
    private resolveComponentFactory(name: string): any {
        return this.componentFactoryResolver['_factories'].keys().find((item: any) => {
            return item.cmpName === name
        })
    }
}
