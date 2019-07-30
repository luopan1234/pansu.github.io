#!/usr/bin/env sh
# 终止一个错误
set -e
# 构建
npm run docs:build

# 进入生成的构建文件夹
cd /home/luopan/Documents/blog/docs/.vuepress/dist

# 如果你是要部署到自定义域名
echo 'www.tulinglab.net' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f git@github.com:pansusu/tulinglab.git master

cd -
