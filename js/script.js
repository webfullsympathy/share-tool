if(location.protocol === "https:"){
    if(location.href.substring(0, person.indexOf("/")) == "https://share-tool.vercel.app" || location.href.substring(0, person.indexOf("?")) == "https://share-tool.vercel.app"){
        // 共有ツールメインページの処理(https)
        void(0)
    }
}else{
    if(location.href.substring(0, person.indexOf("/")) == "http://share-tool.vercel.app" || location.href.substring(0, person.indexOf("?")) == "http://share-tool.vercel.app"){
        if(confirm("HTTP通信です。HTTPS通信にしますか？") === true){
            location.replace(location.href.replace("http","https"))
        }else{
            // 共有ツールメインページの処理(http)
            void(0)
        }
    }
}