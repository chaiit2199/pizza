var swiper = new Swiper(".sl-topbar", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 70,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 70,
        },
    },
    // autoplay: {
    //     delay: 100,
    // },
    speed: 3000,
});

var swiper = new Swiper(".tf-menu-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-nav.btn-next",
        prevEl: ".btn-nav.btn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        },
        1500: {
            slidesPerView: 4
        },
    },
});

var swiper = new Swiper(".tf-testimonial-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-testimonial.btn-next",
        prevEl: ".btn-testimonial.btn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 2
        },
    },
});

var swiper = new Swiper(".tf-blog-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-blog.btn-next",
        prevEl: ".btn-blog.btn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        },
    },
});

var swiper = new Swiper(".tf-partner-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-blog.btn-next",
        prevEl: ".btn-blog.btn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5
        },
        1280: {
            slidesPerView: 6
        },
    },
});


var slider = new Swiper ('.tf-testimonial-slider-gallery', {
    slidesPerView: 1,
    // centeredSlides: true,
    loop: true,
    loopedSlides: 5, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var thumbs = new Swiper ('.testimonial-thumbs', {
    slidesPerView: 5,
    spaceBetween: 20,
    // centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;
