$(document).ready(function() {
    $('.form_select').niceSelect();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("header").addClass("header_fixed");
        } else {
          $("header").removeClass("header_fixed");
        }
      });


    $('[data-trigger]').on('click', function(){
        let trigger = $(this).data('trigger')
        console.log(trigger);

        $('[data-content]').hide()
        $('[data-content='+trigger+']').show();
    })

    $('.hamburger').on('click', function(){
        $('.header__menu').toggleClass('header__menu--open');
        $('.hamburger__icon').toggleClass('active');
        $('body').toggleClass('scrollHidden')
    });


    $('.video-item__more').on('click', function(){
        $(this).toggleClass('active')
        $(this).next().slideToggle()

    })

    // comment Slider /////////////
    ///////////////////////////////
    
    if (window.matchMedia('(max-width: 767px)').matches) {
        
        var $reviewsSlider = $(".comment__slider");
        
        if ($reviewsSlider.length) {
            $reviewsSlider.not('.slick-initialized').slick({
                infinite: true,
                autoplaySpeed: 5000,
                // autoplay: true,
                slidesToShow: 2,
                // adaptiveHeight: true,
                slidesToScroll: 2,
                swipeToSlide: true,
                dots: true,
                nextArrow: $(".comment__slider-next"),
                prevArrow: $(".comment__slider-prev"),
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 370,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        
        }
        
    } 
    $(window).resize(function(){
        if($(window).width() < 767){
            // var $reviewsSlider = $(".comment__slider");
            $(".comment__slider").not('.slick-initialized').slick({
                infinite: true,
                autoplaySpeed: 5000,
                // autoplay: true,
                slidesToShow: 2,
                // adaptiveHeight: true,
                slidesToScroll: 2,
                swipeToSlide: true,
                dots: true,
                nextArrow: $(".comment__slider-next"),
                prevArrow: $(".comment__slider-prev"),
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 370,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        } else {
            if ($(".comment__slider.slick-initialized").length) {
                $(".comment__slider").slick('unslick');
            }
        }

    })
        
    // end comment Slider

    // scroll to section
    if (document.querySelector(".scroll-section")) {
        $(".scroll-section").on("click", function (event) {
            $('.header__menu').removeClass('header__menu--open');
            $('.hamburger__icon').removeClass('active');
            $('body').removeClass('scrollHidden')
            event.preventDefault();
            $(".scroll-section").removeClass("active");
            $(this).addClass("active");
            var id = $(this).attr("href"),
                top = $(id).offset().top - 200;
            $("body,html").animate({ scrollTop: top }, 1000);
        });
    }

    if ($('#privacy').is(':checked')) {
        $('.form-btn-submit').prop('disabled', false)
    } else {
        $('.form-btn-submit').attr('disabled', 'disabled');
    }

  $('#privacy').on('change', function () {
      if ($(this).is(':checked')) {
        $('.form-btn-submit').prop('disabled', false)
      } else {
        $('.form-btn-submit').attr('disabled', 'disabled');
      }
  })
  
});