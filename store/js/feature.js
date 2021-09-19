 /*--For-Product-SLider----------------*/
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        // autoWidth:true,
        //loop:true,
        //keyPress:true,
        //autoWidth:true
        // onSliderLoad: function() {
        //     $('#autoWidth').removeClass('cS-hidden');
        // } 
    });  
    $('#adaptive').lightSlider({
        //gallery:true,
                item:1,
                //thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#adaptive').removeClass('cS-hidden');
                }  
    });  
  });