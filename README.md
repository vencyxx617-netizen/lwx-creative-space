# 蚊小西的个人创作空间

这是一个无需构建工具的静态网站，包含：

- 根目录个人主页：`index.html`
- 职业分享互动页面：`career-talk/index.html`

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后打开：

- http://localhost:8000/
- http://localhost:8000/career-talk/

## 免费发布到 GitHub Pages

1. 在 GitHub 新建一个 **Public** repository，例如 `lwx-creative-space`。
2. 在本地项目目录执行：

```bash
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/你的用户名/lwx-creative-space.git
git push -u origin main
```

3. 打开 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - 文件夹：`/ (root)`
5. 点击 `Save`，等待 GitHub 完成发布。

发布后地址通常是：

```text
https://你的用户名.github.io/lwx-creative-space/
```

职业分享页面地址：

```text
https://你的用户名.github.io/lwx-creative-space/career-talk/
```

## 后续更新

修改文件后运行：

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages 会自动重新发布。

## 注意

当前项目是纯前端静态页面，适合 GitHub Pages。不要把密码、API Key、数据库连接信息或 `.env` 文件提交到公开仓库。如果之后要接入真正的 AI API，需要增加后端或无服务器函数来保护密钥。
