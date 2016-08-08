$(document).ready(function() {
    'use strict';

    // lightgallery settings
    $("#lightgallery").lightGallery({
        download: false,
        hash: false,
        thumbnail: false
    });

    function hideTopBtn(){
        return $(".top-btn").css("display", "none");
    }

    function showTopBtn(){
        $(".top-btn").css("display", "block");
    }

    if ($(document).scrollTop() > 5) {
        showTopBtn();
    } else {
        hideTopBtn();
    }

    $(window).scroll(function() {
        if ($(document).scrollTop() > 5) {
            showTopBtn();
        } else {
            hideTopBtn();
        }
    });

    // Smooth scroll to div script
    $('a[href*="#"]:not([href="#"]):not([href="#my-carousel"]):not([href*="#collapse"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
    $('a[href="#"]').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
});
