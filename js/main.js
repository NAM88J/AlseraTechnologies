$(document).ready(function(){
    $(document).on('click', '.tab', function(e){
        e.preventDefault();
        let all_tab = $('.tab');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            all_tab.removeClass('active');
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.mobile_button, .close_menu, .mobail_menu.active a', function(e){
        e.preventDefault();
        $('.mobail_menu, .mobile_button').toggleClass('active');
    });
	$(document).on('click', '.menu a', function (e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1200);
	});
});