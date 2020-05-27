$(document).ready(function() {
	$('.list-blog__content').slick({
    	slidesToShow: 3,
	  	slidesToScroll: 1,
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
});