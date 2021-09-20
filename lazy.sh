# give me access:
# cd chmod 755 git-push.sh

# build
rm -rf dist
npm run build

# commit
echo "Enter your message"
read message
git add .
git commit -m"${message}"
if [ -n "$(git status - porcelain)" ];
then
  git push
  echo "DONE! Lazy ass"
else
  git status
  echo "Pushing data remote server..."
  git push -u origin master
fi
