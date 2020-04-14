import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DynamicComponentsModule } from '@pascaliske/dynamic-components'
import { AppComponent } from './app.component'

@NgModule({
    imports: [BrowserModule, DynamicComponentsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
