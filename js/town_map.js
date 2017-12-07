// JavaScript Document

// 农产品分布开始
var map = new BMap.Map("town_map"); // 创建地图实例
map.centerAndZoom(new BMap.Point(106.277456,29.274399), 10); // 初始化地图，设置中心点坐标和地图级别
map.setMapStyle({style:'bluish'});
map.enableScrollWheelZoom();  //允许滚动缩放

