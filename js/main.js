$(function() {
	$('a').on('click', function(event) {
	  event.preventDefault();
	});
  });
$('.startpage__slider').slick({
    autoplay: true, /* this is the new line */
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
	arrows: true,
	dots:true,
    lazyLoad:'progressive',
    prevArrow: $('.arrowprev'),
    nextArrow: $('.arrownext'),
	responsive: [
		{
			breakpoint: 1175,
			settings: {
			  dots:false
			}
		  }
	  ]
});
$('.rent__slider').slick({
    draggable: true,
    autoplay: true, /* this is the new line */
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
	arrows: true,
	prevArrow: $('.rent__arrowleft'),
    nextArrow: $('.rent__arrowright'),
});

function animatedBlocks () {
	$('.need-animate').each(function () {
		let scrollPosTop = $(window).scrollTop(), // позиция скролла, верх страницы
			blockPosTop = $(this).offset().top, // позиция блока (верх), который нужно анимировать
			blockPosBottom = blockPosTop+$(this).height(), // позиция блока (низ), который нужно анимировать
			windowHeight = $(window).height(), // высота окна браузера
			windowLineTop = scrollPosTop+(windowHeight*(1/8)), // верхняя граница окна браузера при пересечении которой анимируется блок
			windowsLineBottom = scrollPosTop+(windowHeight*(7/8)); // нижяя граница окна браузера при пересечении которой анимируется блок

		if (
			(windowLineTop <= blockPosBottom && windowLineTop > blockPosTop) // если верхняя часть экрана выше нижней границы блока, но не прошла блок полностью
			|| (windowsLineBottom >= blockPosTop && windowsLineBottom < blockPosBottom) // если нижняя часть экрана дошла до верхней границы блока, но не прошла блок полностью
			|| ((blockPosTop > windowLineTop && blockPosTop < windowsLineBottom) || (blockPosBottom > windowLineTop && blockPosBottom < windowsLineBottom)) // или блок по центру экрана
		) {
			$(this).removeClass('need-animate').addClass('animated');
		}
	});
}
$(document).ready(function () {
	setTimeout(function () {
		animatedBlocks();
	}, 1000);
});
$(window).scroll(function () {
	animatedBlocks();
});

$('.header__menu-aboutcompany').on('click', function(){
	$('.header__menu-aboutcompanymenu').toggleClass('aboutcompanymenuactive');
})
$('.header__menu-burger').on('click', function(){
	$('.header__menu-burgeritem1').toggleClass('closebuttonmenu');
	$('.header__menu-burgeritem3').toggleClass('closebuttonmenu');
})
document.querySelector('.header__menu-burger').addEventListener('click', function(){
	document.querySelector('.header__menu-burger span').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('menushow');
})
document.querySelector('.closeaboutcompanymenu').addEventListener('click', function(){
	document.querySelector('.aboutcompanymenu').classList.remove('aboutcompanymenuactive');
})