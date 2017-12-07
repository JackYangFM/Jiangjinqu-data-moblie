//<![CDATA[
$(function(){
    (function(){
        var curr = 0;
        $(".left_pic li").each(function(i){
            $(this).click(function(){
                curr = i;

                $(".left_pic  p").eq(i).fadeIn("slow").siblings("p").hide();
                $(this).siblings("li").removeClass("pic_focus").end().addClass("pic_focus");
                return false;
            });
        });

        var pg = function(flag){
            //flag:true表示前翻， false表示后翻
            if (flag) {
                if (curr == 0) {
                    todo = 1;
                } else {
                    todo = (curr - 1) % 3;
                }
            } else {
                todo = (curr + 1) % 3;
            }
            $(".left_pic li").eq(todo).click();
        };

        //自动翻
        var timer = setInterval(function(){
            todo = (curr + 1) % 3;
            $(".left_pic li").eq(todo).click();
        },5000);

        //鼠标悬停在触发器上时停止自动翻
        $(".left_pic p").hover(function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(function(){
                    todo = (curr + 1) % 3;
                    $(".left_pic li").eq(todo).click();
                },3000);
            }
        );
    })();
});