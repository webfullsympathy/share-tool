if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(reg => {
        console.log("サービスワーカー行けた", reg)
    }).catch(err => {
        console.log("サービスワーカー行けなかった", err)
    })
}