/*  ---------------------------------------------------
    Template Name: Male Fashion
    Description: Male Fashion - ecommerce teplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(1000).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        // if ($('.product__filter').length > 0) {
        //     var containerEl = document.querySelector('.product__filter');
        //     var mixer = mixitup(containerEl);
        // }
        if(localStorage.getItem("isLoged")){
            $('#loginName').removeClass('d-block');
            $('#loginName').addClass('d-none');
            $('#username').removeClass('d-none');
            $('#username').addClass('d-block');

            $('#loginNameResponsive').removeClass('d-block');
            $('#loginNameResponsive').addClass('d-none');
            $('#usernameResponsive').removeClass('d-none');
            $('#usernameResponsive').addClass('d-block');
        }
        $('#buttonLogin').on('click', function() {
            localStorage.setItem("isLoged", true);
            $('#loginName').removeClass('d-block');
            $('#loginName').addClass('d-none');
            $('#username').removeClass('d-none');
            $('#username').addClass('d-block');

            $('#loginNameResponsive').removeClass('d-block');
            $('#loginNameResponsive').addClass('d-none');
            $('#usernameResponsive').removeClass('d-none');
            $('#usernameResponsive').addClass('d-block');
        });
        $('.product__item__pic').on('click', function() {
            location.href = './product-details.html';
        });
        $('.outside-color').on('click', function() {
            $('.outside-color').removeClass('active');
            $(this).addClass('active');
        });
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    let min = 0;
    let max = 100;
    
    const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);
    
    $('#rangeMin').on('input', function(e) {
      const newValue = parseInt(e.target.value);
      if (newValue > max) return;
      min = newValue;
      $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
      $('#min').html(new Intl.NumberFormat().format(newValue * 10000) + 'đ');
      $('#line').css({
        'left': calcLeftPosition(newValue) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
      });
    });
    
    $('#rangeMax').on('input', function(e) {
      const newValue = parseInt(e.target.value);
      if (newValue < min) return;
      max = newValue;
      $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
      $('#max').html(new Intl.NumberFormat().format(newValue * 10000) + 'đ');
      $('#line').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
      });
    });
})(jQuery);
function showToast(title) {
    $('#favourite').toast('show');
    $('#favouritePrdName').text(title);
}
function addFavoutite(data) {
    $('#favourite').toast('show');
    $('#favouritePrdName').text(data?.title);
    var oldData = [];
    if(localStorage.getItem("favourite")){
        oldData = JSON.parse(localStorage.getItem("favourite"));
    }
    var newData = [data, ...oldData];
    localStorage.setItem("favourite", JSON.stringify(newData));
}
function removeFavouriteItem(data) {
    $('#removeFavourite').toast('show');
    var oldData = [];
    if(localStorage.getItem("favourite")){
        oldData = JSON.parse(localStorage.getItem("favourite"));
    }
    oldData.splice(oldData.findIndex((item) => item.id == data?.id), 1);
    var newData = [...oldData];
    localStorage.setItem("favourite", JSON.stringify(newData));
    refreshFavourite();
}
function onAddToCard(data){
    var myModal = new bootstrap.Modal(document.getElementById("exampleModalCenter"), {});
    myModal.show();
    $('#cartPrdName').text(data?.title);
    $('#cartPrdPrice').text(data?.price);
    $('#cartPrdImg').attr("src", data?.imgUrl);
    var oldData = [];
    if(localStorage.getItem("cartData")){
        oldData = JSON.parse(localStorage.getItem("cartData"));
    }
    var newData = [data, ...oldData];
    localStorage.setItem("cartData", JSON.stringify(newData));
}
function removeCardItem(data) {
    $('#removeCart').toast('show');
    var oldData = [];
    if(localStorage.getItem("cartData")){
        oldData = JSON.parse(localStorage.getItem("cartData"));
    }
    oldData.splice(oldData.findIndex((item) => item.id == data?.id), 1);
    var newData = [...oldData];
    localStorage.setItem("cartData", JSON.stringify(newData));
    refreshCart();
}
function onShowMenuResponsive(){
    $('#menu-responsive').toggleClass('index-more');
    $('.hide-on-menu-responsive-expand').toggleClass('d-none');
    $('.remove-border').toggleClass('border-bottom');
}
function onCloseAccountInfo(){
    location.href = './summary.html';
}
function onLoginAfterRegister(){
    $("#loginAfterRegister").click();
}