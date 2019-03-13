### 简介
该组件库为与 [Magix](https://github.com/thx/magix) 配套的组件库，目前只存放pc端组件

### 文档地址
[https://thx.github.io/magix-gallery/](https://thx.github.io/magix-gallery/)

### 开发说明
gulp watch

### 发布说明
调整完相关逻辑，修改package.json里version，执行gulp release，包含以下发布操作：
1. 提交到gitlab仓库zs_gallery（[git@gitlab.alibaba-inc.com:mm/zs_gallery.git](http://gitlab.alibaba-inc.com/mm/zs_gallery)）

2. 同步提交到github仓库magix-gallery（[https://github.com/thx/magix-gallery](https://github.com/thx/magix-gallery)）

3. 执行tnpm pub发布组件包


### 关于同步zs_gallery到magix-gallery配置
1. 命令行执行 git remote -v，当前只有一台远程主机origin
![1.jpg](https://intranetproxy.alipay.com/skylark/lark/0/2019/jpeg/43851/1552123810530-834a3cb0-246c-4b96-90b5-237fd9b0b411.jpeg) 

2. 使用 git remote set-url 命令远程库origin拥有多个url地址
> git remote set-url --add origin https://github.com/thx/magix-gallery.git

3. 再次执行 git remote -v，可以看到 origin 有两个 push 远程路径
![未标题-1.jpg](https://intranetproxy.alipay.com/skylark/lark/0/2019/jpeg/43851/1552123995011-6445b2f1-ad4f-4887-b134-c2381ee0d53c.jpeg) 

4. 此时再执行提交到origin可同时提交到两个仓库

