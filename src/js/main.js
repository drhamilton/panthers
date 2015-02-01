//main.js
(function($){
	$(function() {
		$('#menu-trigger').on('click', function(){
			$(this).siblings('.menu').toggleClass('hidden');
		});
	});
}(jQuery));