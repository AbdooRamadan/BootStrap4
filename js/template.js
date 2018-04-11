/*jslint plusplus: true,evil:true*/
/*global console, alert, prompt, $, jquery*/

$(window).ready(function () {
    'use strict';
    
    // Adjust Slider Height
    
    var windH = $(window).height(),
        upperH = $(".upper-nav").innerHeight(),
        mainNavH = $(".navbar").innerHeight();
    
    $(".slider, .carousel-item").height(windH - (upperH + mainNavH));
    
    // Featured Worke Shuffle
    
    $(".feature-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        if ($(this).data('value') === 'all') {
           
            $('.shuffel-img .col-md').css('opacity', 1);
            
            } else {
                $('.shuffel-img .col-md').css('opacity', '0.2');
                $($(this).data('value')).parent().css('opacity', 1);
            }
    });
});
