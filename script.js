const loadingLines = ["收集灵感中...", "整理旅途照片中...", "打开创作桌...", "蚊小西的小宇宙已上线!"];
const loader = document.querySelector("#loader");
const progressBar = document.querySelector("#progressBar");
const loadingLine = document.querySelector("#loadingLine");
let progress = 0;
const timer = setInterval(() => {
  progress += Math.floor(Math.random() * 9) + 5;
  if (progress > 100) progress = 100;
  progressBar.style.width = `${progress}%`;
  loadingLine.textContent = loadingLines[Math.min(Math.floor(progress / 27), loadingLines.length - 1)];
  if (progress === 100) {
    clearInterval(timer);
    setTimeout(() => loader.classList.add("is-done"), 500);
  }
}, 180);

const panel = document.querySelector("#contentPanel");
const backdrop = document.querySelector("#panelBackdrop");
const panelContent = document.querySelector("#panelContent");
const closePanel = () => {
  panel.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
};

const content = {
  about: `
    <p class="panel-kicker">01 / ABOUT ME</p>
    <h2 class="panel-title">认识一下<br /><em>蚊小西</em></h2>
    <p class="panel-lead">我是一个活泼开朗、持续探索世界的高能量小女孩，也是一名正在学习 AI 的初级魔女。我的日常在内容、创作、旅行和各种新鲜想法之间来回切换。</p>
    <div class="stat-grid">
      <div class="stat"><strong>AI</strong><small>持续学习中</small></div>
      <div class="stat"><strong>∞</strong><small>好奇心</small></div>
      <div class="stat"><strong>100%</strong><small>行动力</small></div>
    </div>
    <div class="panel-section"><h3>我的创作关键词</h3><p>内容运营 / AIGC 视频 / 视觉表达 / 自媒体 / 旅途记录 / 有趣的企划</p></div>
    <div class="panel-section"><h3>小档案</h3><p>深圳大学 · 英语本科 · 2027 届<br />正在寻找可以把内容、创意和 AI 结合起来的机会。</p></div>
  `,
  experience: `
    <p class="panel-kicker">02 / EXPERIENCE</p>
    <h2 class="panel-title">我的<br /><em>成长地图</em></h2>
    <p class="panel-lead">我喜欢把每一段经历都变成新的能力：从海外内容，到 AIGC，再到创作者运营和个人自媒体。</p>
    <div class="timeline-item"><div class="date">2026.06 - 至今</div><h4>影石创新科技有限公司 · 创作者运营</h4><p>负责海外创作者招募、热点追踪、Brief 策划和内容分层运营，管理 3000+ 创作者社群。</p></div>
    <div class="timeline-item"><div class="date">2026.03 - 2026.06</div><h4>万兴科技集团 · AIGC 内容运营</h4><p>参与 Filmora 海外内容策划，完成短视频矩阵营销、达人合作与自营账号冷启动。</p></div>
    <div class="timeline-item"><div class="date">2025.06 - 2025.09</div><h4>南山区融媒体中心 · 海外内容运营</h4><p>负责国际化内容策划与跨文化表达，完成 TikTok、Instagram 等平台内容制作。</p></div>
    <div class="timeline-item"><div class="date">2024.03 - 2026.03</div><h4>深圳大学党委宣传部视频部 · 主编</h4><p>带领团队完成校园宣传视频，负责内容策划、拍摄和后期制作。</p></div>
  `,
  works: `
    <p class="panel-kicker">03 / SELECTED WORKS</p>
    <h2 class="panel-title">我的<br /><em>作品抽屉</em></h2>
    <p class="panel-lead">这里放着我做过的东西，也放着我还在继续长大的方向。</p>
    <div class="work-grid">
      <article class="work-card"><h4>Vibe Coding</h4><p>用自然语言和 AI 工具搭建网页、创作交互体验，把想法快速变成可以被看见的东西。</p></article>
      <article class="work-card"><h4>个人自媒体</h4><p>围绕情绪化叙事与 AI 创意短片建立个人 IP，累计全网播放量 90w+、粉丝增长 4000+。</p></article>
      <article class="work-card"><h4>AIGC 视频</h4><p>使用 Gemini、Suno、可灵等工具，从创意、分镜、画面到成片完成视频创作。</p></article>
      <article class="work-card"><h4>策划案</h4><p>擅长热点拆解、内容矩阵、达人合作与活动执行，把一个点子变成完整的内容链路。</p></article>
    </div>
    <div class="panel-section"><h3>代表项目</h3><p>第十九届中国大学生计算机设计大赛 AI 视觉创新实践 · 一等奖<br />校智算中心实验室 AIGC 宣传大赛 · 二等奖</p></div>
  `,
  contact: `
    <p class="panel-kicker">04 / CONTACT</p>
    <h2 class="panel-title">来和我<br /><em>打个招呼</em></h2>
    <p class="panel-lead">如果你也对内容、AI、视频和有趣的企划感兴趣，欢迎来找我一起做点好玩的东西。</p>
    <div class="contact-card">
      <p>EMAIL</p><p><a href="mailto:1261891156@qq.com">1261891156@qq.com</a></p>
      <p>小红书 / 蚊小西</p>
      <p>目前状态：可以立即到岗，期待新的创作任务。</p>
    </div>
    <div class="panel-section"><h3>我可以一起做什么</h3><p>海外内容运营 / AIGC 视频 / 社交媒体内容 / 创意策划 / AI 工具工作流 / 视觉包装</p></div>
  `,
};

document.querySelectorAll("[data-panel]").forEach((item) => {
  item.addEventListener("click", () => {
    const key = item.dataset.panel;
    panelContent.innerHTML = content[key];
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
  });
});
closePanel.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanel();
});
