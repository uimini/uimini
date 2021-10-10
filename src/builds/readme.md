# How to build

```bash
# first install
yarn
# build uimini
yarn build
```

## Build uimini with extra browser support

This build is optional.

First add: `"browserslist": "last 3 versions",` into package.json (I'll fix it by --config option later)

After run build of ie10:

```bash
# build uimini first
yarn build
# build uimini extra browser support
yarn build-ie10
```
