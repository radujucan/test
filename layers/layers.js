var wms_layers = [];

var format_Cladiri_0 = new ol.format.GeoJSON();
var features_Cladiri_0 = format_Cladiri_0.readFeatures(json_Cladiri_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cladiri_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cladiri_0.addFeatures(features_Cladiri_0);
var lyr_Cladiri_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cladiri_0,
maxResolution:2.8004466152261966,
 
                style: style_Cladiri_0,
                popuplayertitle: "Cladiri",
                interactive: true,
                title: '<img src="styles/legend/Cladiri_0.png" /> Cladiri'
            });
var format_zona_reglementare_suplimentara_1 = new ol.format.GeoJSON();
var features_zona_reglementare_suplimentara_1 = format_zona_reglementare_suplimentara_1.readFeatures(json_zona_reglementare_suplimentara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_reglementare_suplimentara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_reglementare_suplimentara_1.addFeatures(features_zona_reglementare_suplimentara_1);
var lyr_zona_reglementare_suplimentara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_reglementare_suplimentara_1, 
                style: style_zona_reglementare_suplimentara_1,
                popuplayertitle: "zona_reglementare_suplimentara",
                interactive: true,
    title: 'zona_reglementare_suplimentara<br />\
    <img src="styles/legend/zona_reglementare_suplimentara_1_0.png" /> ZRS14<br />\
    <img src="styles/legend/zona_reglementare_suplimentara_1_1.png" /> ZRS12<br />\
    <img src="styles/legend/zona_reglementare_suplimentara_1_2.png" /> ZRS19<br />\
    <img src="styles/legend/zona_reglementare_suplimentara_1_3.png" /> ZRS13<br />\
    <img src="styles/legend/zona_reglementare_suplimentara_1_4.png" /> <br />'
        });
var format_zona_functionala_existenta_2 = new ol.format.GeoJSON();
var features_zona_functionala_existenta_2 = format_zona_functionala_existenta_2.readFeatures(json_zona_functionala_existenta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_functionala_existenta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_functionala_existenta_2.addFeatures(features_zona_functionala_existenta_2);
var lyr_zona_functionala_existenta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_functionala_existenta_2, 
                style: style_zona_functionala_existenta_2,
                popuplayertitle: "zona_functionala_existenta",
                interactive: true,
    title: 'zona_functionala_existenta<br />\
    <img src="styles/legend/zona_functionala_existenta_2_0.png" /> Z.A.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_1.png" /> Z.C.f.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_2.png" /> Z.C.r.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_3.png" /> Z.G.C.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_4.png" /> Z.G.C.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_5.png" /> Z.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_6.png" /> Z.I.S.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_7.png" /> Z.I.S.S.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_8.png" /> Z.L.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_9.png" /> Z.L.M.r.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_10.png" /> Z.L.M.r.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_11.png" /> Z.P.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_12.png" /> Z.T.A.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_13.png" /> Z.T.E.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_14.png" /> Z.V.N.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_15.png" /> Z.I.S.c.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_16.png" /> Z.P.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_17.png" /> Z.T.E.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_18.png" /> Z.I.S.ct.p.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_19.png" /> Z.I.S.ct.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_20.png" /> Z.I.S.xx.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_21.png" /> Z.T.R.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_22.png" /> T.C.C.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_23.png" /> T.L.C.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_24.png" /> T.P.I.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_25.png" /> T.P.S.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_26.png" /> Z. L.Bl.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_27.png" /> Z.T.E.P.I.I.<br />\
    <img src="styles/legend/zona_functionala_existenta_2_28.png" /> <br />'
        });
var format_LimitaIntravilanExistent_3 = new ol.format.GeoJSON();
var features_LimitaIntravilanExistent_3 = format_LimitaIntravilanExistent_3.readFeatures(json_LimitaIntravilanExistent_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitaIntravilanExistent_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilanExistent_3.addFeatures(features_LimitaIntravilanExistent_3);
var lyr_LimitaIntravilanExistent_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilanExistent_3, 
                style: style_LimitaIntravilanExistent_3,
                popuplayertitle: "LimitaIntravilanExistent",
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilanExistent_3.png" /> LimitaIntravilanExistent'
            });
var format_LimitaIntravilanPropusa_4 = new ol.format.GeoJSON();
var features_LimitaIntravilanPropusa_4 = format_LimitaIntravilanPropusa_4.readFeatures(json_LimitaIntravilanPropusa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitaIntravilanPropusa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilanPropusa_4.addFeatures(features_LimitaIntravilanPropusa_4);
var lyr_LimitaIntravilanPropusa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilanPropusa_4, 
                style: style_LimitaIntravilanPropusa_4,
                popuplayertitle: "LimitaIntravilanPropusa",
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilanPropusa_4.png" /> LimitaIntravilanPropusa'
            });

lyr_Cladiri_0.setVisible(true);lyr_zona_reglementare_suplimentara_1.setVisible(true);lyr_zona_functionala_existenta_2.setVisible(true);lyr_LimitaIntravilanExistent_3.setVisible(true);lyr_LimitaIntravilanPropusa_4.setVisible(true);
var layersList = [lyr_Cladiri_0,lyr_zona_reglementare_suplimentara_1,lyr_zona_functionala_existenta_2,lyr_LimitaIntravilanExistent_3,lyr_LimitaIntravilanPropusa_4];
lyr_Cladiri_0.set('fieldAliases', {});
lyr_zona_reglementare_suplimentara_1.set('fieldAliases', {'Cod_ZRS': 'Cod_ZRS', 'Tip_ZRS': 'Tip_ZRS', 'Tip_ZRS_D': 'Tip_ZRS_D', });
lyr_zona_functionala_existenta_2.set('fieldAliases', {'Cod_SZF': 'Cod_SZF', 'Tip_SZF': 'Tip_SZF', 'Cod_UTR': 'Cod_UTR', 'Tip_UTR': 'Tip_UTR', });
lyr_LimitaIntravilanExistent_3.set('fieldAliases', {});
lyr_LimitaIntravilanPropusa_4.set('fieldAliases', {'Denumire': 'Denumire', });
lyr_Cladiri_0.set('fieldImages', {});
lyr_zona_reglementare_suplimentara_1.set('fieldImages', {'Cod_ZRS': 'TextEdit', 'Tip_ZRS': 'TextEdit', 'Tip_ZRS_D': 'TextEdit', });
lyr_zona_functionala_existenta_2.set('fieldImages', {'Cod_SZF': 'TextEdit', 'Tip_SZF': 'TextEdit', 'Cod_UTR': 'TextEdit', 'Tip_UTR': 'TextEdit', });
lyr_LimitaIntravilanExistent_3.set('fieldImages', {});
lyr_LimitaIntravilanPropusa_4.set('fieldImages', {'Denumire': 'TextEdit', });
lyr_Cladiri_0.set('fieldLabels', {});
lyr_zona_reglementare_suplimentara_1.set('fieldLabels', {'Cod_ZRS': 'inline label - always visible', 'Tip_ZRS': 'inline label - always visible', 'Tip_ZRS_D': 'inline label - always visible', });
lyr_zona_functionala_existenta_2.set('fieldLabels', {'Cod_SZF': 'inline label - always visible', 'Tip_SZF': 'inline label - always visible', 'Cod_UTR': 'inline label - always visible', 'Tip_UTR': 'inline label - always visible', });
lyr_LimitaIntravilanExistent_3.set('fieldLabels', {});
lyr_LimitaIntravilanPropusa_4.set('fieldLabels', {'Denumire': 'inline label - always visible', });
lyr_LimitaIntravilanPropusa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});