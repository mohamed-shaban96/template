/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#F7600e',
        cursorwidth: 10,
        cursorborserradius: 0,
        cursorborder: '1px solid #F7600e'
        
    });
    
    // Change Header Height
    
    $('.header').height($(window).height());
    
    var myHeight = $('.header'),
        mySlider = $(".intro");
    // Header height
    
    myHeight.height($(window).height());
    $(window).resize(function () {
        myHeight.height($(window).height());
        mySlider.each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".intro").height()) / 2);
        });

    });
    
    // Make The Item Center
    
    mySlider.each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".intro").height()) / 2);
    });
    
    // Scroll To Features
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
           
            scrollTop: $('.features').offset().top
            
        }, 1000);
        
    });
    
    $('.hire').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.our-team').offset().top
            
        }, 1000);
        
    });
    
    $('.works').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('.our-work').offset().top
            
        }, 1000);
        
    });
    
    // Show Hidden Items
    
    $('.show-more').click(function () {
        
        $('.our-work .hidden').fadeIn(1000);
        
    });

    // Test Testimonials  ===>  If Condition
    
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
        
    
    function checkClients() {
        
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(500, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
        }
        
    });
    
});



























