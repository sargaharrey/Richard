
// ================================== Header text ===============================================//
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('A Web Developer')
    .pauseFor(500)
    .deleteAll()
    .typeString('A UI UX Designer')
    .pauseFor(500)
    .deleteChars(16)
    .typeString('A Graphic Designer')
    .pauseFor(500)
    .start();
// -------------------------------------------------------------------------------------------------------------




$(function() {

    "use strict";




    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: 0            // offste (in px) for fixed top navigation
    });








});


// === window When Loading === //

$(window).on("load",function (){



    // Preloader
    $("#loading").fadeOut(1000);



    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


    $('#progress').LineProgressbar({

      percentage: 90,
      ShowProgressCount: true,
        fillBackgroundColor: '#007CED',

    });

    $('#progress2').LineProgressbar({

        percentage: 80,
        ShowProgressCount: true,
        fillBackgroundColor: '#007CED',

    });
     $('#progress3').LineProgressbar({

        percentage: 95,
        ShowProgressCount: true,
        fillBackgroundColor: '#007CED',

    });
    $('#progress4').LineProgressbar({

        percentage: 70,
        ShowProgressCount: true,
        fillBackgroundColor: '#007CED',

    });
     $('#progress5').LineProgressbar({

        percentage: 100,
        ShowProgressCount: true,
        fillBackgroundColor: '#007CED',

    });


    $('#skill-circule1').circleProgress({

        value: 0.35,
        size: 100.0,

        fill: {

            gradient: ['#007CED', '#007CED']// or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'

        },

     } );
    $('#skill-circule2').circleProgress({

        value: 0.60,
        size: 100.0,

        fill: {

            gradient: ['#007CED', '#007CED']// or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'

        },

    });
    $('#skill-circule3').circleProgress({

        value: 0.50,
        size: 100.0,

        fill: {

            gradient: ['#007CED', '#007CED']// or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'

        },

    });
    $('#skill-circule4').circleProgress({

        value: 1,
        size: 100.0,

        fill: {

            gradient: ['#007CED', '#007CED']// or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'

        },

    });



});



$(document).ready(function() {

    // menu click event
    $('.menuBtn').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
            $('.navbar').css('padding' , '0px');
            $('.navbar .brand').css({'position': 'fixed','top': '20px','zIndex':'200'})
        }
        else {

            $('.mainMenu').removeClass('act');

            $('.navbar').css('padding', '');
            $('.navbar .brand').css({ 'position': '', 'top': '', 'zIndex': '' })
        }
      $('.mainMenu .navbar-nav .nav-link').click(function(){
          $('.navbar-toggler').click();



      })
    });


    // === owl-carousel === //


    // Testimonials owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30,
        autoplay: true,
        dots: true,
        autoplayTimeout: 300,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });



    // contact form validator
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
    // --------------------------------------------------options


    $('.options-button').on('click',function(){
        $('.options').toggleClass('state')
        $(this).toggleClass('BtnState')


    })



  });
