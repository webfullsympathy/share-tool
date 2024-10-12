// ?text=の処理
window.addEventListener("load",function(){
    let url = new URL(location.href);
    let data=url.searchParams.get("text");
    if(data == null){}else{
        let area = document.querySelector("#share");
        area.value = data;
    }
})

if(choiceResult.outcome == "accepted"){
    document.getElementById("install").style.display = "none"
}

console.log("コンソールではエラー用に色々ログを出しています。")

function submit(){
    console.log("共有ボタンが押されました")
    const get_1 = document.getElementById("service");
    const get_2 = get_1.selectedIndex;
    const service = get_1.options[get_2].innerText;
    async function other (){
        try {
            await navigator.share({text: document.main.text.value});
        } catch (error) {
            console.error(error);
        }
    }
    if (service == "Misskey・Mastodon"){
        console.log("Misskey・Mastodonの処理を実行します")
        console.log("インスタンスのドメイン・IPアドレスを要求中")
        var instance = prompt("インスタンスの ドメイン・IPアドレス を入力してください。\n例：misskey.ioやmastodon.socialなど");
        console.log("入力されました")
        var instance = "https://" + instance + "/share?text=" + document.main.text.value
        window.open(instance)
        console.log("インスタンスの共有ページを新しいタブで開きました")
    }else if(service == "Threads"){
        console.log("Threadsの処理を実行します")
        window.open("https://threads.net/intent/post?text=" + document.main.text.value)
        console.log("Threadsの共有ページを新しいタブで開きました")
    }else if(service == "BlueSky"){
        console.log("BlueSkyの処理を実行します")
        window.open("https://bsky.app/intent/compose?text=" + document.main.text.value)
        console.log("BlueSkyの共有ページを新しいタブで開きました")
    }else if(service == "X(旧Twitter)"){
        console.log("X(旧Twitter)の処理を実行します")
        window.open("https://x.com/intent/post?text=" + document.main.text.value)
        console.log("X(旧Twitter)の共有ページを新しいタブで開きました")
    }else if(service == "タイッツー"){
        console.log("タイッツーの処理を実行します")
        window.open("https://taittsuu.com/share?text=" + document.main.text.value)
        console.log("タイッツーの共有ページを新しいタブで開きました")
    }else if(service == "LINE"){
        console.log("LINEの処理を実行します")
        window.open("https://social-plugins.line.me/lineit/share?text=")
        console.log("LINEの共有ページを新しいタブで開きました")
    }else if(service == "Facebook"){
        console.log("Facebookの処理を実行します")
        window.open("https://www.facebook.com/sharer.php?u=" + document.main.text.value)
        console.log("Facebookの共有ページを新しいタブで開きました")
    }else if(service == "WhatsApp"){
        console.log("WhatsAppの処理を実行します")
        window.open("https://api.whatsapp.com/send/?text=" + document.main.text.value)
        console.log("WhatsAppの共有ページを新しいタブで開きました")
    }else if(service == "その他"){
        console.log("その他の処理を実行します")
        other()
        console.log("その他の共有画面の表示を試みました\nデバイスによっては実装されていない可能性があります")
    }else if(service == "コピー"){
        console.log("コピーします")
        if (!navigator.clipboard) {
            window.alert("お使いのブラウザにコピー機能が実装されていません。\n最新にアップデートするか標準ブラウザなどの比較的新しいブラウザをご利用ください。")
        }
        navigator.clipboard.writeText(document.main.text.value).then(
            () => {window.alert("コピーしました！")},
            () => {window.alert("コピーできませんでした。")}
        )
        console.log("コピーを試みました")
    }
}