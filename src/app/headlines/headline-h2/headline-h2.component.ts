import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h2',
    templateUrl: './headline-h2.component.html',
    styleUrls: ['./headline-h2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineH2Component extends Headline {
    public static readonly cmpName: string = 'HeadlineH2Component'
}
