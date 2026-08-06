const translations = {
  en: {
    nicknameEyebrow: "WELCOME",
    nicknameTitle: "Choose your nickname",
    nicknameDescription: "This name will appear next to the feedback you share.",
    nicknamePlaceholder: "Enter nickname",
    nicknameError: "Enter a nickname between 2 and 30 characters.",
    continue: "Continue",
    boardEyebrow: "COMMUNITY REQUESTS",
    pageTitle: "Help us improve the debug tool",
    pageSubtitle: "Share ideas, vote on requests, and help us prioritize what matters.",
    giveFeedback: "Give feedback",
    sortBy: "Sort by",
    topVoted: "Top voted",
    newest: "Newest",
    loading: "Loading feedback…",
    emptyTitle: "No feedback yet",
    emptyDescription: "Be the first to share an idea with the team.",
    dialogEyebrow: "SHARE AN IDEA",
    feedbackTitle: "Give feedback",
    titleLabel: "Title",
    titlePlaceholder: "What should we improve?",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Add details that will help the team understand your idea.",
    cancel: "Cancel",
    submit: "Submit feedback",
    feedbackError: "Add a title between 3 and 100 characters.",
    feedbackSaved: "Your feedback is live.",
    voteAdded: "Vote added.",
    voteRemoved: "Vote removed.",
    genericError: "Something went wrong. Please try again.",
    close: "Close",
    voteFor: "Vote for",
    removeVoteFor: "Remove vote from",
    by: "by",
  },
  zh: {
    nicknameEyebrow: "歡迎",
    nicknameTitle: "選擇你的暱稱",
    nicknameDescription: "這個名稱會顯示在你提出的回饋旁。",
    nicknamePlaceholder: "輸入暱稱",
    nicknameError: "請輸入 2 到 30 個字元的暱稱。",
    continue: "繼續",
    boardEyebrow: "社群需求",
    pageTitle: "一起改善 Debug Tool",
    pageSubtitle: "分享想法、為需求投票，幫助我們決定最重要的優先事項。",
    giveFeedback: "提出回饋",
    sortBy: "排序方式",
    topVoted: "最高票",
    newest: "最新",
    loading: "正在載入回饋…",
    emptyTitle: "目前還沒有回饋",
    emptyDescription: "成為第一個向團隊分享想法的人。",
    dialogEyebrow: "分享想法",
    feedbackTitle: "提出回饋",
    titleLabel: "標題",
    titlePlaceholder: "你希望我們改善什麼？",
    descriptionLabel: "詳細說明",
    descriptionPlaceholder: "提供更多資訊，幫助團隊理解你的想法。",
    cancel: "取消",
    submit: "送出回饋",
    feedbackError: "請輸入 3 到 100 個字元的標題。",
    feedbackSaved: "你的回饋已經發布。",
    voteAdded: "已投票。",
    voteRemoved: "已取消投票。",
    genericError: "發生錯誤，請再試一次。",
    close: "關閉",
    voteFor: "投票給",
    removeVoteFor: "取消投票給",
    by: "by",
  },
  ja: {
    nicknameEyebrow: "ようこそ",
    nicknameTitle: "ニックネームを選択",
    nicknameDescription: "投稿したフィードバックに、この名前が表示されます。",
    nicknamePlaceholder: "ニックネームを入力",
    nicknameError: "2〜30文字のニックネームを入力してください。",
    continue: "続ける",
    boardEyebrow: "コミュニティのリクエスト",
    pageTitle: "Debug Tool の改善にご協力ください",
    pageSubtitle: "アイデアを共有して投票し、重要な項目の優先順位付けにご協力ください。",
    giveFeedback: "フィードバック",
    sortBy: "並び順",
    topVoted: "投票数順",
    newest: "新着順",
    loading: "フィードバックを読み込み中…",
    emptyTitle: "フィードバックはまだありません",
    emptyDescription: "最初のアイデアをチームに共有しましょう。",
    dialogEyebrow: "アイデアを共有",
    feedbackTitle: "フィードバックを送る",
    titleLabel: "タイトル",
    titlePlaceholder: "何を改善すべきですか？",
    descriptionLabel: "詳細",
    descriptionPlaceholder: "チームがアイデアを理解できるよう、詳細を追加してください。",
    cancel: "キャンセル",
    submit: "送信する",
    feedbackError: "3〜100文字のタイトルを入力してください。",
    feedbackSaved: "フィードバックを公開しました。",
    voteAdded: "投票しました。",
    voteRemoved: "投票を取り消しました。",
    genericError: "エラーが発生しました。もう一度お試しください。",
    close: "閉じる",
    voteFor: "投票：",
    removeVoteFor: "投票を取り消す：",
    by: "by",
  },
};

