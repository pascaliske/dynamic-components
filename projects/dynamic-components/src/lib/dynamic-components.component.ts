import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core'
import { OnInit, ComponentRef, ɵComponentType } from '@angular/core'
import { upperFirst, camelCase } from './helpers'

/**
 * Interface describing a component to be dynamically created.
 */
export interface ComponentManifest {
    importer: () => Promise<any>
    componentName: string
    params?: Record<string, any>
    children?: ComponentManifest[]
}

@Component({
    selector: 'cmp-dynamic-components',
    template: '',
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
     * Fired once when all components got rendered.
     */
    @Output()
    public ready: EventEmitter<void> = new EventEmitter()

    /**
     * Initializes the component.
     *
     * @param viewContainerRef - Reference of the components view container
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

        this.resolveAllComponents(this.components).then(() => {
            this.ready.next()
            this.ready.complete()
        })
    }

    /**
     * Resolves all given component manifests sequentially.
     *
     * @param items - An array of manifests to render
     * @returns A Promise which resolves if all given manifests are rendered
     */
    private async resolveAllComponents(items: ComponentManifest[] = []): Promise<HTMLElement[]> {
        const results: HTMLElement[] = []

        for (const item of items) {
            results.push(await this.resolveComponent(item))
        }

        return results
    }

    /**
     * Resolve a component and inject it into the host.
     *
     * @param manifest - A manifest describing a dynamic component
     * @returns The host element of the dynamic component
     */
    private async resolveComponent({
        importer,
        componentName,
        params = {},
        children = [],
    }: ComponentManifest): Promise<HTMLElement> {
        const id: string = this.formatComponentName(componentName)
        const { [id]: component }: Record<string, ɵComponentType<any>> = await importer()

        if (!component) {
            console.log(`Unknown component: ${id}`)
            return
        }

        // pre resolve children components
        const nodes: HTMLElement[] = await this.resolveAllComponents(children)

        // resolve actual factory and create its component
        const factory = this.componentFactoryResolver.resolveComponentFactory(component)
        const ref: ComponentRef<any> = this.viewContainerRef.createComponent(
            factory,
            undefined,
            undefined,
            [nodes],
        )

        // inject params to instance
        for (const key in params) {
            if (params?.hasOwnProperty(key)) {
                ref.instance[key] = params?.[key]
            }
        }

        return ref?.location?.nativeElement
    }

    /**
     * Format a component name from dashed format to camel cased.
     *
     * @param name - The dashed component name
     * @returns The camel cased component name
     */
    private formatComponentName(name: string): string {
        if (!name?.includes('-')) {
            return null
        }

        // remove prefix and suffix if available
        name = name?.replace('cmp', '')
        name = name?.replace('component', '')

        // transform name and append suffix
        return `${upperFirst(camelCase(name))}Component`
    }
}
