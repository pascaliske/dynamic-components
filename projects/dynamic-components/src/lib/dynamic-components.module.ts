import { NgModule, Type, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DynamicComponentsComponent } from './dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    exports: [DynamicComponentsComponent],
})
export class DynamicComponentsModule {
    /**
     * Imports the module and registers components for rendering dynamically.
     *
     * @param components - Array of components for rendering
     * @returns - The module with providers and entry components
     */
    public static forRoot(
        components: Array<Type<any>>,
    ): ModuleWithProviders<DynamicComponentsModule> {
        return {
            ngModule: DynamicComponentsModule,
            providers: [
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: components,
                    multi: true,
                },
            ],
        }
    }
}
