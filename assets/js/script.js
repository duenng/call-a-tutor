(function ($) {

    "use strict";

    $(document).ready(function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu

        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="flaticon-down-arrow"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }

        
        
        // Project Isotope Filtering
        $(".project-filter li").on('click', function () {
            $(".project-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".project-wrap").isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                },
                filter: selector,
            });

        });
        
        
        
        // Project Courses Filtering
        $(".courses-filter li").on('click', function () {
            $(".courses-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".courses-wrap").isotope({
                itemSelector: '.iteem',
                filter: selector,
            });

        });
        
        
        // Project magnific popup
        if ($.fn.magnificPopup) {
            $('.project-overlay a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        

        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }


        /* Fact Counter + Text Count */
        if ($('.success-box').length) {
            $('.success-box').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        /* 3D Flipping Slider */
        $(".feedback-carousel").flipping_gallery({
            enableScroll: true,
            selector:"> div",
            autoplay: false,
            spacing: 20,
            showMaximum: 3,
            flipDirection: "bottom",
        });

        $(".next").click(function() {
            $(".feedback-carousel").flipForward();
            return false;
        });
        $(".prev").click(function() {
            $(".feedback-carousel").flipBackward();
            return false;
        });
        
        
           
        // Feedback Carousel Height
        function feedbackHeight() {
            var itemHeight = $('.feedback-single-item:first-child').outerHeight();
            $('.feedback-carousel').css('height', itemHeight);
        }
        feedbackHeight();


        
        // Teacher Load More Ajax
        if($('.teacher-load').length){
            $('.teacher-load').simpleLoadMore({
              item: '.teacher-item',
              count: 8,
              itemsToLoad: 4,
              btnHTML: '<div class="w-100"><a href="#" class="theme-btn mt-10 mb-40">LOAD MORE</a></div>'
            });
        }
        
        
        // Courses Two Load More Ajax
        if($('.courses-load').length){
            $('.courses-load').simpleLoadMore({
              item: '.course-item-two',
              count: 6,
              itemsToLoad: 3,
              btnHTML: '<div class="w-100 text-center"><a href="#" class="theme-btn mt-20 mb-30">See All Courses</a></div>'
            });
        }
        
        
        // Courses Three Load More Ajax
        if($('.courses-three-load').length){
            $('.courses-three-load').simpleLoadMore({
              item: '.course-three-item',
              count: 6,
              itemsToLoad: 3,
              btnHTML: '<div class="w-100 text-center"><a href="#" class="theme-btn thin mt-20 mb-30">See All Courses</a></div>'
            });
        }
        
        
        /* Teacher skill Circle Counter */
		if ($.fn.circleProgress) {
			var progress1 = $('.one.progress-content')
			if($.fn.circleProgress) {
			  progress1.appear(function () {
				progress1.circleProgress({
					value: 0.75,
					size: 160,
                    thickness: 15,
					fill: "#FD7114",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(80 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress2 = $('.two.progress-content')
			if($.fn.circleProgress) {
			  progress2.appear(function () {
				progress2.circleProgress({
					value: 0.85,
					size: 160,
                    thickness: 15,
					fill: "#6059BB",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(90 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress3 = $('.three.progress-content')
			if($.fn.circleProgress) {
			  progress3.appear(function () {
				progress3.circleProgress({
					value: 0.8,
					size: 160,
                    thickness: 15,
					fill: "#15C1E5",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(85 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress4 = $('.four.progress-content')
			if($.fn.circleProgress) {
			  progress4.appear(function () {
				progress4.circleProgress({
					value: 0.9,
					size: 160,
                    thickness: 15,
					fill: "#9BBA1F",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(95 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        
        
        /* initialize the contact page map on the "map" div with a given center and zoom*/
        if($('#map').length !== 0){
            var map = L.map('map', {
                center: [40.929483, -74.376729],
                zoom: 8,
                zoomControl: false,
                scrollWheelZoom: true,
            });

            L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png', {}).addTo(map);

        }
        
        
        /*Single item Slider */
        if ($('.slider-section').length) {
            $('.slider-section').slick({
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        
        
        /*Single item Slider home three */
        if ($('.slider-three-slides').length) {
            $('.slider-three-slides').slick({
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        
        
        
        /*Single item Slider home four */
        if ($('.feedback-four-wrap').length) {
            $('.feedback-four-wrap').slick({
                infinite: true,
                arrows: true,
                fade: true,
                cssEase: 'linear',
                prevArrow: '<button class="feedback-prev"><i class="flaticon-left-arrow"></i></button>',
                nextArrow: '<button class="feedback-next"><i class="flaticon-right-arrow"></i></button>',
                dots: true,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        
        
        /*Two item Slider */
        if ($('.feedback-two-inner').length) {
            $('.feedback-two-inner').slick({
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        
        

        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // main-header background color chnage whene click on navbar-toggle
        $(".navbar-toggle").on('click', function () {
            $('.main-header').toggleClass('bg-black');
        });



        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();


        // main-header background color remove whene window resize
        if ($(window).innerWidth() >= mobileWidth) {
            $('.main-header').removeClass('bg-black');
        }

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

        
        // Feedback Carousel Height
        function feedbackHeight() {
            var itemHeight = $('.feedback-single-item:first-child').outerHeight();
            $('.feedback-carousel').css('height', itemHeight);
        }
        feedbackHeight();
        
        
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
        
        // Isotope active on project
        if ($('.project-wrap').length) {
            $('.project-wrap').isotope({
                // options
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
        }
        
        // Isotope active on courses
        if ($('.courses-wrap').length) {
            $('.courses-wrap').isotope({
                // options
                itemSelector: '.iteem',
            });
        }
        
        
        // Feedback Carousel Height
        function feedbackHeight() {
            var itemHeight = $('.feedback-single-item:first-child').outerHeight();
            $('.feedback-carousel').css('height', itemHeight);
        }
        feedbackHeight();
        
        
    });



})(window.jQuery);
