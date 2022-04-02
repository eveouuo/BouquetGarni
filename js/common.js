$(document).ready(function(){
    $("header nav ul.gnb > li").hover(function(){
        $(this).find(".sub,.subArea").stop().slideDown();
        $(".gnbBG").stop().slideDown();
    },function(){
        $(this).find(".sub,.subArea").stop().slideUp();
        $(".gnbBG").stop().slideUp();
    });
});