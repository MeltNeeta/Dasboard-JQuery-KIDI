// Button HTML - CSS - JS Code
//button
const btnHtml = document.querySelector(".menu-code .html");
const btnCss = document.querySelector(".menu-code .css");
const btnJs = document.querySelector(".menu-code .js");
//card
const codeHtml = document.querySelector("#html-code");
const codeCss = document.querySelector("#css-code");
const codeJs = document.querySelector("#js-code");
//display awal
codeHtml.style.display = "block";
codeCss.style.display = "none";
codeJs.style.display = "none";
//function
btnHtml.addEventListener("click", function(){
    codeHtml.style.display = "block";
    codeCss.style.display = "none";
    codeJs.style.display = "none";
});
btnCss.addEventListener("click", function(){
    codeHtml.style.display = "none";
    codeCss.style.display = "block";
    codeJs.style.display = "none";
});
btnJs.addEventListener("click", function(){
    codeHtml.style.display = "none";
    codeCss.style.display = "none";
    codeJs.style.display = "block";
});


// Light & Dark Mode
$(document).ready(function(){
    console.log("JQuery Siap digunakan");

    // mengubah teks warna dengan JQuery
    $("#btnUbahTeksQ").click(function(){
        $("#judulQ").text("Judulnya udah diubah :3");
        $("#deskripsiQ").text("Deskripsinya juga berubah~");
        $("#judulQ").css("background-color", "#080f11");
        $("#judulQ").css("color", "#afacd0");
        $("#judulQ").css("border-radius", "20px");
        $("#deskripsiQ").css("color", "#d8ecf2");
    });
});

$(document).ready(function(){
    //Animasi Meluncur
    $("#btnToggleBoxQ").click(function(){
        $("#boxQ").slideToggle(500);
    });
});

$(document).ready(function(){
    // Ubah darkmode lightmode
    $("#btnDarkModeQ").click(function(){
        $(".container").toggleClass("dark-mode");
        $(".container button").toggleClass("dark-mode-b");
    });
});