# panto-transformer-less
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

[Less](http://lesscss.org) transformer for panto.

```js
panto.loadTransformer('less');

panto.pick('**/*.less').read().less({
    lessOptions: {
        compress: true
    }
});
```

## options
 - lessOptions: object, see `lessc --help`
 - ignoreError: boolean, if fail when error

[npm-url]: https://npmjs.org/package/panto-transformer-less
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-less.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-less.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-less
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-less.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-less
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-less.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-less#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-less/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-less/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-less?branch=master
