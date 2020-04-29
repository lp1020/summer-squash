
   $(window).scroll(function(){
        $(".fade-out").css("opacity", 1 - $(window).scrollTop() / ($('.fade-out').height() - 500));
    });

var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#animation",
        duration: 500,
        triggerHook: "onEnter"

    })
        .setTween("#summer-img", 1, {
            top: 305,
            scale:.9
            })


        .addTo(controller);

// var tween = TweenMax.fromTo('#summer-img-2', 0.75,
//     {
//       scale: 1,
//        top: -490
//     },
//     {

//       scale: .57,
//        top: 212

//     }
//   );

//     var scene2 = new ScrollMagic.Scene({
//         triggerElement: "#animation-2",
//         duration: 600,
//         triggerHook: "onEnter"

//     })
//         .setTween(tween)


//         .addTo(controller);


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#animation-2",
        duration: 800,
        triggerHook: "onEnter"

    })
        .setTween("#summer-img-2", 1, {
            top: 155,
            scale:.8

            })


        .addTo(controller);

$('.starlink').click(function() {
    $(this).toggleClass("star-img-fill").toggleClass("bounce");
    return false
});
