# `@pascaliske/dynamic-components`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/dynamic-components.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/dynamic-components) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/dynamic-components.svg?style=flat-square)](https://github.com/pascaliske/dynamic-components) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/dynamic-components/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/dynamic-components/actions) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/dynamic-components)](https://dependabot.com) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/dynamic-components
```

## Usage

##### 1. Import the module in your root module

```diff
 import { NgModule } from '@angular/core'
 import { DynamicComponentsModule } from '@pascaliske/dynamic-components'
 import { HeadlinesModule } from './headlines/headlines.module'
 import { HeadlineH1Component } from './headlines/headline-h1/headline-h1.component'
 import { HeadlineH2Component } from './headlines/headline-h2/headline-h2.component'

 @NgModule({
     imports: [
         HeadlinesModule,
+        DynamicComponentsModule,
     ],
 })
export class AppModule {}
```

##### 2. Define components to be dynamically created

```diff
 import { Component } from '@angular/core'
 import { ComponentManifest } from '@pascaliske/dynamic-components'

 @Component({
     selector: 'cmp-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss'],
 })
 export class AppComponent {
+    public components: Array<ComponentManifest> = [
+        {
+            importer: () => import('./headlines/headline-h1/headline-h1.component'),
+            componentName: 'cmp-headline-h1',
+            params: {
+                text: 'Headline H1',
+            },
+        },
+        {
+            importer: () => import('./headlines/headline-h2/headline-h2.component'),
+            componentName: 'cmp-headline-h2',
+            params: {
+                text: 'Headline H2',
+            },
+        },
+    ]
 }
```

3. Create a host element for injecting dynamically created components:

```diff
 <div class="cmp-root">
+    <cmp-dynamic-components [components]="components"></cmp-dynamic-components>
 </div>
```

## Demo

You can view a quick demo [here](https://stackblitz.com/github/pascaliske/dynamic-components).

## License

MIT © 2020 [Pascal Iske](https://pascaliske.dev)
