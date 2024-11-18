window.addEventListener("online", function () {
    alert("オンラインになりました。\n共有画面に遷移します。")
    location.href = "https://share-tool.net?text=オンラインになったので遷移しました。"
})