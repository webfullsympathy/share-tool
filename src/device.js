if (screen.availWidth < screen.availHeight){
    let url = new URL(location.href)
    let move_data =url.searchParams.get("text")
    if (location.href.includes("?")){
        location.href = location.href.substring(0, location.href.indexOf("?")) + "/m" + move_data
    }else if (location.href.charAt(location.href.length -1) == "/"){
        location.href = location.href.slice(0,-1) + "/m/"
    }
    location.href = location.href = location.href + "/m/"
}