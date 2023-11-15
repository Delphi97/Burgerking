$(function(){
    $('header .menu > li').mouseenter(function(){
        $('.sub-menu').show()
        $('.headerbg').show()
    })
    $('.headerbg').mouseleave(function(){
        $('.sub-menu').hide()
        $('.headerbg').hide()
    })


    $(".slider").bxSlider({
        mode: 'horizontal', // slide 이동 방향 설정 'horizontal' 'vertical' 'fade'
        auto : true, // 슬라이드 자동 전환 여부
        pager : true, // 물방울 여부
        controls: true, // 이전 다음 버튼 < > true
        maxSlides : 1, //slide 최대 노출되는 개수
        moveSlides : 1, // slide 이동시 개수
        infiniteLoop : true, //무한반복
        autoControls : true, // 시작, 중지 버튼
        touchEnabled : (navigator.maxTouchPoints > 0), // a태그 안먹는 오류 방지코드
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })
})

