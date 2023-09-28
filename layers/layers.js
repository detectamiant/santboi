var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var lyr_STOrtofotocolor2022_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2022]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2022_1, 0]);
var format_Combinado_2 = new ol.format.GeoJSON();
var features_Combinado_2 = format_Combinado_2.readFeatures(json_Combinado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combinado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combinado_2.addFeatures(features_Combinado_2);
var lyr_Combinado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Combinado_2, 
                style: style_Combinado_2,
                interactive: true,
                title: '<img src="styles/legend/Combinado_2.png" /> Combinado'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,lyr_STOrtofotocolor2022_1,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_STOrtofotocolor2022_1.setVisible(true);lyr_Combinado_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_Combinado_2];
lyr_Combinado_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_Combinado_2.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'area': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Combinado_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Combinado_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});