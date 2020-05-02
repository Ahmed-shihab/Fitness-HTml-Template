jQuery(document).ready(function(){

    //AOS Plugin
    AOS.init();

    //text-animation
    jQuery('.header-paragraph').textillate();jQuery('.header-paragraph').textillate();

    //sticky navbar
    jQuery(".top-area").sticky({
        "topSpacing":0,
    });

    jQuery(window).scroll(function(){

        var sticky = jQuery(window).scrollTop()

       if (sticky > 5) {
            jQuery(".top-area").addClass('stickyNav')
       }
       else{
        jQuery(".top-area").removeClass('stickyNav')
       }
    })

    // flexpanel offcanvas navbar
    jQuery('.flexpanel').flexpanel({
        animation: 'fade',
        maxWidth: '991',
    });

    //water ripple animation
    jQuery(".water").ripples({
        dropRadius: 10,
        perturbance: 0.03,
        resolution: 150,
    });

    // slick slider
    jQuery('#slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        dots: true,
        autoplay: true,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },               
        ]
        
    })

    jQuery('#testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        dots: true,
        autoplay: true,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },               
        ]
        
    })

    jQuery('#image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        speed: 200,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },               
        ]
        
    })
  
    //dotnav plugin
    jQuery('.section').verticalDotNav({
        scroll_speed : 1500,
    });

    //gallery image plugin
    jQuery("#container").sliphover();

    //back to top plugin
    jQuery(".gotTop").gotop({
        "background" : "#F6214B" ,
        "speed": 500,
        "mobileOnly": false,
        "fadeInSpeed": 1000,
        "fadeoutSpeed": 1000,
    })

})

var loader = jQuery(".loader");

    if (loader.length) {
      // show Preloader until the website ist loaded
      jQuery(window).on("load", function(){
        loader.addClass('fade-out');
        setTimeout(function () {
          loader.hide();
        },'20');
      });
    }