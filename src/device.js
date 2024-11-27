window.addEventListener("load",function(){
if(!navigator.onLine){
    location.href = "ofline.html"
}
function resizeWindow(){
    let url_device = new URL(location.href)
    let visi=url_device.searchParams.get("visi")
    var tate
    var yoko
    if(visi == "os"){
        tate = window.innerHeight
        yoko = window.innerWidth
    }else{
        tate = window.outerHeight
        yoko = window.outerWidth
    }
    if (tate > yoko){
        location.href = location.href.replace("://share-tool.net","://m.share-tool.net")
    }
}
resizeWindow()
window.addEventListener("resize", resizeWindow)
})
