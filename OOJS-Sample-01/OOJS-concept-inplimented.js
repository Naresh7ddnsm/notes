jQuery(function($) {
    "use strict";
    jQuery(window).load(function($) {
        var os = new OnScreen({
            tolerance: 50
        });
        os.on('enter', '#Layer_1', function(element) {
            console.log('enter chart 1');
            jQuery("#bar1-1").attr("class", "cls-1-3 animated fadeInUpBig");
            jQuery("#bar2-1").attr("class", "cls-1-4 animated fadeInUpBig");
            jQuery("#piechunk1").attr("class", "cls-1-2 animated rotateInDownRight");
            jQuery("#piechunk2").attr("class", "cls-1-3 animated rotateInDownRight");
            jQuery("#piechunk3").attr("class", "cls-1-4 animated rotateInDownRight");
            jQuery("#piechunk4").attr("class", "cls-1-6 animated rotateInDownRight");
            jQuery("#bar3-1-slot1").attr("class", "cls-1-2 animated fadeInUpBig");
            jQuery("#bar3-1-slot2").attr("class", "cls-1-3 animated fadeInUpBig");
            jQuery("#bar3-1-slot3").attr("class", "cls-1-4 animated fadeInUpBig");
            jQuery("#bar4-1-slot1").attr("class", "cls-1-2 animated fadeInUpBig");
            jQuery("#bar4-1-slot2").attr("class", "cls-1-3 animated fadeInUpBig");
            jQuery("#bar4-1-slot3").attr("class", "cls-1-4 animated fadeInUpBig");
        });
        os.on('enter', '#Layer_2', function(element) {
            console.log('enter chart 2');
            jQuery("#bar-2-1").attr("class", "cls-2-8 animated fadeInUpBig");
            jQuery("#bar-2-2").attr("class", "cls-2-6 animated fadeInUpBig");
            jQuery("#bar-2-3").attr("class", "cls-2-7 animated fadeInUpBig");
            jQuery("#bar-2-4").attr("class", "cls-2-4 animated fadeInUpBig");
            jQuery("#bar-2-5").attr("class", "cls-2-5 animated fadeInUpBig");
            jQuery("#bar-2-6").attr("class", "cls-2-5 animated fadeInUpBig");
            jQuery("#bar-2-7").attr("class", "cls-2-4 animated fadeInUpBig");
            jQuery("#bar-2-8").attr("class", "cls-2-7 animated fadeInUpBig");
            jQuery("#bar-2-9").attr("class", "cls-2-6 animated fadeInUpBig");
            jQuery("#bar-2-10").attr("class", "cls-2-8 animated fadeInUpBig");
        });
        jQuery(".cls-2a-11").each(function(index) {
            jQuery(this).attr("class", "cls-2a-11 hidden");
        });
        jQuery("polygon.cls-2a-4").each(function(index) {
            jQuery(this).attr("class", "cls-2a-4 hidden");
        });
        os.on('enter', '#Layer_2a', function(element) {
            console.log('enter chart 2a');
            jQuery("#bar-2a-1").attr("class", "cls-2a-4 animated fadeInUpBig");
            jQuery("#bar-2a-2").attr("class", "cls-2a-5 animated fadeInUpBig");
            jQuery("#bar-2a-3").attr("class", "cls-2a-6 animated fadeInUpBig");
            jQuery("#bar-2a-4").attr("class", "cls-2a-4 animated fadeInUpBig");
            jQuery("#bar-2a-5").attr("class", "cls-2a-5 animated fadeInUpBig");
            jQuery("#bar-2a-6").attr("class", "cls-2a-6 animated fadeInUpBig");
            jQuery(".cls-2a-11").each(function(index) {
                rnum = Math.floor(Math.random() * 10) + 1;
                jQuery(this).attr("class", "cls-2a-11 animated fadeInUpBig timer-" + rnum);
            });
            jQuery("polygon.cls-2a-4").each(function(index) {
                rnum = Math.floor(Math.random() * 10) + 1;
                jQuery(this).attr("class", "cls-2a-4 animated fadeInUpBig timer-" + rnum);
            });
        });
    });
});