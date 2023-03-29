var tag_header = document.querySelectorAll(".nav-link");
for (let i = 0; i < tag_header.length; i++) {
    var chekd = tag_header[i];
    chekd.addEventListener("click", function () {
        for (let i = 0; i < tag_header.length; i++) {
            tag_header[i].classList.remove("active1");
        }
        this.classList.add("active1");
    });
}

var div_our = document.querySelectorAll(".div_our");
for (let i = 0; i < div_our.length; i++) {
    var chekd = div_our[i];
    chekd.addEventListener("click", function () {
        for (let i = 0; i < div_our.length; i++) {
            div_our[i].classList.remove("active2");
        }
        this.classList.add("active2");
    });
}