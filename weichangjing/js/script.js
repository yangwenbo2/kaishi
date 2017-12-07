var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      
    },
    });
var mySwiper = new Swiper('.swiper-container',{
  grabCursor : true,
})