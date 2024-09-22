// ?text=の処理
window.addEventListener('load', function(){
let url_string = window.location.href;
let url = new URL(url_string);
let data=url.searchParams.get("text");
let area = document.querySelector("#share");
area.value = data;
})

console.log("コンソールではエラー用に色々ログを出しています。")

function submit(){
    console.log("共有ボタンが押されました")
    const get_1 = document.getElementById("service");
    const get_2 = get_1.selectedIndex;
    const service = get_1.options[get_2].innerText;
    if (service == "Misskey・Mastodon"){
        console.log("Misskey・Mastodonの処理を実行します")
        console.log("インスタンスのドメイン・IPアドレスを要求中")
        var instance = prompt("インスタンスの ドメイン・IPアドレス を入力してください。");
        console.log("入力されました")
        window.open("https://" + instance + "/share?text=" + document.main.text.value)
        console.log("インスタンスの共有ページを新しいタブで開きました")
    }else if(service == "Threads"){
        window.open("https://threads.net/intent/post?text=" + document.main.text.value)
    }else if(service == "BlueSky"){
        window.open()
    }
}
