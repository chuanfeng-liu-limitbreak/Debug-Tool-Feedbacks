const translations = {
  en: {
    nicknameEyebrow: "WELCOME",
    nicknameTitle: "Choose your nickname",
    nicknameDescription: "This name will appear next to the feedback you share.",
    nicknamePlaceholder: "Enter nickname",
    nicknameError: "Enter a nickname between 2 and 30 characters.",
    continue: "Continue",
    editNicknameEyebrow: "YOUR PROFILE",
    editNicknameTitle: "Change your nickname",
    editNicknameDescription: "Your new name will also appear on feedback you already shared.",
    saveNickname: "Save nickname",
    changeNickname: "Change nickname",
    nicknameSaved: "Nickname updated.",
    boardEyebrow: "COMMUNITY REQUESTS",
    pageTitle: "Debug tool feedback",
    pageSubtitle: "Share feedback and vote on what we should work on next.",
    giveFeedback: "Give feedback",
    sortBy: "Sort by",
    topVoted: "Top voted",
    newest: "Newest",
    loading: "Loading feedback…",
    emptyTitle: "No feedback yet",
    emptyDescription: "Be the first to share an idea with the team.",
    dialogEyebrow: "SHARE AN IDEA",
    feedbackTitle: "Give feedback",
    descriptionLabel: "Feedback",
    descriptionPlaceholder: "Add details that will help the team understand your idea.",
    cancel: "Cancel",
    submit: "Submit feedback",
    feedbackError: "Add a description between 3 and 600 characters.",
    feedbackSaved: "Your feedback is live.",
    voteAdded: "Vote added.",
    voteRemoved: "Vote removed.",
    genericError: "Something went wrong. Please try again.",
    close: "Close",
    voteFor: "Vote for",
    removeVoteFor: "Remove vote from",
    deleteFeedback: "Delete",
    deleteFeedbackLabel: "Delete feedback",
    deleteConfirmation: "Delete this feedback? This cannot be undone.",
    feedbackDeleted: "Feedback deleted.",
    by: "by",
  },
  zh: {
    nicknameEyebrow: "歡迎",
    nicknameTitle: "選擇你的暱稱",
    nicknameDescription: "這個名稱會顯示在你提出的回饋旁。",
    nicknamePlaceholder: "輸入暱稱",
    nicknameError: "請輸入 2 到 30 個字元的暱稱。",
    continue: "繼續",
    editNicknameEyebrow: "你的個人資料",
    editNicknameTitle: "更改暱稱",
    editNicknameDescription: "新暱稱也會套用到你之前提出的回饋。",
    saveNickname: "儲存暱稱",
    changeNickname: "更改暱稱",
    nicknameSaved: "暱稱已更新。",
    boardEyebrow: "社群需求",
    pageTitle: "Debug Tool 回饋",
    pageSubtitle: "提出回饋並投票，決定接下來要處理什麼。",
    giveFeedback: "提出回饋",
    sortBy: "排序方式",
    topVoted: "最高票",
    newest: "最新",
    loading: "正在載入回饋…",
    emptyTitle: "目前還沒有回饋",
    emptyDescription: "成為第一個向團隊分享想法的人。",
    dialogEyebrow: "分享想法",
    feedbackTitle: "提出回饋",
    descriptionLabel: "回饋內容",
    descriptionPlaceholder: "提供更多資訊，幫助團隊理解你的想法。",
    cancel: "取消",
    submit: "送出回饋",
    feedbackError: "請輸入 3 到 600 個字元的回饋內容。",
    feedbackSaved: "你的回饋已經發布。",
    voteAdded: "已投票。",
    voteRemoved: "已取消投票。",
    genericError: "發生錯誤，請再試一次。",
    close: "關閉",
    voteFor: "投票給",
    removeVoteFor: "取消投票給",
    deleteFeedback: "刪除",
    deleteFeedbackLabel: "刪除回饋",
    deleteConfirmation: "確定要刪除這則回饋嗎？刪除後無法復原。",
    feedbackDeleted: "回饋已刪除。",
    by: "by",
  },
  ja: {
    nicknameEyebrow: "ようこそ",
    nicknameTitle: "ニックネームを選択",
    nicknameDescription: "投稿したフィードバックに、この名前が表示されます。",
    nicknamePlaceholder: "ニックネームを入力",
    nicknameError: "2〜30文字のニックネームを入力してください。",
    continue: "続ける",
    editNicknameEyebrow: "プロフィール",
    editNicknameTitle: "ニックネームを変更",
    editNicknameDescription: "新しい名前は、以前に投稿したフィードバックにも表示されます。",
    saveNickname: "ニックネームを保存",
    changeNickname: "ニックネームを変更",
    nicknameSaved: "ニックネームを更新しました。",
    boardEyebrow: "コミュニティのリクエスト",
    pageTitle: "Debug Tool フィードバック",
    pageSubtitle: "フィードバックを共有して投票し、次に対応する項目を決めます。",
    giveFeedback: "フィードバック",
    sortBy: "並び順",
    topVoted: "投票数順",
    newest: "新着順",
    loading: "フィードバックを読み込み中…",
    emptyTitle: "フィードバックはまだありません",
    emptyDescription: "最初のアイデアをチームに共有しましょう。",
    dialogEyebrow: "アイデアを共有",
    feedbackTitle: "フィードバックを送る",
    descriptionLabel: "フィードバック",
    descriptionPlaceholder: "チームがアイデアを理解できるよう、詳細を追加してください。",
    cancel: "キャンセル",
    submit: "送信する",
    feedbackError: "3〜600文字のフィードバックを入力してください。",
    feedbackSaved: "フィードバックを公開しました。",
    voteAdded: "投票しました。",
    voteRemoved: "投票を取り消しました。",
    genericError: "エラーが発生しました。もう一度お試しください。",
    close: "閉じる",
    voteFor: "投票：",
    removeVoteFor: "投票を取り消す：",
    deleteFeedback: "削除",
    deleteFeedbackLabel: "フィードバックを削除",
    deleteConfirmation: "このフィードバックを削除しますか？この操作は元に戻せません。",
    feedbackDeleted: "フィードバックを削除しました。",
    by: "by",
  },
};

