function showLoader(){
    $('.preloader-background').delay(500).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(500)
		.fadeOut();
}

document.addEventListener("DOMContentLoaded", showLoader);