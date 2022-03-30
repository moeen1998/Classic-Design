/*global $, alert,console */
$(function(){
    
    /*start nav bar  */
    
    /* to move active class from links */
    
    $('.links ul li a').click(function(){
    
        $(this).parent().addClass('active').siblings().removeClass('active');
    
    })
    
    /*End nav bar  */

    /*start header bar  */
    /*علشان اخلي هيدر ياخد حجم الصفحه اللي مفتوحه */
    $('.header').height($(window).height());
  
    /*علشان اخلي السليدر ف نص الصفحه */
    $('.header .content .slider').css('top',($(window).height()-100)/2);
    $('.header .content .prev').css('top',($(window).height()-80)/2);
    $('.header .content .next').css('top',($(window).height()-80)/2);
    
    /*لما حجم الصفحه يتغير الهيدر و الاسليدر يتغير حجمهم ومكانهم */
    $(window).resize(function () {
     
        $('.header').height($(window).height());

        $('.header .content .slider').css('top',($(window).height()-100)/2);
        $('.header .content .prev').css('top',($(window).height()-80)/2);
        $('.header .content .next').css('top',($(window).height()-80)/2);
    });
    
    $('.next').click(function(){
        
        if($('.show').next().length){
            var current=$('.show')
            var next=$('.show').next()
            current.removeClass('show')
            next.addClass('show')
            
        }
    });

    $('.prev').click(function(){
        if($('.show').prev().length){
            var current=$('.show')
            var prev=$('.show').prev()
            current.removeClass('show')
            prev.addClass('show')
            
        }
    });
    

    /*End header bar  */

    $('.links li a').click(function(){
        $('html , body').animate({
            scrollTop:$('#'+$(this).data('value')).offset().top
        },1000)
    });


    (function autoslider(){
        $('.test-overlay .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(2000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();
                })
            }
            else{
                $(this).delay(3000).fadeOut(2000,function(){
                    $(this).removeClass('active');
                    $('.test-overlay .text').eq(0).addClass('active').fadeIn();
                    autoslider();
                })
        
            }
        })

    }());
/*علشان انقل الكلاس اكتف علي المكان اللي هدوس عليه  */
    $('.projects .container .list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    /*علشان اشغل الفلتر بتاعي */
    var mixer = mixitup('.con');

})