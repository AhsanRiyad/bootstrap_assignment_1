//Jquery starts here


$(document).ready(function () {


        /*date picke jquery starts */
       $("#pickdate").datepicker({changeMonth: true , showWeek: true, weekHeader: "Week", showOtherMonths: true,
       
    
    minDate: new Date (2017 , 7 , 25) , maxDate: 0 + 90  ,showButtonPanel: true , closeText: "close" , currentText: "CurrentMonth" , dateFormat: 'dd-mm-yy'
    
    
    });
    
    /*
    
    $('#pickdate').click(function() {
    $('button.ui-datepicker-current').removeClass('ui-priority-secondary').addClass('ui-priority-primary');
});
    
    $('button.ui-datepicker-current').live('click', function() {
    $.datepicker._curInst.input.datepicker('setDate', new Date()).datepicker('hide').blur();
});
    */
 
    /*date picke jquery ends */
    
    
    /* invisible button jquery starts */
    
  //Check to see if the window is top if not then display button
  
  
  /* goto top button / invistible button starts */
$(window).scroll(function() {
    if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height()) {
        $('.scrollToTop').fadeOut();
    } else {
        $('.scrollToTop').fadeIn();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

    /*invisible button jquery ends */
    
    
    






    /*$(window).resize(function(){
     
     if($(window).width()<500){
     $('.ll').hide();
     
     }
     
     else {
     $('.ll').show(); 
     
     
     }
     
     
     }); 
     */



    /*
     $(window).on('resize' , function()
     { 
     var win = $(this);
     if (win.width()>600) {
     
     $('#col').hide();
     }
     
     else {
     $('#col').show(); 
     
     
     }
     
     });
     



    $(window).on('resize', function ()
    {


        var win = $(this);
        if (win.width() > 600) {


            $('#button').removeClass('collapse');
            $('#col').remove();


            
        }

        /* else {
         $('#button').removeClass('.collapse');
         $('#col').remove();
         
         
         }


        else {
            $('.kk').before($('#col'));
            $('.ll').addClass('collapse');
        }

    });*/









});





/* click to scroll code starts */

var scrollY = 0;
var distance = 50;
var speed = 20;
function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop+47;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')', speed);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

/* click to scroll code ends */