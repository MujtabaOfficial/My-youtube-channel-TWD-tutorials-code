
$(function() {
    $('#top-header').hide();
    $(window).scroll(function() 
    {
    var scroll = $(window).scrollTop();
   if (scroll >=  500)
    {
   $('#top-header').show().animate({
   });
    } else 
    {
      $('#top-header').hide();
   }
   });
  })
