function sharePage(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0]
        const title = activeTab.title
        const url = activeTab.url

        const openURL = chrome.runtime.getURL("popup/index.html") + "?title=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url)
        window.open(openURL, "", "popup, width=301, height=401, scrollbars=0, sizable=0,toolbar=0")
        window.close()
    })
}

// 拡張機能がインストールされた時の処理
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "share_page",
        title: "現在のページを共有",
        contexts: ["page"],
    })
})

// コンテキストメニューがクリックされた時の処理
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "share_page") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: sharePage,
        })
    }
})
