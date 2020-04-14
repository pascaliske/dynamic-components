import { Component, Input } from '@angular/core'

@Component({ template: '' }) // tslint:disable-next-line:component-class-suffix
export class Headline {
    @Input()
    public text: string

    public constructor() {}
}
