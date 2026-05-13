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

## 第 5 轮：练撤销

改错了也没关系，Git 可以帮你回到上一步。

### 撤销还没暂存的修改

```bash
git status
git diff
git restore index.html
git status
```

### 取消暂存

如果你已经执行了 `git add`，但还不想提交：

```bash
git restore --staged index.html
git status
```

## 第 6 轮：练分支

分支可以理解成一条练习支线：你可以在支线上实验，确认没问题后再合回主线。

```bash
git branch
git checkout -b practice/new-branch
git branch
git checkout main
git checkout practice/new-branch
```

### 修改当前分支名称

如果你已经在这个分支上：

```bash
git branch -m 新分支名
```

如果你要修改别的分支名：

```bash
git branch -m 旧分支名 新分支名
```

分支名建议用小写英文、数字、`-` 或 `/`，不要用空格。

```bash
practice/git-branch
feature/update-title
git-study-2
```

## 第 7 轮：练合并

先创建一条分支，在分支上改东西并提交：

```bash
git checkout main
git checkout -b practice/merge-demo
git status
git add script.js
git commit -m "Add merge demo task"
```

再回到 `main`，把练习分支合并进来：

```bash
git checkout main
git merge practice/merge-demo
git log --oneline --graph --decorate
```

## 常用指令小抄

```bash
git status          # 看当前有哪些变化
git diff            # 看文件具体改了什么
git diff --staged   # 看已经暂存、准备提交的变化
git add 文件名       # 把某个文件放进暂存区
git add .           # 暂存当前目录下所有变化
git commit -m "..." # 创建一次提交
git log --oneline   # 简洁查看提交历史
git restore 文件名   # 放弃某个文件尚未暂存的修改
git restore --staged 文件名 # 取消暂存
git branch          # 查看分支
git branch -m 新名字 # 修改当前分支名称
git switch 分支名 # 切换到已有分支（NEW）
git switch -c 分支名 # 创建并切换到新分支（NEW）
git merge 分支名     # 把某个分支合并到当前分支

git checkout 分支名  # 切换到已有分支
git checkout -b 分支名 # 创建并切换到新分支

```

## 你当前终端里的短命令

```bash
gs  # git status
gd  # git diff
ga  # git add
gc  # git commit
gl  # git log --oneline --graph --decorate
gb  # git branch
gco # git checkout
gcb # git checkout -b
ll  # ls -la
```

建议节奏：每次只改一个小点，然后提交一次。Git 学起来最舒服的方式就是“小步快跑”。
