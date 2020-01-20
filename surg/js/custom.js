function testimonialCarousel() {
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
}

function clientsCarousel() {
    $('#client-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
}

function contactPopup() {
    $('.contact-btn').on('click', function() {
        $(this).hide();
        $('.contact-popup form').fadeIn();
        $('.contact-popup').css('right','0');
    })
    $('.fa-window-close').on('click', function() {
        $(this).parent('form').hide();
        $('.contact-btn').fadeIn();
        $('.contact-popup').css('right','-70px');
    });
}

function getSection() {
    $(".navbar-expand-lg .navbar-nav .nav-link.home").click(function() {
        $('html,body').animate({
            scrollTop: $(".Banner-section").offset().top - 75},
            'slow');
    });

    $(".navbar-expand-lg .navbar-nav .nav-link.contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".google-map-section").offset().top - 50},
            'slow');
    });

    $(".navbar-expand-lg .navbar-nav .nav-link.success").click(function() {
        $('html,body').animate({
            scrollTop: $(".testimonial-section").offset().top - 72},
            'slow');
    });

    $(".navbar-expand-lg .navbar-nav .nav-link.about").click(function() {
        $('html,body').animate({
            scrollTop: $(".aboutUs-section").offset().top - 70},
            'slow');
    });

    $(".navbar-expand-lg .navbar-nav .nav-link.services").click(function() {
        $('html,body').animate({
            scrollTop: $(".healthcare-services-section").offset().top - 70},
            'slow');
    });
}

function addActive() {
    var currentLink = $(".navbar-expand-lg .navbar-nav .nav-item");
    currentLink.on('click', function() {
        if(currentLink.hasClass('active')) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
}

$(document).ready(function() {
    testimonialCarousel();
    clientsCarousel();
    contactPopup();
    getSection();
    addActive();
});