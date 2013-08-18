// Custom Scripts
$(document).ready(function(){
	//Scrolling Stuff
	function goToByScroll(id) {
		$('html,body').animate({ scrollTop: $(id).offset().top }, 'slow');
	}
	$('.smooth').click(function () {
		var link = $(this).attr("href");
		goToByScroll(link);
		return false;
	});
	// Fittext
	$(".tagline").fitText(1.2, { minFontSize: '30px', maxFontSize: '55px' });
	// Fitvids
	$('.video-wrap').fitVids();
	// Sticky Header
	$('.nav-wrap').waypoint('sticky');
	// Testimonials Fader 
	$('.testimonialfader').bxSlider({
		mode: 'fade',
		slideMargin: 3,
		auto:true,
		pager: false,
		controls: false,
		adaptiveHeight: true
	});
	// Lightbox
	$('.fancybox-media').fancybox({
        padding : 0,
        margin : 0,
        openEffect  : 'elastic',
        aspectRatio : true,
        helpers : { media : {} }
    });
});