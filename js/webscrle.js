/**
 * Created by Administrator on 2016/6/23.
 */
function Cirecle(option){
    this._init(option);
}
Cirecle.prototype={
    _init: function (option) {
        //初始化属性
        this.x = option.x;
        this.y = option.y;
        this.innerRadius = option.innerRadius;
        this.outerRadius = option.outerRadius;
        this.innerColor = option.innerColor;
        this.outerColor = option.outerColor;
        this.innerOpacity = option.innerOpacity;
        this.outerOpacity = option.outerOpacity;
        this.text = option.text;
        this.fontSize = option.fontSize;
        this.color = option.color;
        var _this = this;
        this.group=new Konva.Group({
            x: _this.x,
            y: _this.y
        });
        //圆环
        var ring =new Konva.Ring({
            x:0,
            y:0,
            innerRadius:_this.innerRadius,
            outerRadius: _this.outerRadius,
            fill: _this.outerColor,
            opacity: _this.outerOpacity
        });
        //圆
        var circle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: _this.innerRadius,
            fill: _this.innerColor,
            opacity: _this.innerOpacity
        });
        //文本
        var text = new Konva.Text({
            x: 0 - _this.innerRadius,
            y: 0 - _this.fontSize / 2,
            text: _this.text,
            fontSize: _this.fontSize,
            fontFamily: 'Calibri',
            stroke: _this.color,
            strokeWidth: 1,
            width: _this.innerRadius * 2,
            align: "center"
        });
        this.group.add(ring);
        this.group.add(circle);
        this.group.add(text);
    },
    addToGroupOrLayer: function( groupOrLayer){
        groupOrLayer.add(this.group);
    }

}