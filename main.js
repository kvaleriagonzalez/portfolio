const typed = new Typed('.element', {
  strings: ["I'm Karen Gonzalez","I'm a Web Developer"],
  	loop: true,
	typeSpeed: 90,
    backSpeed: 40,
	backDelay: 1500,
});
$( document ).ready(function() {
if ($("body").hasClass("side-header")) {
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    var sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
    });
   } else {
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    const sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
});
   } 
});
