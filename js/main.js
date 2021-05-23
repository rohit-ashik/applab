/********************************************
           Progress bar plugin section-desigon
********************************************/
$(document).ready(function () {
    $(".slider-section .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        margin:30,
        responsive:{
                        0:{
                            items:1
                            
                        },
                        500:{
                            items:2
                        },
                        
                        800:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
    });

    
});

$(document).ready(function () {
    $(".feedback-right .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        margin:30
    });

    
});
// $(document).ready(function () {
//         $(".reveiw-section .owl-carousel").owlCarousel({
//             items:3,
//             loop:true,
//             nav:true,
//             dots:true,
//             autoplay:true,
//             autoplaySpeed:1000,
//             smartSpeed:1500,
//             autoplayHoverPause:true
//         });

//     });

// (function($) {
//     'use strict';

    // $('.html').rProgressbar({
    //     percentage: 80,
    //     fillBackgroundColor: '#1abc9c'
    // });
    // $('.css').rProgressbar({
    //     percentage: 65,
    //     height:'4px',
    //     backgroundColor:'#F5FBFF',
    //     fillBackgroundColor: '#596672'
    // });



    // $('.php').rProgressbar({
    //     percentage: 80,
    //     height:'4px',
    //     backgroundColor:'#F5FBFF',
    //     fillBackgroundColor: '#596672'
    // });

    // $('.html').rProgressbar({
        
    //       percentage: 60,
        
    //       fillBackgroundColor:'#596672',
        
    //       backgroundColor:'#F5FBFF',
        
    //       borderRadius:'0px',
        
    //       height:'4px',
        
    //       width:'100%'
        
    //     });

    // $('.javascript').rProgressbar({
    //     percentage: 65,
    //     fillBackgroundColor: '#34495e'
    // });



    // $('.jquery').rProgressbar({
    //     percentage: 95,
    //     fillBackgroundColor: '#f1c40f',
    //     backgroundColor: '#e67e22'
    // });
    
    // $(document).ready(function () {
    //     $(".reveiw-section .owl-carousel").owlCarousel({
    //         items:1,
    //         loop:true,
    //         nav:true,
    //         dots:true,
    //         autoplay:true,
    //         autoplaySpeed:1000,
    //         smartSpeed:1500,
    //         autoplayHoverPause:true
    //     });

    // });
    // $(document).ready(function () {
    //     $(".instagram-section .owl-carousel").owlCarousel({
    //         items:1,
    //         loop:true,
    //         nav:true,
    //         dots:true,
    //         autoplay:true,
    //         autoplaySpeed:1000,
    //         smartSpeed:1500,
    //         autoplayHoverPause:true,
    //         margin:30,
    //         responsive:{
    //             0:{
    //                 items:1
    //             },
    //             600:{
    //                 items:1
    //             },
    //             1000:{
    //                 items:3
    //             }
    //         }
    //     });

    // });
    // $('document').ready(function(){
    //     $(function () {
    //         $.scrollUp({
    //             scrollName: 'scrollUp',      // Element ID
    //             scrollDistance: 600,         // Distance from top/bottom before showing element (px)
    //             scrollFrom: 'top',           // 'top' or 'bottom'
    //             scrollSpeed: 1000,            // Speed back to top (ms)
    //             easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
    //             animation: 'fade',           // Fade, slide, none
    //             animationSpeed: 200,         // Animation speed (ms)
    //             scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
    //             scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
    //             scrollText: 'Scroll to top', // Text for element, can contain HTML
    //             scrollTitle: false,          // Set a custom <a> title if required.
    //             scrollImg: true,            // Set true to use image
    //             activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    //             zIndex: 2147483647           // Z-Index for the overlay
    //         });
    //     });  
    // });


// })(jQuery);


/********************************************
           navbar sticky js  here
********************************************/

window.addEventListener('scroll' , function (){
    var mst = document.querySelector('header');
    mst.classList.toggle('sticky', window.scrollY > 0);
});



// var num = 200; //number of pixels before modifying styles
// var mst = document.querySelector('header');
// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('mst').addClass('sticky');
//     } else {
//         $('mst').removeClass('sticky');
//     }
// });



function btnStyleTwo(){
    var myBtn = document.querySelector("#first-btn");
    myBtn.style.color = "#616368";
    myBtn.style.backgroundColor = "transparent";
    myBtn.style.transition = ".9s ease";
    var serviceDesign = document.querySelector("#plan2");
    serviceDesign.style.boxShadow = "0 0 8px 5px rgb(207, 207, 207)";
    serviceDesign.style.transition = ".9s ease";
    serviceDesign.style.transform = "scale(1.1)";
    var serviceDesignTwo = document.querySelector("#plan1");
    serviceDesignTwo.style.boxShadow = "10px 8px 15px lightgray";
    serviceDesignTwo.style.transform = "none";
    
    
}

function btnStyleOne(){
    var myBtn = document.querySelector("#first-btn");
    myBtn.style.color = "#fff";
    myBtn.style.backgroundColor = "#2500f9"
    myBtn.style.transition = ".9s ease"
    var myBtnTwo = document.querySelector("#second-btn");
    myBtnTwo.style.transition = ".9s ease"
    var serviceDesign = document.querySelector("#plan1");
    serviceDesign.style.boxShadow = "0 0 8px 5px rgb(207, 207, 207)";
    serviceDesign.style.transition = ".9s ease";
    serviceDesign.style.transform = "scale(1.1)";
    var serviceDesignTwo = document.querySelector("#plan2");
    serviceDesignTwo.style.boxShadow = "10px 8px 15px lightgray";
    serviceDesignTwo.style.transform = "none";
}


function newStyle(){
    var currentBtn = document.querySelector(".accordion-button::after");
    currentBtn.style.backgroundImage = "url('https://img.icons8.com/android/24/000000/minus.png')" ;
}







  
        







    




    