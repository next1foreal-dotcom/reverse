/* Codex queued follow-up rail. Host contracts from Desktop 26.1016:
   QueuedMessageList Be + composer Sdt/Cdt/Eft/d0e/cht/eft in app-primary. */
(function () {
  const ICONS = {
    queue:
      '<svg class="cq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path fill="currentColor" d="M2.66797 11V3.33301C2.66797 2.96574 2.96574 2.66797 3.33301 2.66797C3.70028 2.66797 3.99805 2.96574 3.99805 3.33301V11C3.99805 11.7109 3.99894 12.2044 4.03027 12.5879C4.06098 12.9634 4.11776 13.175 4.19824 13.333L4.26856 13.459C4.44487 13.7465 4.69781 13.9808 5 14.1348L5.12988 14.1904C5.27366 14.2419 5.46311 14.2797 5.74512 14.3027C6.12864 14.3341 6.62197 14.335 7.33301 14.335H15L15.0674 14.3418L14.1123 13.3867L14.0273 13.2822C13.8571 13.0242 13.8854 12.6735 14.1123 12.4463C14.3397 12.2189 14.6911 12.1906 14.9492 12.3613L15.0537 12.4463L17.1367 14.5293C17.3964 14.7889 17.3963 15.21 17.1367 15.4697L15.0537 17.5537C14.794 17.8134 14.372 17.8134 14.1123 17.5537C13.8526 17.294 13.8526 16.872 14.1123 16.6123L15.0664 15.6582L15 15.665H7.33301C6.64392 15.665 6.08696 15.6647 5.63672 15.6279C5.23614 15.5952 4.87531 15.5309 4.53906 15.3867L4.39649 15.3193C3.87528 15.0538 3.43887 14.6502 3.13477 14.1543L3.0127 13.9365C2.82084 13.5599 2.74153 13.1541 2.7041 12.6963C2.66732 12.2461 2.66797 11.6889 2.66797 11ZM15.665 15C15.665 15.0226 15.6594 15.0444 15.6572 15.0664L15.7256 14.999L15.6572 14.9316C15.6595 14.9541 15.665 14.9769 15.665 15ZM11.666 8.91797L11.8008 8.93164C12.1036 8.99381 12.3311 9.2618 12.3311 9.58301C12.3311 9.90422 12.1036 10.1722 11.8008 10.2344L11.666 10.248H7.5C7.13273 10.248 6.83496 9.95028 6.83496 9.58301C6.83496 9.21574 7.13273 8.91797 7.5 8.91797H11.666ZM14.166 4.33496L14.3008 4.34863C14.6036 4.41083 14.8311 4.67881 14.8311 5C14.8309 5.32109 14.6035 5.58924 14.3008 5.65137L14.166 5.66504H7.5C7.13284 5.66504 6.83514 5.36712 6.83496 5C6.83496 4.63273 7.13273 4.33496 7.5 4.33496H14.166Z"/></svg>',
    steer:
      '<svg class="cq-icon" viewBox="0 0 21 21" aria-hidden="true"><path d="M13.1293 7.34753C13.3565 7.12027 13.7081 7.09207 13.9662 7.26257L14.0707 7.34753L18.0707 11.3475C18.3304 11.6072 18.3304 12.0292 18.0707 12.2889L14.0707 16.2889C13.811 16.5486 13.389 16.5486 13.1293 16.2889C12.8696 16.0292 12.8696 15.6072 13.1293 15.3475L15.9935 12.4833H6.59998C4.57585 12.4833 2.93494 10.8424 2.93494 8.81824V5.31824C2.93494 4.95097 3.23271 4.6532 3.59998 4.6532C3.96724 4.6532 4.26501 4.95097 4.26501 5.31824V8.81824C4.26501 10.1078 5.31039 11.1532 6.59998 11.1532H15.9935L13.1293 8.28894L13.0443 8.18445C12.8738 7.92632 12.902 7.5748 13.1293 7.34753Z"/></svg>',
    trash:
      '<svg class="cq-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M8.083 3.5A1.75 1.75 0 0 1 9.79 2h.42c.74 0 1.386.46 1.647 1.146l.14.354h3.17a.75.75 0 0 1 0 1.5H4.833a.75.75 0 0 1 0-1.5h3.17l.14-.354A1.75 1.75 0 0 1 8.083 3.5ZM5 7.25c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75v7.167A2.583 2.583 0 0 1 12.417 17H7.583A2.583 2.583 0 0 1 5 14.417V7.25Zm2.25 1.5a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm3.5 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm2.75-.75a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75Z"/></svg>',
    more: '<svg class="cq-icon" viewBox="0 0 20 20" aria-hidden="true"><circle cx="5" cy="10" r="1.4"/><circle cx="10" cy="10" r="1.4"/><circle cx="15" cy="10" r="1.4"/></svg>',
    stop: '<svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z"/></svg>',
    warn: '<svg class="cq-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.4 18.2 16.5a.9.9 0 0 1-.78 1.35H2.58a.9.9 0 0 1-.78-1.35L10 2.4Zm0 5.1a.75.75 0 0 0-.75.75v3.2a.75.75 0 0 0 1.5 0V8.25A.75.75 0 0 0 10 7.5Zm0 7.1a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7Z"/></svg>',
    grip: '<svg class="cq-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9.5" cy="5.5" r="1.5" fill="currentColor"/><circle cx="14.5" cy="5.5" r="1.5" fill="currentColor"/><circle cx="9.5" cy="12" r="1.5" fill="currentColor"/><circle cx="14.5" cy="12" r="1.5" fill="currentColor"/><circle cx="9.5" cy="18.5" r="1.5" fill="currentColor"/><circle cx="14.5" cy="18.5" r="1.5" fill="currentColor"/></svg>',
    voice: "",
    expand:
      '<svg class="cq-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M9.25 2.25h4.5v4.5a.75.75 0 0 1-1.5 0V4.81L9.28 7.78a.75.75 0 0 1-1.06-1.06l2.97-2.97H9.25a.75.75 0 0 1 0-1.5ZM2.25 9.25a.75.75 0 0 1 .75.75v2.19l2.97-2.97a.75.75 0 1 1 1.06 1.06L4.06 13.25H6.25a.75.75 0 0 1 0 1.5h-4.5v-4.5a.75.75 0 0 1 .75-.75Z"/></svg>',
    collapse:
      '<svg class="cq-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M14.78 1.22a.75.75 0 0 1 0 1.06L11.81 5.25H14a.75.75 0 0 1 0 1.5h-4.5v-4.5a.75.75 0 0 1 1.5 0v2.19l3.72-3.72a.75.75 0 0 1 1.06 0ZM2 9.25a.75.75 0 0 1 .75.75v2.19l3.72-3.72a.75.75 0 1 1 1.06 1.06L3.81 13.25H6a.75.75 0 0 1 0 1.5H1.5V10a.75.75 0 0 1 .5-.75Z"/></svg>',
    send: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M7.45819 2.4721C7.77271 2.21556 8.22656 2.2158 8.5412 2.4721L8.60663 2.53069L13.0373 6.96233C13.2423 7.16736 13.2423 7.49949 13.0373 7.70452C12.8322 7.90905 12.5 7.90938 12.2951 7.70452L8.52557 3.93401V13.3334C8.5254 13.6232 8.29002 13.8578 8.00018 13.8578C7.71034 13.8578 7.47497 13.6232 7.47479 13.3334V3.93206L3.70429 7.70452C3.49929 7.90915 3.16702 7.90927 2.9621 7.70452C2.75738 7.49959 2.75747 7.16732 2.9621 6.96233L7.39276 2.53069L7.45819 2.4721Z"/></svg>',
    clip: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M13.4 3.7a2.8 2.8 0 0 0-4 0L4.3 8.8a4.2 4.2 0 0 0 5.9 6l5.6-5.6a.75.75 0 1 0-1.06-1.06l-5.6 5.6a2.7 2.7 0 1 1-3.8-3.88l5.1-5.1a1.3 1.3 0 1 1 1.84 1.84L7.7 11.2a.75.75 0 0 0 1.06 1.06l4.58-4.58a2.8 2.8 0 0 0 0-4z"/></svg>',
    library: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M4 4.5A1.5 1.5 0 0 1 5.5 3h7A1.5 1.5 0 0 1 14 4.5v.75h.5A1.5 1.5 0 0 1 16 6.75v8A1.5 1.5 0 0 1 14.5 16h-8A2.5 2.5 0 0 1 4 13.5v-9Zm1.5-.1a.1.1 0 0 0-.1.1v9a1.1 1.1 0 0 0 1.1 1.1H14.4V6.75a.1.1 0 0 0-.1-.1H13.5V4.5a.1.1 0 0 0-.1-.1h-7Z"/></svg>',
    image: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M4.5 3.5A1.5 1.5 0 0 0 3 5v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 17 15V5a1.5 1.5 0 0 0-1.5-1.5h-11Zm.2 11.2 3.1-3.1a.7.7 0 0 1 1 0l1.4 1.4 2.7-2.7a.7.7 0 0 1 1 0l2.4 2.4V15a.1.1 0 0 1-.1.1H4.8Zm2.6-6.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z"/></svg>',
    globe: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 2.4a7.6 7.6 0 1 0 0 15.2A7.6 7.6 0 0 0 10 2.4Zm-.75 1.6c-1.1.3-2.1 1.8-2.55 3.85h2.55V4Zm1.5 0v3.85h2.55C10.85 5.8 9.85 4.3 8.75 4ZM4.7 9.35c.12-1.18.48-2.26 1.02-3.15h2.78c-.08.5-.13 1.03-.15 1.58H4.7Zm4.55 0c.02-.55.08-1.08.16-1.58h1.18c.08.5.14 1.03.16 1.58H9.25Zm2.25 0c-.02-.55-.07-1.08-.15-1.58h2.78c.54.89.9 1.97 1.02 3.15h-3.65ZM4.7 10.85h3.66c.02.55.07 1.07.15 1.56H5.72c-.54-.88-.9-1.95-1.02-3.12Zm4.55 0h1.5c-.02.55-.08 1.07-.16 1.56H9.41c-.08-.49-.14-1.01-.16-1.56Zm2.25 0h3.65c-.12 1.17-.48 2.24-1.02 3.12h-2.48c.08-.49.13-1.01.15-1.56ZM6.7 14.15c.45 2.05 1.45 3.55 2.55 3.85V14.15H6.7Zm3.3 0v3.85c1.1-.3 2.1-1.8 2.55-3.85H10Z"/></svg>',
    draw: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="m12.9 3.3 3.8 3.8-8.3 8.3H4.6v-3.8l8.3-8.3Zm.7-.7a1.3 1.3 0 0 1 1.84 0l.96.96a1.3 1.3 0 0 1 0 1.84l-.36.36-3.8-3.8.36-.36Z"/></svg>',
    deploy: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 2.6 16.4 6v8L10 17.4 3.6 14V6L10 2.6Zm0 1.7L5.1 6.8 10 9.3l4.9-2.5L10 4.3Zm5.1 3.3-4.35 2.22v5.84L15.1 13.5V7.6ZM8.25 15.36V9.52L3.9 7.6v5.9l4.35 1.86Z"/></svg>',
    vercel: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#fff" d="M10 3.8 17 16.2H3L10 3.8Z"/></svg>',
    gmail: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#EA4335" d="M3.4 5.6 10 10.4 16.6 5.6V4.2L10 8.8 3.4 4.2v1.4Z"/><path fill="#34A853" d="M16.6 5.6V15a1.2 1.2 0 0 1-1.2 1.2h-.8V8.1l-4.6 3.3-4.6-3.3v8.1h-.8A1.2 1.2 0 0 1 3.4 15V5.6l6.6 4.8 6.6-4.8Z"/></svg>',
    gcal: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#1A73E8" d="M4.4 3.6h11.2A1.2 1.2 0 0 1 16.8 4.8v10.4a1.2 1.2 0 0 1-1.2 1.2H4.4a1.2 1.2 0 0 1-1.2-1.2V4.8A1.2 1.2 0 0 1 4.4 3.6Z"/><path fill="#fff" d="M6.2 8.1h7.6v5.7H6.2z"/><path fill="#EA4335" d="M6.4 3v2.2H4.8V3zM13.6 3v2.2h1.6V3z"/></svg>',
    contacts: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#1A73E8" d="M10 2.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 7.4c3.3 0 6 2.1 6 4.7v.7H4v-.7c0-2.6 2.7-4.7 6-4.7Z"/></svg>',
    gdrive: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#FFBA00" d="m10 3.2 4.6 8H5.4L10 3.2Z"/><path fill="#06BE5A" d="M3.2 16.2 5.4 11.2h9.2l2.2 5H3.2Z"/><path fill="#2684FC" d="m14.6 11.2 2.4 5H10l4.6-8Z"/></svg>',
    chrome: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.2" fill="none" stroke="#4285F4" stroke-width="2"/><circle cx="10" cy="10" r="2.6" fill="#4285F4"/><path fill="#EA4335" d="M10 2.8h6.4A7.2 7.2 0 0 0 4.8 5.3L7.4 9.6A3.4 3.4 0 0 1 10 6.6V2.8Z"/><path fill="#FBBC05" d="M4.8 5.3A7.2 7.2 0 0 0 3 12.4l4.7-.3A3.4 3.4 0 0 1 7.4 9.6L4.8 5.3Z"/><path fill="#34A853" d="M16.4 2.8A7.2 7.2 0 0 1 17 12.4l-4.7-.3A3.4 3.4 0 0 0 12.6 6.6h3.8Z"/></svg>',
  };

  const SEED = [
    "Review the failing unit test",
    "Patch the queue row hover state",
    "Add Steer tooltip copy",
    "Verify delete while sending",
    "Turn queueing back on",
    "Open the same follow-up in side chat",
    "Ship the reusable queue snippet",
  ];

  const TIP_DELAY = 700;
  const INTERRUPTED_BEFORE_ACCEPT = "Interrupted before the steer was accepted.";
  const CHECK = '<span class="cq-menu-check" aria-hidden="true">✓</span>';
  const COMPOSER = {
    sandbox: [{ id: "fullAccess", label: "完全访问" }],
    models: [
      { id: "sol61", label: "GPT-6.1 Sol" },
      { id: "astra6", label: "GPT-6 Astra" },
      { id: "sol6", label: "GPT-6 Sol" },
      { id: "luna6", label: "GPT-6 Luna" },
      { id: "sol56", label: "GPT-5.6 Sol" },
      { id: "terra56", label: "GPT-5.6 Terra" },
      { id: "luna56", label: "GPT-5.6 Luna" },
    ],
    sliderEfforts: ["light", "medium", "high", "xhigh", "max", "ultra"],
    efforts: [
      { id: "none", label: "无" },
      { id: "minimal", label: "极低" },
      { id: "light", label: "轻度" },
      { id: "medium", label: "中" },
      { id: "high", label: "高" },
      { id: "xhigh", label: "极高" },
      { id: "max", label: "Max" },
      { id: "ultra", label: "Ultra" },
      { id: "persistent", label: "持续" },
    ],
    plus: [
      { id: "photos", label: "添加照片和文件", desc: "从计算机上传", icon: "clip" },
      { id: "library", label: "从资料库添加", desc: "浏览并搜索你的文件", icon: "library" },
      { id: "image", label: "创建图像", desc: "可视化呈现任何内容", icon: "image" },
      { id: "search", label: "网页搜索", desc: "查找实时新闻和信息", icon: "globe" },
      { id: "draw", label: "绘图", desc: "绘制并附加图像", icon: "draw" },
      { id: "appdeploy", label: "AppDeploy", desc: "Build and deploy web apps", icon: "deploy" },
      { id: "vercel", label: "Vercel", desc: "Build and deploy apps", icon: "vercel" },
      { id: "gmail", label: "Gmail", desc: "Read and manage Gmail", icon: "gmail" },
      { id: "gcal", label: "Google Calendar", desc: "Manage Google Calendar events", icon: "gcal" },
      { id: "gcontacts", label: "Google Contacts", desc: "Reference saved contact details", icon: "contacts" },
      { id: "gdrive", label: "Google Drive", desc: "Drive, Docs, Sheets or Slides", icon: "gdrive" },
      { id: "chrome", label: "附加 Google Chrome", icon: "chrome" },
    ],
    slash: [
      { id: "init", label: "Init", insert: "/init", desc: "Create an AGENTS.md file with instructions for Codex" },
      { id: "model", label: "Model", insert: "/model", desc: "Change the model" },
      { id: "plan", label: "Plan mode", insert: "/plan", desc: "Turn plan mode on" },
      { id: "compact", label: "Compact", insert: "/compact", desc: "Compact this chat's context" },
      { id: "status", label: "Status", insert: "/status", desc: "Show chat ID, context usage, and rate limits" },
      { id: "new", label: "New chat", insert: "/new", desc: "Start a blank chat in the same workspace" },
      { id: "side", label: "Side", insert: "/side", desc: "Start a temporary side chat" },
    ],
  };

  function uid() {
    return "q-" + Math.random().toString(36).slice(2, 8);
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }

  function formatTitle(text) {
    return escapeHtml(text.replace(/\s+/g, " ").trim())
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function motionMs() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
  }

  function emit(root, name, detail) {
    root.dispatchEvent(new CustomEvent("cq:" + name, { bubbles: true, detail }));
    const log = root.querySelector("[data-cq-log]");
    if (!log) return;
    const line = document.createElement("div");
    line.textContent = name + " " + JSON.stringify(detail);
    log.prepend(line);
  }

  function bind(root) {
    if (root.dataset.bound) return;
    root.dataset.bound = "1";

    const state = {
      items: SEED.map((text) => ({
        id: uid(),
        text,
        status: "queued",
        pausedReason: null,
      })),
      running: false,
      queueing: true,
      interrupted: false,
      editing: null,
      menuId: null,
      popKind: null,
      dragId: null,
      dialog: null,
      sandbox: "fullAccess",
      model: "sol61",
      effort: "high",
      moreUsage: true,
      modelPack: null,
      modelView: "effort",
      dictating: false,
      attachments: [],
      enterBehavior: "enter",
      composerExpanded: false,
      composerTall: false,
    };

    const rail = root.querySelector("[data-cq-rail]");
    const list = root.querySelector("[data-cq-list]");
    const input = root.querySelector("[data-cq-input]");
    const send = root.querySelector("[data-cq-send]");
    const addBtn = root.querySelector("[data-cq-add]");
    const accessBtn = root.querySelector("[data-cq-access]");
    const pinBtn = root.querySelector("[data-cq-pin]");
    const modelBtn = root.querySelector("[data-cq-model]");
    const dictateBtn = root.querySelector("[data-cq-dictate]");
    const expandBtn = root.querySelector("[data-cq-expand]");
    let compositionTimer = 0;
    const attach = root.querySelector("[data-cq-attach]");
    const menu = root.querySelector("[data-cq-menu]");
    const pop = ensurePop(root);
    const tip = root.querySelector("[data-cq-tip]");
    const toast = root.querySelector("[data-cq-toast]");
    const dialog = ensureDialog(root);
    const rowEls = new Map();
    const sendTimers = new Map();
    const entering = new Set();
    let tipTimer = 0;
    let tipKind = "";
    let tipAnchor = null;
    let toastTimer = 0;
    let drag = null;
    let dragRaf = 0;

    function liveRows() {
      return [...list.querySelectorAll("[data-cq-row]:not(.is-exit)")];
    }

    function arrayMove(items, from, to) {
      const next = items.slice();
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    }

    function motionNode(el) {
      return el?.parentElement?.classList.contains("cq-motion") ? el.parentElement : el;
    }

    function placeRows() {
      let cursor = list.querySelector("[data-cq-chrome]");
      for (const item of state.items) {
        const el = rowEls.get(item.id);
        if (!el || el.classList.contains("is-exit")) continue;
        const node = motionNode(el);
        if (cursor) {
          if (cursor.nextSibling !== node) cursor.after(node);
        } else if (list.firstChild !== node) {
          list.prepend(node);
        }
        cursor = node;
      }
    }

    function easeOut(t) {
      return 1 - (1 - t) * (1 - t) * (1 - t);
    }

    function expandRow(el, pinEnd) {
      if (!el) return;
      const shell = motionNode(el);
      window.cancelAnimationFrame(shell._motionRaf || 0);
      const duration = motionMs();
      shell.classList.add("is-enter");
      el.classList.add("is-enter");
      const height = el.getBoundingClientRect().height || el.scrollHeight;
      shell.style.height = "0px";
      el.style.opacity = "0";
      if (pinEnd) {
        list.classList.add("is-pinning");
        list.scrollTop = list.scrollHeight;
      }
      const finish = () => {
        shell.style.height = "";
        el.style.opacity = "";
        shell.classList.remove("is-enter");
        el.classList.remove("is-enter");
        if (pinEnd) {
          list.scrollTop = list.scrollHeight;
          list.classList.remove("is-pinning");
        }
      };
      if (duration === 0) {
        finish();
        return;
      }
      const started = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - started) / duration);
        const eased = easeOut(t);
        shell.style.height = height * eased + "px";
        el.style.opacity = String(eased);
        if (pinEnd) list.scrollTop = list.scrollHeight;
        if (t < 1) {
          shell._motionRaf = window.requestAnimationFrame(tick);
          return;
        }
        finish();
      };
      shell._motionRaf = window.requestAnimationFrame(tick);
    }

    function collapseRow(el, then) {
      if (!el) {
        then();
        return;
      }
      const shell = motionNode(el);
      window.cancelAnimationFrame(shell._motionRaf || 0);
      const duration = motionMs();
      if (duration === 0) {
        then();
        return;
      }
      const height = shell.getBoundingClientRect().height || el.getBoundingClientRect().height;
      shell.classList.add("is-exit");
      el.classList.add("is-exit");
      shell.style.height = height + "px";
      el.style.opacity = "1";
      const started = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - started) / duration);
        const eased = easeOut(t);
        shell.style.height = height * (1 - eased) + "px";
        el.style.opacity = String(1 - eased);
        if (t < 1) {
          shell._motionRaf = window.requestAnimationFrame(tick);
          return;
        }
        then();
      };
      shell._motionRaf = window.requestAnimationFrame(tick);
    }

    function find(id) {
      return state.items.find((item) => item.id === id);
    }

    function isFailed(item) {
      return item.pausedReason != null && item.pausedReason !== INTERRUPTED_BEFORE_ACCEPT;
    }

    function isQueuedSubmission(item) {
      return item.status === "queued";
    }

    function isSending(item) {
      return (item.status === "pending" || item.status === "sending") && !isFailed(item);
    }

    function reorderable() {
      return state.items.length > 1 && state.items.every(isQueuedSubmission);
    }

    function canSendNow() {
      return state.running;
    }

    function followUpAction() {
      return state.queueing || state.editing ? "queue" : "steer";
    }

    function hideTip(force) {
      if (!force && tipKind === "preview") return;
      window.clearTimeout(tipTimer);
      tip.hidden = true;
      tipKind = "";
      tipAnchor = null;
      tip.dataset.kind = "";
    }

    function placeTip(anchor) {
      const box = anchor.getBoundingClientRect();
      const host = root.getBoundingClientRect();
      const tipBox = tip.getBoundingClientRect();
      let left = box.left - host.left + box.width / 2 - tipBox.width / 2;
      let top = box.top - host.top - tipBox.height - 8;
      if (top < 8) top = box.bottom - host.top + 8;
      left = Math.min(Math.max(8, left), Math.max(8, host.width - tipBox.width - 8));
      tip.style.left = left + "px";
      tip.style.top = Math.max(8, top) + "px";
    }

    function revealTip(anchor, kind, html) {
      tipKind = kind;
      tipAnchor = anchor;
      tip.dataset.kind = kind;
      tip.innerHTML = html;
      tip.hidden = false;
      placeTip(anchor);
    }

    function showTip(anchor, kind, html, delay) {
      window.clearTimeout(tipTimer);
      if (!delay) {
        revealTip(anchor, kind, html);
        return;
      }
      tipTimer = window.setTimeout(() => revealTip(anchor, kind, html), delay);
    }

    function hideMenu() {
      menu.hidden = true;
      state.menuId = null;
    }

    function hideOverlays() {
      hideMenu();
      hidePop();
    }

    function showMenu(id, anchor) {
      hidePop();
      state.menuId = id;
      menu.hidden = false;
      menu.dataset.id = id;
      const queueingLabel = menu.querySelector("[data-cq-queueing] span:last-child");
      if (queueingLabel) queueingLabel.textContent = state.queueing ? "Turn off queueing" : "Turn on queueing";
      placeOverlay(menu, anchor, "end");
      menu.querySelector("button")?.focus();
    }

    function placeOverlay(node, anchor, align, side, origin) {
      const box = anchor.getBoundingClientRect();
      const host = root.getBoundingClientRect();
      const dock = origin === "anchor" ? box : (anchor.closest(".cq-composer") || anchor).getBoundingClientRect();
      const width = node.offsetWidth || 216;
      const gap = 8;
      const left =
        align === "center"
          ? box.left - host.left + box.width / 2 - width / 2
          : align === "start"
            ? box.left - host.left
            : box.right - host.left - width;
      if (side === "below") {
        const available = Math.max(96, host.bottom - dock.bottom - 8);
        node.style.maxHeight = available + "px";
        node.style.top = dock.bottom - host.top + gap + "px";
      } else {
        const availableAbove = Math.max(96, dock.top - host.top - 8);
        node.style.maxHeight = availableAbove + "px";
        const height = Math.min(node.offsetHeight || 112, availableAbove);
        node.style.top = Math.max(8, dock.top - host.top - height - gap) + "px";
      }
      node.style.left = Math.min(Math.max(8, left), Math.max(8, host.width - width - 8)) + "px";
    }

    function popTriggers() {
      return [addBtn, accessBtn, pinBtn, modelBtn];
    }

    function hidePop() {
      if (!pop) return;
      pop.hidden = true;
      pop.classList.remove("is-enter");
      pop.innerHTML = "";
      delete pop.dataset.kind;
      delete pop.dataset.view;
      state.popKind = null;
      state.modelView = "effort";
      popTriggers().forEach((btn) => {
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      syncEffortOpen();
      syncEffortStacks(true);
    }

    function radioItem(action, id, label, checked, desc) {
      return `<button type="button" role="menuitemradio" class="cq-menu-item" data-cq-pop-action="${action}" data-cq-pop-value="${id}" aria-checked="${checked ? "true" : "false"}">
        <span class="cq-menu-item-main"><span>${escapeHtml(label)}</span>${desc ? `<span class="cq-menu-desc">${escapeHtml(desc)}</span>` : ""}</span>
        ${CHECK}
      </button>`;
    }

    function actionItem(action, id, label, desc, kbd, icon) {
      const mark = icon && ICONS[icon] ? `<span class="cq-plus-ico" aria-hidden="true">${ICONS[icon]}</span>` : "";
      return `<button type="button" role="menuitem" class="cq-menu-item" data-cq-pop-action="${action}" data-cq-pop-value="${id}">
        ${mark}
        <span class="cq-menu-item-main">
          <span class="cq-menu-title-row"><span>${escapeHtml(label)}</span>${kbd ? `<span class="cq-menu-kbd">${escapeHtml(kbd)}</span>` : ""}</span>
          ${desc ? `<span class="cq-menu-desc">${escapeHtml(desc)}</span>` : ""}
        </span>
      </button>`;
    }

    function renderPop(kind) {
      switch (kind) {
        case "add":
          return COMPOSER.plus.map((item) => actionItem("add", item.id, item.label, item.desc, "", item.icon)).join("");
        case "access":
          return COMPOSER.sandbox.map((item) => radioItem("sandbox", item.id, item.label, state.sandbox === item.id)).join("");
        case "model":
          return renderModelPop();
        case "slash":
          return [
            `<div class="cq-menu-heading">Slash commands</div>`,
            ...COMPOSER.slash.map((item) => actionItem("slash", item.id, item.label, item.desc)),
          ].join("");
        case "pin":
          return "";
        default: {
          const _never = kind;
          return _never && "";
        }
      }
    }

    function showPop(kind, anchor, align) {
      if (!pop || !anchor) return;
      hideMenu();
      hideTip(true);
      if (state.popKind === kind) {
        hidePop();
        return;
      }
      if (kind === "model") state.modelView = "effort";
      const html = renderPop(kind);
      if (!html) return;
      state.popKind = kind;
      pop.hidden = false;
      pop.classList.remove("is-enter");
      pop.dataset.kind = kind;
      pop.dataset.view = kind === "model" ? state.modelView : "";
      pop.innerHTML = html;
      if (kind === "model") {
        void pop.offsetWidth;
        pop.classList.add("is-enter");
      }
      popTriggers().forEach((btn) => {
        if (btn) btn.setAttribute("aria-expanded", btn === anchor ? "true" : "false");
      });
      if (kind === "add") {
        const dock = (anchor.closest(".cq-composer") || anchor).getBoundingClientRect();
        pop.style.width = Math.round(dock.width) + "px";
      } else if (kind === "model") {
        pop.style.width = "254px";
      } else {
        pop.style.width = "";
      }
      syncEffortOpen();
      placeOverlay(
        pop,
        anchor,
        kind === "model" ? "center" : align || "start",
        "above",
        kind === "model" ? "anchor" : "composer"
      );
      if (kind === "model") syncEffortStacks(true);
      pop.querySelector("button")?.focus();
    }

    function showToast(text) {
      if (!toast) return;
      window.clearTimeout(toastTimer);
      toast.textContent = text;
      toast.hidden = false;
      toastTimer = window.setTimeout(() => {
        toast.hidden = true;
      }, 1600);
    }

    function modelName() {
      return COMPOSER.models.find((item) => item.id === state.model)?.label || "GPT-6.1 Sol";
    }

    function effortLabel() {
      return COMPOSER.efforts.find((item) => item.id === state.effort)?.label || "高";
    }

    function sliderEffortItems() {
      return COMPOSER.sliderEfforts.map((id) => COMPOSER.efforts.find((item) => item.id === id)).filter(Boolean);
    }

    function sliderIndex() {
      const items = sliderEffortItems();
      const index = items.findIndex((item) => item.id === state.effort);
      if (index >= 0) return index;
      if (state.effort === "none" || state.effort === "minimal") return 0;
      if (state.effort === "persistent") return items.length - 1;
      return 2;
    }

    function effortPct() {
      const items = sliderEffortItems();
      return sliderIndex() / Math.max(1, items.length - 1);
    }

    const EFFORT_MOTION_MS = 300;
    let sliderDrag = null;

    function effortMotionReduced() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function renderEffortLayersHtml(effortId) {
      const layers = COMPOSER.efforts
        .map((item) => {
          const on = item.id === effortId;
          return `<span class="cq-effort-text${on ? " is-now" : ""}" aria-hidden="true" data-reasoning-effort="${item.id}" data-max-effort="${item.id === "ultra" ? "true" : "false"}">${escapeHtml(item.label)}</span>`;
        })
        .join("");
      const current = COMPOSER.efforts.find((item) => item.id === effortId);
      return `<span class="cq-sr" data-cq-effort-sr>${escapeHtml(current?.label || "")}</span><span class="cq-effort-viewport"><span class="cq-effort-layers" data-cq-effort-layers>${layers}</span></span>`;
    }

    function cancelEffortAnims(el) {
      if (!el.getAnimations) return;
      el.getAnimations().forEach((anim) => {
        anim.onfinish = null;
        anim.cancel();
      });
    }

    function animateEffortStack(labelEl, effortId, instant) {
      if (!labelEl) return;
      if (!labelEl.querySelector("[data-cq-effort-layers]")) {
        labelEl.innerHTML = renderEffortLayersHtml(effortId);
      }
      const layers = labelEl.querySelector("[data-cq-effort-layers]");
      if (!layers) return;
      const texts = [...layers.querySelectorAll("[data-reasoning-effort]")];
      const active = texts.find((el) => el.dataset.reasoningEffort === effortId);
      if (!active) return;
      const width = parseFloat(getComputedStyle(active).width);
      const reduced = effortMotionReduced();
      const isChip = labelEl.hasAttribute("data-cq-model-label");
      const lockChip = isChip && state.popKind === "model";
      const key = `${effortId}:${Number.isFinite(width) ? width : 0}:${reduced}:${lockChip ? "lock" : "flow"}`;
      if (labelEl.dataset.effortKey === key) return;
      const shouldAnimate = labelEl.dataset.effortKey != null && !reduced && !instant;
      labelEl.dataset.effortKey = key;
      labelEl.dataset.effort = effortId;
      const blur = getComputedStyle(layers).getPropertyValue("--blur-xs").trim() || "4px";
      const textTo = (el) => ({
        opacity: el === active ? "1" : "0",
        filter: el === active ? "blur(0px)" : `blur(${blur})`,
      });
      const timing = { duration: EFFORT_MOTION_MS, easing: "ease-out", fill: "both" };
      const finish = (el, to, anim) => {
        anim.onfinish = null;
        cancelEffortAnims(el);
        Object.assign(el.style, to);
      };
      const run = (el, to, animate) => {
        cancelEffortAnims(el);
        if (!animate) {
          Object.assign(el.style, to);
          return;
        }
        const computed = getComputedStyle(el);
        const from = Object.fromEntries(Object.keys(to).map((prop) => [prop, computed.getPropertyValue(prop)]));
        const anim = el.animate([from, to], timing);
        anim.onfinish = () => finish(el, to, anim);
      };
      if (isChip && !lockChip) {
        run(labelEl, { width: `${Number.isFinite(width) ? width : 0}px` }, shouldAnimate);
      }
      texts.forEach((el) => {
        const to = textTo(el);
        run(el, to, shouldAnimate && !lockChip);
        el.classList.toggle("is-now", el === active);
      });
      const sr = labelEl.querySelector("[data-cq-effort-sr]");
      if (sr) sr.textContent = active.textContent;
    }

    function syncEffortStacks(instant) {
      animateEffortStack(root.querySelector("[data-cq-model-label]"), state.effort, instant);
      if (pop) animateEffortStack(pop.querySelector("[data-cq-effort-hero]"), state.effort, instant);
    }

    function syncEffortOpen() {
      root.toggleAttribute("data-cq-effort-open", state.popKind === "model");
    }

    function renderModelPop() {
      if (state.modelView === "models") {
        return `<div class="cq-effort" data-cq-effort-view="models">
          <div class="cq-effort-heading">选择模型</div>
          <span class="cq-sr">已锁定，打开访问权限选项</span>
          ${radioItem("modelPack", "default", "默认", state.modelPack === "default", "推荐模型集")}
          ${COMPOSER.models.map((item) => radioItem("model", item.id, item.label, state.model === item.id && state.modelPack !== "default")).join("")}
        </div>`;
      }
      const items = sliderEffortItems();
      const index = sliderIndex();
      const current = items[index] || { label: effortLabel() };
      const dots = items
        .map((item, i) => {
          const p = items.length > 1 ? i / (items.length - 1) : 0;
          return `<span class="cq-effort-dot${i <= index ? " is-on" : ""}${i === index ? " is-now" : ""}" style="left:calc(${p} * (100% - 28px) + 14px)" data-cq-effort-dot="${i}"></span>`;
        })
        .join("");
      return `<div class="cq-effort" data-cq-effort-view="effort" style="--cq-effort-pct:${effortPct()}">
        <div class="cq-effort-top">
          <button type="button" class="cq-effort-icon${state.moreUsage ? " is-on" : ""}" role="menuitemcheckbox" data-cq-pop-action="moreUsage" aria-label="启用标准模式" aria-checked="${state.moreUsage ? "true" : "false"}">
            <svg class="cq-effort-bolt" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M11.9125 21.4125C11.5292 21.8625 11.0292 22.0958 10.4125 22.1125C9.79586 22.1291 9.29586 21.9208 8.91252 21.4875C8.53752 21.0541 8.45836 20.4541 8.67503 19.6875L9.68752 16H4.57502C4.00836 16 3.56669 15.8375 3.25002 15.5125C2.93336 15.1791 2.77502 14.7791 2.77502 14.3125C2.77502 13.8375 2.92919 13.4125 3.23752 13.0375L12.1375 2.47497C12.5209 2.02497 13.0209 1.79164 13.6375 1.77497C14.2542 1.75831 14.75 1.96664 15.125 2.39997C15.5084 2.83331 15.5917 3.43331 15.375 4.19997L14.3125 7.99998H19.425C19.9917 7.99998 20.4334 8.16664 20.75 8.49997C21.075 8.83331 21.2375 9.23748 21.2375 9.71247C21.2375 10.1791 21.0792 10.5958 20.7625 10.9625L11.9125 21.4125Z"/></svg>
            <span class="cq-sr">用量更多</span>
          </button>
          <button type="button" class="cq-effort-toggle" role="menuitem" data-cq-pop-action="modelView" data-cq-pop-value="models" aria-label="选择模型">
            <span class="cq-effort-hero" data-cq-effort-hero>${renderEffortLayersHtml(items[index]?.id || state.effort)}</span>
            <span class="cq-effort-sub">${escapeHtml(modelName())}<svg class="cq-effort-caret" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M6.54537 5.70455C6.34035 5.49952 6.34035 5.16739 6.54537 4.96236C6.7504 4.75734 7.08253 4.75734 7.28756 4.96236L9.71822 7.39303C10.0534 7.72823 10.0534 8.27169 9.71822 8.60689L7.28756 11.0376C7.08253 11.2426 6.7504 11.2426 6.54537 11.0376C6.34035 10.8325 6.34035 10.5003 6.54537 10.2954L8.84029 7.99947L6.54537 5.70455Z"/></svg></span>
          </button>
          <button type="button" class="cq-effort-icon" role="menuitem" data-cq-pop-action="resetEffort" aria-label="重置为默认">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M8.12 2.4a.6.6 0 0 0-.62.6v1.12A4.5 4.5 0 1 0 12.5 8.7a.6.6 0 1 0-1.18-.22 3.3 3.3 0 1 1-3.82-3.36V6.3a.6.6 0 0 0 .93.5l2.46-1.54a.6.6 0 0 0 0-1.02L8.43 2.7a.6.6 0 0 0-.31-.3Z"/></svg>
          </button>
        </div>
        <div class="cq-effort-slide">
          <span class="cq-sr" role="status" data-cq-effort-status>${escapeHtml(current.label)}，第 ${index + 1} 项，共 ${items.length} 项。</span>
          <span class="cq-sr">使用左右方向键调整强度</span>
          <div class="cq-effort-slider" role="menuitem" aria-label="强度" data-cq-effort-slider>
            <div class="cq-effort-track">
              <div class="cq-effort-range" data-cq-effort-range></div>
              ${dots}
              <span class="cq-effort-thumb" role="slider" tabindex="0" data-cq-effort-thumb aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="${items.length - 1}" aria-valuenow="${index}" aria-valuetext="${escapeHtml(current.label)}"></span>
            </div>
          </div>
        </div>
      </div>`;
    }

    function setSliderIndex(next) {
      const items = sliderEffortItems();
      const index = Math.max(0, Math.min(items.length - 1, next));
      const item = items[index];
      if (!item) return;
      if (state.effort !== item.id) {
        state.effort = item.id;
        emit(root, "effort", { model: state.model, effort: item.id });
        updateComposerChrome();
      }
      patchEffortSlider();
    }

    function setEffortFromClientX(hit, clientX) {
      const box = hit.getBoundingClientRect();
      const t = (clientX - box.left - 14) / Math.max(1, box.width - 28);
      setSliderIndex(Math.round(Math.max(0, Math.min(1, t)) * (sliderEffortItems().length - 1)));
    }

    function patchEffortSlider() {
      const items = sliderEffortItems();
      const index = sliderIndex();
      const label = items[index]?.label || effortLabel();
      const panel = pop.querySelector("[data-cq-effort-view=effort]");
      if (panel) panel.style.setProperty("--cq-effort-pct", String(effortPct()));
      const thumb = pop.querySelector("[data-cq-effort-thumb]");
      if (thumb) {
        thumb.setAttribute("aria-valuenow", String(index));
        thumb.setAttribute("aria-valuetext", label);
      }
      const status = pop.querySelector("[data-cq-effort-status]");
      if (status) status.textContent = `${label}，第 ${index + 1} 项，共 ${items.length} 项。`;
      syncEffortStacks(false);
      pop.querySelectorAll("[data-cq-effort-dot]").forEach((dot) => {
        const i = Number(dot.dataset.cqEffortDot);
        dot.classList.toggle("is-on", i <= index);
        dot.classList.toggle("is-now", i === index);
      });
    }

    function modelLabel() {
      return `${modelName()} ${effortLabel()}`;
    }

    function sendTooltip() {
      if (state.running) return "Stop";
      if (!input.value.trim()) return "发送";
      if (followUpAction() === "queue") return "Queue";
      return "发送";
    }

    function composerTip(kind) {
      if (kind === "add") {
        return `<div class="cq-tip-row"><span>添加文件等内容</span><span class="cq-tip-kbd">@</span></div>`;
      }
      if (kind === "access") return "更改权限";
      if (kind === "pin") return "审查钩子";
      if (kind === "model") return "选择 ChatGPT 模型";
      if (kind === "dictate") return state.dictating ? "取消听写" : "听写";
      if (kind === "send") return sendTooltip();
      if (kind === "expand") return state.composerExpanded ? "Collapse" : "Expand";
      return "";
    }

    function renderAttachments() {
      if (!attach) return;
      attach.hidden = state.attachments.length === 0;
      attach.innerHTML = state.attachments
        .map(
          (item) => `<span class="cq-attach-chip" data-cq-attach-id="${item.id}">
            <span>${escapeHtml(item.name)}</span>
            <button type="button" class="cq-attach-remove" data-cq-attach-remove="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">×</button>
          </span>`
        )
        .join("");
    }

    function updateComposerChrome() {
      const sandbox = COMPOSER.sandbox.find((item) => item.id === state.sandbox);
      const accessLabel = root.querySelector("[data-cq-access-label]");
      if (accessLabel) accessLabel.textContent = sandbox?.label || "Full access";
      if (accessBtn) accessBtn.toggleAttribute("data-warn", state.sandbox === "fullAccess");
      const name = root.querySelector("[data-cq-model-name]");
      if (name) name.textContent = modelName();
      syncEffortStacks(false);
      if (dictateBtn) {
        dictateBtn.setAttribute("aria-pressed", state.dictating ? "true" : "false");
        dictateBtn.setAttribute("aria-label", state.dictating ? "取消听写" : "听写");
      }
      renderAttachments();
      updateSend();
      syncExpandToggle();
    }

    function addAttachment(name) {
      const item = { id: uid(), name };
      state.attachments.push(item);
      emit(root, "attach", { id: item.id, name });
      updateComposerChrome();
    }

    function removeAttachment(id) {
      state.attachments = state.attachments.filter((item) => item.id !== id);
      emit(root, "detach", { id });
      updateComposerChrome();
    }

    function applyPopAction(action, value) {
      switch (action) {
        case "add": {
          const item = COMPOSER.plus.find((entry) => entry.id === value);
          if (value === "photos") addAttachment("markup.png");
          else if (item) showToast(item.label);
          hidePop();
          return;
        }
        case "slash": {
          const command = COMPOSER.slash.find((item) => item.id === value);
          if (command) {
            setComposer(command.insert + (input.value ? ` ${input.value}` : ""));
            input.focus();
            emit(root, "slash", { id: command.id, insert: command.insert });
          }
          hidePop();
          return;
        }
        case "sandbox":
          state.sandbox = value;
          emit(root, "sandbox", { sandbox: value });
          break;
        case "model":
          state.model = value;
          state.modelPack = null;
          state.modelView = "effort";
          emit(root, "model", { model: value, effort: state.effort });
          break;
        case "effort":
          state.effort = value;
          emit(root, "effort", { model: state.model, effort: value });
          break;
        case "moreUsage": {
          state.moreUsage = !state.moreUsage;
          emit(root, "moreUsage", { moreUsage: state.moreUsage });
          const more = pop.querySelector("[data-cq-pop-action=moreUsage]");
          if (more) {
            more.classList.toggle("is-on", state.moreUsage);
            more.setAttribute("aria-checked", state.moreUsage ? "true" : "false");
          }
          updateComposerChrome();
          return;
        }
        case "modelPack":
          state.modelPack = value;
          emit(root, "modelPack", { modelPack: value });
          break;
        case "modelView":
          state.modelView = value === "models" ? "models" : "effort";
          break;
        case "resetEffort":
          setSliderIndex(COMPOSER.sliderEfforts.indexOf("high"));
          return;
        default:
          break;
      }
      updateComposerChrome();
      if (state.popKind) {
        const kind = state.popKind;
        const trigger = kind === "access" ? accessBtn : kind === "pin" ? pinBtn : kind === "model" ? modelBtn : addBtn;
        pop.innerHTML = renderPop(kind);
        if (kind === "model") {
          pop.dataset.view = state.modelView;
          syncEffortStacks(true);
        }
        if (trigger) {
          placeOverlay(
            pop,
            trigger,
            kind === "model" ? "center" : "start",
            "above",
            kind === "model" ? "anchor" : "composer"
          );
        }
      }
    }

    function hideDialog() {
      state.dialog = null;
      dialog.hidden = true;
    }

    function showDialog(text) {
      const count = state.items.length;
      const copy = dialog.querySelector("[data-cq-dialog-copy]");
      copy.textContent =
        count === 1
          ? "You are about to send a message. Do you want to clear the 1 message previously queued?"
          : `You are about to send a message. Do you want to clear the ${count} messages previously queued?`;
      state.dialog = { text };
      dialog.hidden = false;
      dialog.querySelector("[data-cq-dialog-send]")?.focus();
    }

    function lineHeightPx() {
      return Number.parseFloat(getComputedStyle(input).lineHeight) || 20;
    }

    function composerMaxPx() {
      return window.innerHeight * 0.25;
    }

    function hasMultilineText() {
      return input.value.includes("\n");
    }

    function canExpandComposer() {
      return hasMultilineText() || state.composerTall;
    }

    function effectiveEnterBehavior() {
      if (canExpandComposer() && state.composerExpanded) return "cmdAlways";
      return state.enterBehavior;
    }

    function isImeEvent(event) {
      return event.isComposing || event.keyCode === 229 || input.dataset.composition != null;
    }

    function isModKey(event) {
      return event.metaKey || event.ctrlKey;
    }

    function isBackgroundSubmitChord(event) {
      if (!state.running || event.key !== "Enter" || !isModKey(event) || event.altKey) return false;
      switch (state.enterBehavior) {
        case "enter":
          return !event.shiftKey;
        case "cmdIfMultiline":
        case "cmdAlways":
          return event.shiftKey;
        default: {
          const _never = state.enterBehavior;
          return Boolean(_never && false);
        }
      }
    }

    function shouldSubmitOnEnter(event) {
      if (event.key !== "Enter" || event.altKey) return false;
      if (event.shiftKey && !isModKey(event)) return false;
      if (isModKey(event) && event.shiftKey) return false;
      if (isModKey(event)) return true;
      switch (effectiveEnterBehavior()) {
        case "cmdAlways":
          return false;
        case "cmdIfMultiline":
          return !hasMultilineText();
        case "enter":
          return true;
        default: {
          const _never = effectiveEnterBehavior();
          return Boolean(_never && false);
        }
      }
    }

    function syncExpandToggle() {
      if (!expandBtn) return;
      if (!canExpandComposer() && state.composerExpanded) state.composerExpanded = false;
      const show = canExpandComposer();
      expandBtn.hidden = !show;
      expandBtn.setAttribute("aria-pressed", state.composerExpanded ? "true" : "false");
      expandBtn.setAttribute("aria-label", state.composerExpanded ? "Collapse" : "Expand");
      if (state.composerExpanded) expandBtn.dataset.expandedComposer = "";
      else delete expandBtn.dataset.expandedComposer;
      expandBtn.innerHTML = state.composerExpanded ? ICONS.collapse : ICONS.expand;
      input.dataset.enterBehavior = effectiveEnterBehavior();
      root.toggleAttribute("data-cq-composer-expanded", state.composerExpanded);
    }

    function toggleComposerExpanded() {
      if (!canExpandComposer()) return;
      state.composerExpanded = !state.composerExpanded;
      syncExpandToggle();
      input.focus();
      emit(root, "composer-expand", { expanded: state.composerExpanded });
    }

    function syncInputPlaceholder() {
      const slot = input.closest(".cq-input-slot");
      if (slot) slot.toggleAttribute("data-cq-has-value", Boolean(input.value));
    }

    function autosize() {
      input.style.height = "auto";
      const max = composerMaxPx();
      const next = Math.min(input.scrollHeight, max);
      input.style.height = next + "px";
      input.style.overflowY = input.scrollHeight > max + 1 ? "auto" : "hidden";
      state.composerTall = input.getBoundingClientRect().height >= lineHeightPx() * 5;
      syncExpandToggle();
      syncInputPlaceholder();
    }

    function setComposer(text) {
      input.value = text;
      autosize();
    }

    function updateSend() {
      const mode = state.running ? "stop" : "send";
      send.dataset.mode = mode;
      send.innerHTML = mode === "stop" ? ICONS.stop : ICONS.send;
      send.disabled = false;
      send.setAttribute("aria-label", sendTooltip());
    }

    function updateRow(el, item) {
      const sending = isSending(item);
      const failed = isFailed(item);
      const dim = sending || state.editing?.id === item.id || state.dragId === item.id;
      const canReorder = reorderable();
      const actionLabel = failed ? "Retry" : "Steer";
      el.dataset.dim = dim ? "1" : "0";
      el.dataset.reorder = canReorder ? "1" : "0";
      el.classList.toggle("is-dragging", state.dragId === item.id);
      const lead = el.querySelector(".cq-lead");
      lead.toggleAttribute("data-cq-grip", canReorder);
      if (canReorder) lead.dataset.cqGrip = item.id;
      else delete lead.dataset.cqGrip;
      const grip = lead.querySelector(".cq-grip");
      if (canReorder && !grip) lead.insertAdjacentHTML("afterbegin", `<span class="cq-grip">${ICONS.grip}</span>`);
      if (!canReorder) grip?.remove();
      const iconSlot = lead.querySelector("[data-cq-lead-icon]");
      iconSlot.innerHTML = sending ? '<span class="cq-spin"></span>' : ICONS.queue;
      let warn = el.querySelector("[data-cq-warn]");
      if (failed && !warn) {
        lead.insertAdjacentHTML("afterend", `<span class="cq-warn" data-cq-warn="${item.id}">${ICONS.warn}</span>`);
      } else if (!failed) {
        warn?.remove();
      }
      const title = el.querySelector("[data-cq-preview]");
      title.dataset.cqPreview = item.id;
      if (title.dataset.raw !== item.text) {
        title.dataset.raw = item.text;
        title.innerHTML = formatTitle(item.text);
      }
      const actions = el.querySelector(".cq-actions");
      const notQueued = !isQueuedSubmission(item);
      const steerDisabled = !canSendNow() || notQueued;
      const deleteDisabled = item.status === "sending";
      const actionSig = [sending, failed, steerDisabled, deleteDisabled, isQueuedSubmission(item), canSendNow()].join();
      if (actions.dataset.sig === actionSig) return;
      actions.dataset.sig = actionSig;
      actions.innerHTML =
        (sending ? '<span class="cq-sr" role="status">Sending</span>' : "") +
        (!sending && canSendNow()
          ? `<button type="button" class="cq-btn" data-cq-steer="${item.id}" ${steerDisabled ? "disabled" : ""}>${ICONS.steer}<span>${actionLabel}</span></button>`
          : "") +
        `<button type="button" class="cq-icon-btn cq-btn" data-cq-delete="${item.id}" aria-label="Delete queued message" ${deleteDisabled ? "disabled" : ""}>${ICONS.trash}</button>` +
        (sending
          ? ""
          : `<button type="button" class="cq-icon-btn cq-btn" data-cq-more="${item.id}" ${notQueued ? "disabled" : ""} aria-haspopup="menu" aria-label="Queued message actions">${ICONS.more}</button>`);
    }

    function makeRow(item) {
      const shell = document.createElement("div");
      shell.className = "cq-motion";
      const el = document.createElement("div");
      el.className = "cq-row";
      el.dataset.cqRow = item.id;
      el.innerHTML = `<div class="cq-row-main">
          <span class="cq-icon-slot"><span class="cq-lead"><span data-cq-lead-icon></span></span></span>
          <div class="cq-title" data-cq-preview="${item.id}" tabindex="0"></div>
        </div>
        <div class="cq-actions"></div>`;
      updateRow(el, item);
      shell.append(el);
      return el;
    }

    function ensureChrome() {
      let chrome = list.querySelector("[data-cq-chrome]");
      const show = state.interrupted && state.items.length > 0;
      if (show && !chrome) {
        chrome = document.createElement("div");
        chrome.dataset.cqChrome = "1";
        chrome.innerHTML = `<div class="cq-banner"><span>Queue paused because you interrupted</span><button type="button" class="cq-btn cq-banner-resume" data-cq-resume>${ICONS.steer}<span>Resume</span></button></div><div class="cq-sep"></div>`;
        list.prepend(chrome);
        list.scrollTop = 0;
      } else if (!show) {
        chrome?.remove();
      }
    }

    function sync() {
      if (!state.items.length && !state.editing) {
        rail.hidden = true;
        list.innerHTML = "";
        rowEls.clear();
        updateSend();
        return;
      }
      rail.hidden = !state.items.length;
      if (!state.items.length) {
        list.innerHTML = "";
        rowEls.clear();
        updateSend();
        return;
      }
      ensureChrome();
      const want = new Set(state.items.map((item) => item.id));
      for (const [id, el] of rowEls) {
        if (want.has(id) || el.classList.contains("is-exit")) continue;
        collapseRow(el, () => {
          motionNode(el).remove();
          rowEls.delete(id);
        });
      }
      for (const item of state.items) {
        let el = rowEls.get(item.id);
        const fresh = !el || el.classList.contains("is-exit");
        if (fresh) {
          el = makeRow(item);
          rowEls.set(item.id, el);
        } else {
          updateRow(el, item);
        }
      }
      placeRows();
      for (const item of state.items) {
        if (!entering.has(item.id)) continue;
        entering.delete(item.id);
        expandRow(rowEls.get(item.id), item.id === state.items[state.items.length - 1].id);
      }
      updateSend();
    }

    function enqueue(text) {
      const item = { id: uid(), text, status: "queued", pausedReason: null };
      state.items.push(item);
      entering.add(item.id);
      emit(root, "enqueue", { id: item.id, text });
      sync();
    }

    function acceptSend(id) {
      sendTimers.delete(id);
      const item = find(id);
      if (!item || (item.status !== "pending" && item.status !== "sending")) return;
      state.items = state.items.filter((entry) => entry.id !== id);
      collapseRow(rowEls.get(id), () => {
        const row = rowEls.get(id);
        if (row) motionNode(row).remove();
        rowEls.delete(id);
      });
      emit(root, "accepted", { id, text: item.text });
      sync();
    }

    function startQueued(id) {
      const item = find(id);
      if (!item || !isQueuedSubmission(item) || !canSendNow()) return;
      item.status = "sending";
      item.pausedReason = null;
      emit(root, "send-now", { id, text: item.text });
      sync();
      const timer = window.setTimeout(() => acceptSend(id), 420);
      sendTimers.set(id, timer);
    }

    function resumeInterruptedSteers() {
      state.interrupted = false;
      state.running = true;
      emit(root, "resume", {});
      const interrupted = state.items.filter((item) => item.pausedReason === INTERRUPTED_BEFORE_ACCEPT);
      interrupted.forEach((item) => {
        item.pausedReason = null;
      });
      const next = interrupted[0];
      if (next) startQueued(next.id);
      else sync();
    }

    function interrupt() {
      state.running = false;
      state.queueing = false;
      for (const [id, timer] of sendTimers) {
        window.clearTimeout(timer);
        const item = find(id);
        if (item && (item.status === "pending" || item.status === "sending")) {
          item.status = "queued";
          item.pausedReason = INTERRUPTED_BEFORE_ACCEPT;
        }
      }
      sendTimers.clear();
      state.interrupted = state.items.length > 0;
      emit(root, "interrupt", { queueing: false });
      hideTip(true);
      hideOverlays();
      sync();
    }

    function startTurn(text) {
      state.running = true;
      state.interrupted = false;
      emit(root, "turn-start", { text });
      sync();
    }

    function finishEditSession() {
      state.editing = null;
      root.dataset.editing = "0";
    }

    function cancelEdit() {
      const editing = state.editing;
      if (!editing) return;
      const item = { id: editing.id, text: editing.text, status: "queued", pausedReason: null };
      state.items.splice(Math.min(editing.index, state.items.length), 0, item);
      entering.add(item.id);
      setComposer(editing.draft);
      finishEditSession();
      emit(root, "edit-restore", { id: item.id });
      sync();
    }

    function beginEdit(id) {
      const item = find(id);
      if (!item || isSending(item)) return;
      if (state.editing) cancelEdit();
      const index = state.items.findIndex((entry) => entry.id === id);
      state.editing = { id: item.id, text: item.text, index, draft: input.value };
      root.dataset.editing = "1";
      state.items = state.items.filter((entry) => entry.id !== id);
      setComposer(item.text);
      input.focus();
      input.setSelectionRange(item.text.length, item.text.length);
      emit(root, "edit", { id });
      hideMenu();
      hideTip(true);
      sync();
    }

    function transferSideChat(id) {
      const item = find(id);
      if (!item) return;
      emit(root, "open-side-chat", { id, text: item.text });
      removeItem(id);
    }

    function removeItem(id) {
      if (state.editing?.id === id) finishEditSession();
      hideMenu();
      hideTip(true);
      const timer = sendTimers.get(id);
      if (timer) {
        window.clearTimeout(timer);
        sendTimers.delete(id);
      }
      const el = rowEls.get(id);
      collapseRow(el, () => {
        state.items = state.items.filter((item) => item.id !== id);
        if (el) motionNode(el).remove();
        rowEls.delete(id);
        if (!state.items.length) state.interrupted = false;
        emit(root, "delete", { id });
        sync();
      });
    }

    function submitComposer(text, action) {
      setComposer("");
      finishEditSession();
      if (state.running && action === "queue") {
        enqueue(text);
        return;
      }
      if (state.running && action === "steer") {
        emit(root, "steer-composer", { text });
        updateSend();
        return;
      }
      startTurn(text);
    }

    function submit(action) {
      const text = input.value.trim();
      if (!text) {
        updateSend();
        return;
      }
      if (state.interrupted && state.items.length) {
        showDialog(text);
        return;
      }
      submitComposer(text, action || followUpAction());
    }

    function submitOpposite() {
      submit(followUpAction() === "queue" ? "steer" : "queue");
    }

    function confirmDialog(clearQueue) {
      const pending = state.dialog;
      hideDialog();
      if (!pending) return;
      if (clearQueue) {
        sendTimers.forEach((timer) => window.clearTimeout(timer));
        sendTimers.clear();
        state.items = [];
        rowEls.forEach((el) => el.remove());
        rowEls.clear();
        list.innerHTML = "";
        state.interrupted = false;
        emit(root, "clear-queue", {});
      } else {
        resumeInterruptedSteers();
      }
      submitComposer(pending.text, followUpAction());
    }

    root.addEventListener("click", (event) => {
      const popAction = event.target.closest("[data-cq-pop-action]");
      if (popAction) {
        event.stopPropagation();
        applyPopAction(popAction.dataset.cqPopAction, popAction.dataset.cqPopValue);
        return;
      }
      if (event.target.closest("[data-cq-expand]")) {
        event.stopPropagation();
        toggleComposerExpanded();
        return;
      }
      if (event.target.closest("[data-cq-add]")) {
        event.stopPropagation();
        showPop("add", addBtn, "start");
        return;
      }
      if (event.target.closest("[data-cq-access]")) {
        event.stopPropagation();
        showPop("access", accessBtn, "start");
        return;
      }
      if (event.target.closest("[data-cq-pin]")) {
        event.stopPropagation();
        showPop("pin", pinBtn, "start");
        return;
      }
      if (event.target.closest("[data-cq-model]")) {
        event.stopPropagation();
        showPop("model", modelBtn, "end");
        return;
      }
      if (event.target.closest("[data-cq-dictate]")) {
        event.stopPropagation();
        hideOverlays();
        hideTip(true);
        state.dictating = !state.dictating;
        emit(root, "dictate", { dictating: state.dictating });
        updateComposerChrome();
        return;
      }
      const detach = event.target.closest("[data-cq-attach-remove]");
      if (detach) {
        event.stopPropagation();
        removeAttachment(detach.dataset.cqAttachRemove);
        return;
      }
      if (event.target.closest("[data-cq-resume]")) {
        hideTip(true);
        hideDialog();
        resumeInterruptedSteers();
        return;
      }
      if (event.target.closest("[data-cq-dialog-clear]")) {
        confirmDialog(true);
        return;
      }
      if (event.target.closest("[data-cq-dialog-send]")) {
        confirmDialog(false);
        return;
      }
      if (event.target === dialog) {
        hideDialog();
        return;
      }
      const steer = event.target.closest("[data-cq-steer]");
      if (steer) {
        event.stopPropagation();
        if (steer.disabled) return;
        hideMenu();
        hideTip(true);
        startQueued(steer.dataset.cqSteer);
        return;
      }
      const del = event.target.closest("[data-cq-delete]");
      if (del) {
        event.stopPropagation();
        if (del.disabled) return;
        removeItem(del.dataset.cqDelete);
        return;
      }
      const more = event.target.closest("[data-cq-more]");
      if (more) {
        event.stopPropagation();
        hideTip(true);
        if (more.disabled) return;
        if (state.menuId === more.dataset.cqMore) hideMenu();
        else showMenu(more.dataset.cqMore, more);
        return;
      }
      const preview = event.target.closest("[data-cq-preview]");
      if (preview) {
        const item = find(preview.dataset.cqPreview);
        if (!item) return;
        showTip(preview, "preview", `<div class="cq-tip-preview">${escapeHtml(item.text)}</div>`, 0);
        return;
      }
      if (!event.target.closest("[data-cq-menu], [data-cq-more]")) hideMenu();
      if (!event.target.closest("[data-cq-pop], [data-cq-add], [data-cq-access], [data-cq-pin], [data-cq-model]")) hidePop();
      if (!event.target.closest("[data-cq-tip], [data-cq-preview]")) hideTip(true);
    });

    menu.addEventListener("click", (event) => {
      const id = menu.dataset.id;
      if (event.target.closest("[data-cq-edit]")) beginEdit(id);
      else if (event.target.closest("[data-cq-side]")) {
        hideMenu();
        transferSideChat(id);
      } else if (event.target.closest("[data-cq-queueing]")) {
        state.queueing = !state.queueing;
        emit(root, "queueing", { mode: state.queueing ? "queue" : "steer" });
        hideMenu();
      }
    });

    function bindMenuKeys(node, onEscape) {
      node.addEventListener("keydown", (event) => {
        const buttons = [...node.querySelectorAll("button")];
        const index = buttons.indexOf(document.activeElement);
        if (event.key === "Escape") {
          event.preventDefault();
          onEscape();
          return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          if (!buttons.length) return;
          const next =
            event.key === "ArrowDown"
              ? buttons[(index + 1 + buttons.length) % buttons.length]
              : buttons[(index - 1 + buttons.length) % buttons.length];
          next.focus();
        }
      });
    }

    bindMenuKeys(menu, hideMenu);
    if (pop) bindMenuKeys(pop, hidePop);

    if (pop) {
      pop.addEventListener("pointerdown", (event) => {
        const hit = event.target.closest("[data-cq-effort-slider]");
        if (!hit) return;
        event.preventDefault();
        sliderDrag = hit;
        hit.setPointerCapture(event.pointerId);
        hit.classList.add("is-drag");
        setEffortFromClientX(hit, event.clientX);
      });
      pop.addEventListener("pointermove", (event) => {
        if (!sliderDrag) return;
        setEffortFromClientX(sliderDrag, event.clientX);
      });
      pop.addEventListener("pointerup", () => {
        sliderDrag?.classList.remove("is-drag");
        sliderDrag = null;
      });
      pop.addEventListener("pointercancel", () => {
        sliderDrag?.classList.remove("is-drag");
        sliderDrag = null;
      });
      pop.addEventListener(
        "keydown",
        (event) => {
          if (state.popKind !== "model" || state.modelView !== "effort") return;
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          event.stopPropagation();
          setSliderIndex(sliderIndex() + (event.key === "ArrowRight" ? 1 : -1));
        },
        true
      );
    }

    root.addEventListener("pointerover", (event) => {
      const chrome = event.target.closest("[data-cq-tip-kind]");
      if (chrome && state.popKind == null) {
        const html = composerTip(chrome.dataset.cqTipKind);
        if (html) showTip(chrome, "hover", html, TIP_DELAY);
        return;
      }
      const steer = event.target.closest("[data-cq-steer]");
      if (steer && !steer.disabled) {
        const item = find(steer.dataset.cqSteer);
        showTip(
          steer,
          "hover",
          isFailed(item)
            ? "<p>Try sending this queued message again</p><p class='cq-tip-sub'>Edit or delete it if retry keeps failing</p>"
            : "Submit without interrupting the model",
          TIP_DELAY
        );
        return;
      }
      const warn = event.target.closest("[data-cq-warn]");
      if (warn) {
        showTip(
          warn,
          "hover",
          "<p>This queued message could not be sent</p><p class='cq-tip-sub'>Retry, edit, or delete it to continue the queue</p>",
          TIP_DELAY
        );
        return;
      }
      const title = event.target.closest("[data-cq-preview]");
      if (title && title.scrollWidth > title.clientWidth + 1 && tipKind !== "preview") {
        const item = find(title.dataset.cqPreview);
        if (item) showTip(title, "hover", `<div class="cq-tip-preview">${escapeHtml(item.text)}</div>`, TIP_DELAY);
      }
    });

    root.addEventListener("pointerout", (event) => {
      if (tipKind === "preview") return;
      const from = event.target.closest("[data-cq-steer], [data-cq-warn], [data-cq-preview], [data-cq-tip-kind]");
      const to =
        event.relatedTarget && event.relatedTarget.closest
          ? event.relatedTarget.closest("[data-cq-steer], [data-cq-warn], [data-cq-preview], [data-cq-tip-kind], [data-cq-tip]")
          : null;
      if (from && !to) hideTip();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (!dialog.hidden) {
          hideDialog();
          return;
        }
        cancelEdit();
        return;
      }
      if (event.key !== "Enter") return;
      if (isImeEvent(event)) return;
      if (isBackgroundSubmitChord(event)) {
        event.preventDefault();
        submitOpposite();
        return;
      }
      if (shouldSubmitOnEnter(event)) {
        event.preventDefault();
        submit();
      }
    });
    input.addEventListener("compositionstart", () => {
      window.clearTimeout(compositionTimer);
      input.dataset.composition = "active";
    });
    input.addEventListener("compositionend", () => {
      input.dataset.composition = "ending";
      window.clearTimeout(compositionTimer);
      compositionTimer = window.setTimeout(() => {
        if (input.dataset.composition === "ending") {
          delete input.dataset.composition;
          input.dispatchEvent(new Event("pending-input-ready"));
        }
      }, 0);
    });
    input.addEventListener("input", () => {
      autosize();
      updateSend();
    });

    expandBtn?.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });

    send.addEventListener("click", () => {
      if (state.running) {
        interrupt();
        return;
      }
      if (!input.value.trim()) {
        updateSend();
        return;
      }
      submit();
    });

    list.addEventListener("scroll", () => {
      hideOverlays();
      if (tipKind !== "preview") hideTip();
    });

    root.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "u") {
        event.preventDefault();
        showPop("add", addBtn, "start");
      }
    });

    root.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (!dialog.hidden) {
        hideDialog();
        return;
      }
      if (!menu.hidden) {
        hideMenu();
        return;
      }
      if (pop && !pop.hidden) {
        hidePop();
        return;
      }
      if (!tip.hidden) {
        hideTip(true);
        return;
      }
      if (state.editing) cancelEdit();
    });

    root.addEventListener("keydown", (event) => {
      const title = event.target.closest("[data-cq-preview]");
      if (!title || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      title.click();
    });

    window.addEventListener("resize", () => {
      autosize();
      if (!tip.hidden && tipAnchor) placeTip(tipAnchor);
    });

    function measureSlots() {
      const listTop = list.getBoundingClientRect().top;
      return liveRows().map((row, index) => {
        const box = motionNode(row).getBoundingClientRect();
        return {
          id: row.dataset.cqRow,
          index,
          height: box.height,
          y: box.top - listTop + list.scrollTop,
        };
      });
    }

    function contentY(clientY) {
      return clientY - list.getBoundingClientRect().top + list.scrollTop;
    }

    function clearDragStyles() {
      liveRows().forEach((row) => {
        const node = motionNode(row);
        row.classList.remove("is-dragging", "is-shift");
        node.classList.remove("is-shift");
        node.style.transform = "";
        node.style.zIndex = "";
        row.style.transform = "";
        row.style.zIndex = "";
      });
      list.classList.remove("is-sorting");
    }

    function applySortShifts() {
      const gap = 1;
      const stride = drag.height + gap;
      liveRows().forEach((row, index) => {
        if (row.dataset.cqRow === drag.id) return;
        let shift = 0;
        if (drag.originIndex < drag.currentIndex && index > drag.originIndex && index <= drag.currentIndex) {
          shift = -stride;
        } else if (drag.originIndex > drag.currentIndex && index >= drag.currentIndex && index < drag.originIndex) {
          shift = stride;
        }
        const node = motionNode(row);
        const next = shift ? `translate3d(0, ${shift}px, 0)` : "translate3d(0, 0, 0)";
        if (node.style.transform === next) return;
        node.classList.add("is-shift");
        node.style.transform = next;
      });
    }

    function followDrag() {
      const row = rowEls.get(drag.id);
      if (!row) return;
      const node = motionNode(row);
      const delta = contentY(drag.clientY) - drag.originContentY;
      const first = drag.slots[0];
      const last = drag.slots[drag.slots.length - 1];
      const nextY = Math.min(Math.max(drag.originY + delta, first.y), last.y);
      node.style.transform = `translate3d(0, ${nextY - drag.originY}px, 0)`;
      const center = nextY + drag.height / 2;
      let nextIndex = drag.originIndex;
      let best = Infinity;
      drag.slots.forEach((slot) => {
        const distance = Math.abs(center - (slot.y + slot.height / 2));
        if (distance < best) {
          best = distance;
          nextIndex = slot.index;
        }
      });
      const current = drag.slots[drag.currentIndex];
      const currentDist = current ? Math.abs(center - (current.y + current.height / 2)) : Infinity;
      if (nextIndex !== drag.currentIndex && best + 8 < currentDist) {
        drag.currentIndex = nextIndex;
        applySortShifts();
      }
    }

    function armDrag() {
      const row = rowEls.get(drag.id);
      if (!row) return;
      const slots = measureSlots();
      const origin = slots.find((slot) => slot.id === drag.id);
      if (!origin) return;
      drag.armed = true;
      drag.slots = slots;
      drag.originIndex = origin.index;
      drag.currentIndex = origin.index;
      drag.originY = origin.y;
      drag.originContentY = contentY(drag.startY);
      drag.height = origin.height;
      state.dragId = drag.id;
      list.classList.add("is-sorting");
      row.classList.add("is-dragging");
      motionNode(row).style.zIndex = "3";
      hideOverlays();
      hideTip(true);
    }

    function tickDrag() {
      if (!drag?.armed) return;
      const box = list.getBoundingClientRect();
      const edge = 24;
      let step = 0;
      if (drag.clientY < box.top + edge) step = -12;
      else if (drag.clientY > box.bottom - edge) step = 12;
      if (step) list.scrollTop += step;
      followDrag();
      dragRaf = window.requestAnimationFrame(tickDrag);
    }

    function endDrag() {
      if (!drag) return;
      window.cancelAnimationFrame(dragRaf);
      dragRaf = 0;
      if (drag.armed) {
        if (drag.currentIndex !== drag.originIndex) {
          state.items = arrayMove(state.items, drag.originIndex, drag.currentIndex);
          emit(root, "reorder", { ids: state.items.map((item) => item.id) });
        }
        liveRows().forEach((row) => {
          const node = motionNode(row);
          row.classList.remove("is-shift");
          node.classList.remove("is-shift");
          node.style.transition = "none";
        });
        clearDragStyles();
        placeRows();
        const row = rowEls.get(drag.id);
        state.dragId = null;
        if (row) updateRow(row, find(drag.id));
        window.requestAnimationFrame(() => {
          liveRows().forEach((entry) => {
            entry.style.transition = "";
          });
        });
      }
      drag = null;
      state.dragId = null;
    }

    root.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, textarea, [data-cq-menu], [data-cq-tip], [data-cq-dialog]")) return;
      const grip = event.target.closest("[data-cq-grip]");
      if (!grip || !reorderable()) return;
      drag = { id: grip.dataset.cqGrip, startY: event.clientY, clientY: event.clientY, armed: false };
      grip.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    root.addEventListener("pointermove", (event) => {
      if (!drag) return;
      drag.clientY = event.clientY;
      if (!drag.armed && Math.abs(event.clientY - drag.startY) < 6) return;
      if (!drag.armed) {
        armDrag();
        if (drag.armed) dragRaf = window.requestAnimationFrame(tickDrag);
      }
    });
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);

    const composerResize = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      state.composerTall = entry.contentRect.height >= lineHeightPx() * 5;
      syncExpandToggle();
    });
    composerResize.observe(input);

    sync();
    autosize();
    updateComposerChrome();
    syncEffortStacks(true);
    if (new URLSearchParams(location.search).has("plus")) {
      window.requestAnimationFrame(() => showPop("add", addBtn, "start"));
    }
  }

  function ensurePop(root) {
    let node = root.querySelector("[data-cq-pop]");
    if (node) return node;
    node = document.createElement("div");
    node.className = "cq-menu cq-pop hide-scrollbar scrollbar-none";
    node.dataset.cqPop = "";
    node.hidden = true;
    node.setAttribute("role", "menu");
    root.appendChild(node);
    return node;
  }

  function ensureDialog(root) {
    let dialog = root.querySelector("[data-cq-dialog]");
    if (dialog) return dialog;
    dialog = document.createElement("div");
    dialog.className = "cq-dialog";
    dialog.dataset.cqDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `<div class="cq-dialog-card" role="dialog" aria-modal="true" aria-labelledby="cq-dialog-title">
        <h2 id="cq-dialog-title">Send message?</h2>
        <p data-cq-dialog-copy></p>
        <div class="cq-dialog-actions">
          <button type="button" class="cq-dialog-clear" data-cq-dialog-clear>Clear queue</button>
          <button type="button" class="cq-dialog-send" data-cq-dialog-send>Send message</button>
        </div>
      </div>`;
    root.appendChild(dialog);
    return dialog;
  }

  document.querySelectorAll("[data-cq-root]").forEach(bind);
})();
