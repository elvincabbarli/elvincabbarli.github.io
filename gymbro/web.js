$(function(){

    function animasyon()
    {

        var say = 1;
        setInterval(function(){

            var a = "spor" + say + ".jpg";
            $("#h-goruntu").fadeOut(3000 , function(){

                $(this).queue(function(){

                    $(this).attr("src" , a);
                    $(this).dequeue();
                })
                $(this).fadeIn(3000);
            })

            say++;  
            if(say == 6)
            {
                say = 1;
            }
        },6000)
       
    }

    animasyon();


    $("#kapama").on({
        click: function()
        {
            $("#cerez").css("display" , "none");
        }
    });

        
        

});