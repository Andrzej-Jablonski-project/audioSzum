// Efekt header
const $doc = $(document);
const $header = $('.bgh');
const $nav = $('nav');

$doc.on("scroll", function () {
    const scrollPos = $doc.scrollTop();
    const sectionOffset = $nav.offset().top;
    const headerHeight = $header.outerHeight();

    if (scrollPos < sectionOffset) {
        $header.css({
            'opacity': 1 - scrollPos / headerHeight,
            'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
        })
    }

})

// Skrolowanie menu
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $nav.outerHeight() + 1
    })
})
$('footer a').on('click', function () {
    const goToSection = "[data-footer=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})
// Aktywny przycisk nawigacji

window.addEventListener('scroll', () => {
    const scrollValue = window.pageYOffset;
    const nav = document.body.querySelector('nav');
    const section = [...document.body.querySelectorAll('section')]
    const btns = [...document.body.querySelectorAll('.btn a')]
    if (scrollValue < section[0].offsetTop - nav.offsetHeight) {
        btns[0].classList.remove('active');
    } else if (scrollValue < section[1].offsetTop - nav.offsetHeight) {
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    }
})

// Nawigacja burger
$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");
})

//Lightbox-Popup-Plugin-Flashy

$(document).ready(function () {
    'use strict';

    $('.wmdac').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });
    $('.pcm1704').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });
});
//efekt pojawienia
$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $g1 = $('.g1');
    const $g2 = $('.g2');
    const $s1 = $('.s1');
    const $s2 = $('.s2');
    const s1FromTop = $s1.offset().top;
    const s2FromTop = $s2.offset().top;
    const s1Height = $s1.outerHeight();
    const s2Height = $s2.outerHeight();

    if (scrollValue > s1FromTop + s1Height / 1.3 - windowHeight) {
        $g1.addClass('active')
    }
    if (scrollValue > s2FromTop + s2Height / 1.3 - windowHeight) {
        $g2.addClass('active')
    }
})