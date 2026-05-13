# 极简接口约定示例

这份文档模拟前后端怎么约接口。

## 获取项目 Demo 数据

```http
GET /api/v1/project-demo
```

含义：获取首页展示需要的项目数据。

返回示例：

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "name": "SprintPilot",
    "tagline": "把黑客松想法压缩成可演示 Demo",
    "features": [
      {
        "title": "MVP Planner",
        "description": "把想法拆成三小时内能做完的任务"
      }
    ]
  }
}
```

前端需要的字段：

```text
name        项目名
tagline     一句话介绍
features    功能列表
team        团队分工
```

后端没好之前，前端先用 `src/mockProject.js` 里的 mock 数据。
