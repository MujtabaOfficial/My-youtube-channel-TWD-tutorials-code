  // active menu js 
      $(document).ready(function () {
                    $("#navbar a").click(function () {
                    $("#navbar a").removeClass("act");
                    $(this).addClass("act");
                    });
                });
  // end of active menu js



// smooth scrooling //   
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    //this.hash reads the href attribute of this, and gets the part of the URL beginning with #

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      //event.preventDefault() method stops the default action of an element from happening.

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // 
  });
});
 // end of smooth scrolling //