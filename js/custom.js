$(window).scroll(function() {
  if ($(this).scrollTop() > 10){  
    $('.full-nav').addClass('full-nav-sticky');
    $('.logo-col').addClass('logo-col-sticky');
    $('.logo').addClass('logo-sticky');
    $('.logo-container').addClass('logo-container-sticky');
    $('.nav-col').addClass('nav-col-sticky');
    $('.nav-link').addClass('nav-link-sticky')
    $('.home-link').addClass('home-link-sticky');
    $('.container').addClass('container-sticky');
  }
  else{
    $('.full-nav').removeClass('full-nav-sticky');
    $('.logo-col').removeClass('logo-col-sticky');
    $('.logo').removeClass('logo-sticky');
    $('.logo-container').removeClass('logo-container-sticky');
    $('.nav-col').removeClass('nav-col-sticky');
    $('.nav-link').removeClass('nav-link-sticky')
    $('.home-link').removeClass('home-link-sticky');
    $('.container').removeClass('container-sticky');
  }
});

