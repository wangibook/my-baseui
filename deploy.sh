#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build:docs

# 进入构建文件夹
cd docs

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wangibook/my-baseui.git master:gh-pages

cd -