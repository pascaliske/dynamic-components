import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DynamicComponentsModule } from '@pascaliske/dynamic-components'
import { HeadlineH1Component } from './headlines/headline-h1/headline-h1.component'
import { HeadlineH2Component } from './headlines/headline-h2/headline-h2.component'
import { HeadlineH3Component } from './headlines/headline-h3/headline-h3.component'
import { HeadlineH4Component } from './headlines/headline-h4/headline-h4.component'
import { HeadlineH5Component } from './headlines/headline-h5/headline-h5.component'
import { HeadlineH6Component } from './headlines/headline-h6/headline-h6.component'
import { HeadlinesModule } from './headlines/headlines.module'
import { AppComponent } from './app.component'

@NgModule({
    imports: [
        BrowserModule,
        DynamicComponentsModule.forRoot([
            HeadlineH1Component,
            HeadlineH2Component,
            HeadlineH3Component,
            HeadlineH4Component,
            HeadlineH5Component,
            HeadlineH6Component,
        ]),
        HeadlinesModule,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
