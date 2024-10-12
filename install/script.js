var installPromptEvent

window.addEventListener("load", (e) =>{
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault()
    installPromptEvent = event
    document.getElementById("install").disabled = false
})
function install(){
    document.getElementById("install").disabled = true
    installPromptEvent.prompt()
    installPromptEvent.userChoice.then((install_result) => {
        if(install_result.outcome === "accepted"){
            console.log("インストールできた")
        }else{
            console.log("インストールできなかった")
        }
        installPromptEvent = null
    })
}
install()
})