# How to build

```bash
# first install
yarn
# build uimini
yarn build
```

## Build uimini with extra browser support

This build is optional.

1. run build `yarn build`
2. Add `"browserslist": "last 3 versions",` into package.json (I'll fix it by --config option later)
3. Run build of ie10: `yarn build-ie10`
