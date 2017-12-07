// JavaScript Document

// 农产品分布开始
var map = new BMap.Map("product_map"); // 创建地图实例
map.centerAndZoom(new BMap.Point(106.277456,29.274399), 10); // 初始化地图，设置中心点坐标和地图级别
map.setMapStyle({style:'bluish'});
map.enableScrollWheelZoom();  //允许滚动缩放

//区域覆盖图
function getBoundary(){

    // 百度地图API功能
    var bdary = new BMap.Boundary();
    bdary.get("重庆市江津区", function(rs){       //获取行政区域
        //map.clearOverlays();        //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
        }
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 3, strokeColor: "#ff0000",strokeOpacity:0.5}); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
        map.setViewport(pointArray);    //调整视野
    });
}
getBoundary();


//点聚合
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.addControl(new BMap.NavigationControl({enableGeolocation:true}));
map.addControl(new BMap.OverviewMapControl());
map.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

//===================
var xy = [
    {'x':106.241408,'y':29.233749},
    {'x':106.231408,'y':29.223749},
    {'x':106.221408,'y':29.213749},
    {'x':106.281408,'y':29.243749},
    {'x':106.271408,'y':29.233749},
    {'x':106.261408,'y':29.233749},
    {'x':106.281408,'y':29.233749},
    {'x':106.391792,'y':28.758607},
    {'x':106.391792,'y':28.748607},
    {'x':106.381792,'y':28.738607},
    {'x':106.371792,'y':28.728607},
    {'x':106.361792,'y':28.718607},
    {'x':106.351792,'y':28.788607}
];
var markers = [];
var pt = null;
for (var i in xy) {
    pt = new BMap.Point(xy[i].x , xy[i].y);
    markers.push(new BMap.Marker(pt));
}
//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
var markerClusterer = new BMapLib.MarkerClusterer(map,
    {
        markers:markers,
        girdSize : 100,
        styles : [{
            url:'images/red.png',
            size: new BMap.Size(92, 92),
            backgroundColor : '#E64B4E'
        }],
    });
markerClusterer.setMaxZoom(13);
markerClusterer.setGridSize(100);
//================================================
var xy1 = [	{'x':118.85952,'y':32.0711},
    {'x':118.651976,'y':32.047353},
    {'x':118.735051,'y':32.059839},
    {'x':118.777882,'y':32.054019},
    {'x':118.677882,'y':32.059839},
    {'x':118.787882,'y':32.079839},
    {'x':118.777982,'y':32.069839}];
var markers1 = [];
var pt = null;
for (var i in xy1) {
    pt = new BMap.Point(xy1[i].x , xy1[i].y);
    markers1.push(new BMap.Marker(pt));
}
//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
var markerClusterer1 = new BMapLib.MarkerClusterer(map,
    {
        markers:markers1,
        girdSize : 100,
        styles : [{
            url:'images/blue.png',
            size: new BMap.Size(92, 92),
            backgroundColor : '#4783E7'
        }],
    });
markerClusterer1.setMaxZoom(13);
markerClusterer1.setGridSize(100);
// 农产品分布结束
