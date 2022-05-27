import { Component, Input } from '@angular/core'

@Component({ template: '' })
export class Headline {
    @Input()
    public text: string

    public constructor() {}
}
