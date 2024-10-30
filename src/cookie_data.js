window.addEventListener("load", function() {

if(Cookies.get("line") == "false"){
    document.getElementsByName("line")[0].remove()
}

if(Cookies.get("x") == "false"){
    document.getElementsByName("x")[0].remove()
}

if(Cookies.get("taittsuu") == "false"){
    document.getElementsByName("taittsuu")[0].remove()
}

if(Cookies.get("whatsapp") == "false"){
    document.getElementsByName("whatsapp")[0].remove()
}

if(Cookies.get("threads") == "false"){
    document.getElementsByName("threads")[0].remove()
}

if(Cookies.get("facebook") == "false"){
    document.getElementsByName("facebook")[0].remove()
}

if(Cookies.get("misskey") == "false"){
    document.getElementsByName("misskey")[0].remove()
}

if(Cookies.get("bsky") == "false"){
    document.getElementsByName("bsky")[0].remove()
}

if(Cookies.get("copy") == "false"){
    document.getElementsByName("copy")[0].remove()
}

if(Cookies.get("other") == "false"){
    document.getElementsByName("other")[0].remove()
}
})