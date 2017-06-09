$(function(){

	$('.nav-top__social-link').click(function(){
		$('.hider').css({
			display: 'block'
		});
		$('.fixed-form').css({
			display: 'block'
		});
		$('.fixed-form').animate({
			top: '0px',
			left: '0px',
			right: '0px',
			bottom: '0px',
			margin: 'auto'
		});
	});

	$('.hider').click(function(){
		$('.hider').css({
			display: 'none'
		});
		$('.fixed-form').css({
			display: 'none',
			top: '-980px'
		});
	});

	carousel($('.slider__list'), $('.slider__arrow_left'), 
	      	 $('.slider__arrow_right'),  $('.slider__item'), 
	      	 $('input[name="slider__radio"]'), $('.slider__main'));
});