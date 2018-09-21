import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h4',
    templateUrl: './headline-h4.component.html',
    styleUrls: ['./headline-h4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineH4Component extends Headline {
    public static readonly cmpName: string = 'HeadlineH4Component'
}
