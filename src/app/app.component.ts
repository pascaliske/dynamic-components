import { Component } from '@angular/core'
import { ComponentManifest } from '@pascaliske/dynamic-components'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public state: 'loading' | 'ready' = 'loading'

    public components: ComponentManifest[] = [
        {
            importer: () => import('./section/section.component'),
            componentName: 'cmp-section',
            children: [
                {
                    importer: () => import('./headlines/headline-h1/headline-h1.component'),
                    componentName: 'cmp-headline-h1',
                    params: {
                        text: 'Headline H1',
                    },
                },
                {
                    importer: () => import('./headlines/headline-h2/headline-h2.component'),
                    componentName: 'cmp-headline-h2',
                    params: {
                        text: 'Headline H2',
                    },
                },
                {
                    importer: () => import('./headlines/headline-h3/headline-h3.component'),
                    componentName: 'cmp-headline-h3',
                    params: {
                        text: 'Headline H3',
                    },
                },
                {
                    importer: () => import('./headlines/headline-h4/headline-h4.component'),
                    componentName: 'cmp-headline-h4',
                    params: {
                        text: 'Headline H4',
                    },
                },
                {
                    importer: () => import('./headlines/headline-h5/headline-h5.component'),
                    componentName: 'cmp-headline-h5',
                    params: {
                        text: 'Headline H5',
                    },
                },
                {
                    importer: () => import('./headlines/headline-h6/headline-h6.component'),
                    componentName: 'cmp-headline-h6',
                    params: {
                        text: 'Headline H6',
                    },
                },
            ],
        },
    ]
}
