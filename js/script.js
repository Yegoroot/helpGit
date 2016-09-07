$(document).ready(function(){
	function check_menu_type(max_width) {
        if ( window.innerWidth <= max_width ) {
        	$('#menu').prependTo('#wrapper');
        } else {
        	$('#menu').appendTo('#header');
        }
	}
	$('.menu-trigger, #site-overlay').click(function(){
		$('#wrapper').toggleClass('mobile');
	});

	var max_width = 960;
	check_menu_type(max_width);
	$(window).resize(function(){check_menu_type(max_width)});
});