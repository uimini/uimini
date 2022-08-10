# Support old browsers

Сss in this folder builded with: `"browserslist": "last 3 versions",`

Build size with extra browser support increased by ~22% (from 19kb to 23kb)

## Extra browsers supported:

- Ie 10 - 11;
- Firefox 2-21, 22-27 (2006-2012);
- Chrome 4-20 (2010-2012);
- Safari iOS 3.2-6.1 (2010-2013);
- Android browser 2.1-4.3 (2009-2013).

## When you NEED to use extra browsers support:

For e-commerce, state projects, etc.

Summing up: it's a good solution for e-commerce (which using jquery or js/css polyfills) to use uimini with extra browsers support.

## When you DON'T NEED to use extra browsers support:

For example:

1. If you gonna use Vue.js 3 (Vue.js 3 is not supported ie 11);
2. If you gonna use React.js + Mobx 4+ (Mobx 4 is not supported ie 11);
3. If you want to use es6+ feature without extra polyfills or modern css.

Summing up: if you using modern JavaScript or modern css (like grids) then YOU DON'T NEED uimini with extra browser support.
