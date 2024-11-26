let LINEurl = "";

document.addEventListener("DOMContentLoaded", () => {
    const share = document.getElementById("share");
    const urlText = window.location.href;
    const urlObj = new URL(urlText);

    const htmlTextarea = document.getElementById("text");

    const paramTitle = urlObj.searchParams.get("title");
    const paramURL = urlObj.searchParams.get("url");

    if(paramTitle && paramURL){
        htmlTextarea.value = `${paramTitle}\n\n${paramURL}`;
        htmlTextarea.readOnly = true;
        LINEurl =  paramURL;
    }else{

    }

    share.addEventListener("click", () => {
        const text = document.getElementById("text").value
        const select = document.getElementById("select").value

        if (text === "") {
            openModal("textMsg")
            return
        }
        if (select === "") {
            openModal("selectMsg")
            return
        }

        const list = {
            "line": `https://social-plugins.line.me/lineit/share?text=`,
            "twitter": `https://x.com/intent/post?text=`,
            "taittsuu": `https://taittsuu.com/share?text="`,
            "whatsapp": `https://api.whatsapp.com/send/?text=`,
            "threads": `https://threads.net/intent/post?text=`,
            "fb": `https://www.facebook.com/sharer.php?u=`,
            "bsky": `https://bsky.app/intent/compose?text=`,
        }

        if (list[select]) {
            const url = `${list[select]}${encodeURIComponent(text)}`
            window.open(url, "", "popup, width=500, height=500")
        }else if(select == "mstdn"){

        }else if(select == "copy"){
            if (!navigator.clipboard) {
                window.alert("お使いのブラウザにコピー機能が実装されていません。\n最新にアップデートするか標準ブラウザなどの比較的新しいブラウザをご利用ください。")
            }
            navigator.clipboard.writeText(text).then(
                () => {openModal("copyMsg")},
                () => {window.alert("コピーできませんでした。")}
            )
            return;
        }else{other(text)}
        console.log(`共有先: ${select}, テキスト: ${text}`)
        window.close()
    })

    async function other (text){
        try {
            await navigator.share({text: text})
        } catch (error) {
            console.error(error)
        }
    }

    // モーダル関連関数
    const openModal = (id) => {
        closeAllModals()
        document.getElementById(id).classList.add("is-active")
    }
    const closeModal = (el) => {
        el.classList.remove("is-active")
    }
    const closeAllModals = () => {
        document.querySelectorAll(".message.is-active").forEach(closeModal)
    }
    document.querySelectorAll(".delete").forEach(($c) => {
        $c.addEventListener("click", () => {
            closeModal($c.closest(".message"))
        })
    })
})
