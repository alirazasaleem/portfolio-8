$(document).ready(function() {

  var black_navbar_height = $('#black-navbar').outerHeight();
  $(window).scroll(function(event) {
    if ($(window).scrollTop()>black_navbar_height) {
      $('#main-navbar').addClass('navbar-fixed-top');
    }else {
      $('#main-navbar').removeClass('navbar-fixed-top');
    }
  });

  $('.gallery-img').click(function(event) {
      console.log($(this).attr('src'));
      $('#preview-img').children('img').attr('src', $(this).attr('src'));
      $('#preview-img').slideDown('slow');
  });

  $('#navbar').children('ul').addClass('navbar-right');

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
