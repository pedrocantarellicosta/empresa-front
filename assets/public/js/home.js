function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('header');
    scrollPos = window.scrollY;
  
    if (scrollPos <= 600) {
        headerText.style.transform =  "translateY(" + (-scrollPos/6) +"px" + ")";
        headerText.style.opacity = 1 - (scrollPos/1000);
    }
  }
  
  window.addEventListener('scroll', scrollBanner);


  $(".scroll").click(function(e){
    e.preventDefault();

    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
    menuHeight = $('.nav-item').innerHeight();

    $('html, body').animate({
        scrollTop:targetOffset - 59
    }, 1000);
  });


  $(document).ready(function($){
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $('#voltar').fadeIn();
      }else{
        $('#voltar').fadeOut();
      }
    });

    $("#voltar").click(function(){
      $('body, html').animate({
        scrollTop:0
      },800);
      return false;
    });

    
  });
