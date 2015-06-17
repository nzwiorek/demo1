$(document).ready(function() {
	
	// Toggle Mobile Menu
	$('#toggleMenu').click(function(event) {
		event.preventDefault();
		$('body').addClass('offcanvas-in');
	});
	
	$('#lockLayer').click(function() {
		$('body').removeClass('offcanvas-in');
	});

});
