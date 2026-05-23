(function () {
  const SECTION_ID = "project-intent-section";

  function createIcon(kind) {
    const icons = {
      globe:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a15 15 0 0 1 0 18"></path><path d="M12 3a15 15 0 0 0 0 18"></path></svg>',
      image:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="m21 15-4.5-4.5L7 20"></path></svg>',
      file:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path></svg>',
      table:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 10h18"></path><path d="M8 5v14"></path><path d="M16 5v14"></path></svg>',
      code:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="m14 5-4 14"></path></svg>',
      upload:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"></path><path d="m7 9 5-5 5 5"></path><path d="M5 20h14"></path></svg>',
      bulb:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12c.7.5 1.2 1.3 1.4 2.1h5.2c.2-.8.7-1.6 1.4-2.1A7 7 0 0 0 12 2z"></path></svg>',
      sparkles:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path><path d="M19 3v4"></path><path d="M21 5h-4"></path><path d="M5 17v4"></path><path d="M7 19H3"></path></svg>',
      compass:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m15.5 8.5-2.3 7-7 2.3 2.3-7z"></path></svg>',
      gitfork:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2"></circle><circle cx="18" cy="5" r="2"></circle><circle cx="12" cy="19" r="2"></circle><path d="M6 7v3a6 6 0 0 0 6 6"></path><path d="M18 7v3a6 6 0 0 1-6 6"></path></svg>',
      plus:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
      check:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"></path></svg>',
      arrow:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
    };
    return icons[kind] || icons.plus;
  }

  function ensureStyle() {
    if (document.getElementById("ff-project-intent-style")) return;
    const style = document.createElement("style");
    style.id = "ff-project-intent-style";
    style.textContent = `
      .ff-project-intent {
        max-width: 80rem;
        margin: 0 auto;
        padding: 5rem 1rem 2rem;
        color: #0f172a;
      }
      .ff-project-intent * { box-sizing: border-box; }
      .ff-project-intent .ff-pill {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        padding: .4rem .75rem;
        border: 1px solid #e2e8f0;
        border-radius: 999px;
        background: rgba(248,250,252,.9);
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: #64748b;
      }
      .ff-project-intent .ff-header {
        text-align: center;
        max-width: 42rem;
        margin: 0 auto 3.5rem;
      }
      .ff-project-intent .ff-header h2 {
        margin: 1rem 0 0;
        font-size: clamp(2rem, 4vw, 2.75rem);
        line-height: 1.1;
        font-weight: 900;
        letter-spacing: -.04em;
      }
      .ff-project-intent .ff-accent { color: #1d4ed8; }
      .ff-project-intent .ff-card {
        position: relative;
        overflow: hidden;
        border: 1px solid #e2e8f0;
        border-radius: 2rem;
        background: #fff;
        box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.18);
      }
      .ff-project-intent .ff-grid-card {
        display: grid;
        grid-template-columns: 1.05fr .95fr;
        gap: 3rem;
        padding: 2rem;
        background:
          radial-gradient(circle at right top, rgba(37,99,235,.08), transparent 30%),
          radial-gradient(circle at left bottom, rgba(125,211,252,.18), transparent 28%),
          rgba(248,250,252,.55);
      }
      .ff-project-intent .ff-copy { position: relative; z-index: 1; }
      .ff-project-intent .ff-copy h3 {
        margin: 0;
        font-size: clamp(1.45rem, 3vw, 1.9rem);
        line-height: 1.55;
        font-weight: 900;
        letter-spacing: -.03em;
      }
      .ff-project-intent .ff-copy p {
        margin: 1.5rem 0 0;
        color: #64748b;
        font-size: .96rem;
        line-height: 1.8;
        font-weight: 700;
        max-width: 34rem;
      }
      .ff-project-intent .ff-chip {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
        margin: 0 .35rem;
        padding: .2rem .65rem;
        border-radius: .85rem;
        background: rgba(37,99,235,.10);
        border: 1px solid rgba(37,99,235,.14);
        color: #1e40af;
        font-weight: 900;
      }
      .ff-project-intent .ff-strike {
        color: #94a3b8;
        text-decoration: line-through;
        text-decoration-color: #2563eb;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
      }
      .ff-project-intent .ff-kicker {
        display: inline-block;
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: #94a3b8;
      }
      .ff-project-intent .ff-rule {
        width: 2.5rem;
        height: 2px;
        margin-top: .75rem;
        border-radius: 999px;
        background: #2563eb;
      }
      .ff-project-intent .ff-positioning {
        margin-top: 1.75rem;
        display: flex;
        gap: .85rem;
        max-width: 28rem;
        padding: 1rem 1.1rem;
        border: 1px solid rgba(226,232,240,.9);
        border-radius: 1.25rem;
        background: rgba(255,255,255,.92);
      }
      .ff-project-intent .ff-positioning strong,
      .ff-project-intent .ff-positioning p {
        margin: 0;
      }
      .ff-project-intent .ff-positioning strong {
        display: block;
        font-size: 11px;
        letter-spacing: .12em;
        text-transform: uppercase;
      }
      .ff-project-intent .ff-positioning p {
        margin-top: .35rem;
        font-size: 12px;
        line-height: 1.6;
      }
      .ff-project-intent .ff-sandbox {
        display: flex;
        flex-direction: column;
        min-height: 24rem;
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 1.75rem;
        background: rgba(255,255,255,.96);
        box-shadow: 0 16px 40px -28px rgba(15,23,42,.18);
      }
      .ff-project-intent .ff-sandbox-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e2e8f0;
      }
      .ff-project-intent .ff-dots { display: flex; gap: .35rem; }
      .ff-project-intent .ff-dots span {
        width: .62rem;
        height: .62rem;
        border-radius: 999px;
        background: #cbd5e1;
      }
      .ff-project-intent .ff-sandbox-label {
        padding: .45rem .7rem;
        border-radius: .75rem;
        border: 1px solid rgba(37,99,235,.12);
        background: rgba(37,99,235,.05);
        color: #1e40af;
        font-size: 12px;
        font-weight: 900;
        line-height: 1.4;
      }
      .ff-project-intent .ff-node-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: .75rem;
        margin-top: 1.35rem;
      }
      .ff-project-intent .ff-node {
        display: flex;
        align-items: center;
        gap: .7rem;
        padding: .8rem;
        border-radius: 1rem;
        border: 1px solid #e2e8f0;
        background: #fff;
        box-shadow: 0 10px 24px -20px rgba(15,23,42,.24);
        transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
      }
      .ff-project-intent .ff-node:hover {
        transform: translateY(-2px);
        border-color: rgba(37,99,235,.28);
        box-shadow: 0 20px 40px -24px rgba(37,99,235,.22);
      }
      .ff-project-intent .ff-node-icon {
        width: 2rem;
        height: 2rem;
        flex: 0 0 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: .8rem;
      }
      .ff-project-intent .ff-node-icon svg,
      .ff-project-intent .ff-inline-icon svg,
      .ff-project-intent .ff-check svg,
      .ff-project-intent .ff-compass svg,
      .ff-project-intent .ff-arrow svg {
        width: 1rem;
        height: 1rem;
      }
      .ff-project-intent .ff-node-copy {
        min-width: 0;
      }
      .ff-project-intent .ff-node-copy strong {
        display: block;
        font-size: 12px;
        font-weight: 900;
        line-height: 1.1;
      }
      .ff-project-intent .ff-node-copy span {
        display: block;
        margin-top: .3rem;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 700;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ff-project-intent .ff-output {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;
        padding: 1px;
        border-radius: 1rem;
        background: linear-gradient(90deg, rgba(37,99,235,.08), rgba(37,99,235,.55), rgba(37,99,235,.08));
      }
      .ff-project-intent .ff-output-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        padding: .9rem 1rem;
        border-radius: 1rem;
        background: rgba(255,255,255,.96);
      }
      .ff-project-intent .ff-output-meta strong,
      .ff-project-intent .ff-output-meta span {
        display: block;
      }
      .ff-project-intent .ff-output-meta strong {
        font-size: 12px;
        font-weight: 900;
      }
      .ff-project-intent .ff-output-meta span {
        margin-top: .3rem;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 700;
      }
      .ff-project-intent .ff-arrow {
        display: inline-flex;
        align-items: center;
        gap: .4rem;
        color: #2563eb;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .08em;
      }
      .ff-project-intent .ff-arrow svg {
        animation: ffIntentArrow 1.6s ease-in-out infinite;
      }
      .ff-project-intent .ff-compare {
        margin-top: 2rem;
        padding: 2rem;
        border: 1px solid #e2e8f0;
        border-radius: 2rem;
        background: rgba(248,250,252,.5);
      }
      .ff-project-intent .ff-compare-title {
        text-align: center;
        margin-bottom: 2rem;
      }
      .ff-project-intent .ff-compare-title span {
        display: block;
        margin-bottom: .5rem;
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: #94a3b8;
      }
      .ff-project-intent .ff-compare-title h3 {
        margin: 0;
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 900;
        letter-spacing: -.03em;
      }
      .ff-project-intent .ff-compare-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
      .ff-project-intent .ff-compare-card {
        min-height: 11rem;
        padding: 2rem;
        border-radius: 1.75rem;
        border: 1px solid #f1f5f9;
        background: #fff;
        box-shadow: 0 12px 30px -24px rgba(15,23,42,.18);
      }
      .ff-project-intent .ff-compare-card h4,
      .ff-project-intent .ff-center-card h4 {
        margin: 0 0 .9rem;
        font-size: 1.25rem;
        font-weight: 900;
        letter-spacing: -.02em;
      }
      .ff-project-intent .ff-compare-card p,
      .ff-project-intent .ff-center-card p {
        margin: 0;
        color: #64748b;
        font-size: 12px;
        line-height: 1.8;
        font-weight: 700;
      }
      .ff-project-intent .ff-linker {
        position: relative;
        width: 1px;
        height: 3rem;
        margin: 1.5rem auto;
        background: linear-gradient(180deg, #cbd5e1, #2563eb);
      }
      .ff-project-intent .ff-linker::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -.4rem;
        width: .8rem;
        height: .8rem;
        border-radius: 999px;
        background: #2563eb;
        transform: translateX(-50%);
        box-shadow: 0 0 0 6px rgba(37,99,235,.08);
      }
      .ff-project-intent .ff-center-card {
        max-width: 48rem;
        margin: 0 auto;
        padding: 2rem;
        border: 2px solid rgba(37,99,235,.22);
        border-radius: 2rem;
        background:
          radial-gradient(circle at top right, rgba(37,99,235,.12), transparent 28%),
          linear-gradient(135deg, rgba(248,250,252,.96), rgba(255,255,255,.96));
        text-align: center;
        box-shadow: 0 24px 60px -34px rgba(37,99,235,.18);
      }
      .ff-project-intent .ff-center-card h4 {
        font-size: 1.55rem;
      }
      .ff-project-intent .ff-center-card .ff-highlight {
        color: #1d4ed8;
        font-weight: 900;
      }
      .ff-project-intent .ff-center-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.35rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(37,99,235,.10);
      }
      .ff-project-intent .ff-check {
        display: inline-flex;
        align-items: center;
        gap: .35rem;
        font-size: 12px;
        font-weight: 900;
      }
      .ff-project-intent .ff-check.is-rose { color: #e11d48; }
      .ff-project-intent .ff-check.is-amber { color: #d97706; }
      .ff-project-intent .ff-check.is-blue { color: #1d4ed8; }
      .ff-project-intent .ff-node.is-yellow .ff-node-icon { background: #fef9c3; color: #a16207; }
      .ff-project-intent .ff-node.is-emerald .ff-node-icon { background: #d1fae5; color: #047857; }
      .ff-project-intent .ff-node.is-cyan .ff-node-icon { background: #cffafe; color: #0e7490; }
      .ff-project-intent .ff-node.is-blue .ff-node-icon { background: #dbeafe; color: #2563eb; }
      .ff-project-intent .ff-node.is-rose .ff-node-icon { background: #ffe4e6; color: #e11d48; }
      .ff-project-intent .ff-node.is-amber .ff-node-icon { background: #fef3c7; color: #d97706; }
      .ff-project-intent .ff-node.is-indigo .ff-node-icon { background: #e0e7ff; color: #4f46e5; }
      .ff-project-intent .ff-node.is-violet .ff-node-icon { background: #ede9fe; color: #7c3aed; }
      .ff-project-intent .ff-node.is-slate .ff-node-icon { background: #f8fafc; color: #64748b; }
      @keyframes ffIntentArrow {
        0%,100% { transform: translateX(0); }
        50% { transform: translateX(5px); }
      }
      @media (max-width: 1024px) {
        .ff-project-intent .ff-grid-card { grid-template-columns: 1fr; }
      }
      @media (max-width: 768px) {
        .ff-project-intent { padding-top: 4rem; }
        .ff-project-intent .ff-grid-card,
        .ff-project-intent .ff-compare,
        .ff-project-intent .ff-center-card,
        .ff-project-intent .ff-compare-card { padding: 1.35rem; }
        .ff-project-intent .ff-node-grid,
        .ff-project-intent .ff-compare-grid { grid-template-columns: 1fr; }
        .ff-project-intent .ff-sandbox-head,
        .ff-project-intent .ff-output-inner { align-items: flex-start; flex-direction: column; }
      }
    `;
    document.head.appendChild(style);
  }

  function createSection() {
    const section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "ff-project-intent";
    section.innerHTML = `
      <div class="ff-header">
        <div class="ff-pill">
          <span class="ff-inline-icon">${createIcon("sparkles")}</span>
          <span>PROJECT INTENT / 项目初衷</span>
        </div>
        <h2>为什么是 <span class="ff-accent">FreeFlow</span>？</h2>
      </div>

      <div class="ff-card ff-grid-card">
        <div class="ff-copy">
          <span class="ff-kicker">THE PARADIGM SHIFT</span>
          <div class="ff-rule"></div>
          <h3>
            很多知识工作并不是从
            <span class="ff-strike">空白文档</span>
            开始的，<br />
            而是从各种
            <span class="ff-chip">零散节点</span>
            开始的。
          </h3>
          <p>
            在现实中，我们的灵感、参考与逻辑极少是以完美的线性格式出现的。它们天然就碎片化，散落于我们的应用堆栈和大脑瞬时思维中。
          </p>

          <div class="ff-positioning">
            <div class="ff-compass">${createIcon("compass")}</div>
            <div>
              <strong>FreeFlow 核心定位</strong>
              <p>
                不是“再做一个无限画布”，而是让画布成为结构化内容进入、组织、沉淀、和交付的
                <span class="ff-accent">中间工作台</span>。
              </p>
            </div>
          </div>
        </div>

        <div class="ff-sandbox">
          <div class="ff-sandbox-head">
            <div class="ff-dots"><span></span><span></span><span></span></div>
            <div class="ff-sandbox-label">FreeFlow 画布：承接以上元素类型的中间工作台</div>
          </div>

          <div class="ff-node-grid">
            <div class="ff-node is-yellow"><div class="ff-node-icon">${createIcon("bulb")}</div><div class="ff-node-copy"><strong>临时想法</strong><span>日常用闪念笔记写下的一层浅思</span></div></div>
            <div class="ff-node is-emerald"><div class="ff-node-icon">${createIcon("file")}</div><div class="ff-node-copy"><strong>Markdown</strong><span>随手记下的代码与临时文档</span></div></div>
            <div class="ff-node is-cyan"><div class="ff-node-icon">${createIcon("gitfork")}</div><div class="ff-node-copy"><strong>思维导图</strong><span>纵向发散与逻辑层级大纲树</span></div></div>
            <div class="ff-node is-blue"><div class="ff-node-icon">${createIcon("globe")}</div><div class="ff-node-copy"><strong>网页链接</strong><span>一键收藏的深度好文与观点</span></div></div>
            <div class="ff-node is-rose"><div class="ff-node-icon">${createIcon("image")}</div><div class="ff-node-copy"><strong>视觉截图</strong><span>图表、网页截图或幻灯片</span></div></div>
            <div class="ff-node is-amber"><div class="ff-node-icon">${createIcon("table")}</div><div class="ff-node-copy"><strong>数据表格</strong><span>运营月报、排期表的局部碎片</span></div></div>
            <div class="ff-node is-indigo"><div class="ff-node-icon">${createIcon("code")}</div><div class="ff-node-copy"><strong>代码片段</strong><span>偶尔收藏到的精华代码行</span></div></div>
            <div class="ff-node is-violet"><div class="ff-node-icon">${createIcon("upload")}</div><div class="ff-node-copy"><strong>文件资料</strong><span>随时交叉对比的需求 PDFs</span></div></div>
            <div class="ff-node is-slate"><div class="ff-node-icon">${createIcon("plus")}</div><div class="ff-node-copy"><strong>更多元素</strong><span>无限扩展的高级自持模块...</span></div></div>
          </div>

          <div class="ff-output">
            <div class="ff-output-inner">
              <div class="ff-output-meta">
                <strong>结构化整合中心</strong>
                <span>随时组合并一键导出 Word / PDF / Markdown / Excel</span>
              </div>
              <div class="ff-arrow"><span>OUTPUT</span>${createIcon("arrow")}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="ff-compare">
        <div class="ff-compare-title">
          <span>FreeFlow</span>
          <h3>从传统两极，进化至无限画布级中间工作台</h3>
        </div>

        <div class="ff-compare-grid">
          <div class="ff-compare-card">
            <h4>传统白板：发散而无法落地</h4>
            <p>极佳的前期灵感与头脑风暴载图，但在工作收口时，因为内容过于零散且没有结构，面临无法编辑、导出或快速排版生成交付大纲的短板。</p>
          </div>
          <div class="ff-compare-card">
            <h4>传统文档：规范但束缚思维</h4>
            <p>极好的高可编辑性与最终报告排版。但在开始工作阶段，由于过早用教条格式“线性约束”思路，难以容纳网页观点、截图、代码、文件及灵感闪念。</p>
          </div>
        </div>

        <div class="ff-linker"></div>

        <div class="ff-center-card">
          <h4>FreeFlow / 画布即中间件</h4>
          <p>
            完美打通两端隔阂！先通过<span class="ff-highlight">白板画作</span>无差别承接任意形状的原始素材（网页、代码、图片、表格及闪念想法），通过自在平铺进行因果逻辑梳理；后一键完成<span class="ff-highlight">大纲提取与结构化文档排版导出</span>，实现极速落地。
          </p>
          <div class="ff-center-list">
            <div class="ff-check is-rose">${createIcon("check")}<span>将发散顺滑收敛成交付</span></div>
            <div class="ff-check is-amber">${createIcon("check")}<span>融合文档收敛的高效落地</span></div>
            <div class="ff-check is-blue">${createIcon("check")}<span>顺滑交付：终结效率黑洞</span></div>
          </div>
        </div>
      </div>
    `;
    return section;
  }

  function inject() {
    if (document.getElementById(SECTION_ID)) return true;
    const features = document.getElementById("features");
    if (!features || !features.parentNode) return false;
    ensureStyle();
    features.parentNode.insertBefore(createSection(), features);
    return true;
  }

  function boot() {
    if (inject()) return;
    let attempts = 0;
    const timer = window.setInterval(function () {
      attempts += 1;
      if (inject() || attempts > 80) {
        window.clearInterval(timer);
      }
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
