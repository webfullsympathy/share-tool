if(Cookies.get("his") != "true"){
    Cookies.set("line","true")
    Cookies.set("x","true")
    Cookies.set("taittsuu","true")
    Cookies.set("whatsapp","true")
    Cookies.set("threads","true")
    Cookies.set("facebook","true")
    Cookies.set("misskey","true")
    Cookies.set("bsky","true")
    Cookies.set("copy","true")
    Cookies.set("other","true")
}

var check = document.getElementById("line")
if(Cookies.get("line") == "true"){
    check.checked = true
}

check = document.getElementById("x")
if(Cookies.get("x") == "true"){
    check.checked = true
}

check = document.getElementById("taittsuu")
if(Cookies.get("taittsuu") == "true"){
    check.checked = true
}

check = document.getElementById("whatsapp")
if(Cookies.get("whatsapp") == "true"){
    check.checked = true
}

check = document.getElementById("threads")
if(Cookies.get("threads") == "true"){
    check.checked = true
}

check = document.getElementById("facebook")
if(Cookies.get("facebook") == "true"){
    check.checked = true
}

check = document.getElementById("misskey")
if(Cookies.get("misskey") == "true"){
    check.checked = true
}

check = document.getElementById("bsky")
if(Cookies.get("bsky") == "true"){
    check.checked = true
}

check = document.getElementById("copy")
if(Cookies.get("copy") == "true"){
    check.checked = true
}

check = document.getElementById("other")
if(Cookies.get("other") == "true"){
    check.checked = true
}

function data_save(){
    var check = document.getElementById("line")
    Cookies.set("line",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("x")
    Cookies.set("x",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("taittsuu")
    Cookies.set("taittsuu",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("whatsapp")
    Cookies.set("whatsapp",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("threads")
    Cookies.set("threads",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("facebook")
    Cookies.set("facebook",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("misskey")
    Cookies.set("misskey",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("bsky")
    Cookies.set("bsky",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("copy")
    Cookies.set("copy",String(check.checked),{ expires: 2147483647 })

    check = document.getElementById("other")
    Cookies.set("other",String(check.checked),{ expires: 2147483647 })

    if(Cookies.get("his") != "true"){
        Cookies.set("his","true")
    }

    location.reload()
}