#!/usr/bin/env sh

set -e

npm run build

cp -R docs/v1/. docs/.vuepress/dist/v1

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:uimini/docs.git master:gh-pages-branch

cd -
rm -rf docs/.vuepress/dist
