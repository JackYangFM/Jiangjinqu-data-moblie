// JavaScript Document

//企业列表滚动
(function ($) {
    var status = false;
    $.fn.scrollQ = function(options) {
        var defaults = {
            line:10,
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
    $("#itemlist1").scrollQ();
});

//镇域面积占比
$(function () {
    $('#container9').highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(5, 14, 29, 0)',
            options3d: {
                enabled: true,
                alpha: 45,
            }
        },
        credits:{
            enabled:false
        },
        exporting: {
            enabled:false
        },

        title: {
            text: '镇域面积占比',
            style:{color:'#00c9d3'}
        },
        plotOptions: {
            pie: {
                innerSize: 70,
                depth: 25,
                dataLabels: {
                    enabled: true,
                    color: '#fff',
                    connectorColor: '#fff',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                }
            }
        },
        series: [{
            name: '镇域面积占比',
            data: [
                ['德感街道', 3],
                ['石蟆镇', 2],
                ['朱杨镇', 1],
                ['白沙镇', 5],
                ['杜市镇', 3]
            ]
        }]
    });
});

//常住人口占比
$(function () {
    $('#container10').highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(5, 14, 29, 0)',
            options3d: {
                enabled: true,
                alpha: 45,
            }
        },
        credits:{
            enabled:false
        },
        exporting: {
            enabled:false
        },

        title: {
            text: '常住人口占比',
            style:{color:'#00c9d3'}
        },
        plotOptions: {
            pie: {
                innerSize: 70,
                depth: 25,
                dataLabels: {
                    enabled: true,
                    color: '#fff',
                    connectorColor: '#fff',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                }
            }
        },
        series: [{
            name: '常住人口占比',
            data: [
                ['吴滩镇', 3],
                ['先锋镇', 2],
                ['慈云镇', 1],
                ['柏林镇', 5],
                ['中山镇', 3]
            ]
        }]
    });
});

//农业新型经营主体数量
var chart = new Highcharts.Chart('container11', {
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
        categories: ['1季度','2季度','3季度','4季度']
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        title: {
            text: '农业新型经营主体数量 (个)',
            style:{color:'#00c9d3'}
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '个'
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
        data: [152, 146, 135, 145]
    }, {
        name: '16年',
        data: [145, 135, 168, 180]
    }, {
        name: '17年',
        data: [179, 185, 189, 216]
    }]
});