const storageKeys = {
  language: "debug-feedback-language",
  nickname: "debug-feedback-nickname",
  localUserId: "debug-feedback-local-user-id",
  localFeedback: "debug-feedback-local-items-v2",
  legacyLocalFeedback: "debug-feedback-local-items-v1",
};

const elements = {
  nicknameView: document.querySelector("#nickname-view"),
  feedbackView: document.querySelector("#feedback-view"),
  nicknameForm: document.querySelector("#nickname-form"),
  nicknameInput: document.querySelector("#nickname-input"),
  nicknameError: document.querySelector("#nickname-error"),
  continueButton: document.querySelector("#continue-button"),
  cancelNicknameButton: document.querySelector("#cancel-nickname-button"),
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
  feedbackDescriptionInput: document.querySelector("#feedback-description-input"),
  feedbackError: document.querySelector("#feedback-error"),
  submitFeedbackButton: document.querySelector("#submit-feedback-button"),
  closeDialogButton: document.querySelector("#close-dialog-button"),
  cancelFeedbackButton: document.querySelector("#cancel-feedback-button"),
  toast: document.querySelector("#toast"),
};

const textBindings = {
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
  "#feedback-description-label": "descriptionLabel",
  "#cancel-nickname-button": "cancel",
  "#cancel-feedback-button": "cancel",
  "#submit-feedback-button": "submit",
};

