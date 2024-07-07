ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([401954.034118, 4068983.741992, 403737.325787, 4069950.000326]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_PLANTILLASUPVM13entities_1 = new ol.format.GeoJSON();
var features_PLANTILLASUPVM13entities_1 = format_PLANTILLASUPVM13entities_1.readFeatures(json_PLANTILLASUPVM13entities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PLANTILLASUPVM13entities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTILLASUPVM13entities_1.addFeatures(features_PLANTILLASUPVM13entities_1);
var lyr_PLANTILLASUPVM13entities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLANTILLASUPVM13entities_1, 
                style: style_PLANTILLASUPVM13entities_1,
                popuplayertitle: "PLANTILLA-SUPVM13 entities",
                interactive: true,
                title: '<img src="styles/legend/PLANTILLASUPVM13entities_1.png" /> PLANTILLA-SUPVM13 entities'
            });
var format_desmontesentities_2 = new ol.format.GeoJSON();
var features_desmontesentities_2 = format_desmontesentities_2.readFeatures(json_desmontesentities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_desmontesentities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desmontesentities_2.addFeatures(features_desmontesentities_2);
var lyr_desmontesentities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_desmontesentities_2, 
                style: style_desmontesentities_2,
                popuplayertitle: "desmontes entities",
                interactive: true,
                title: '<img src="styles/legend/desmontesentities_2.png" /> desmontes entities'
            });
var format_desmontesentities_3 = new ol.format.GeoJSON();
var features_desmontesentities_3 = format_desmontesentities_3.readFeatures(json_desmontesentities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_desmontesentities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desmontesentities_3.addFeatures(features_desmontesentities_3);
var lyr_desmontesentities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_desmontesentities_3, 
                style: style_desmontesentities_3,
                popuplayertitle: "desmontes entities",
                interactive: true,
                title: '<img src="styles/legend/desmontesentities_3.png" /> desmontes entities'
            });
var format_terraplenesentities_4 = new ol.format.GeoJSON();
var features_terraplenesentities_4 = format_terraplenesentities_4.readFeatures(json_terraplenesentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_terraplenesentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terraplenesentities_4.addFeatures(features_terraplenesentities_4);
var lyr_terraplenesentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_terraplenesentities_4, 
                style: style_terraplenesentities_4,
                popuplayertitle: "terraplenes entities",
                interactive: true,
                title: '<img src="styles/legend/terraplenesentities_4.png" /> terraplenes entities'
            });
var format_terraplenesentities_5 = new ol.format.GeoJSON();
var features_terraplenesentities_5 = format_terraplenesentities_5.readFeatures(json_terraplenesentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_terraplenesentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terraplenesentities_5.addFeatures(features_terraplenesentities_5);
var lyr_terraplenesentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_terraplenesentities_5, 
                style: style_terraplenesentities_5,
                popuplayertitle: "terraplenes entities",
                interactive: true,
                title: '<img src="styles/legend/terraplenesentities_5.png" /> terraplenes entities'
            });
var format_ejeacotadoentities_6 = new ol.format.GeoJSON();
var features_ejeacotadoentities_6 = format_ejeacotadoentities_6.readFeatures(json_ejeacotadoentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ejeacotadoentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeacotadoentities_6.addFeatures(features_ejeacotadoentities_6);
var lyr_ejeacotadoentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeacotadoentities_6, 
                style: style_ejeacotadoentities_6,
                popuplayertitle: "ejeacotado entities",
                interactive: true,
                title: '<img src="styles/legend/ejeacotadoentities_6.png" /> ejeacotado entities'
            });
var format_ejeacotadoentities_7 = new ol.format.GeoJSON();
var features_ejeacotadoentities_7 = format_ejeacotadoentities_7.readFeatures(json_ejeacotadoentities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ejeacotadoentities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeacotadoentities_7.addFeatures(features_ejeacotadoentities_7);
var lyr_ejeacotadoentities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeacotadoentities_7, 
                style: style_ejeacotadoentities_7,
                popuplayertitle: "ejeacotado entities",
                interactive: true,
                title: '<img src="styles/legend/ejeacotadoentities_7.png" /> ejeacotado entities'
            });
var lyr_Catastro_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?SRS%3DEPS%0AG:23029%26bbox%3D511950,4662900,512150,4663100%26width%3D756%26heig%0Aht%3D756%26transparent%3DNo%26layers%3Dcatastro",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_8, 0]);

lyr_Ortoimagen_0.setVisible(true);lyr_PLANTILLASUPVM13entities_1.setVisible(true);lyr_desmontesentities_2.setVisible(true);lyr_desmontesentities_3.setVisible(true);lyr_terraplenesentities_4.setVisible(true);lyr_terraplenesentities_5.setVisible(true);lyr_ejeacotadoentities_6.setVisible(true);lyr_ejeacotadoentities_7.setVisible(true);lyr_Catastro_8.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_PLANTILLASUPVM13entities_1,lyr_desmontesentities_2,lyr_desmontesentities_3,lyr_terraplenesentities_4,lyr_terraplenesentities_5,lyr_ejeacotadoentities_6,lyr_ejeacotadoentities_7,lyr_Catastro_8];
lyr_PLANTILLASUPVM13entities_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_desmontesentities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_desmontesentities_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_terraplenesentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_terraplenesentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeacotadoentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeacotadoentities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PLANTILLASUPVM13entities_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_desmontesentities_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_desmontesentities_3.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_terraplenesentities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_terraplenesentities_5.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ejeacotadoentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeacotadoentities_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PLANTILLASUPVM13entities_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_desmontesentities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_desmontesentities_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_terraplenesentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_terraplenesentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeacotadoentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeacotadoentities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeacotadoentities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});