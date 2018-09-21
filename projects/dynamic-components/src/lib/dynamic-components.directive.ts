import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[dynamic-components-host]',
})
export class DynamicComponentsDirective {
    /**
     * Initializes the dynamic component host element.
     *
     * @param viewContainerRef - A view container reference
     */
    public constructor(public viewContainerRef: ViewContainerRef) {}
}