const storageKeys = {
  language: "debug-feedback-language",
  nickname: "debug-feedback-nickname",
  localUserId: "debug-feedback-local-user-id",
  localFeedback: "debug-feedback-local-items-v1",
};

const elements = {
  nicknameView: document.querySelector("#nickname-view"),
  feedbackView: document.querySelector("#feedback-view"),
  nicknameForm: document.querySelector("#nickname-form"),
  nicknameInput: document.querySelector("#nickname-input"),
  nicknameError: document.querySelector("#nickname-error"),
  continueButton: document.querySelector("#continue-button"),
  userMenu: document.querySelector("#user-menu"),
  nicknameBadge: document.querySelector("#nickname-badge"),
  newFeedbackButton: document.querySelector("#new-feedback-button"),
  emptyFeedbackButton: document.querySelector("#empty-feedback-button"),
  loadingState: document.querySelector("#loading-state"),
  emptyState: document.querySelector("#empty-state"),
  feedbackList: document.querySelector("#feedback-list"),
  sortSelect: document.querySelector("#sort-select"),
  feedbackDialog: document.querySelector("#feedback-dialog"),
  feedbackForm: document.querySelector("#feedback-form"),
  feedbackTitleInput: document.querySelector("#feedback-title-input"),
  feedbackDescriptionInput: document.querySelector("#feedback-description-input"),
  feedbackError: document.querySelector("#feedback-error"),
  submitFeedbackButton: document.querySelector("#submit-feedback-button"),
  closeDialogButton: document.querySelector("#close-dialog-button"),
  cancelFeedbackButton: document.querySelector("#cancel-feedback-button"),
  toast: document.querySelector("#toast"),
};

const textBindings = {
  "#nickname-eyebrow": "nicknameEyebrow",
  "#nickname-title": "nicknameTitle",
  "#nickname-description": "nicknameDescription",
  "#continue-button": "continue",
  "#board-eyebrow": "boardEyebrow",
  "#page-title": "pageTitle",
  "#page-subtitle": "pageSubtitle",
  "#new-feedback-button": "giveFeedback",
  "#sort-label": "sortBy",
  "#sort-top-option": "topVoted",
  "#sort-new-option": "newest",
  "#loading-state": "loading",
  "#empty-title": "emptyTitle",
  "#empty-description": "emptyDescription",
  "#empty-feedback-button": "giveFeedback",
  "#dialog-eyebrow": "dialogEyebrow",
  "#dialog-title": "feedbackTitle",
  "#feedback-title-label": "titleLabel",
  "#feedback-description-label": "descriptionLabel",
  "#cancel-feedback-button": "cancel",
  "#submit-feedback-button": "submit",
};

const state = {
  language: localStorage.getItem(storageKeys.language) || "en",
  nickname: "",
  userId: "",
  feedback: [],
  backend: null,
  toastTimer: null,
};

function t(key) {
  return translations[state.language][key];
}

function isSupabaseConfigured() {
  const config = window.FEEDBACK_APP_CONFIG || {};
  return Boolean(
    config.supabaseUrl &&
      config.supabaseAnonKey &&
      !config.supabaseUrl.startsWith("__") &&
      !config.supabaseAnonKey.startsWith("__"),
  );
}

