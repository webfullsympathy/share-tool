window.addEventListener("load", function() {

if(localStorage.getItem("line") == "false"){
    document.getElementsByName("line")[0].remove()
}

if(localStorage.getItem("x") == "false"){
    document.getElementsByName("x")[0].remove()
}

if(localStorage.getItem("taittsuu") == "false"){
    document.getElementsByName("taittsuu")[0].remove()
}

if(localStorage.getItem("whatsapp") == "false"){
    document.getElementsByName("whatsapp")[0].remove()
}

if(localStorage.getItem("threads") == "false"){
    document.getElementsByName("threads")[0].remove()
}

if(localStorage.getItem("facebook") == "false"){
    document.getElementsByName("facebook")[0].remove()
}

if(localStorage.getItem("misskey") == "false"){
    document.getElementsByName("misskey")[0].remove()
}

if(localStorage.getItem("bsky") == "false"){
    document.getElementsByName("bsky")[0].remove()
}

if(localStorage.getItem("copy") == "false"){
    document.getElementsByName("copy")[0].remove()
}

if(localStorage.getItem("other") == "false"){
    document.getElementsByName("other")[0].remove()
}

if(localStorage.getItem("linkedin") == "false"){
    document.getElementsByName("linkedin")[0].remove()
}

// アプリ版
if (window.navigator.userAgent.toLowerCase().indexOf("electron") != -1) {
    const store = new Store()

    if(store.get("line") == "false"){
        document.getElementsByName("line")[0].remove()
    }
    
    if(store.get("x") == "false"){
        document.getElementsByName("x")[0].remove()
    }
    
    if(store.get("taittsuu") == "false"){
        document.getElementsByName("taittsuu")[0].remove()
    }
    
    if(store.get("whatsapp") == "false"){
        document.getElementsByName("whatsapp")[0].remove()
    }
    
    if(store.get("threads") == "false"){
        document.getElementsByName("threads")[0].remove()
    }
    
    if(store.get("facebook") == "false"){
        document.getElementsByName("facebook")[0].remove()
    }
    
    if(store.get("misskey") == "false"){
        document.getElementsByName("misskey")[0].remove()
    }
    
    if(store.get("bsky") == "false"){
        document.getElementsByName("bsky")[0].remove()
    }
    
    if(store.get("copy") == "false"){
        document.getElementsByName("copy")[0].remove()
    }
    
    if(store.get("other") == "false"){
        document.getElementsByName("other")[0].remove()
    }
    
    if(store.get("linkedin") == "false"){
        document.getElementsByName("linkedin")[0].remove()
    }
}
})