const state = {
  language: localStorage.getItem(storageKeys.language) || "en",
  nickname: "",
  userId: "",
  feedback: [],
  backend: null,
  editingNickname: false,
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
  function readItems() {
    const stored = localStorage.getItem(storageKeys.localFeedback);
    if (!stored) {
      const legacyStored = localStorage.getItem(storageKeys.legacyLocalFeedback);
      if (legacyStored) {
        try {
          const migratedItems = JSON.parse(legacyStored)
            .filter((item) => !String(item.id).startsWith("demo-"))
            .map((item) => ({
              ...item,
              description: item.description?.trim() || item.title || "",
            }));
          writeItems(migratedItems);
          return migratedItems;
        } catch {
          // Fall through to an empty board when legacy data cannot be read.
        }
      }

      writeItems([]);
      return [];
    }

    try {
      return JSON.parse(stored);
    } catch {
      writeItems([]);
      return [];
    }
  }

  function writeItems(items) {
    localStorage.setItem(storageKeys.localFeedback, JSON.stringify(items));
  }

  function normalize(item, userId) {
    const voterIds = item.voterIds || [];
    return {
      id: item.id,
      description: item.description,
      authorNickname:
        item.authorId === userId
          ? localStorage.getItem(storageKeys.nickname) || item.authorNickname
          : item.authorNickname,
      createdAt: item.createdAt,
      voteCount: (item.baseVotes || 0) + voterIds.length,
      voted: voterIds.includes(userId),
      isOwner: item.authorId === userId,
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

      const items = readItems();
      let didChangeAuthor = false;
      items.forEach((item) => {
        if (item.authorId === userId && item.authorNickname !== nickname) {
          item.authorNickname = nickname;
          didChangeAuthor = true;
        }
      });
      if (didChangeAuthor) {
        writeItems(items);
      }

      localStorage.setItem(storageKeys.nickname, nickname);
      return { nickname, userId };
    },

    async listFeedback(userId) {
      return readItems().map((item) => normalize(item, userId));
    },

    async createFeedback({ description, nickname, userId }) {
      const items = readItems();
      items.unshift({
        id: crypto.randomUUID(),
        description,
        authorNickname: nickname,
        authorId: userId,
        createdAt: new Date().toISOString(),
        baseVotes: 0,
        voterIds: [],
      });
      writeItems(items);
    },

    async deleteFeedback(feedbackId, userId) {
      const items = readItems();
      const item = items.find((candidate) => String(candidate.id) === String(feedbackId));
      if (!item || item.authorId !== userId) {
        throw new Error("Feedback cannot be deleted by this user");
      }

      writeItems(items.filter((candidate) => String(candidate.id) !== String(feedbackId)));
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
          "id,description,author_id,created_at,author:profiles!feedback_author_id_fkey(nickname),votes(user_id)",
        );
      if (error) {
        throw error;
      }

      return data.map((item) => ({
        id: item.id,
        description: item.description,
        authorNickname: item.author?.nickname || "Unknown",
        createdAt: item.created_at,
        voteCount: item.votes.length,
        voted: item.votes.some((vote) => vote.user_id === userId),
        isOwner: item.author_id === userId,
      }));
    },

    async createFeedback({ description, userId }) {
      const { error } = await client.from("feedback").insert({
        description,
        author_id: userId,
      });
      if (error) {
        throw error;
      }
    },

    async deleteFeedback(feedbackId, userId) {
      const { data, error } = await client
        .from("feedback")
        .delete()
        .eq("id", feedbackId)
        .eq("author_id", userId)
        .select("id")
        .maybeSingle();
      if (error) {
        throw error;
      }
      if (!data) {
        throw new Error("Feedback cannot be deleted by this user");
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
  elements.feedbackDescriptionInput.placeholder = t("descriptionPlaceholder");
  elements.closeDialogButton.setAttribute("aria-label", t("close"));
  renderNicknameMode();
  updateNicknameBadge();
  renderFeedback();
}

function renderNicknameMode() {
  document.querySelector("#nickname-eyebrow").textContent = t(
    state.editingNickname ? "editNicknameEyebrow" : "nicknameEyebrow",
  );
  document.querySelector("#nickname-title").textContent = t(
    state.editingNickname ? "editNicknameTitle" : "nicknameTitle",
  );
  document.querySelector("#nickname-description").textContent = t(
    state.editingNickname ? "editNicknameDescription" : "nicknameDescription",
  );
  elements.continueButton.textContent = t(state.editingNickname ? "saveNickname" : "continue");
  elements.cancelNicknameButton.hidden = !state.editingNickname;
}

function updateNicknameBadge() {
  if (!state.nickname) {
    return;
  }

  elements.nicknameBadge.textContent = `@${state.nickname} ✎`;
  elements.nicknameBadge.setAttribute("aria-label", t("changeNickname"));
  elements.nicknameBadge.title = t("changeNickname");
}

function showNicknameView(editingNickname = false) {
  state.editingNickname = editingNickname;
  elements.nicknameView.hidden = false;
  elements.feedbackView.hidden = true;
  elements.userMenu.hidden = true;
  elements.nicknameError.textContent = "";
  elements.nicknameInput.value = editingNickname ? state.nickname : "";
  renderNicknameMode();
  requestAnimationFrame(() => {
    elements.nicknameInput.focus();
    if (editingNickname) {
      elements.nicknameInput.select();
    }
  });
}

async function showFeedbackView() {
  state.editingNickname = false;
  elements.nicknameView.hidden = true;
  elements.feedbackView.hidden = false;
  elements.userMenu.hidden = false;
  updateNicknameBadge();
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
      `${item.voted ? t("removeVoteFor") : t("voteFor")} ${item.description}`,
    );
    voteButton.addEventListener("click", () => handleVote(item, voteButton));

    const voteCount = document.createElement("span");
    voteCount.className = "vote-count";
    voteCount.textContent = item.voteCount.toLocaleString();

    const content = document.createElement("div");
    content.className = "feedback-content";

    const copyRow = document.createElement("div");
    copyRow.className = "feedback-copy-row";

    const description = document.createElement("h2");
    description.className = "feedback-copy";
    description.textContent = item.description;

    const author = document.createElement("span");
    author.className = "feedback-author";
    author.textContent = `${t("by")} ${item.authorNickname}`;

    const meta = document.createElement("div");
    meta.className = "feedback-meta";
    meta.append(author);

    if (item.isOwner) {
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-feedback-button";
      deleteButton.type = "button";
      deleteButton.textContent = t("deleteFeedback");
      deleteButton.setAttribute(
        "aria-label",
        `${t("deleteFeedbackLabel")}: ${item.description}`,
      );
      deleteButton.addEventListener("click", () => handleDeleteFeedback(item, deleteButton));
      meta.append(deleteButton);
    }

    copyRow.append(description, meta);
    content.append(copyRow);
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

async function handleDeleteFeedback(item, button) {
  if (!item.isOwner || !window.confirm(t("deleteConfirmation"))) {
    return;
  }

  button.disabled = true;
  try {
    await state.backend.deleteFeedback(item.id, state.userId);
    state.feedback = state.feedback.filter(
      (candidate) => String(candidate.id) !== String(item.id),
    );
    renderFeedback();
    showToast(t("feedbackDeleted"));
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
  requestAnimationFrame(() => elements.feedbackDescriptionInput.focus());
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
  const wasEditing = state.editingNickname;
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
    if (wasEditing) {
      showToast(t("nicknameSaved"));
    }
  } catch (error) {
    console.error(error);
    elements.nicknameError.textContent = t("genericError");
  } finally {
    elements.continueButton.disabled = false;
  }
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();
  const description = elements.feedbackDescriptionInput.value.trim();
  if (description.length < 3 || description.length > 600) {
    elements.feedbackError.textContent = t("feedbackError");
    elements.feedbackDescriptionInput.focus();
    return;
  }

  elements.feedbackError.textContent = "";
  elements.submitFeedbackButton.disabled = true;

  try {
    await state.backend.createFeedback({
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
  elements.nicknameBadge.addEventListener("click", () => showNicknameView(true));
  elements.cancelNicknameButton.addEventListener("click", () => showFeedbackView());
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
