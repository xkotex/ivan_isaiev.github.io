$(document).ready(function(){
	/* ScrollTo */
$('.scrollLink').on("click", function(event){
	event.preventDefault();
	$(window).scrollTo(event.target.hash, {duration:700});
});
 /* Parallax effect*/
$('.parallax-window').parallax({imageSrc: 'images/parallax.jpg'});
});
