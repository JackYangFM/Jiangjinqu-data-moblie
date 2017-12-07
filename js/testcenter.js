// JavaScript Document
//检测中心图片开始
$(function(){
    (function(){
        var curr = 0;
        $(".c_tpic li").each(function(i){
            $(this).click(function(){
                curr = i;

                $(".c_tpic  p").eq(i).fadeIn("slow").siblings("p").hide();
                $(this).siblings("li").removeClass("pb_focus").end().addClass("pb_focus");
                return false;
            });
        });

        var pg = function(flag){
            //flag:true表示前翻， false表示后翻
            if (flag) {
                if (curr == 0) {
                    todo = 1;
                } else {
                    todo = (curr - 1) % 4;
                }
            } else {
                todo = (curr + 1) % 4;
            }
            $(".c_tpic li").eq(todo).click();
        };

        //自动翻
        var timer = setInterval(function(){
            todo = (curr + 1) % 4;
            $(".c_tpic li").eq(todo).click();
        },5000);

        //鼠标悬停在触发器上时停止自动翻
        $(".c_tpic p").hover(function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(function(){
                    todo = (curr + 1) % 4;
                    $(".c_tpic li").eq(todo).click();
                },2000);
            }
        );
    })();
});
//检测中心图片结束

//年检测报告统计
var chart = new Highcharts.Chart('container8', {
    chart: {
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    title: {
        text: '',
        x: -20,
        style:{color:'#00c9d3'}
    },
    colors: ['#DDDF00', '#24CBE5', '#64E572'],
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    xAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        categories: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        title: {
            text: '检测数量 (份)',
            style:{color:'#00c9d3'}
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '份'
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 0,
        itemStyle:{
            color:'#00c9d3'
        }
    },
    series: [{
        name: '15年',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 12.5, 20.2, 20.5, 18.3, 18.3, 13.9, 19.6]
    }, {
        name: '16年',
        data: [2, 0.8, 5.7, 11.3, 17.0, 12.0, 20.8, 20.1, 20.1, 14.1, 8.6, 12.5]
    }, {
        name: '17年',
        data: [4, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 13.9, 11.0]
    }]
});

//检测报告列表滚动
(function ($) {
    var status = false;
    $.fn.scrollQ = function(options) {
        var defaults = {
            line:15,
            scrollNum: 1,
            scrollTime: 2000
        };
        var options = jQuery.extend(defaults, options);
        var _self = this;
        return this.each(function() {
            $("li", this).each(function() {
                $(this).css("display", "none");
            });
            $("li:lt(" + options.line + ")", this).each(function() {
                $(this).css("display", "block");
            });

            function scroll() {
                for (i = 0; i < options.scrollNum; i++) {
                    var start = $("li:first", _self);
                    start.fadeOut(100);
                    start.css("display", "none");
                    start.appendTo(_self);
                    $("li:eq(" + (options.line - 1) + ")", _self).each(function() {
                        $(this).fadeIn(500);
                        $(this).css("display", "block");
                    });
                }
            }
            var timer;
            timer = setInterval(scroll, options.scrollTime);
            _self.bind("mouseover", function() {
                clearInterval(timer);
            });
            _self.bind("mouseout", function() {
                timer = setInterval(scroll, options.scrollTime);
            });

        });
    };
})(jQuery);

$(document).ready(function () {
    $("#itemlist0").scrollQ();
});