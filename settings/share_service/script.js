if(localStorage.getItem("his") != "true"){
    localStorage.setItem("line","true")
    localStorage.setItem("x","true")
    localStorage.setItem("taittsuu","true")
    localStorage.setItem("whatsapp","true")
    localStorage.setItem("threads","true")
    localStorage.setItem("facebook","true")
    localStorage.setItem("misskey","true")
    localStorage.setItem("bsky","true")
    localStorage.setItem("copy","true")
    localStorage.setItem("other","true")
}

var check = document.getElementById("line")
if(localStorage.getItem("line") == "true"){
    check.checked = true
}

check = document.getElementById("x")
if(localStorage.getItem("x") == "true"){
    check.checked = true
}

check = document.getElementById("taittsuu")
if(localStorage.getItem("taittsuu") == "true"){
    check.checked = true
}

check = document.getElementById("whatsapp")
if(localStorage.getItem("whatsapp") == "true"){
    check.checked = true
}

check = document.getElementById("threads")
if(localStorage.getItem("threads") == "true"){
    check.checked = true
}

check = document.getElementById("facebook")
if(localStorage.getItem("facebook") == "true"){
    check.checked = true
}

check = document.getElementById("misskey")
if(localStorage.getItem("misskey") == "true"){
    check.checked = true
}

check = document.getElementById("bsky")
if(localStorage.getItem("bsky") == "true"){
    check.checked = true
}

check = document.getElementById("copy")
if(localStorage.getItem("copy") == "true"){
    check.checked = true
}

check = document.getElementById("other")
if(localStorage.getItem("other") == "true"){
    check.checked = true
}

function data_save(){
    var check = document.getElementById("line")
    localStorage.setItem("line",String(check.checked))

    check = document.getElementById("x")
    localStorage.setItem("x",String(check.checked))

    check = document.getElementById("taittsuu")
    localStorage.setItem("taittsuu",String(check.checked))

    check = document.getElementById("whatsapp")
    localStorage.setItem("whatsapp",String(check.checked))

    check = document.getElementById("threads")
    localStorage.setItem("threads",String(check.checked))

    check = document.getElementById("facebook")
    localStorage.setItem("facebook",String(check.checked))

    check = document.getElementById("misskey")
    localStorage.setItem("misskey",String(check.checked))

    check = document.getElementById("bsky")
    localStorage.setItem("bsky",String(check.checked))

    check = document.getElementById("copy")
    localStorage.setItem("copy",String(check.checked))

    check = document.getElementById("other")
    localStorage.setItem("other",String(check.checked))

    if(localStorage.getItem("his") != "true"){
        localStorage.setItem("his","true")
    }

    location.reload()
}