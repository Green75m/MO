$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      adaptiveHeight: true,
      speed: 700,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      touchThreshold: 10, //по умолчанию 5

   })
})
// код для табов
;(function ($) {
   $(function () {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
         $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('div.tabs')
            .find('div.tabs__content')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active')
      })
   })
})(jQuery)
// Плавный переход по ссылке
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		 event.preventDefault();
		 var id  = $(this).attr('href'),
			  top = $(id).offset().top;
		 $('body,html').animate({scrollTop: top}, 1500);
	});
});
