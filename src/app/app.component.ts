import { Component } from '@angular/core'
import { ComponentManifest } from '@pascaliske/dynamic-components'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public components: ComponentManifest[] = [
        {
            componentName: 'cmp-headline-h1',
            params: {
                text: 'Headline H1',
            },
        },
        {
            componentName: 'cmp-headline-h2',
            params: {
                text: 'Headline H2',
            },
        },
        {
            componentName: 'cmp-headline-h3',
            params: {
                text: 'Headline H3',
            },
        },
        {
            componentName: 'cmp-headline-h4',
            params: {
                text: 'Headline H4',
            },
        },
        {
            componentName: 'cmp-headline-h5',
            params: {
                text: 'Headline H5',
            },
        },
        {
            componentName: 'cmp-headline-h6',
            params: {
                text: 'Headline H6',
            },
        },
    ]
}
