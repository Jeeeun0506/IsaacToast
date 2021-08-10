$(function(){

	//로딩 애니메이션
	$(".loading > ol").fadeOut();
	$(".loading").delay(350).fadeOut(1500, function(){
		$(this).remove();
	});

  // header 영역
  const $gnb = $('header > .container > nav > .gnb');
  const $lnb = $('header > .container > nav .lnb');
  const $bg_lnb = $('header > .bg_lnb');

  $gnb.on('mouseover', function(){
    $lnb.stop().slideDown();
    $bg_lnb.stop().slideDown();
  });
  $gnb.on('mouseout', function(){
    $lnb.stop().slideUp();
    $bg_lnb.stop().slideUp();
  });

  $bg_lnb.on('mouseover', function(){
    $bg_lnb.stop().fadeIn(50);
    $lnb.stop().fadeIn(50);
  });

  $bg_lnb.on('mouseout', function(){
    $lnb.stop().fadeOut(50);
    $bg_lnb.stop().stop().slideUp();
  });


  // logo에 대한 click 이벤트 구문
  $('header > .container > .logo').on('click', function(){
      $('html,body').stop().animate({scrollTop:0});
  });

  $('footer > .footer_logo > a').on('click', function(){
      $('html,body').stop().animate({scrollTop:0});
  });

  // load 이벤트는 화면에 내용이 나타난 시점에 발생
  $(window).on('load', function(){

      // 이벤트 강제발생 API
      $('header > .container > .logo ').trigger('click');
  });


  // gnb, lnb 메뉴 기본기능 방지
  $('header > .container > nav > .gnb > li > a').on('click', function(evt){
    evt.preventDefault();
  });
  $('header > .container > nav .lnb > li > a').on('click', function(evt){
    evt.preventDefault();
  });

  
  // cont1 영역
  const $indicator = $('.cont1 > .visual > .visual-pagination > li > a');
  let nowIdx = 0;
  
  const slideFn = function () {
    const $container = $('.cont1 > .visual > .visual-container');
    const $slides = $('.cont1 > .visual > .visual-container > li');
    
    $container.stop().animate({left:-1280},function(){
      $slides.eq(0).appendTo($container);
      $container.css({left:0});
    });

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $indicator.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    slideFn();
  });

  // auto play
  const $btnAuto = $('.cont1 > .visual > .auto-play');

  let intervalKey;

  $btnAuto.on('click', function(){
    
    if($(this).hasClass('pause')){
      clearInterval(intervalKey);
      $(this).removeClass('pause');
      
    }else{
      autoPlay();
      $(this).addClass('pause');
    }

  });

  // 자동재생
  const autoPlay = function(){
    intervalKey = setInterval(function(){

      if(nowIdx<2){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      slideFn();
    },3000);
  };

  $(window).on('load', function(){
    autoPlay();
  });


  // cont2 영역
  // mnu
  const $mnu = $('.cont2 > .mnu > li > a');
  const $mnu_all = $('.cont2 > .all');

  let mnuIdx = 0;

  $mnu.on('click', function(evt){
    evt.preventDefault();

    mnuIdx = $mnu.index(this);

    $mnu.eq(mnuIdx).parent().addClass('on').siblings().removeClass('on');

    $mnu_all.eq(mnuIdx).show().siblings('.all').hide();
  });

  $(window).on('load', function(){
    $mnu_all.hide();

    $mnu_all.filter('.on').show();
  });
  
  // .all-toast
  const $toast = $('.cont2 > .all-toast > .allmnu > .all-arch > .arch > a');
  
  $toast.on('mouseover', function(){
    $(this).next('.text').stop().slideDown();
  });
  $toast.on('mouseout', function(){
    $(this).next('.text').stop().slideUp();
  });

  $toast.on('click', function(evt){
    evt.preventDefault();
  });

  // .all-coffee
  const $coffee = $('.cont2 > .all-coffee > .coffee > li > a');

  $coffee.on('mouseover', function(){
    $(this).next('.tbox').stop().slideDown();
  });
  $coffee.on('mouseout', function(){
    $(this).next('.tbox').stop().slideUp();
  });

  $coffee.on('click', function(evt){
    evt.preventDefault();
  });

  // .all-tea
  const $tea = $('.cont2 > .all-tea > .tea > li > a');

  $tea.on('mouseover', function(){
    $(this).next('.tbox').stop().slideDown();
  });
  $tea.on('mouseout', function(){
    $(this).next('.tbox').stop().slideUp();
  });

  $tea.on('click', function(evt){
    evt.preventDefault();
  });

  // .all-juice
  const $juice = $('.cont2 > .all-juice > .juice > li > a');

  $juice.on('mouseover', function(){
    $(this).next('.tbox').stop().slideDown();
  });
  $juice.on('mouseout', function(){
    $(this).next('.tbox').stop().slideUp();
  });

  $juice.on('click', function(evt){
    evt.preventDefault();
  });

  // .all-beverage
  const $beverage = $('.cont2 > .all-beverage > .beverage > li > a');

  $beverage.on('mouseover', function(){
    $(this).next('.tbox').stop().slideDown();
  });
  $beverage.on('mouseout', function(){
    $(this).next('.tbox').stop().slideUp();
  });

  $beverage.on('click', function(evt){
    evt.preventDefault();
  });


  // 슬라이드
  const $toastMnu = $('.cont2 > .all-toast > .allmnu');
  let archIdx = 0;

  // 이전다음 버튼
  const $btnPrev = $('.cont2 > .prev');
  const $btnNext = $('.cont2 > .next');
  // 이전 버튼
  $btnPrev.on('click', function(evt){
    evt.preventDefault();
    
    // archIdx = $slideMnu.index(this);
    
    if(archIdx > 0){
      archIdx--;
    }
    // else{
    //   archIdx = 16;
    // }
    
    $toastMnu.stop().animate({
    left : -294*archIdx
    });
  });
  
  // 다음 버튼
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(archIdx < 16){
    archIdx++;
    }
    // else{
    // archIdx = 0;
    // }

    $toastMnu.stop().animate({
    left : -294*archIdx
    });
  });

  // 이전다음버튼 안보이게
  $('.cont2 > .mnu > li:nth-child(2) > a').on('click', function (evt) {
    evt.preventDefault();
    
    $btnPrev.css({ display: 'none'});
    $btnNext.css({ display: 'none'});
  })
  
  $('.cont2 > .mnu > li:nth-child(3) > a').on('click', function (evt) {
    evt.preventDefault();
    
    $btnPrev.css({ display: 'none'});
    $btnNext.css({ display: 'none'});
  })
  
  $('.cont2 > .mnu > li:nth-child(4) > a').on('click', function (evt) {
    evt.preventDefault();
    
    $btnPrev.css({ display: 'none'});
    $btnNext.css({ display: 'none'});
  })
  
  $('.cont2 > .mnu > li:nth-child(5) > a').on('click', function (evt) {
    evt.preventDefault();
    
    $btnPrev.css({ display: 'none'});
    $btnNext.css({ display: 'none'});
  })

  $('.cont2 > .mnu > li:nth-child(1) > a').on('click', function (evt) {
    evt.preventDefault();
  
    $btnPrev.css({ display: 'block'});
    $btnNext.css({ display: 'block'});
  })


  // cont4
  $('.cont4 > .newscont > .news > dl > dt > a').eq(1).on('click', function(evt){
    evt.preventDefault();
  });
  $('.cont4 > .newscont > .news > dl > dt > a').eq(2).on('click', function(evt){
    evt.preventDefault();
  });

  $('.cont4 > a').on('click', function(evt){
    evt.preventDefault();
  });


  // footer
  $('footer > .in_link > li > a').on('click', function (evt) {
    evt.preventDefault();
  });
  

  // popup
  $('.popup > button').on('click', function () {
    $('.popup').hide();
  });

  $('.popup-tday > button').on('click', function () {
    $('.popup-tday').hide();
  });


  // top 버튼에 대한 click 이벤트 구문
  $('.top').on('click', function(){
    $('html,body').stop().animate({scrollTop:0});
  });

  $(window).scroll(function(){
    if($(this).scrollTop() < 1){
    $('.top').fadeOut();
    }else{
    $('.top').fadeIn();
    }
  });
  $('.top').click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 200);
    return false;
  });
});