var wms_layers = [];

var format_FolosintaTerenurilorExtravilan_0 = new ol.format.GeoJSON();
var features_FolosintaTerenurilorExtravilan_0 = format_FolosintaTerenurilorExtravilan_0.readFeatures(json_FolosintaTerenurilorExtravilan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FolosintaTerenurilorExtravilan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FolosintaTerenurilorExtravilan_0.addFeatures(features_FolosintaTerenurilorExtravilan_0);
var lyr_FolosintaTerenurilorExtravilan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FolosintaTerenurilorExtravilan_0, 
                style: style_FolosintaTerenurilorExtravilan_0,
                popuplayertitle: "Folosinta Terenurilor Extravilan",
                interactive: true,
    title: 'Folosinta Terenurilor Extravilan<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_0.png" /> Livezi<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_1.png" /> Pasuni permanente<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_2.png" /> Terenuri agricole<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_3.png" /> Cai de comunicatie<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_4.png" /> Mlastina<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_5.png" /> Paduri<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_6.png" /> Neproductiv<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_7.png" /> Ape<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_8.png" /> Ape - Albie Majora<br />\
    <img src="styles/legend/FolosintaTerenurilorExtravilan_0_9.png" /> <br />'
        });
var format_ZonificareFunctionalaExistenta_1 = new ol.format.GeoJSON();
var features_ZonificareFunctionalaExistenta_1 = format_ZonificareFunctionalaExistenta_1.readFeatures(json_ZonificareFunctionalaExistenta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonificareFunctionalaExistenta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonificareFunctionalaExistenta_1.addFeatures(features_ZonificareFunctionalaExistenta_1);
var lyr_ZonificareFunctionalaExistenta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonificareFunctionalaExistenta_1, 
                style: style_ZonificareFunctionalaExistenta_1,
                popuplayertitle: "Zonificare Functionala Existenta",
                interactive: true,
    title: 'Zonificare Functionala Existenta<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_0.png" /> Z.A.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_1.png" /> Z.C.f.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_2.png" /> Z.C.r.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_3.png" /> Z.G.C.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_4.png" /> Z.G.C.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_5.png" /> Z.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_6.png" /> Z.I.S.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_7.png" /> Z.I.S.S.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_8.png" /> Z.L.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_9.png" /> Z.L.M.r.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_10.png" /> Z.L.M.r.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_11.png" /> Z.P.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_12.png" /> Z.T.A.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_13.png" /> Z.T.E.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_14.png" /> Z.V.N.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_15.png" /> Z.I.S.c.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_16.png" /> Z.P.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_17.png" /> Z.T.E.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_18.png" /> Z.I.S.ct.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_19.png" /> Z.I.S.ct.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_20.png" /> Z.I.S.xx.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_21.png" /> Z.T.R.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_22.png" /> T.C.C.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_23.png" /> T.L.C.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_24.png" /> T.P.I.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_25.png" /> T.P.S.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_26.png" /> Z. L.Bl.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_27.png" /> Z.T.E.P.I.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaExistenta_1_28.png" /> <br />'
        });
var format_ZonificareFunctionalaReglementata_2 = new ol.format.GeoJSON();
var features_ZonificareFunctionalaReglementata_2 = format_ZonificareFunctionalaReglementata_2.readFeatures(json_ZonificareFunctionalaReglementata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonificareFunctionalaReglementata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonificareFunctionalaReglementata_2.addFeatures(features_ZonificareFunctionalaReglementata_2);
var lyr_ZonificareFunctionalaReglementata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonificareFunctionalaReglementata_2, 
                style: style_ZonificareFunctionalaReglementata_2,
                popuplayertitle: "Zonificare Functionala Reglementata",
                interactive: true,
    title: 'Zonificare Functionala Reglementata<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_0.png" /> Z.A.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_1.png" /> Z.C.f.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_2.png" /> Z.C.r.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_3.png" /> Z.G.C.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_4.png" /> Z.G.C.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_5.png" /> Z.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_6.png" /> Z.I.S.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_7.png" /> Z.I.S.S.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_8.png" /> Z.L.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_9.png" /> Z.L.M.r.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_10.png" /> Z.L.M.r.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_11.png" /> Z.P.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_12.png" /> Z.T.A.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_13.png" /> Z.T.E.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_14.png" /> Z.V.N.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_15.png" /> Z.I.S.c.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_16.png" /> Z.P.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_17.png" /> Z.T.E.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_18.png" /> Z.I.S.ct.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_19.png" /> Z.I.S.ct.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_20.png" /> Z.I.S.xx.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_21.png" /> Z.T.R.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_22.png" /> T.C.C.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_23.png" /> T.L.C.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_24.png" /> T.P.I.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_25.png" /> T.P.S.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_26.png" /> Z. L.Bl.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_27.png" /> Z.T.E.P.I.I.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_28.png" /> Z.I.S.p.<br />\
    <img src="styles/legend/ZonificareFunctionalaReglementata_2_29.png" /> <br />'
        });
