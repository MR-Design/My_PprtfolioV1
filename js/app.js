// JavaScript Document

//smoth scroll to Div //

$(".sc-home").click(function(){


$("html,body").animate({

  scrollTop: $("#home").offset().top
}, 1000);

});

$(".sc-about").click(function(){


$("html,body").animate({

  scrollTop: $("#about").offset().top
}, 1000);

});

$(".sc-portfolio").click(function(){


$("html,body").animate({

  scrollTop: $("#portfolio").offset().top
}, 1000);

});

$(".sc-skills").click(function(){


$("html,body").animate({

  scrollTop: $("#skills").offset().top
}, 1000);

});


$(".sc-contact").click(function(){


$("html,body").animate({

  scrollTop: $("#contact").offset().top
}, 1000);

});


/*var $overlay = $('<div class="overlay"></div>');
$(".portfolio").append($overlay);
var $image = $("<img>");
$(".overlay").append($image);

var $para = $(".paragraph p");
$(".overlay").append($para);



// create an overly when user click on the links or images === lightbox
$("#images-gallery a").click(function(event){
event.preventDefault();
var imagelocation = $(this).attr("href");
$image.attr("src",imagelocation);
 $overlay.show();  
	});




	
$(".overlay").click(function(event){
event.preventDefault();
 $overlay.hide();  
	});*/