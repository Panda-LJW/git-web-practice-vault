const focusItems = [
  "Day 1：读懂结构，改出一个黑客松项目首页。",
  "Day 1 加餐：把页面文案改成自己的黑客松项目方向。",
  "Day 2：用 React 把页面拆成组件，并用 state 做交互。",
  "Day 3：用 mock 数据模拟接口，再练一次分支、push 和 PR。",
  "比赛当天：先跑通核心 Demo，再做视觉和演示包装。",
];

const focusButton = document.querySelector("#focusButton");
const focusText = document.querySelector("#focusText");

let currentFocusIndex = 0;

focusButton.addEventListener("click", () => {
  currentFocusIndex = (currentFocusIndex + 1) % focusItems.length;
  focusText.textContent = focusItems[currentFocusIndex];
});
