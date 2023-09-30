(function ($) {
	"use strict";
    
    /* function calls start*/
	
	/* function calls end */

    /* navbar start */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { $('.navbar').addClass("scrolled"); }
        else { $('.navbar').removeClass("scrolled"); }
    });
    $('#mynav').on('show.bs.collapse', function () {
		$(".menu-button").toggleClass("is-active");
	});
	$('#mynav').on('hide.bs.collapse', function () {
		$(".menu-button").toggleClass("is-active");
	});
	$("#mynavbar a").on('click', function(event) {
		if(!$(this).hasClass("dropdown-toggle")){
			
			$('.navbar-collapse').collapse('hide'); 
		}
	});
    /* navbar end */

    /* desti slider start */
    if ($(".desti-slider").length) {

        const destiSlider = new Swiper('.desti-slider', {
            loop: true,
            navigation: {
                nextEl: '.slider-nav .btn-next',
                prevEl: '.slider-nav .btn-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                332: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
        
    }
    /* desti slider end */

    /* package slider start */
    if ($(".package-slider").length) {

        const packageSlider = new Swiper('.package-slider', {
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
        
    }
    /* package slider end */

    /* Scroll to top start */
    if ($('.scroll_to_top').length) {
        var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll_to_top').addClass('show');
                } else {
                    $('.scroll_to_top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.scroll_to_top').on('click', function () { 
            $("html, body").stop().animate({ scrollTop: "0" }, 800, "easeIn"); 
        });
    }
    /* scrol to top end */


    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    
    let translateX = 0;
    const step = images[0].width + 10; // Puedes ajustar el espaciado aquí
    
    function scrollLeft() {
        if (translateX < 0) {
            translateX += step;
            gallery.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    function scrollRight() {
        const galleryWidth = gallery.offsetWidth;
        const imagesWidth = step * images.length;
    
        if (galleryWidth < imagesWidth + translateX) {
            translateX -= step;
            gallery.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            scrollLeft();
        } else if (event.key === 'ArrowRight') {
            scrollRight();
        }
    });
    


    

})(jQuery);
