#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

npm run lib

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:theshying/v-resize.git master:gh-pages

cd -