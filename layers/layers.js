var wms_layers = [];


        var lyr_PETA_0 = new ol.layer.Tile({
            'title': 'PETA',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SATELITDANPETA_1 = new ol.layer.Tile({
            'title': 'SATELIT DAN PETA',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SATELIT_2 = new ol.layer.Tile({
            'title': 'SATELIT',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASKELURAHAN_3 = new ol.format.GeoJSON();
var features_BATASKELURAHAN_3 = format_BATASKELURAHAN_3.readFeatures(json_BATASKELURAHAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKELURAHAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKELURAHAN_3.addFeatures(features_BATASKELURAHAN_3);
var lyr_BATASKELURAHAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASKELURAHAN_3, 
                style: style_BATASKELURAHAN_3,
                interactive: true,
                title: '<img src="styles/legend/BATASKELURAHAN_3.png" /> BATAS KELURAHAN'
            });
var format_PONDOKCINA_4 = new ol.format.GeoJSON();
var features_PONDOKCINA_4 = format_PONDOKCINA_4.readFeatures(json_PONDOKCINA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PONDOKCINA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PONDOKCINA_4.addFeatures(features_PONDOKCINA_4);
var lyr_PONDOKCINA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PONDOKCINA_4, 
                style: style_PONDOKCINA_4,
                interactive: true,
                title: '<img src="styles/legend/PONDOKCINA_4.png" /> PONDOK CINA'
            });
var format_BEJI_5 = new ol.format.GeoJSON();
var features_BEJI_5 = format_BEJI_5.readFeatures(json_BEJI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEJI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEJI_5.addFeatures(features_BEJI_5);
var lyr_BEJI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEJI_5, 
                style: style_BEJI_5,
                interactive: true,
                title: '<img src="styles/legend/BEJI_5.png" /> BEJI'
            });
var format_DEPOK_6 = new ol.format.GeoJSON();
var features_DEPOK_6 = format_DEPOK_6.readFeatures(json_DEPOK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPOK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPOK_6.addFeatures(features_DEPOK_6);
var lyr_DEPOK_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPOK_6, 
                style: style_DEPOK_6,
                interactive: true,
                title: '<img src="styles/legend/DEPOK_6.png" /> DEPOK'
            });
var format_DEPOKJAYA_7 = new ol.format.GeoJSON();
var features_DEPOKJAYA_7 = format_DEPOKJAYA_7.readFeatures(json_DEPOKJAYA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPOKJAYA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPOKJAYA_7.addFeatures(features_DEPOKJAYA_7);
var lyr_DEPOKJAYA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPOKJAYA_7, 
                style: style_DEPOKJAYA_7,
                interactive: true,
                title: '<img src="styles/legend/DEPOKJAYA_7.png" /> DEPOK JAYA'
            });
var format_KEMIRIMUKA_8 = new ol.format.GeoJSON();
var features_KEMIRIMUKA_8 = format_KEMIRIMUKA_8.readFeatures(json_KEMIRIMUKA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEMIRIMUKA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEMIRIMUKA_8.addFeatures(features_KEMIRIMUKA_8);
var lyr_KEMIRIMUKA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEMIRIMUKA_8, 
                style: style_KEMIRIMUKA_8,
                interactive: true,
                title: '<img src="styles/legend/KEMIRIMUKA_8.png" /> KEMIRI MUKA'
            });

