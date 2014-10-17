var main = function() {
    var refreshid = setInterval(function(){
	$('#div1').css(
	    "left","500px"
	);
	$('#div2').animate({
	    left:'-500px'
	},"slow");
	$('#div3').animate({
	    left:'0px'
	},"slow");
	var left = document.getElementById("div1");
	var mid = document.getElementById("div2");
	var right = document.getElementById("div3");
	left.id = "div3";
	mid.id = "div1";
	right.id = "div2";	
    },7000);
    
    $(".menu-open").click(function () {
	if($(this).find(".fa").hasClass("fa-bars")){
	    $(this).find(".fa").removeClass('fa-bars').addClass('fa-remove');
	    
	    $("#menu-bar").animate({
		left:'0px'});
	    $(".rightContent").animate({
		marginLeft:"150px"
	    })
	}else if($(this).find(".fa").hasClass("fa-remove")){
	    $(this).find(".fa").removeClass('fa-remove').addClass('fa-bars');
	    $("#menu-bar").animate({
		left:'-150px'
	    });
	    $(".rightContent").animate({
		marginLeft:"0px"
	    });
	}
    });	
    
    $("#arrow-next").click(function() {
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
	
	var currentSlide = $('.active-slide');
	var nextSlide = currentSlide.next();
	if(nextSlide.length == 0){
            nextSlide = $('.slide').first();
	}
	if(nextDot.length == 0){
            nextDot = $('.dot').first();
	}
	currentSlide.fadeOut(600).removeClass('active-slide');
	nextSlide.fadeIn(600).addClass('active-slide');
	currentDot.removeClass('active-dot');
	nextDot.addClass('active-dot');
    });
    
    $("#arrow-prev").click(function(){
	var currentSlide = $('.active-slide');
	var preSlide = currentSlide.prev();
	var currentDot = $('.active-dot');
	var preDot = currentDot.prev();
	if(preDot.length == 0){
            preDot = $('.dot').last();
	}
	if(preSlide.length == 0){
            preSlide = $('.slide').last();
	}
	currentSlide.fadeOut(600).removeClass('active-slide');
	preSlide.fadeIn(600).addClass('active-slide');
	currentDot.removeClass('active-dot');
	preDot.addClass('active-dot');
    });
}

$(document).ready(main);
