$('.startpage__slider').slick({
    arrows: true,
    dots:true,
    lazyLoad:'progressive',
    prevArrow: $('.arrowprev'),
    nextArrow: $('.arrownext'),
});
$('.rent__slider').slick({
    arrows: true,
    prevArrow: $('.rent__arrowleft'),
    nextArrow: $('.rent__arrowright'),
});
if($('.slick-dots li').hasClass('slick-active')){
    
}