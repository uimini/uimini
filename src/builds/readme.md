# How to build

Via yarn:

```bash
# init
yarn
# build
yarn build
```

Via npm:

```bash
# init
npm install
# build
npm run build
```

## Build uimini with extra browser support

This build is optional:

1. run build `yarn build`
2. Add `"browserslist": "last 3 versions",` in package.json (I'll fix it by --config option later)
3. Run build for ie10: `yarn build-ie10`
