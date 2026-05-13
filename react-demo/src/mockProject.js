export const project = {
  name: "SprintPilot",
  tagline: "把黑客松想法压缩成可演示 Demo",
  problem:
    "比赛时间很短，团队容易卡在需求不清、接口没好、页面不知道先做哪一块。",
  features: [
    {
      title: "MVP Planner",
      description: "把一句话想法拆成核心用户、关键页面和最小演示路径。",
    },
    {
      title: "Mock First",
      description: "后端接口没好时，前端先用 mock 数据把页面跑通。",
    },
    {
      title: "PR Checklist",
      description: "每个功能分支都有自测、截图、接口说明和提交记录。",
    },
  ],
  team: [
    { role: "Product", task: "定义 MVP、演示故事和接口字段" },
    { role: "Frontend", task: "实现页面、组件状态和接口调用" },
    { role: "Backend", task: "提供 API、数据库和鉴权逻辑" },
  ],
};
