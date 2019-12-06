jQuery(document).ready(function($){
  // first image
  $('.test-1').on({
       'click': function(){
         $('#change-image').attr("src", "imgs/1.jpg");
       }
   });
   
  //  second image
  $('.test-2').on({
       'click': function(){
           $('#change-image').attr("src", "imgs/2.jpg")
           $(".testimonial").removeClass("active");
           $("#"+$(this).attr("alt")).addClass("active");
       }
   });
   
  //  third image
  $('.test-3').on({
       'click': function(){
           $('#change-image').attr("src", "imgs/3.jpg");
           $(".testimonial").removeClass("active");
           $("#"+$(this).attr("alt")).addClass("active");
       }
   });
   
  //  fourth image
  $('.test-4').on({
       'click': function(){
        $('#change-image').attr("src", "imgs/4.jpg");      
        $(".testimonial").removeClass("active");
        $("#"+$(this).attr("alt")).addClass("active");
       }
   });

     //  5th image
  $('.test-5').on({
    'click': function(){
     $('#change-image').attr("src", "imgs/5.jpg");      
     $(".testimonial").removeClass("active");
     $("#"+$(this).attr("alt")).addClass("active");
    }
});

  //  6th image
  $('.test-6').on({
    'click': function(){
     $('#change-image').attr("src", "imgs/6.jpg");      
     $(".testimonial").removeClass("active");
     $("#"+$(this).attr("alt")).addClass("active");
    }
});

  //  7th image
  $('.test-7').on({
    'click': function(){
     $('#change-image').attr("src", "imgs/7.jpg");      
     $(".testimonial").removeClass("active");
     $("#"+$(this).attr("alt")).addClass("active");
    }
});

  //  8th image
  $('.test-8').on({
    'click': function(){
     $('#change-image').attr("src", "imgs/8.jpg");      
     $(".testimonial").removeClass("active");
     $("#"+$(this).attr("alt")).addClass("active");
    }
});
  
  
  });
  