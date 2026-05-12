# Git + Web 基础三件套练习路线

这个文件夹现在可以当作你的练习场：改 `index.html`、`styles.css`、`script.js`，再用 Git 记录每一步。

## 第 1 轮：初始化和第一次提交

```bash
git init
git status
git add .
git commit -m "Create web basics practice page"
git log --oneline
```

## 第 2 轮：练 HTML

1. 打开 `index.html`
2. 改一句页面文字
3. 执行：

```bash
git status
git diff
git add index.html
git commit -m "Update page copy"
```

## 第 3 轮：练 CSS

1. 打开 `styles.css`
2. 改一个颜色、字号或间距
3. 执行：

```bash
git status
git diff
git add styles.css
git commit -m "Adjust page styles"
```

## 第 4 轮：练 JavaScript

1. 打开 `script.js`
2. 往 `tasks` 数组里加一条新任务
3. 执行：

```bash
git status
git diff
git add script.js
git commit -m "Add a new practice task"
```

## 常用指令小抄

```bash
git status          # 看当前有哪些变化
git diff            # 看文件具体改了什么
git add 文件名       # 把某个文件放进暂存区
git add .           # 暂存当前目录下所有变化
git commit -m "..." # 创建一次提交
git log --oneline   # 简洁查看提交历史
git restore 文件名   # 放弃某个文件尚未暂存的修改
```

建议节奏：每次只改一个小点，然后提交一次。Git 学起来最舒服的方式就是“小步快跑”。
