function doc_close() {
    document.getElementById("doc-view").style.display = "none"
}
function data_fetch() {
    fetch("https://raw.githubusercontent.com/webfullsympathy/sharetool-doc/refs/heads/main/doc-all.txt")
    .then(response => response.text())
    .then(data4 => {
        const data5 = data4.replace(/\n/g,"<br>")
        document.getElementById("doc-all").innerHTML = data5
    })
}
function doc(title){
    fetch("https://raw.githubusercontent.com/webfullsympathy/sharetool-doc/refs/heads/main/doc/" + title + ".txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("doc-view").style.display = "block";
        document.getElementById("doc-view").style.border = "1px #eee solid";
        document.getElementById("doc-view").style.borderradius = "1px #eee solid";
        document.getElementById("doc-view").style.background = "#fff";
        document.getElementById("doc-view").innerHTML = data + "<br><button onclick='doc_close()' style='background-color: #1F2937;color: #ffffff;font-size: 140%;'>閉じる</button>";
    })
}
data_fetch()