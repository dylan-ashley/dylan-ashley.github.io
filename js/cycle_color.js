var color = Math.floor(Math.random() * 255);

var change_color = function (color) {
    "use strict";
    $(".main").css("background-color", "hsl(" + color + ", 30%, 70%)");
    $(".main").css("box-shadow", "0.5em 0.5em 0em hsl(" + color + ", 30%, 80%)");
    $(".main_hr").css("border-color", "hsl(" + color + ", 30%, 60%)");
};

var cycle_end;

var cycle_start = function () {
    "use strict";
    color = (color + 1) % 256;
    change_color(color);
    cycle_end(color);
};

var cycle_end = function () {
    "use strict";
    setTimeout(cycle_start, 10);
};

$(document).ready(cycle_start);
