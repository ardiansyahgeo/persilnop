var wms_layers = [];


        var lyr_HYBRID_0 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CITRASATELIT_2 = new ol.layer.Tile({
            'title': 'CITRA SATELIT',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_batas_kelurahan_3 = new ol.format.GeoJSON();
var features_batas_kelurahan_3 = format_batas_kelurahan_3.readFeatures(json_batas_kelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kelurahan_3.addFeatures(features_batas_kelurahan_3);
var lyr_batas_kelurahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kelurahan_3, 
                style: style_batas_kelurahan_3,
                interactive: true,
                title: '<img src="styles/legend/batas_kelurahan_3.png" /> batas_kelurahan'
            });
var format_PersilBejiTimur_4 = new ol.format.GeoJSON();
var features_PersilBejiTimur_4 = format_PersilBejiTimur_4.readFeatures(json_PersilBejiTimur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersilBejiTimur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersilBejiTimur_4.addFeatures(features_PersilBejiTimur_4);
var lyr_PersilBejiTimur_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PersilBejiTimur_4, 
                style: style_PersilBejiTimur_4,
                interactive: true,
                title: '<img src="styles/legend/PersilBejiTimur_4.png" /> Persil Beji Timur'
            });
var format_PersilBeji_5 = new ol.format.GeoJSON();
var features_PersilBeji_5 = format_PersilBeji_5.readFeatures(json_PersilBeji_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersilBeji_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersilBeji_5.addFeatures(features_PersilBeji_5);
var lyr_PersilBeji_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PersilBeji_5, 
                style: style_PersilBeji_5,
                interactive: true,
                title: '<img src="styles/legend/PersilBeji_5.png" /> Persil Beji'
            });

lyr_HYBRID_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CITRASATELIT_2.setVisible(true);lyr_batas_kelurahan_3.setVisible(true);lyr_PersilBejiTimur_4.setVisible(false);lyr_PersilBeji_5.setVisible(false);
var layersList = [lyr_HYBRID_0,lyr_OpenStreetMap_1,lyr_CITRASATELIT_2,lyr_batas_kelurahan_3,lyr_PersilBejiTimur_4,lyr_PersilBeji_5];
lyr_batas_kelurahan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_PersilBejiTimur_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_NOP': 'D_NOP', 'D_LUAS': 'D_LUAS', });
lyr_PersilBeji_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_NOP': 'D_NOP', 'D_LUAS': 'D_LUAS', 'ASR': 'ASR', });
lyr_batas_kelurahan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_PersilBejiTimur_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'D_NOP': 'TextEdit', 'D_LUAS': 'TextEdit', });
lyr_PersilBeji_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'D_NOP': 'TextEdit', 'D_LUAS': 'TextEdit', 'ASR': 'TextEdit', });
lyr_batas_kelurahan_3.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', });
lyr_PersilBejiTimur_4.set('fieldLabels', {'OBJECTID': 'inline label', 'D_NOP': 'inline label', 'D_LUAS': 'inline label', });
lyr_PersilBeji_5.set('fieldLabels', {'OBJECTID': 'inline label', 'D_NOP': 'inline label', 'D_LUAS': 'inline label', 'ASR': 'inline label', });
lyr_PersilBeji_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});