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