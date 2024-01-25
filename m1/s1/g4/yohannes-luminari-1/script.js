window.addEventListener('DOMContentLoaded', () => {

    const buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((button) => {
        button.addEventListener('click', () => userClick(button));
    });

    const inputId = document.getElementById("input-1");

    document.addEventListener("keydown", (event) => {
        var name = event.key;
        var code = event.code;
        if (code === "Enter") {
            const t = document.getElementById("input-1").value;
            document.getElementById("titleImg").innerHTML = t;
        }
      });

        inputId.addEventListener("focusout", (event) => {
            const t = document.getElementById("input-1").value;
            document.getElementById("titleImg").innerHTML = t;
        });


    const userClick = (button) => {
        switch (button.id) {
            case "btn-1":
                var commentId = document.getElementById("comment");
                commentId.style.color = "red";
                break;
            case "btn-2":
                var commentId = document.getElementById("comment");
                commentId.style.color = "violet";
                break;
            case "btn-3":
                var commentId = document.getElementById("comment");
                commentId.style.color = "blue";
                break;
            case "btn-4":
                var commentId = document.getElementById("comment");
                commentId.style.fontSize = "18px";
                break;
            case "btn-5":
                var commentId = document.getElementById("comment");
                commentId.style.fontSize = "28px";
                break;
            default:
                break;
        }
    }


});