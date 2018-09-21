import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h6',
    templateUrl: './headline-h6.component.html',
    styleUrls: ['./headline-h6.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineH6Component extends Headline {
    public static readonly cmpName: string = 'HeadlineH6Component'
}