function createLocalBackend() {
  const starterFeedback = [
    {
      id: "demo-1",
      title: "Export logs as JSON",
      description: "Allow exporting logs in JSON format for easier analysis and sharing.",
      authorNickname: "Mika",
      createdAt: "2026-08-06T10:00:00.000Z",
      baseVotes: 842,
      voterIds: [],
    },
    {
      id: "demo-2",
      title: "Filter console events",
      description: "Add advanced filtering options for console events by level, source, and text.",
      authorNickname: "Ray",
      createdAt: "2026-08-05T10:00:00.000Z",
      baseVotes: 651,
      voterIds: [],
    },
    {
      id: "demo-3",
      title: "Keep breakpoints between sessions",
      description: "Persist breakpoints across sessions and reloads.",
      authorNickname: "Aki",
      createdAt: "2026-08-04T10:00:00.000Z",
      baseVotes: 489,
      voterIds: [],
    },
    {
      id: "demo-4",
      title: "Improve large trace performance",
      description: "Optimize performance when loading and viewing large trace files.",
      authorNickname: "Chris",
      createdAt: "2026-08-03T10:00:00.000Z",
      baseVotes: 375,
      voterIds: [],
    },
  ];

  function readItems() {
    const stored = localStorage.getItem(storageKeys.localFeedback);
    if (!stored) {
      localStorage.setItem(storageKeys.localFeedback, JSON.stringify(starterFeedback));
      return starterFeedback;
    }

    try {
      return JSON.parse(stored);
    } catch {
      localStorage.setItem(storageKeys.localFeedback, JSON.stringify(starterFeedback));
      return starterFeedback;
    }
  }

  function writeItems(items) {
    localStorage.setItem(storageKeys.localFeedback, JSON.stringify(items));
  }

  function normalize(item, userId) {
    const voterIds = item.voterIds || [];
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      authorNickname: item.authorNickname,
      createdAt: item.createdAt,
      voteCount: (item.baseVotes || 0) + voterIds.length,
      voted: voterIds.includes(userId),
    };
  }

  return {
    async restoreUser() {
      const nickname = localStorage.getItem(storageKeys.nickname);
      const userId = localStorage.getItem(storageKeys.localUserId);
      return nickname && userId ? { nickname, userId } : null;
    },

    async ensureUser(nickname) {
      let userId = localStorage.getItem(storageKeys.localUserId);
      if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem(storageKeys.localUserId, userId);
      }

      localStorage.setItem(storageKeys.nickname, nickname);
      return { nickname, userId };
    },

    async listFeedback(userId) {
      return readItems().map((item) => normalize(item, userId));
    },

    async createFeedback({ title, description, nickname, userId }) {
      const items = readItems();
      items.unshift({
        id: crypto.randomUUID(),
        title,
        description,
        authorNickname: nickname,
        authorId: userId,
        createdAt: new Date().toISOString(),
        baseVotes: 0,
        voterIds: [],
      });
      writeItems(items);
    },

    async toggleVote(feedbackId, userId, shouldVote) {
      const items = readItems();
      const item = items.find((candidate) => String(candidate.id) === String(feedbackId));
      if (!item) {
        throw new Error("Feedback not found");
      }

      item.voterIds = item.voterIds || [];
      if (shouldVote && !item.voterIds.includes(userId)) {
        item.voterIds.push(userId);
      }
      if (!shouldVote) {
        item.voterIds = item.voterIds.filter((id) => id !== userId);
      }
      writeItems(items);
    },
  };
}

