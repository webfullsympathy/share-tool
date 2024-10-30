window.addEventListener("load",function(){
    let data = new URL(location.href).searchParams.get("s")
    if(data == null){}else{

    }
})

function set_move(set_data){
    if(set_data == "share_service"){
        // fetch("https://share-tool.vercel.app/settings/set_html/" + set_data + ".html")
        fetch("set_html/" + set_data + ".html")
        .then(response => response.text())
        .then(fetch_data => {
            document.getElementById("setting_view").innerHTML = fetch_data
        })
    }
}