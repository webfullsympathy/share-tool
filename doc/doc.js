window.addEventListener("load",function(){
    doc_page = new URL(location.href).searchParams.get("doc")
    if(doc_page == null){}else{
        doc(doc_page)
    }
})