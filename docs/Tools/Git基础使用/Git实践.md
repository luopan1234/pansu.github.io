---
title: "Git实践"
date: "2019-07-31"
permalink: "2019-07-31-git-activity"
---

## 同步本地项目
- 本地有个项目,然后也申请了一个远程仓库,现在要将本地项目同步到远程仓库
``` bash
  # 初始化项目
  git init projectDemo
  # 添加当前工作区到暂存区
  git add .
  git commit -m "first commit"
  # 添加远程仓库地址
  git remote add origin urlname
  # 推送到远程仓库的master分支
  git push origin master
```
## 修改bug
- 有个新功能或者bug需要开发或修改
``` bash
  # 拉取线上代码
  git pull origin master
  # 新建一个分支
  git checkout -b bug-001
  ...do something
  # 修改完后需要提交bug-001分支
  git commit -am 'fix the bug-001'
  git checkout master
  # 合并bug-001的分支
  git merge bug-001
  # 如果有冲突,解决冲突后提交主分支即可
  git commit -am 'fix the bug-001'
  # 删除bug分支
  git branch -d bug-001
  # 推送到origin远程地址
  git push origin master
```
## 开发功能时有bug需要修复
- 正在dev分支开发一个新功能,突然有个bug需要立即修复,但又不能提交当前的修改的内容
``` bash
  # 当前分支为dev
  # 暂存当前工作内容
  git stash
  # 查看暂存
  git list
  # 切换到需要修改bug的那个分支
  git checkout master
  # 新建一个分支用来修改bug
  git checkout -b bug-002
  # 修改完后步骤跟上一个问题类似
  # 现在bug修改完成,需要返回到开发分支
  git checkout dev
  # 注意当前切换过来数据是没有的,需要执行恢复暂存
  git stash apply
  # 然后删除
  git drop
```
