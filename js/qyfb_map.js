
// JavaScript Document

//企业分布地图
var map1 = new BMap.Map("company_map"); // 创建地图实例
map1.centerAndZoom(new BMap.Point(106.277456,29.274399), 10); // 初始化地图，设置中心点坐标和地图级别
map1.setMapStyle({style:'bluish'});
map1.enableScrollWheelZoom();  //允许滚动缩放

//区域覆盖图
function getBoundary1(){
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
            map1.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
        map1.setViewport(pointArray);    //调整视野
    });
}
getBoundary1();

// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, text, mouseoverText){
    this._point = point;
    this._text = text;
    this._overText = mouseoverText;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map1){
    this._map = map1;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = "#EE5D5B";
    div.style.border = "1px solid #BC3B3A";
    div.style.color = "white";
    div.style.height = "18px";
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "12px"
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));
    var that = this;

    var arrow = this._arrow = document.createElement("div");
    arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "22px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);

    div.onmouseover = function(){
        this.style.backgroundColor = "#6BADCA";
        this.style.borderColor = "#0000ff";
        this.getElementsByTagName("span")[0].innerHTML = that._overText;
        arrow.style.backgroundPosition = "0px -20px";
    }

    div.onmouseout = function(){
        this.style.backgroundColor = "#EE5D5B";
        this.style.borderColor = "#BC3B3A";
        this.getElementsByTagName("span")[0].innerHTML = that._text;
        arrow.style.backgroundPosition = "0px 0px";
    }

    map1.getPanes().labelPane.appendChild(div);

    return div;
}
ComplexCustomOverlay.prototype.draw = function(){
    var map2 = this._map;
    var pixel = map2.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}

var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.305446,28.80728), "西葫芦合作社","西葫芦合作社 6个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.279863,29.236947), "果蔬合作社","果蔬合作社 2个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.344074,29.007573), "江津区蔬菜专业合作社","江津区蔬菜专业合作社 5个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.245188,29.197433), "大白菜合作社","大白菜合作社 3个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.486653,29.222654), "苹果合作社","苹果合作社 5个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.155968,28.950998), "西瓜合作社","西瓜合作社 70个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.068581,29.134905), "棉花合作社","棉花合作社 1个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.222767,29.33884), "西红柿合作社","西红柿合作社 1个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.386043,28.677005), "干果合作社","干果合作社 5个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(105.908863,28.978255), "有机鸡蛋合作社","有机鸡蛋合作社 1个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.465381,28.570979), "农民合作社","农民合作社 3个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.180223,29.077297), "乡情农业合作社","乡情农业合作社 3个商品");
map1.addOverlay(myCompOverlay);
myCompOverlay = new ComplexCustomOverlay(new BMap.Point(106.433186,29.059113), "原生态合作社","原生态合作社 2个商品");
map1.addOverlay(myCompOverlay);




