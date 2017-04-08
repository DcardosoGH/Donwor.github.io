$(document).ready(function () {

    $("#arrow-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#me").offset().top
    }, 2000);
});

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: $("#me").offset().top
    	}, 2000);
        return false;
    });
    
    
    $(".alive").click(function(){
      
      $(".sec1").toggle('bounce');
        $(".sec3").toggle('bounce');
    });
    
    
  
});