function createSupabaseBackend() {
  const config = window.FEEDBACK_APP_CONFIG;
  const client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);

  return {
    async restoreUser() {
      const { data, error } = await client.auth.getSession();
      if (error) {
        throw error;
      }

      const userId = data.session?.user?.id;
      if (!userId) {
        return null;
      }

      const { data: profile, error: profileError } = await client
        .from("profiles")
        .select("nickname")
        .eq("id", userId)
        .maybeSingle();
      if (profileError) {
        throw profileError;
      }

      return profile ? { nickname: profile.nickname, userId } : null;
    },

    async ensureUser(nickname) {
      let { data: sessionData, error: sessionError } = await client.auth.getSession();
      if (sessionError) {
        throw sessionError;
      }

      if (!sessionData.session) {
        const result = await client.auth.signInAnonymously();
        if (result.error) {
          throw result.error;
        }
        sessionData = { session: result.data.session };
      }

      const userId = sessionData.session.user.id;
      const { error } = await client.from("profiles").upsert({ id: userId, nickname });
      if (error) {
        throw error;
      }

      localStorage.setItem(storageKeys.nickname, nickname);
      return { nickname, userId };
    },

    async listFeedback(userId) {
      const { data, error } = await client
        .from("feedback")
        .select(
          "id,title,description,created_at,author:profiles!feedback_author_id_fkey(nickname),votes(user_id)",
        );
      if (error) {
        throw error;
      }

      return data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description || "",
        authorNickname: item.author?.nickname || "Unknown",
        createdAt: item.created_at,
        voteCount: item.votes.length,
        voted: item.votes.some((vote) => vote.user_id === userId),
      }));
    },

    async createFeedback({ title, description, userId }) {
      const { error } = await client.from("feedback").insert({
        title,
        description,
        author_id: userId,
      });
      if (error) {
        throw error;
      }
    },

    async toggleVote(feedbackId, userId, shouldVote) {
      if (shouldVote) {
        const { error } = await client.from("votes").insert({
          feedback_id: feedbackId,
          user_id: userId,
        });
        if (error && error.code !== "23505") {
          throw error;
        }
        return;
      }

      const { error } = await client
        .from("votes")
        .delete()
        .eq("feedback_id", feedbackId)
        .eq("user_id", userId);
      if (error) {
        throw error;
      }
    },
  };
}

function applyLanguage(language) {
  state.language = translations[language] ? language : "en";
  localStorage.setItem(storageKeys.language, state.language);
  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : state.language;

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.language === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  Object.entries(textBindings).forEach(([selector, key]) => {
    document.querySelector(selector).textContent = t(key);
  });

  elements.nicknameInput.placeholder = t("nicknamePlaceholder");
  elements.feedbackTitleInput.placeholder = t("titlePlaceholder");
  elements.feedbackDescriptionInput.placeholder = t("descriptionPlaceholder");
  elements.closeDialogButton.setAttribute("aria-label", t("close"));
  renderFeedback();
}

function showNicknameView() {
  elements.nicknameView.hidden = false;
  elements.feedbackView.hidden = true;
  elements.userMenu.hidden = true;
  requestAnimationFrame(() => elements.nicknameInput.focus());
}

async function showFeedbackView() {
  elements.nicknameView.hidden = true;
  elements.feedbackView.hidden = false;
  elements.userMenu.hidden = false;
  elements.nicknameBadge.textContent = `@${state.nickname}`;
  await refreshFeedback();
}

async function refreshFeedback() {
  elements.loadingState.hidden = false;
  elements.feedbackList.hidden = true;
  elements.emptyState.hidden = true;

  try {
    state.feedback = await state.backend.listFeedback(state.userId);
    renderFeedback();
  } catch (error) {
    console.error(error);
    showToast(t("genericError"));
  } finally {
    elements.loadingState.hidden = true;
  }
}

