var size = 0;
var placement = 'point';

var style_LimitaIntravilanPropusa_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Bahnschrift SemiBold\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Denumire") !== null) {
        labelText = String(feature.get("Denumire"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [5.168,10.336], lineCap: 'square', lineJoin: 'bevel', width: 5.168}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
