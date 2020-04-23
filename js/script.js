
$(document).ready(function() {
  var s = skrollr.init();
   $(window).scroll(function(){
        $(".fade-out").css("opacity", 1 - $(window).scrollTop() / ($('.fade-out').height() - 500));
    });
})

