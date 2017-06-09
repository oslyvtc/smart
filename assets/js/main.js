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

	$('.nav-top__burger').click(function(){
		$('.nav-top__list-mob').toggle(1000)
	});

	$('.blog-js').click(function(e) {
		e.preventDefault();
		$('.nav-middle-nested__list').toggle(1000)
	})

	
	setInterval(function(){
		$('.back').animate({
			margin: '20px 20px 0 20px'
		}, 2000, function(){
			$('.back').css({
				margin: '20px 20px 0 50px'
			})
		})
	},2000)

	$('.back').click(function(e){
		e.preventDefault();
		$('.nav-middle-nested__list').toggle(1000)
	})
	
	
	





	carousel($('.slider__list'), $('.slider__arrow_left'), 
	      	 $('.slider__arrow_right'),  $('.slider__item'), 
	      	 $('input[name="slider__radio"]'), $('.slider__main'));
});