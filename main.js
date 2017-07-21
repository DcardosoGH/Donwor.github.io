$(document).ready(function() {

    $('#expertise').css('opacity', 0);
    $('.ex1').css('opacity', 0);
    $('.ex2').css('opacity', 0);
    $('.ex3').css('opacity', 0);
    $('#skills2').css('opacity', 0);
    $('#sk_1').css('opacity', 0);
    $('#sk_2').css('opacity', 0);
    $('#myskills').css('opacity', 0);
    $('#intro').css('opacity', 0);
    $('#intro2').css('opacity', 0);
    $('#arrow-down').css('opacity', 0);
    
    

    $("#arrow-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#me").offset().top
        }, 2000);
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: $("#me").offset().top
        }, 2000);
        return false;
    });

    

     $('#expertise').waypoint(function(direction) {
         if(direction === 'down'){
             $('#expertise').addClass('fadeInDown');
             $('#expertise').removeClass('fadeOutDown');
         
        }else if (direction === 'up') {

            $('#expertise').addClass('fadeOutDown');
            $('#expertise').removeClass('fadeInDown');
        }     
    }, { offset: '50%' });

    

    $('.ex1').waypoint(function() {
         $('.ex1').addClass('FadeInLeft');
    }, { offset: '70%' });

    $('.ex1').waypoint(function() {
         $('.ex1').addClass('FadeInLeft');
    }, { offset: '10%' });

  $('.ex2').waypoint(function() {
      $('.ex2').addClass('FadeInUp');
  }, { offset: '70%' });

  $('.ex3').waypoint(function() {
      $('.ex3').addClass('FadeInRight');
  }, { offset: '70%' });

    $('#skills2').waypoint(function() {
      $('#skills2').addClass('FadeInUp');
      $('#skills2').css('opacity', 100);
  }, { offset: '70%' });

   $('#sk_1').waypoint(function() {
      $('#sk_1').addClass('FadeInRight');
      $('#sk_1').css('opacity', 100);
  }, { offset: '70%' });

   $('#sk_2').waypoint(function() {
      $('#sk_2').addClass('FadeInLeft');
      $('#sk_2').css('opacity', 100);
  }, { offset: '70%' });

    $('#myskills').waypoint(function() {
      $('#myskills').addClass('FadeInLeft');
      $('#myskills').css('opacity', 100);
  }, { offset: '70%' });

   $('#intro').waypoint(function() {
      $('#intro').addClass('BounceInUp');
      $('#intro').css('opacity', 100);
  }, { offset: '70%' });

   $('#intro2').waypoint(function() {
      $('#intro2').addClass('BounceInUp');
      $('#intro2').css('opacity', 100);
  }, { offset: '70%' });

   $('#arrow-down').waypoint(function() {
      $('#arrow-down').addClass('BounceInUp');
      $('#arrow-down').css('opacity', 100);
  }, { offset: '70%' });

});







