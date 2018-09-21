import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h5',
    templateUrl: './headline-h5.component.html',
    styleUrls: ['./headline-h5.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineH5Component extends Headline {
    public static readonly cmpName: string = 'HeadlineH5Component'
}
