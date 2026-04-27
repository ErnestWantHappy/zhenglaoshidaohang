# 郑老师做AI工具 - 个人导航网站

这是一个为“郑老师做AI工具”量身定制的轻量级、具有 AI 科技感的前端导航网站。采用纯 HTML + CSS + JavaScript 开发，**零门槛维护，极简部署**。

## 1. 如何本地运行

由于本项目不依赖任何复杂的框架或打包工具（无需 Node.js 和 Vite），您只需要：

1. 双击打开 `index.html` 文件，即可在浏览器中预览网站效果。
2. （推荐）使用 VS Code，安装 `Live Server` 插件，然后右键 `index.html` 选择 "Open with Live Server"。这样每次修改代码保存后，浏览器会自动刷新。

## 2. 如何新增项目

网站的所有项目数据都存放在 `js/data.js` 文件中。您不需要修改任何 HTML，只需在 `projects` 数组中添加新的对象即可：

```javascript
{
  id: 5, // 递增的唯一标识
  title: "您的新工具名称",
  desc: "一句话简介",
  categories: ["信息科技", "新分类"], // 支持多个分类，系统会自动提取并生成过滤按钮
  status: "已发布", // 可以是：已发布、整理中、内测中
  target: "适用对象",
  subject: "学科和年级",
  links: {
    demo: "http://您的演示链接", // 如果没有，请保持为空字符串 ""
    download: "http://您的下载链接",
    docs: "http://您的文档链接"
  }
}
```
*提示：如果 `links` 中的某个链接为空，按钮会自动变为灰色且不可点击，并显示“整理中”。*

## 3. 如何修改个人信息与头像

### 修改头像
1. 准备一张正方形的个人头像图片（建议 400x400 像素以上，PNG 或 JPG 格式）。
2. 将图片重命名为 `avatar.png`。
3. 替换掉 `assets/avatar.png` 文件即可。

### 修改名称、简介和链接
打开 `index.html`，找到 `<header class="hero-section">` 区域（大约在第 17 行开始）：
- 找到 `<h1 class="brand-name">` 修改您的品牌名称。
- 找到 `<p class="slogan">` 和 `<p class="description">` 修改简介内容。
- 找到 `<div class="social-links">`，修改 `<a>` 标签的 `href` 属性，填入您真实的抖音/小红书/公众号链接。

## 4. 如何部署到静态托管平台

本项目可以免费且极为快速地部署到各种静态托管平台。

### 方案 A：部署到 Cloudflare Pages (推荐，海外访问极速，国内尚可)
1. 注册并登录 [Cloudflare](https://dash.cloudflare.com/)。
2. 左侧菜单选择 **"Workers 和 Pages"**。
3. 点击 **"创建应用程序"** -> 选择 **"Pages"** -> 选择 **"直接上传资产"**。
4. 将整个项目文件夹拖拽到上传区域。
5. 上传完成后，Cloudflare 会为您生成一个免费的 `*.pages.dev` 域名。

### 方案 B：部署到 EdgeOne Pages / 腾讯云 (国内访问最快)
1. 登录腾讯云，进入 EdgeOne 控制台的 Pages 服务。
2. 选择新建项目，可以直接关联您的 GitHub 仓库，或者选择文件夹上传。
3. 如果是关联仓库，构建命令请留空，输出目录请填 `.`（或根据平台提示选择根目录）。
4. 部署后即可通过平台提供的测试域名访问。

### 方案 C：部署到 GitHub Pages
1. 在 GitHub 上创建一个新的公开仓库（例如 `zhenglaoshi-tools`）。
2. 将这个文件夹内的所有文件上传到该仓库。
3. 在仓库的 **Settings** -> **Pages** 中，将 "Source" 选择为 "Deploy from a branch"，选择 `main` 分支。
4. 等待几分钟，就可以通过 `https://您的用户名.github.io/zhenglaoshi-tools/` 访问。

## 5. 如何绑定自己的域名

以 Cloudflare Pages 为例：
1. 在您的 Pages 项目详情页，点击 **"自定义域"** 选项卡。
2. 点击 **"设置自定义域"**。
3. 输入您购买的域名（例如 `tools.teacherzheng.com`）。
4. 根据 Cloudflare 的提示，在您的域名注册商（如阿里云、腾讯云）处，添加一条 CNAME 解析记录，将该域名指向您的 `*.pages.dev` 域名。
5. 验证生效后，即可使用您自己的域名访问。
