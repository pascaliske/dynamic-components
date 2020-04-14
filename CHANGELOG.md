# [2.0.0](https://github.com/pascaliske/dynamic-components/compare/v1.1.2...v2.0.0) (2020-04-14)


### Bug Fixes

* **demo:** use component decorator for inherited class ([cab95da](https://github.com/pascaliske/dynamic-components/commit/cab95da79e954a85322491ef6fc0a44459735235))


### Features

* update demo app for breaking changes in latest version ([3e5f502](https://github.com/pascaliske/dynamic-components/commit/3e5f5028e6f1475e864f5ad79e1439b1ac91dbb9))
* use ivy compatible dynamic imports for dynamic component rendering ([4544f34](https://github.com/pascaliske/dynamic-components/commit/4544f34c2abefd4d6304b68a628a543b263d784a))


### BREAKING CHANGES

* Dynamic components should not be imported by it's module and declared inside the `forRoot()` of the library anymore!
* Inside the component manifests a new property called importer is now required to dynamically fetcht the component using dynamic `import()`s.



## [1.1.2](https://github.com/pascaliske/dynamic-components/compare/v1.1.1...v1.1.2) (2019-06-28)



## [1.1.1](https://github.com/pascaliske/dynamic-components/compare/v1.1.0...v1.1.1) (2019-06-18)



## [1.0.4](https://github.com/pascaliske/dynamic-components/compare/v1.0.3...v1.0.4) (2019-02-01)




