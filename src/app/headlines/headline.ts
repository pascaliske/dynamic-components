import { Input, Directive } from '@angular/core'

@Directive()
export class Headline {
    @Input()
    public text: string

    public constructor() {}
}
