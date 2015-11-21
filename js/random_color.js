var random_color = function () {
    "use strict";
    var color = Math.floor(Math.random() * 255);
    
    $(".main").css("background-color", "hsl(" + color + ", 30%, 70%)");
    $(".main").css("box-shadow", "0.5em 0.5em 0em  hsl(" + color + ", 30%, 80%)");
    $(".main_hr").css("border-color", "hsl(" + color + ", 30%, 60%)");
};

$(document).ready(random_color);