function sortedFeedback() {
  const items = [...state.feedback];
  if (elements.sortSelect.value === "new") {
    return items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return items.sort((a, b) => {
    if (b.voteCount !== a.voteCount) {
      return b.voteCount - a.voteCount;
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

function renderFeedback() {
  if (!elements.feedbackView || elements.feedbackView.hidden) {
    return;
  }

  elements.feedbackList.replaceChildren();
  const items = sortedFeedback();
  elements.emptyState.hidden = items.length !== 0;
  elements.feedbackList.hidden = items.length === 0;

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "feedback-item";

    const voteButton = document.createElement("button");
    voteButton.className = `vote-button${item.voted ? " is-voted" : ""}`;
    voteButton.type = "button";
    voteButton.textContent = "↑";
    voteButton.setAttribute("aria-pressed", String(item.voted));
    voteButton.setAttribute(
      "aria-label",
      `${item.voted ? t("removeVoteFor") : t("voteFor")} ${item.title}`,
    );
    voteButton.addEventListener("click", () => handleVote(item, voteButton));

    const voteCount = document.createElement("span");
    voteCount.className = "vote-count";
    voteCount.textContent = item.voteCount.toLocaleString();

    const content = document.createElement("div");
    content.className = "feedback-content";

    const titleRow = document.createElement("div");
    titleRow.className = "feedback-title-row";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const author = document.createElement("span");
    author.className = "feedback-author";
    author.textContent = `${t("by")} ${item.authorNickname}`;

    const description = document.createElement("p");
    description.className = "feedback-description";
    description.textContent = item.description;

    titleRow.append(title, author);
    content.append(titleRow, description);
    article.append(voteButton, voteCount, content);
    elements.feedbackList.append(article);
  });
}

async function handleVote(item, button) {
  const shouldVote = !item.voted;
  button.disabled = true;

  try {
    await state.backend.toggleVote(item.id, state.userId, shouldVote);
    item.voted = shouldVote;
    item.voteCount += shouldVote ? 1 : -1;
    renderFeedback();
    showToast(t(shouldVote ? "voteAdded" : "voteRemoved"));
  } catch (error) {
    console.error(error);
    showToast(t("genericError"));
    button.disabled = false;
  }
}

function openFeedbackDialog() {
  elements.feedbackForm.reset();
  elements.feedbackError.textContent = "";
  elements.feedbackDialog.showModal();
  requestAnimationFrame(() => elements.feedbackTitleInput.focus());
}

function closeFeedbackDialog() {
  elements.feedbackDialog.close();
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  state.toastTimer = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2600);
}

async function handleNicknameSubmit(event) {
  event.preventDefault();
  const nickname = elements.nicknameInput.value.trim();
  if (nickname.length < 2 || nickname.length > 30) {
    elements.nicknameError.textContent = t("nicknameError");
    elements.nicknameInput.focus();
    return;
  }

  elements.nicknameError.textContent = "";
  elements.continueButton.disabled = true;

  try {
    const user = await state.backend.ensureUser(nickname);
    state.nickname = user.nickname;
    state.userId = user.userId;
    await showFeedbackView();
  } catch (error) {
    console.error(error);
    elements.nicknameError.textContent = t("genericError");
  } finally {
    elements.continueButton.disabled = false;
  }
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();
  const title = elements.feedbackTitleInput.value.trim();
  const description = elements.feedbackDescriptionInput.value.trim();
  if (title.length < 3 || title.length > 100) {
    elements.feedbackError.textContent = t("feedbackError");
    elements.feedbackTitleInput.focus();
    return;
  }

  elements.feedbackError.textContent = "";
  elements.submitFeedbackButton.disabled = true;

  try {
    await state.backend.createFeedback({
      title,
      description,
      nickname: state.nickname,
      userId: state.userId,
    });
    closeFeedbackDialog();
    await refreshFeedback();
    showToast(t("feedbackSaved"));
  } catch (error) {
    console.error(error);
    elements.feedbackError.textContent = t("genericError");
  } finally {
    elements.submitFeedbackButton.disabled = false;
  }
}

function bindEvents() {
  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });
  elements.nicknameForm.addEventListener("submit", handleNicknameSubmit);
  elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  elements.newFeedbackButton.addEventListener("click", openFeedbackDialog);
  elements.emptyFeedbackButton.addEventListener("click", openFeedbackDialog);
  elements.closeDialogButton.addEventListener("click", closeFeedbackDialog);
  elements.cancelFeedbackButton.addEventListener("click", closeFeedbackDialog);
  elements.sortSelect.addEventListener("change", renderFeedback);
  elements.feedbackDialog.addEventListener("click", (event) => {
    if (event.target === elements.feedbackDialog) {
      closeFeedbackDialog();
    }
  });
}

async function initialize() {
  state.backend = isSupabaseConfigured() ? createSupabaseBackend() : createLocalBackend();
  bindEvents();
  applyLanguage(state.language);

  try {
    const user = await state.backend.restoreUser();
    if (user) {
      state.nickname = user.nickname;
      state.userId = user.userId;
      await showFeedbackView();
      return;
    }
  } catch (error) {
    console.error(error);
  }

  showNicknameView();
}

initialize();
