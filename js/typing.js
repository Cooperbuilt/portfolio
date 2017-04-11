/* global $ */
$(document).ready(function() {
    if ( document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0 ) {
    //first elements

    $(".1").css('border-right','2px solid white');
    $(".1").addClass("anim-typewriter");
    //time the dropping of the answer
    setTimeout(function(){
       $(".1a").css("visibility","visible");
       $(".1").css('border-right','none');
    }, 2000);
    //second element
    setTimeout(function(){
        $(".2").css('border-right','2px solid white');
        $(".2").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".2a").css("visibility","visible");
           $(".2").css('border-right','none');
        }, 2000);
    }, 2000);
    //third element
     setTimeout(function(){
       $(".3").css('border-right','2px solid white');
       $(".3").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".3a").css("visibility","visible");
           $(".3").css('border-right','none');
        }, 2000);
    }, 4000);
    //fourth element
    setTimeout(function(){
       $(".4").css('border-right','2px solid white');
       $(".4").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".4a").css("visibility","visible");
           $(".4").css('border-right','none');
        }, 2000);
    }, 6000);
    //fifth element
    setTimeout(function(){
       $(".5").css('border-right','2px solid white');
       $(".5").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".5a").css("visibility","visible");
           $(".5").css('border-right','none');
        }, 2000);
    }, 8000);
    //sixth element
    setTimeout(function(){
       $(".6").css('border-right','2px solid white');
       $(".6").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".6a").css("visibility","visible");
           $(".6").css('border-right','none');
        }, 2000);
    }, 10000);
    //and the end! finally....
     setTimeout(function(){
       $(".7").css('border-right','2px solid white');
       $(".7").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".7a").css("visibility","visible");
           $(".7").css('border-right','none');
        }, 2000);
    }, 12000);
    //Psyche! One more
    setTimeout(function(){
       $(".8").css('border-right','2px solid white');
       $(".8").addClass("anim-typewriter");
        //time the dropping of the answer
        setTimeout(function(){
           $(".8a").css("visibility","visible");
           $(".8").css('border-right','none');
        }, 2000);
    }, 14000);

    }
    else {
        $(".question").css('width','11em');
        $(".answer").css("visibility","visible");
    }
});

$("#console").click(function () {
      $(".question").css('width','11em');
      $(".answer").css("visibility","visible");
      $(this).css('cursor','default');
      $(".question").css('border-right', '0px solid transparent');
    });
