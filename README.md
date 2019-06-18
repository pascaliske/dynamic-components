# `@pascaliske/dynamic-components`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/dynamic-components.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/dynamic-components) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/dynamic-components.svg?style=flat-square)](https://github.com/pascaliske/dynamic-components) [![Travis CI](https://img.shields.io/travis/com/pascaliske/dynamic-components/master.svg?style=flat-square)](https://travis-ci.com/pascaliske/dynamic-components) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/dynamic-components)](https://dependabot.com) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/dynamic-components
```

## Usage

1. Import the module in your root module:

```typescript
import { NgModule } from '@angular/core'
import { DynamicComponentsModule } from '@pascaliske/dynamic-components'
import { HeadlinesModule } from './headlines/headlines.module'
import { HeadlineH1Component } from './headlines/headline-h1/headline-h1.component'
import { HeadlineH2Component } from './headlines/headline-h2/headline-h2.component'

@NgModule({
    imports: [
        HeadlinesModule,
        DynamicComponentsModule.forRoot([
            HeadlineH1Component,
            HeadlineH2Component,
        ]),
    ],
})
export class AppModule {}
```

2. Define components to be dynamically created:

```typescript
import { Component } from '@angular/core'
import { ComponentManifest } from '@pascaliske/dynamic-components'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public components: Array<ComponentManifest> = [
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
    ]
}
```

3. Create a host element for injecting dynamically created components:

```html
<div class="cmp-root">
    <cmp-dynamic-components [components]="components"></cmp-dynamic-components>
</div>
```

## Demo

You can view a quick demo [here](https://stackblitz.com/github/pascaliske/dynamic-components).

## License

MIT © [Pascal Iske](https://pascal-iske.de)
