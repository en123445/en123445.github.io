---
sidebar_position: 1
title: docusaurus2 快速建站（脚手架）
---

参考[中文版](https://www.docusaurus.cn/docs/installation) or [官网英文中译](https://docusaurus.io/zh-CN/)

### 起因
粉的CP（CSI的GSR）中文圈子已经冷了，想要自发电翻译外文同人，结果近几年各类平台对发帖审核严格、且莫名其妙到令人发指...
写了东西发不出去，而本就少的可怜的小伙伴却还时不时的表示期待填坑...

**诉求**
- 容易搭建的网站外壳 -- 又要简单又想好看
- 免费的发布平台 -- 想发布还不想花钱
- 内容方便更新，能发布 -- 可以专心写东西，不用被莫名其妙的规则审核

PS：遗憾最终发布的博客因各种原因无法被搜索引擎爬取，只能随缘安利给基友。

### 选择方案
搭建个人静态站，相当于好看的在线文章收藏站

顺便复习一下相关技术，做一个合格的...伪·程序员

### 准备工具

- 开发工具（代码 + 内容文档）
**vscode**

原因：轻量级开发工具，启动快

- 搭建网站的脚手架
**Docusaurus**

原因：对比了一些其他工具的说明，这个看起来挺顺眼，有中文帮助文档、看得懂...
涉及到的Node.js、react等知识曾经接触过，想深入学习的时候应该容易一些

PS: 可能是网络原因，英文站从公司打得开，在家里打不开，只能看中文站；但讽刺的是，中文站的翻译还不如英文站的中文翻译内容多...）

命令：cmd，yarn；我选择yarn，因为他比nmp快一些，不过夜里执行发布时仍然卡死...

- 发布平台
**github**

原因：比较流行，教程多

- 代码管理工具
**git**

原因：配合github发布，比较流行，教程多

命令行工具：git bush

- 其他

了解一些**cmd**命令

了解一些**markdown**文档规则（为了文档内容好看）

### 流程

- 搭环境
- 生成标准网站代码（跟着Docusaurus帮助文档做即可）
- 用Git版本管理代码和文章（初始化本地仓库等）

```text title="git Bash 创建仓库"
git init
git add README.md
git commit -m "Commit message"
git branch -M master
git remote add origin git@github.com:en123445/testWeblog.git （<--地址从github上粘）
git push -u origin master
```

- 发布到github pages（新建仓库、准备发布分支、配置ssh公钥）
- 继续写文章（markdown文档）
- 更新到github pages（发布；但是**凌晨搞非常慢**，早上比较快...）

选做：
调整网站样式（可学习Docusaurus帮助文档，可参考Docusaurus案例展示中的开源代码）

```text  title="碰到的最大难题"
搭环境 + 发布到github pages + 更新到github pages
```

### 实操问题解决

#### 安装Node.js 16.14

docusaurus2要求的版本，但win7不支持msi安装
解决办法：
- 装一个win7旧版本（机器上本来就有），记住路径
- 官网下载zip后解压
- 环境变量设置 set NODE_SKIP_PLATFORM_CHECK=1
- 用新的版本把旧版本覆盖
- 确认

```text title="cmd命令"
> node -v
```
能成功显示版本号就是对了

#### 部署到github pages

- github设置

<details>
<summary>github账号设置</summary>
用户->setting->developer settings->personal access tokens 生成tokens，有时间期限，用于git登录（生成后粘贴保存，因为只能看见一次；rpoe相关的三项都勾选上。

用户->setting->ssh and gpg keys->配置公钥 （否则部署的时候代码推不上来。
</details>

- 生产公钥

<details>
<summary>git bush命令</summary>
1.先配下个人的用户名和邮箱。命令：

git config --global user.name "github用户名"

git config --global user.email "github用户邮箱"

2.可通过命令git config -l查看配置的用户名和邮箱。

3.生产公钥

ssh-keygen -t rsa

输入完这个命令后，会有两个步骤，保存公钥的路径已经设置密码。
忽略这两步，直接点击回车即可生成。

4.生成的公钥默认路径在C:\Users\username.ssh目录下生成 id_rsa、id_rsa.pub 两个文件。
将 id_rsa.pub里的内容复制即可，配置到github

5.测试一下通不通
ssh -T git@github.com 
</details>

- 执行发布命令

```text title="cmd命令"
↓需要设置环境变量↓
set GIT_USER=github的用户名
set USE_SSH=true
yarn deploy
```

<details>
<summary>理解部署</summary>
部署指，yarn deploy 命令，包括在工作区生成 build 文件夹（静态站文件），然后把这些文件 push到 github的 'gh-pages'分支上去，'gh-pages'为访问用
</details>

<details>
<summary>关于 main分支的使用</summary>
因为在github上仓库时，默认用的是'main'分支，但发布命令执行后（在config文件中默认设置了）推送'gh-pages'分支，所以开始感到十分不解，后来看了一下deploy的执行内容发现可以根据自己的需要调整。

可以这么用：

'main'分支放源码（比如.md文件，.jpg文件），从git bush执行git命令推到仓库（访问github时需要token）

'gh-pages'分支放发布文件（build成.html文件了），用deploy命令推送到仓库
</details>

- 自动部署（如GitHub Actions）

这个没有试，原理是利用脚本文件（.github/workflows/deploy.yml，.github/workflows/test-deploy.yml）执行 源码推送'main'分支后自动部署'gh-pages'分支


### 其他

- 代码推送git流程

```text title="git命令"
工作区–>add–>暂存区–>commit–>本地仓库区–>push–>远程仓库区
```

### 坑

- docusaurus的侧边栏

原则上，文件夹与文件同名的话（md配图放入同一个文件夹），docs/blog 侧边栏展示时，不会展示成目录树，而是按一篇文章来展示；
但如果文件夹名是中文，则会展示成目录树...就不太好看...

- 百度搜索引擎不能爬取github pages信息

也就是说百度搜搜不到我的站......... = =

网上的解决方法：迁移到[vercel](https://vercel.com/)上托管

- 问题1，一键导入github项目时，要求静态站发布在main分支下....docusaurus推荐命令发布的是gh-pages分支，需要改分支
- 问题2，重新发布了main分支后导入vercel成功，但托管的网站需要翻墙才能打开...= =
- 问题3，出于测试的目的，把一个测试站放在了 xxx.github.io/testWeblog/ （因为xxx.github.io的站已经在跑了），
如果 docusaurus.config.js中设置成  baseUrl: '/' ， github就会提示你应该设置成 baseUrl: '/testWeblog/' ；如果设置成 baseUrl: '/testWeblog/'，vercel就会提示你应该设置成 baseUrl: '/'

结论：放弃了

### 参考教程

[参考最多的网友心得](https://blog.csdn.net/weixin_44240478/article/details/124883373)，很详细，大部分跟着做就可以了，非常感谢这篇文档

[github生成token](https://blog.csdn.net/amnesiac666/article/details/120489019)

[GitHub配置公钥](https://blog.csdn.net/weixin_46547740/article/details/119907270)

[另一篇教程](https://blog.csdn.net/xinghuowuzhao/article/details/125023242)

[优达学城git教程](https://classroom.udacity.com/courses/ud775)，英文课程带中文字幕，教的很详细，免费

[jpg转svg在线工具网站](https://image.online-convert.com/convert-to-svg)，对svg图要求不高，懒人工具