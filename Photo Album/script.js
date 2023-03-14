document.querySelectorAll("img").forEach(function (img) {
    img.onclick = function () {
        var src = this.getAttribute("src");
        var id = src.split('/')[4]
        document.location.href = "editor.html#" + id;
    }
});