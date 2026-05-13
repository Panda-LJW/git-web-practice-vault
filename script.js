const tasks = [
  "把页面标题改成你的名字，然后提交一次。",
  "在 HTML 里新增一段自我介绍，并用 CSS 调整它的样式。",
  "把按钮颜色换成你喜欢的颜色，再提交一次。",
  "新增一个列表，写下你想掌握的 3 个 Git 指令。",
  "在 script.js 里再加一个任务文案，然后提交一次。",
];

const taskButton = document.querySelector("#taskButton");
const taskText = document.querySelector("#taskText");

let currentTaskIndex = 0;

taskButton.addEventListener("click", () => {
  currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
  taskText.textContent = tasks[currentTaskIndex];
});
