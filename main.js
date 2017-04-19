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
      
      $(".sec1").fadeToggle(1000);
        $(".sec3").fadeToggle(1000);    
        $('.hr').fadeToggle(1000);         
});
    
   
 
    
    
    
});







