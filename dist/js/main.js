$(document).ready(function() {
	$('.list-blog__content').slick({
		dots: true,
    	slidesToShow: 3,
	  	slidesToScroll: 3,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	  	prevArrow: false,
	  	nextArrow: false,
	  	responsive: [
	  	{
	      	breakpoint: 1171,
	      	settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
      		}
    	},
		{
			breakpoint: 992,
	      	settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	    	}
		},
		{
			breakpoint: 550,
	      	settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
		}
		}]
  	});

  	$('#open-menu').on('click', function () {
  		$('.nav-center').addClass('open');
  		$('.close-menu').css('display', 'block');
  	});

  	$('.close-menu').on('click', function () {
  		$('.nav-center').removeClass('open');
  		$('.close-menu').css('display', 'none');
  	});

  	$('.slick-dots li button').html('<span><i class="fa fa-circle" aria-hidden="true"></i></span>');

  	$(window).resize(function(){
	 	$('.slick-dots li button').html('<span><i class="fa fa-circle" aria-hidden="true"></i></span>');
	});
});

