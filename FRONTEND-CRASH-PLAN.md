# 三天黑客松前端冲刺路线

目标：三天内从 Git 基础过渡到能参与黑客松前端协作。重点不是学完所有前端，而是能改页面、拆组件、接接口、发 PR。

## Day 1：Web 三件套

你要掌握：

```text
HTML = 页面有什么
CSS = 页面长什么样
JavaScript = 页面怎么动
```

练习任务：

1. 打开 `index.html`，看懂页面结构。
2. 打开 `styles.css`，改颜色、间距、布局。
3. 打开 `script.js`，给 `focusItems` 多加一条训练重点。
4. 每完成一个小改动，走一次 Git：

```bash
git status
git diff
git add .
git commit -m "feat: update hackathon landing page"
git push
```

验收：

- 能说出 HTML/CSS/JS 分别负责什么。
- 能改标题、按钮、卡片、文案和颜色。
- 能用 JS 做一个点击切换内容的交互。

## Day 2：React 组件化

你要掌握：

```text
Component = 可复用的一块页面
Props = 父组件传给子组件的数据
State = 页面自己记住的变化
Event = 用户点击、输入、提交
```

练习任务：

1. 进入 `react-demo/`。
2. 运行 React 模板。
3. 看懂 `Hero`、`FeatureList`、`DemoPanel`、`TeamSection`。
4. 修改数组数据，让页面自动渲染新内容。

推荐命令：

```bash
cd react-demo
npm install
npm run dev
```

验收：

- 能解释组件是什么。
- 能用数组渲染列表。
- 能用 `useState` 做按钮切换。
- 能在分支上提交 React 页面修改。

## Day 3：接口 + 协作

你要掌握：

```text
RESTful API = 前后端接口设计规矩
接口文档 = 把接口写下来给人看的说明书
mock 数据 = 后端没好时，前端先用假数据开发
```

练习任务：

1. 看 `react-demo/src/mockProject.js`。
2. 理解前端需要哪些字段。
3. 看 `react-demo/API-CONTRACT.md`。
4. 用 mock 数据模拟接口返回。
5. 练一次分支协作：

```bash
git pull
git switch -c feature/frontend-demo
git add .
git commit -m "feat: add frontend demo"
git push -u origin feature/frontend-demo
```

验收：

- 能读懂一个简单接口文档。
- 能说清楚前端需要后端返回什么字段。
- 能先用 mock 数据开发页面。
- 能 push 分支并准备发 PR。

## 黑客松当天流程

```text
1. 先确认 MVP：最小可演示功能是什么
2. 前端先用 mock 数据把页面跑通
3. 后端接口好后替换真实 API
4. 每个人独立分支开发
5. 小步 commit，小步 PR
6. 最后优先保证 Demo 能演示
```

常用命令：

```bash
git pull
git switch -c feature/your-task
git status
git diff
git add .
git commit -m "feat: add your task"
git push -u origin feature/your-task
```

## AI 工具怎么用

Gemini：

- 把口语需求整理成 PRD。
- 帮你列 MVP 功能。
- 生成接口字段草案。
- 解释报错。

Stitch / Figma：

- 快速生成页面参考。
- 看布局、层级、视觉方向。
- 不要直接迷信生成代码，核心代码自己改懂。

Codex：

- 查项目结构。
- 改代码。
- 整理学习笔记。
- 把需求拆成可提交的小任务。
