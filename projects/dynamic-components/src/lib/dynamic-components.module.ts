import { NgModule, Type, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DynamicComponentsComponent } from './dynamic-components.component'

@NgModule({
    imports: [CommonModule],
    declarations: [DynamicComponentsComponent],
    exports: [DynamicComponentsComponent],
})
export class DynamicComponentsModule {
    /**
     * Imports the module and registers components for rendering dynamically.
     *
     * @param components - Array of components for rendering
     * @returns - The module with providers and entry components
     */
    public static forRoot(components: Type<any>[]): ModuleWithProviders<DynamicComponentsModule> {
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
