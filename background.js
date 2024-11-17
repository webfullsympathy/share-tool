const sharePage = () => {
    const popupBaseURL = chrome.runtime.getURL("popup/index.html");

    // 現在のページのタイトルとURLを取得
    const pageTitle = document.title; // ページのタイトル
    const pageURL = window.location.href; // 現在のURL

    // タイトルとURLをエンコード
    const encodedTitle = encodeURIComponent(pageTitle);
    const encodedURL = encodeURIComponent(pageURL);

    // クエリパラメータを構築
    const popupURL = `${popupBaseURL}?title=${encodedTitle}&url=${encodedURL}`;

    // ポップアップを開く
    window.open(popupURL, "", "popup, width=301, height=401, scrollbars=0, sizable=0,toolbar=0");
};

// 拡張機能がインストールされた時の処理
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "share_page",
        title: "現在のページを共有...",
        contexts: ["page"], // ページコンテキストメニューで表示
    });
});

// コンテキストメニューがクリックされた時の処理
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "share_page") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: sharePage,
        });
    }
});