var format_Reglementarisuplimentare_3 = new ol.format.GeoJSON();
var features_Reglementarisuplimentare_3 = format_Reglementarisuplimentare_3.readFeatures(json_Reglementarisuplimentare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reglementarisuplimentare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reglementarisuplimentare_3.addFeatures(features_Reglementarisuplimentare_3);
var lyr_Reglementarisuplimentare_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reglementarisuplimentare_3, 
                style: style_Reglementarisuplimentare_3,
                popuplayertitle: "Reglementari suplimentare",
                interactive: true,
    title: 'Reglementari suplimentare<br />\
    <img src="styles/legend/Reglementarisuplimentare_3_0.png" /> Zonă de protecție construcții și rețele tehnico-edilitare<br />\
    <img src="styles/legend/Reglementarisuplimentare_3_1.png" /> Zonă de protecție sanitară<br />\
    <img src="styles/legend/Reglementarisuplimentare_3_2.png" /> Zonă de siguranță și zonă de protecție căi de comunicații — circulații feroviare<br />\
    <img src="styles/legend/Reglementarisuplimentare_3_3.png" /> Zonă de siguranță și zonă de protecție căi de comunicații — circulații rutiere<br />\
    <img src="styles/legend/Reglementarisuplimentare_3_4.png" /> <br />'
        });
var format_LimitaIntravilanExistenta_4 = new ol.format.GeoJSON();
var features_LimitaIntravilanExistenta_4 = format_LimitaIntravilanExistenta_4.readFeatures(json_LimitaIntravilanExistenta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitaIntravilanExistenta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilanExistenta_4.addFeatures(features_LimitaIntravilanExistenta_4);
var lyr_LimitaIntravilanExistenta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilanExistenta_4, 
                style: style_LimitaIntravilanExistenta_4,
                popuplayertitle: "Limita Intravilan Existenta",
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilanExistenta_4.png" /> Limita Intravilan Existenta'
            });
var format_LimitaIntravilanPropusa_5 = new ol.format.GeoJSON();
var features_LimitaIntravilanPropusa_5 = format_LimitaIntravilanPropusa_5.readFeatures(json_LimitaIntravilanPropusa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitaIntravilanPropusa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilanPropusa_5.addFeatures(features_LimitaIntravilanPropusa_5);
var lyr_LimitaIntravilanPropusa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilanPropusa_5, 
                style: style_LimitaIntravilanPropusa_5,
                popuplayertitle: "Limita Intravilan Propusa",
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilanPropusa_5.png" /> Limita Intravilan Propusa'
            });
var format_Cladiri_6 = new ol.format.GeoJSON();
var features_Cladiri_6 = format_Cladiri_6.readFeatures(json_Cladiri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cladiri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cladiri_6.addFeatures(features_Cladiri_6);
var lyr_Cladiri_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cladiri_6,
maxResolution:2.8004466152261966,
 
                style: style_Cladiri_6,
                popuplayertitle: "Cladiri",
                interactive: true,
                title: '<img src="styles/legend/Cladiri_6.png" /> Cladiri'
            });
var format_LimitaUAT_7 = new ol.format.GeoJSON();
var features_LimitaUAT_7 = format_LimitaUAT_7.readFeatures(json_LimitaUAT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitaUAT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaUAT_7.addFeatures(features_LimitaUAT_7);
var lyr_LimitaUAT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaUAT_7, 
                style: style_LimitaUAT_7,
                popuplayertitle: "Limita UAT",
                interactive: false,
                title: '<img src="styles/legend/LimitaUAT_7.png" /> Limita UAT'
            });

