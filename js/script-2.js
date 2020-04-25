var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#animation",
        duration: 800// controlled by scroll pixels of vertical scroll

    })
        .setTween("#summer-img", 1, {
            top: 415,
            scale:.8
            }) // trigger a TweenMax.to tween


        .addTo(controller);
