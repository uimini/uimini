# give me access:
# cd chmod 755 git-push.sh

# build

rm -rf dist
npm run build

cp -r dist/uimini_no_reset.css ../uimini-new-doc-repo/docs/.vuepress/styles/
cp -r dist/uimini.css ../uimini-new-doc-repo/docs/.vuepress/styles/
