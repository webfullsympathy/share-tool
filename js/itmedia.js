window.addEventListener("load", function() {
    // 初期の共有ボタンを削除
    document.getElementById("msbBtnTweetbutton_minimalTop").remove()
    document.getElementById("msbBtnSharebutton_minimalTop").remove()
    document.getElementById("msbBtnHatenabookmark_minimalTop").remove()
    document.getElementById("msbBtnPocket_minimalTop").remove()

    fetch("chrome-extension://folhpgnfkkbpgchbambnjdkaaleaefgh/js/itmedia1.txt")
    .then(response1 => response1.text())
    .then(share1data => {
        fetch("chrome-extension://folhpgnfkkbpgchbambnjdkaaleaefgh/js/itmedia2.txt")
        .then(response2 => response2.text())
        .then(share2data => {
            let new_share_button = document.createElement("td")
            new_share_button.innerHTML = share1data + document.title + "&amp;" + "https://share-tool.vercel.app?text=" + location.href + share2data
            document.getElementsByClassName("msbGroup msbGroupUnder")[0].after(new_share_button)
            document.getElementsByTagName("pre")[0].remove()
            document.querySelector('[charset="utf-8"]')[1].remove()
        })
    })
})