lyr_PETA_0.setVisible(false);lyr_SATELITDANPETA_1.setVisible(false);lyr_SATELIT_2.setVisible(true);lyr_BATASKELURAHAN_3.setVisible(true);lyr_PONDOKCINA_4.setVisible(false);lyr_BEJI_5.setVisible(false);lyr_DEPOK_6.setVisible(false);lyr_DEPOKJAYA_7.setVisible(false);lyr_KEMIRIMUKA_8.setVisible(false);
var layersList = [lyr_PETA_0,lyr_SATELITDANPETA_1,lyr_SATELIT_2,lyr_BATASKELURAHAN_3,lyr_PONDOKCINA_4,lyr_BEJI_5,lyr_DEPOK_6,lyr_DEPOKJAYA_7,lyr_KEMIRIMUKA_8];
lyr_BATASKELURAHAN_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_PONDOKCINA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_NOP': 'D_NOP', 'D_LUAS': 'D_LUAS', 'KD_PROPINS': 'KD_PROPINS', 'KD_DATI2': 'KD_DATI2', 'KD_KECAMAT': 'KD_KECAMAT', 'KD_KELURAH': 'KD_KELURAH', 'KD_BLOK': 'KD_BLOK', 'NO_URUT': 'NO_URUT', 'D_NOP_1': 'D_NOP_1', 'KD_JNS_OP': 'KD_JNS_OP', 'NM_WP_SPPT': 'NM_WP_SPPT', 'JLN_WP_SPP': 'JLN_WP_SPP', 'BLOK_KAV_N': 'BLOK_KAV_N', 'RW_WP_SPPT': 'RW_WP_SPPT', 'RT_WP_SPPT': 'RT_WP_SPPT', 'KELURAHAN_': 'KELURAHAN_', 'KOTA_WP_SP': 'KOTA_WP_SP', 'JALAN_OP': 'JALAN_OP', 'BLOK_KAV_1': 'BLOK_KAV_1', 'RW_OP': 'RW_OP', 'RT_OP': 'RT_OP', 'LUAS_BUMI_': 'LUAS_BUMI_', 'LUAS_BNG_S': 'LUAS_BNG_S', 'NJOP_BUMI_': 'NJOP_BUMI_', 'NJOP_BNG_S': 'NJOP_BNG_S', 'KD_ZNT': 'KD_ZNT', 'NIR': 'NIR', 'NOP5DIGIT': 'NOP5DIGIT', });
lyr_BEJI_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_NOP': 'D_NOP', 'D_LUAS': 'D_LUAS', 'ASR': 'ASR', 'label': 'label', 'KELURAHAN': 'KELURAHAN', });
lyr_DEPOK_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'd_nop': 'd_nop', 'd_luas': 'd_luas', 'ASR': 'ASR', 'label': 'label', 'KELURAHAN': 'KELURAHAN', });
lyr_DEPOKJAYA_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'd_nop': 'd_nop', 'd_luas': 'd_luas', 'label': 'label', 'KELURAHAN': 'KELURAHAN', });
lyr_KEMIRIMUKA_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_NOP': 'D_NOP', 'D_LUAS': 'D_LUAS', 'LABEL': 'LABEL', 'KELURAHAN': 'KELURAHAN', });
lyr_BATASKELURAHAN_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_PONDOKCINA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'D_NOP': 'TextEdit', 'D_LUAS': 'TextEdit', 'KD_PROPINS': 'TextEdit', 'KD_DATI2': 'TextEdit', 'KD_KECAMAT': 'TextEdit', 'KD_KELURAH': 'TextEdit', 'KD_BLOK': 'TextEdit', 'NO_URUT': 'TextEdit', 'D_NOP_1': 'TextEdit', 'KD_JNS_OP': 'TextEdit', 'NM_WP_SPPT': 'TextEdit', 'JLN_WP_SPP': 'TextEdit', 'BLOK_KAV_N': 'TextEdit', 'RW_WP_SPPT': 'TextEdit', 'RT_WP_SPPT': 'TextEdit', 'KELURAHAN_': 'TextEdit', 'KOTA_WP_SP': 'TextEdit', 'JALAN_OP': 'TextEdit', 'BLOK_KAV_1': 'TextEdit', 'RW_OP': 'TextEdit', 'RT_OP': 'TextEdit', 'LUAS_BUMI_': 'TextEdit', 'LUAS_BNG_S': 'TextEdit', 'NJOP_BUMI_': 'TextEdit', 'NJOP_BNG_S': 'TextEdit', 'KD_ZNT': 'TextEdit', 'NIR': 'TextEdit', 'NOP5DIGIT': 'TextEdit', });
lyr_BEJI_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'D_NOP': 'TextEdit', 'D_LUAS': 'TextEdit', 'ASR': 'TextEdit', 'label': 'TextEdit', 'KELURAHAN': 'TextEdit', });
lyr_DEPOK_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'd_nop': 'TextEdit', 'd_luas': 'TextEdit', 'ASR': 'TextEdit', 'label': 'TextEdit', 'KELURAHAN': 'TextEdit', });
lyr_DEPOKJAYA_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'd_nop': 'TextEdit', 'd_luas': 'TextEdit', 'label': 'TextEdit', 'KELURAHAN': 'TextEdit', });
lyr_KEMIRIMUKA_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'D_NOP': 'TextEdit', 'D_LUAS': 'TextEdit', 'LABEL': 'TextEdit', 'KELURAHAN': 'TextEdit', });
lyr_BATASKELURAHAN_3.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', });
lyr_PONDOKCINA_4.set('fieldLabels', {'OBJECTID': 'inline label', 'D_NOP': 'inline label', 'D_LUAS': 'inline label', 'KD_PROPINS': 'inline label', 'KD_DATI2': 'inline label', 'KD_KECAMAT': 'inline label', 'KD_KELURAH': 'inline label', 'KD_BLOK': 'inline label', 'NO_URUT': 'inline label', 'D_NOP_1': 'inline label', 'KD_JNS_OP': 'inline label', 'NM_WP_SPPT': 'inline label', 'JLN_WP_SPP': 'inline label', 'BLOK_KAV_N': 'inline label', 'RW_WP_SPPT': 'inline label', 'RT_WP_SPPT': 'inline label', 'KELURAHAN_': 'inline label', 'KOTA_WP_SP': 'inline label', 'JALAN_OP': 'inline label', 'BLOK_KAV_1': 'inline label', 'RW_OP': 'inline label', 'RT_OP': 'inline label', 'LUAS_BUMI_': 'inline label', 'LUAS_BNG_S': 'inline label', 'NJOP_BUMI_': 'inline label', 'NJOP_BNG_S': 'inline label', 'KD_ZNT': 'inline label', 'NIR': 'inline label', 'NOP5DIGIT': 'inline label', });
lyr_BEJI_5.set('fieldLabels', {'OBJECTID': 'inline label', 'D_NOP': 'inline label', 'D_LUAS': 'inline label', 'ASR': 'inline label', 'label': 'inline label', 'KELURAHAN': 'inline label', });
lyr_DEPOK_6.set('fieldLabels', {'OBJECTID': 'inline label', 'd_nop': 'inline label', 'd_luas': 'inline label', 'ASR': 'inline label', 'label': 'inline label', 'KELURAHAN': 'inline label', });
lyr_DEPOKJAYA_7.set('fieldLabels', {'OBJECTID': 'inline label', 'd_nop': 'inline label', 'd_luas': 'inline label', 'label': 'inline label', 'KELURAHAN': 'inline label', });
lyr_KEMIRIMUKA_8.set('fieldLabels', {'OBJECTID': 'inline label', 'D_NOP': 'inline label', 'D_LUAS': 'inline label', 'LABEL': 'inline label', 'KELURAHAN': 'inline label', });
lyr_KEMIRIMUKA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});