window.addEventListener("load",function(){
function resizeWindow(){
    let url = new URL(location.href)
    let visi=url.searchParams.get("visi")
    var tate
    var yoko
    if(visi == "os"){
        tate = window.innerHeight
        yoko = window.innerWidth
    }else{
        tate = window.outerHeight
        yoko = window.outerWidth
    }
    if (tate < yoko){
        const url = new URL(location.href)
        const move_data =url.searchParams.get("text")
        if (location.href.includes("/m")){
        }else if (location.href.includes("?")){
            if(location.href.includes("visi")){
                location.href = location.href.substring(0, location.href.indexOf("?")).replace("index.html","") + "/m?text=" + move_data + "&visi=os"
            }else{
                location.href = location.href.substring(0, location.href.indexOf("?")).replace("index.html","") + "/m?text=" + move_data
            }
        }else if (location.href.charAt(location.href.length -1) == "/"){
            if(location.href.includes("visi")){
                location.href = location.href.slice(0,-1).replace("index.html/","") + "/m/index.html" + "?visi=os"
            }else{
                location.href = location.href.slice(0,-1).replace("index.html/","") + "/m/index.html"
            }
        }else{
            if(location.href.includes("visi")){
                location.href = location.href.replace("index.html","") + "/m/index.html" + "?visi=os"
            }else{
                location.href = location.href.replace("index.html","") + "/m/index.html"
            }
        }
    }else{
        const url = new URL(location.href)
        const move_data =url.searchParams.get("text")
        if (!location.href.includes("/m")){
        }else if (location.href.includes("?")){
            if (!location.href.includes("embed")){
                if(location.href.includes("visi")){
                    location.href = "https://share-tool.vercel.app/index.html" + "?text=" + move_data + "&visi=os"
                }else{
                    location.href = "https://share-tool.vercel.app/index.html" + "?text=" + move_data
                }
            }else {
                if(location.href.includes("visi")){
                    location.href = "https://share-tool.vercel.app/embed/index.html" + "?visi=os"
                }else{
                    location.href = "https://share-tool.vercel.app/embed/index.html"
                }
            }
        }else{
            if (!location.href.includes("embed")){
                if(location.href.includes("visi")){
                    location.href = "https://share-tool.vercel.app/index.html" + "?visi=os"
                }else{
                    location.href = "https://share-tool.vercel.app/index.html"
                }
            }else{
                if(location.href.includes("visi")){
                    location.href = "https://share-tool.vercel.app/embed/index.html"
                }
            }
        }
    }
}
resizeWindow()
window.addEventListener("resize", resizeWindow)
})