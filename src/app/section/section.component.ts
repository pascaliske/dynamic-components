import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
    public static readonly cmpName: string = 'SectionComponent'
}
