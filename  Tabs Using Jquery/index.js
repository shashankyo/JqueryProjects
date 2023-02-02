$(document).ready(function(){
    $("ul li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".content > p").hide();
        $($(this).data("value")).fadeIn();
    });
});