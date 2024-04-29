let bar = document.getElementById('bar')
let mobile_menu = document.getElementById('mobile-menu')
bar.onclick = function () { mobile_menu.classList.toggle("open") }
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    // speed: 400,
    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 3,
        },
    },
});