lyr_FolosintaTerenurilorExtravilan_0.setVisible(true);lyr_ZonificareFunctionalaExistenta_1.setVisible(false);lyr_ZonificareFunctionalaReglementata_2.setVisible(true);lyr_Reglementarisuplimentare_3.setVisible(false);lyr_LimitaIntravilanExistenta_4.setVisible(false);lyr_LimitaIntravilanPropusa_5.setVisible(true);lyr_Cladiri_6.setVisible(true);lyr_LimitaUAT_7.setVisible(true);
var layersList = [lyr_FolosintaTerenurilorExtravilan_0,lyr_ZonificareFunctionalaExistenta_1,lyr_ZonificareFunctionalaReglementata_2,lyr_Reglementarisuplimentare_3,lyr_LimitaIntravilanExistenta_4,lyr_LimitaIntravilanPropusa_5,lyr_Cladiri_6,lyr_LimitaUAT_7];
lyr_FolosintaTerenurilorExtravilan_0.set('fieldAliases', {'Zona': 'Zona', });
lyr_ZonificareFunctionalaExistenta_1.set('fieldAliases', {'UTR': 'UTR', 'Cod Zona': 'Cod Zona', 'Descriere': 'Descriere', });
lyr_ZonificareFunctionalaReglementata_2.set('fieldAliases', {'UTR': 'UTR', 'Cod Zona': 'Cod Zona', 'Descriere': 'Descriere', });
lyr_Reglementarisuplimentare_3.set('fieldAliases', {'Tip zona': 'Tip zona', 'Informatii': 'Informatii', });
lyr_LimitaIntravilanExistenta_4.set('fieldAliases', {});
lyr_LimitaIntravilanPropusa_5.set('fieldAliases', {'Denumire': 'Denumire', });
lyr_Cladiri_6.set('fieldAliases', {});
lyr_LimitaUAT_7.set('fieldAliases', {'DENUMIRE': 'DENUMIRE', 'SIRUTA': 'SIRUTA', });
lyr_FolosintaTerenurilorExtravilan_0.set('fieldImages', {'Zona': 'TextEdit', });
lyr_ZonificareFunctionalaExistenta_1.set('fieldImages', {'UTR': 'TextEdit', 'Cod Zona': 'TextEdit', 'Descriere': 'TextEdit', });
lyr_ZonificareFunctionalaReglementata_2.set('fieldImages', {'UTR': 'TextEdit', 'Cod Zona': 'TextEdit', 'Descriere': 'TextEdit', });
lyr_Reglementarisuplimentare_3.set('fieldImages', {'Tip zona': 'TextEdit', 'Informatii': 'TextEdit', });
lyr_LimitaIntravilanExistenta_4.set('fieldImages', {});
lyr_LimitaIntravilanPropusa_5.set('fieldImages', {'Denumire': 'TextEdit', });
lyr_Cladiri_6.set('fieldImages', {});
lyr_LimitaUAT_7.set('fieldImages', {'DENUMIRE': 'TextEdit', 'SIRUTA': 'TextEdit', });
lyr_FolosintaTerenurilorExtravilan_0.set('fieldLabels', {'Zona': 'inline label - always visible', });
lyr_ZonificareFunctionalaExistenta_1.set('fieldLabels', {'UTR': 'no label', 'Cod Zona': 'inline label - always visible', 'Descriere': 'inline label - always visible', });
lyr_ZonificareFunctionalaReglementata_2.set('fieldLabels', {'UTR': 'no label', 'Cod Zona': 'inline label - always visible', 'Descriere': 'inline label - always visible', });
lyr_Reglementarisuplimentare_3.set('fieldLabels', {'Tip zona': 'inline label - always visible', 'Informatii': 'inline label - always visible', });
lyr_LimitaIntravilanExistenta_4.set('fieldLabels', {});
lyr_LimitaIntravilanPropusa_5.set('fieldLabels', {'Denumire': 'no label', });
lyr_Cladiri_6.set('fieldLabels', {});
lyr_LimitaUAT_7.set('fieldLabels', {'DENUMIRE': 'no label', 'SIRUTA': 'no label', });
lyr_LimitaUAT_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});