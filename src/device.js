if (screen.availWidth < screen.availHeight){
    const url = new URL(location.href)
    const move_data =url.searchParams.get("text")
    if (location.href.includes("/m")){
    }else if (location.href.includes("?")){
        location.href = location.href.substring(0, location.href.indexOf("?")) + "/m?text=" + move_data
    }else if (location.href.charAt(location.href.length -1) == "/"){
        location.href = location.href.slice(0,-1) + "/m/"
    }else{
    location.href = location.href = location.href + "/m/"
    }
}