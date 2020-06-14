$(function(){
    function ibg() {

        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    
    ibg();
    // Timer Header
    $(".header-item__number").each(function(){
        $(this).prop("header-item" ,0).animate({
            Counter:$(this).text()
        },{
          duration:2000,
          easing:"swing",
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        });
      });
    // Fixed menu
    let menu = $("#menu_fixed"),
        studioH = $("#studio").innerHeight();
        scrolloffsize = $(window).scrollTop();

        checkScroll(scrolloffsize,studioH);

        $(window).on("scroll resize", function(){
            navH = $("#menu_fixed").innerHeight();
            scrolloffsize = $(this).scrollTop();

            checkScroll(scrolloffsize,studioH);
        });

        function checkScroll(scrolloffsize,studioH){
            if(scrolloffsize > studioH){
                menu.addClass("fixed");
            }

            else{
                menu.removeClass("fixed");
            }
        };  
        // Burger
        $("#burger").on("click",function(event){
            event.preventDefault();
            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });
        // Scroll
        $("[data-scroll]").on("click" , function(event){
            event.preventDefault();
    
            let scrollId = $(this).data("scroll");
            let elementOffset = $(scrollId).offset().top;
    
            $("#burger").removeClass("active");
            $("#nav").removeClass("active");
    
            $("html,body").animate({
                scrollTop: elementOffset - 70
            },700);
    
        });
});