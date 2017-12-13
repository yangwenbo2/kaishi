
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
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });
var mySwiper = new Swiper('.swiper-container',{
  grabCursor : true,
})

var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector(".mp3btn");
mp3btn.onclick = function(){
    if(mp3.paused){
        mp3.play();
    }else{
        mp3.pause();
    }
}