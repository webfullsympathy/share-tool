window.addEventListener("online", function () {
    alert("オンラインになりました。\n共有画面に遷移します。")
    location.href = "https://share-tool.vercel.app?text=オンラインになったので遷移しました。"
})