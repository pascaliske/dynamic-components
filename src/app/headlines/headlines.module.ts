import { NgModule } from '@angular/core'
import { HeadlineH1Component } from './headline-h1/headline-h1.component'
import { HeadlineH2Component } from './headline-h2/headline-h2.component'
import { HeadlineH3Component } from './headline-h3/headline-h3.component'
import { HeadlineH4Component } from './headline-h4/headline-h4.component'
import { HeadlineH5Component } from './headline-h5/headline-h5.component'
import { HeadlineH6Component } from './headline-h6/headline-h6.component'

@NgModule({
    imports: [],
    declarations: [
        HeadlineH1Component,
        HeadlineH2Component,
        HeadlineH3Component,
        HeadlineH4Component,
        HeadlineH5Component,
        HeadlineH6Component,
    ],
    providers: [],
    exports: [
        HeadlineH1Component,
        HeadlineH2Component,
        HeadlineH3Component,
        HeadlineH4Component,
        HeadlineH5Component,
        HeadlineH6Component,
    ],
})
export class HeadlinesModule {}
