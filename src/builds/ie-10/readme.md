# Support old browsers

Сss in this folder builded with: `"browserslist": "last 3 versions",`

Build size with extra browser support increased by ~22% (from 19kb to 23kb)

## Extra browsers supported:

- Ie 10 - 11;
- Firefox 2-21, 22-27 (2006-2012);
- Chrome 4-20 (2010-2012);
- Safari iOS 3.2-6.1 (2010-2013);
- Android browser 2.1-4.3 (2009-2013).

## When to use

For e-commerce, state projects etc.

Summing up: for e-commerce which using jquery and polyfills it's a good solution to use uimini with extra browsers support.

## When NOT TO USE

For example:

1. If you gonna use Vue.js 3 which not supported ie 11 then you don't need extra browser support.
2. If you gonna use React.js + Mobx 4+ (also not supported ie 11) then you don't need extra browser support.
3. When you using es6+ feature without bable and extra polyfills. Cause that's means you don't support old browsers then you also don`t need uimini ie 10+ support.

Summing up: if you using modern JavaScript (or modern css like grids) then you don't need extra support.
