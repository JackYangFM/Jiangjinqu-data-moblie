
// JavaScript Document


//乡镇列表滚动
(function ($) {
    var status = false;
    $.fn.scrollQ = function(options) {
        var defaults = {
            line:8,
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
    $("#itemlist2").scrollQ();
});


//种植类企业产值
$('#container1').highcharts({
    chart: {
        type: 'column',
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: '种植类企业产值',
        style:{color:'#00c9d3'}
    },
    colors: ['#64E572', '#00c9d3', '#FFF263'],
    xAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        categories: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
        ],
        crosshair: true
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        min: 0,
        title: {
            text: '销售额 (元)',
            style:{color:'#00c9d3'}
        }
    },
    legend: {
        itemStyle:{
            color:'#d9d9d9'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px;color:#fff">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b style="color:#fff">{point.y:.1f} 万元</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor:'rgba(5, 14, 29, 0.9)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2015',
        data: [219.9, 371.5, 206.4, 329.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 395.6, 354.4]
    }, {
        name: '2016',
        data: [223.6, 178.8, 298.5, 193.4, 306.0, 184.5, 305.0, 204.3, 91.2, 83.5, 106.6, 392.3]
    }, {
        name: '2017',
        data: [248.9, 138.8, 139.3, 141.4, 347.0, 148.3, 159.0, 159.6, 152.4, 365.2, 159.3, 251.2]
    }]
});


//加工类企业产值
$('#container2').highcharts({
    chart: {
        type: 'column',
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: '加工类企业产值',
        style:{color:'#00c9d3'}
    },
    colors: ['#64E572', '#FFF263', '#00c9d3'],
    xAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        categories: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
        ],
        crosshair: true
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        min: 0,
        title: {
            text: '销售额 (元)',
            style:{color:'#00c9d3'}
        }
    },
    legend: {
        itemStyle:{
            color:'#d9d9d9'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px;color:#fff">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b style="color:#fff">{point.y:.1f} 万元</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor:'rgba(5, 14, 29, 0.9)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2015',
        data: [219.9, 371.5, 206.4, 329.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 395.6, 354.4]
    }, {
        name: '2016',
        data: [223.6, 178.8, 298.5, 193.4, 306.0, 184.5, 305.0, 204.3, 91.2, 83.5, 106.6, 392.3]
    }, {
        name: '2017',
        data: [248.9, 138.8, 139.3, 141.4, 347.0, 148.3, 159.0, 159.6, 152.4, 365.2, 159.3, 251.2]
    }]
});


//养殖类企业产值
$('#container3').highcharts({
    chart: {
        type: 'column',
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: '养殖类企业产值',
        style:{color:'#00c9d3'}
    },
    colors: ['#00c9d3', '#FFF263', '#6AF9C4'],
    xAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        categories: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
        ],
        crosshair: true
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        min: 0,
        title: {
            text: '销售额 (元)',
            style:{color:'#00c9d3'}
        }
    },
    legend: {
        itemStyle:{
            color:'#d9d9d9'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px;color:#fff">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b style="color:#fff">{point.y:.1f} 万元</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor:'rgba(5, 14, 29, 0.9)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2015',
        data: [219.9, 371.5, 206.4, 329.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 395.6, 354.4]
    }, {
        name: '2016',
        data: [223.6, 178.8, 298.5, 193.4, 306.0, 184.5, 305.0, 204.3, 91.2, 83.5, 106.6, 392.3]
    }, {
        name: '2017',
        data: [248.9, 138.8, 139.3, 141.4, 347.0, 148.3, 159.0, 159.6, 152.4, 365.2, 159.3, 251.2]
    }]
});


//企业种类占比
$(function () {
    $('#container4').highcharts({
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
            text: '企业种类占比',
            style:{color:'#00c9d3'}
        },
        colors: ['#FF9655', '#6AF9C4', '#FFF263','#8085e9'],
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
            name: '种类占比',
            data: [
                ['种植类', 3],
                ['加工类', 2],
                ['养殖类', 4],
                ['其他', 1]
            ]
        }]
    });
});


//产品种类占比
$(function () {
    $('#container5').highcharts({
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
            text: '产品种类占比',
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
            name: '种类占比',
            data: [
                ['苹果', 3],
                ['香蕉', 2],
                ['梨子', 1],
                ['水蜜桃', 5],
                ['大枣', 3],
                ['猕猴桃', 2],
                ['荔枝', 1],
                ['其他', 2]
            ]
        }]
    });
});


//农产品市场价格走势图
var chart = new Highcharts.Chart('container6', {
    chart: {
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    title: {
        text: '农产品市场价格走势图',
        x: -20,
        style:{color:'#00c9d3'}
    },
    colors: ['#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
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
        categories: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日' ]
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        title: {
            text: '交易额 (元)',
            style:{color:'#00c9d3'}
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '元'
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
        name: '10月',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5]
    }, {
        name: '11月',
        data: [2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
    }, {
        name: '12月',
        data: [4, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6]
    }]
});


//农产品销售额柱状图
$('#container7').highcharts({
    chart: {
        type: 'column',
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: '农产品历年销售额',
        style:{color:'#00c9d3'}
    },
    colors: ['#00c9d3', '#FFF263', '#6AF9C4'],
    xAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        categories: [
            '苹果',
            '马铃薯',
            '香蕉',
            '西红柿',
            '梨子',
            '猕猴桃',
            '西瓜',
            '荔枝',
            '大枣',
            '红薯',
            '南瓜',
            '其他'
        ],
        crosshair: true
    },
    yAxis: {
        labels:{
            style:{
                color:'#00c9d3'
            }
        },
        min: 0,
        title: {
            text: '销售额 (元)',
            style:{color:'#00c9d3'}
        }
    },
    legend: {
        itemStyle:{
            color:'#d9d9d9'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px;color:#fff">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b style="color:#fff">{point.y:.1f} 万元</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor:'rgba(5, 14, 29, 0.9)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2015',
        data: [219.9, 371.5, 206.4, 329.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 395.6, 354.4]
    }, {
        name: '2016',
        data: [223.6, 178.8, 298.5, 193.4, 306.0, 184.5, 305.0, 204.3, 91.2, 83.5, 106.6, 392.3]
    }, {
        name: '2017',
        data: [248.9, 138.8, 139.3, 141.4, 347.0, 148.3, 159.0, 159.6, 152.4, 365.2, 159.3, 251.2]
    }]
});
























