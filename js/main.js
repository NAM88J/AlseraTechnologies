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
    $(document).on('click', '.mob_button', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mainmenu').toggleClass('active');
    });
	$(document).on('click', '.menu a', function (e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});