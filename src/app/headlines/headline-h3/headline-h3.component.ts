import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h3',
    templateUrl: './headline-h3.component.html',
    styleUrls: ['./headline-h3.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineH3Component extends Headline {
    public static readonly cmpName: string = 'HeadlineH3Component'
}
