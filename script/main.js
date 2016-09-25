var logo = $(".logo_main");
var tune = $(".tune_mini_circle_2");
var volume = $(".tune_mini_circle");
var fm_slider = $(".tune_circle");
var angle = tune.css("transform", "rotate");
var fm_pole = $(".fm_slider_bar");
var fm_pole_loc = fm_pole.css("left");




$(function() {
    logo.bind("click", function() {
        $(this).addClass("logo_hide");
    });
});

// interaction functions

$(function functionName() {



    // ON/OFF CONTROLS

    Draggable.create(tune, {
        type: "rotation",
        throwProps: true,
        bounds: {
            minRotation: -25,
            maxRotation: 25
        },
        liveSnap: function(endValue) {
            if (endValue == -25) {
                $(".green_light").addClass("power_glow"),
                    $(".radio_list").trigger('pause');
            } else {
                $(".green_light").removeClass("power_glow"),
                    $(".radio_list").trigger('play');
            }
            return Math.round(endValue / 25) * 25;
        }
    });


    // VOLUME CONTROLS

    var volumeMin;

    Draggable.create(volume, {
        type: "rotation",
        throwProps: true,
        bounds: {
            minRotation: -120,
            maxRotation: 120
        },
        liveSnap: function(endValue) {
            var middle = 0.50;
            if (endValue == 0) {
                $(".radio_list").prop("volume", middle);
            } else {
                $(".radio_list").prop("volume", ((endValue / 240) + middle));
            }
            return Math.round(endValue / 20) * 20;
        }
    });

    // FM CONTROLS
    var radio = $(".radio_list");
    var filename;

    Draggable.create(fm_slider, {
        type: "rotation",
        throwProps: true,
        bounds: {
            minRotation: -100,
            maxRotation: 100,
        },
        liveSnap: function(endValue) {
            console.log(endValue)


            if (endValue == 0) {
                // filename = "mus/mus4.mp3";
                // radio.attr("src",filename).trigger("play");
            }

            // Plus songs
            else if (endValue == 20) {
                filename = "mus/mus5.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == 40) {
                filename = "mus/mus6.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == 60) {
                filename = "mus/mus7.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == 80) {
                filename = "mus/mus8.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == 100) {
                filename = "mus/mus9.mp3";
                radio.attr("src", filename).trigger("play");
            }

            // Minus songs
            else if (endValue == -20) {
                filename = "mus/mus4.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == -40) {
                filename = "mus/mus3.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == -60) {
                filename = "mus/mus2.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == -80) {
                filename = "mus/mus1.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (endValue == -100) {
                filename = "mus/mus0.mp3";
                radio.attr("src", filename).trigger("play");
            } else if (!(endValue == 20) || !(endValue == 40) || !(endValue == 80) || !(endValue == 100) || !(endValue == -20) || !(endValue == -40) || !(endValue == -60) || !(endValue == -80) || !(endValue == -100)) {
                filename = "mus/noise2.wav";
                radio.attr("src", filename).trigger("play");
            }


            fm_pole.css("left", endValue + 150)
            return Math.round(endValue / 20) * 20;
        }
    });


});
