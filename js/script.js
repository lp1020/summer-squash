$(document).ready(function() {
  var s = skrollr.init();
  if (s.isMobile()) {
    s.destroy();
}
})

   $(window).scroll(function(){
        $(".fade-out").css("opacity", 1 - $(window).scrollTop() / ($('.fade-out').height() - 500));
    });

var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#animation",
        duration: 600,
        triggerHook: "onEnter"

    })
        .setTween("#summer-img", 1, {
            top: 305,
            scale:.8
            })


        .addTo(controller);


$('.starlink').click(function() {
    $(this).toggleClass("star-img-fill").toggleClass("bounce");
    return false
});
