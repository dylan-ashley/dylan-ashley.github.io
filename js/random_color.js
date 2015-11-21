/*global $*/

var change_color = function (color) {
    "use strict";
    $(".main").css("background-color", "hsl(" + color + ", 30%, 70%)");
    $(".main").css("box-shadow", "0.5em 0.5em 0em hsl(" + color + ", 30%, 80%)");
    $(".main_hr").css("border-color", "hsl(" + color + ", 30%, 60%)");
};

var random_color = function () {
    "use strict";
    change_color(Math.floor(Math.random() * 255));
};

$(document).ready(random_color);
