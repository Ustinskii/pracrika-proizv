const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const text10sec = document.querySelector(".text10sec");
let item = 0;

let fun = setInterval(function () {
    item += 1;
    if (item === 11) {
        document.getElementById("zvuk").play();
        item -= 10;
    }
    text10sec.innerHTML = item;
}, 1000);

