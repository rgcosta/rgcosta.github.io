window.onload = function () {
    let textarea = document.getElementById("text");

    let timer = null;
    document.getElementById("btn").onclick = function () {
        if (timer == null) {
            timer = setInterval(function () {
                let size = parseInt(textarea.style.fontSize);
                size += 2;
                textarea.style.fontSize = size + "pt";
            },500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    };

    document.getElementById("bling").onchange = function () {
        let checkbox = document.getElementById("bling");
        if (checkbox.checked) {
            textarea.style.fontWeight = "bold";
            textarea.style.color = "green";
            textarea.style.textDecoration = "underline";
        } else {
            textarea.style.fontWeight = "";
            textarea.style.color = "";
            textarea.style.textDecoration = "";
        }
    };
};