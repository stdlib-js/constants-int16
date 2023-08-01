<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 16-bit signed integer mathematical constants.



<section class="usage">

## Usage

To use in Observable,

```javascript
constants = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var constants = require( 'path/to/vendor/umd/constants-int16/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.constants;
})();
</script>
```

#### constants

16-bit signed integer mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`MAX`][@stdlib/constants/int16/max]</span><span class="delimiter">: </span><span class="description">maximum signed 16-bit integer.</span>
-   <span class="signature">[`MIN`][@stdlib/constants/int16/min]</span><span class="delimiter">: </span><span class="description">minimum signed 16-bit integer.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/int16/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a 16-bit signed integer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( constants ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-int16.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-int16

[test-image]: https://github.com/stdlib-js/constants-int16/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/constants-int16/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-int16/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-int16?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-int16.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-int16/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-int16/tree/deno
[umd-url]: https://github.com/stdlib-js/constants-int16/tree/umd
[esm-url]: https://github.com/stdlib-js/constants-int16/tree/esm
[branches-url]: https://github.com/stdlib-js/constants-int16/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-int16/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/int16/max]: https://github.com/stdlib-js/constants-int16-max/tree/umd

[@stdlib/constants/int16/min]: https://github.com/stdlib-js/constants-int16-min/tree/umd

[@stdlib/constants/int16/num-bytes]: https://github.com/stdlib-js/constants-int16-num-bytes/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
