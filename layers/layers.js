var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_Histo_1940_1 = new ol.format.GeoJSON();
var features_Histo_1940_1 = format_Histo_1940_1.readFeatures(json_Histo_1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Histo_1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Histo_1940_1.addFeatures(features_Histo_1940_1);
var lyr_Histo_1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Histo_1940_1, 
                style: style_Histo_1940_1,
                popuplayertitle: 'Histo_1940',
                interactive: true,
                title: '<img src="styles/legend/Histo_1940_1.png" /> Histo_1940'
            });
var format_VMAP_2 = new ol.format.GeoJSON();
var features_VMAP_2 = format_VMAP_2.readFeatures(json_VMAP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP_2.addFeatures(features_VMAP_2);
var lyr_VMAP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP_2, 
                style: style_VMAP_2,
                popuplayertitle: 'VMAP',
                interactive: true,
                title: '<img src="styles/legend/VMAP_2.png" /> VMAP'
            });
var format_Sentinel2_3 = new ol.format.GeoJSON();
var features_Sentinel2_3 = format_Sentinel2_3.readFeatures(json_Sentinel2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2_3.addFeatures(features_Sentinel2_3);
var lyr_Sentinel2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2_3, 
                style: style_Sentinel2_3,
                popuplayertitle: 'Sentinel2',
                interactive: true,
                title: '<img src="styles/legend/Sentinel2_3.png" /> Sentinel2'
            });
var format_Porwnanieprocentowerzekinalata19902026_4 = new ol.format.GeoJSON();
var features_Porwnanieprocentowerzekinalata19902026_4 = format_Porwnanieprocentowerzekinalata19902026_4.readFeatures(json_Porwnanieprocentowerzekinalata19902026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porwnanieprocentowerzekinalata19902026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porwnanieprocentowerzekinalata19902026_4.addFeatures(features_Porwnanieprocentowerzekinalata19902026_4);
var lyr_Porwnanieprocentowerzekinalata19902026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Porwnanieprocentowerzekinalata19902026_4, 
                style: style_Porwnanieprocentowerzekinalata19902026_4,
                popuplayertitle: 'Porównanie procentowe rzeki na lata 1990-2026',
                interactive: true,
    title: 'Porównanie procentowe rzeki na lata 1990-2026<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_2.png" /> -20%- 0%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_3.png" /> 0%- 20%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_4.png" /> 20%- 60%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19902026_4_5.png" /> 60%- 100%<br />' });
var format_ObszarwystepowaniaBugu_5 = new ol.format.GeoJSON();
var features_ObszarwystepowaniaBugu_5 = format_ObszarwystepowaniaBugu_5.readFeatures(json_ObszarwystepowaniaBugu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszarwystepowaniaBugu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszarwystepowaniaBugu_5.addFeatures(features_ObszarwystepowaniaBugu_5);
var lyr_ObszarwystepowaniaBugu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszarwystepowaniaBugu_5, 
                style: style_ObszarwystepowaniaBugu_5,
                popuplayertitle: 'Obszar wystepowania Bugu',
                interactive: true,
                title: '<img src="styles/legend/ObszarwystepowaniaBugu_5.png" /> Obszar wystepowania Bugu'
            });
var format_Porwnanieprocentowerzekinalata19401990_6 = new ol.format.GeoJSON();
var features_Porwnanieprocentowerzekinalata19401990_6 = format_Porwnanieprocentowerzekinalata19401990_6.readFeatures(json_Porwnanieprocentowerzekinalata19401990_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porwnanieprocentowerzekinalata19401990_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porwnanieprocentowerzekinalata19401990_6.addFeatures(features_Porwnanieprocentowerzekinalata19401990_6);
var lyr_Porwnanieprocentowerzekinalata19401990_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Porwnanieprocentowerzekinalata19401990_6, 
                style: style_Porwnanieprocentowerzekinalata19401990_6,
                popuplayertitle: 'Porównanie procentowe rzeki na lata 1940-1990',
                interactive: true,
    title: 'Porównanie procentowe rzeki na lata 1940-1990<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Porwnanieprocentowerzekinalata19401990_6_5.png" /> 60%- 100%<br />' });
var format_ObszarstaegowystpowaniaBugu_7 = new ol.format.GeoJSON();
var features_ObszarstaegowystpowaniaBugu_7 = format_ObszarstaegowystpowaniaBugu_7.readFeatures(json_ObszarstaegowystpowaniaBugu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszarstaegowystpowaniaBugu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszarstaegowystpowaniaBugu_7.addFeatures(features_ObszarstaegowystpowaniaBugu_7);
var lyr_ObszarstaegowystpowaniaBugu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszarstaegowystpowaniaBugu_7, 
                style: style_ObszarstaegowystpowaniaBugu_7,
                popuplayertitle: 'Obszar stałego występowania Bugu',
                interactive: true,
                title: '<img src="styles/legend/ObszarstaegowystpowaniaBugu_7.png" /> Obszar stałego występowania Bugu'
            });

lyr_Raster_0.setVisible(true);lyr_Histo_1940_1.setVisible(true);lyr_VMAP_2.setVisible(true);lyr_Sentinel2_3.setVisible(true);lyr_Porwnanieprocentowerzekinalata19902026_4.setVisible(true);lyr_ObszarwystepowaniaBugu_5.setVisible(true);lyr_Porwnanieprocentowerzekinalata19401990_6.setVisible(true);lyr_ObszarstaegowystpowaniaBugu_7.setVisible(true);
var layersList = [lyr_Raster_0,lyr_Histo_1940_1,lyr_VMAP_2,lyr_Sentinel2_3,lyr_Porwnanieprocentowerzekinalata19902026_4,lyr_ObszarwystepowaniaBugu_5,lyr_Porwnanieprocentowerzekinalata19401990_6,lyr_ObszarstaegowystpowaniaBugu_7];
lyr_Histo_1940_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'pole': 'pole', 'obwod': 'obwod', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'NAZWA': 'NAZWA', });
lyr_VMAP_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'pole': 'pole', 'obwod': 'obwod', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'nazwa_1': 'nazwa_1', });
lyr_Sentinel2_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'pole': 'pole', 'obwod': 'obwod', 'pole2': 'pole2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Nazwa': 'Nazwa', });
lyr_Porwnanieprocentowerzekinalata19902026_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'ROZNICA_HIS_VMAPA': 'ROZNICA_HIS_VMAPA', 'ROZNICA_VMAPA_SENTINEL': 'ROZNICA_VMAPA_SENTINEL', 'HIS': 'HIS', 'VMAP': 'VMAP', 'SENTINEL': 'SENTINEL', 'HIS_1940': 'HIS_1940', 'VMAP_1990': 'VMAP_1990', 'OBJECTID_1': 'OBJECTID', 'GRID_ID_1': 'GRID_ID', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1_1': 'OBJECTID', 'GRID_ID_12': 'GRID_ID', 'AREA_1': 'AREA', 'PERCENTAGE_1': 'PERCENTAGE', 'OBJECTID_1_12': 'OBJECTID', 'GRID_ID_12_13': 'GRID_ID', 'AREA_12': 'AREA', 'PERCENTAGE_12': 'PERCENTAGE', 'OBJECTID_1_12_13': 'OBJECTID', 'SIATKA_GRID_ID': 'GRID_ID', 'AREA_12_13': 'AREA', 'PERCENTAGE_12_13': 'PERCENTAGE', 'OBJECTID_1_12_13_14': 'OBJECTID', 'SIATKA_GRID_ID_1': 'GRID_ID', 'AREA_12_13_14': 'AREA', 'PERCENTAGE_12_13_14': 'PERCENTAGE', 'Roznica_histi_vmapa': 'Roznica_histi_vmapa', 'Roznica_vmapa_senti': 'Roznica_vmapa_senti', 'OBJECTID_1_12_13_14_15': 'OBJECTID', 'SIATKA_GRID_ID_12': 'GRID_ID', 'AREA_12_13_14_15': 'AREA', 'PERCENTAGE_12_13_14_15': 'PERCENTAGE_2026', 'SENTINEL_2026': 'SENTINEL_2026', 'Róznica_1940_1990': 'Róznica_1940_1990', 'Róznica_1990_2026': 'Róznica_1990_2026', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ObszarwystepowaniaBugu_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RasterT_Reclas_SmoothPolygon': 'FID_RasterT_Reclas_SmoothPolygon', 'Id': 'Id', 'gridcode': 'gridcode', 'pole': 'pole', 'obwod': 'obwod', 'pole2': 'pole2', 'FID_CALY_BUG': 'FID_CALY_BUG', 'Id_1': 'Id', 'pole_1': 'pole', 'obwod_1': 'obwod', 'FID_HYDRO_WODY_VMAPA_Clip': 'FID_HYDRO_WODY_VMAPA_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID', 'pole_12': 'pole', 'obwod_12': 'obwod', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Porwnanieprocentowerzekinalata19401990_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'ROZNICA_HIS_VMAPA': 'ROZNICA_HIS_VMAPA', 'ROZNICA_VMAPA_SENTINEL': 'ROZNICA_VMAPA_SENTINEL', 'HIS': 'HIS', 'VMAP': 'VMAP', 'SENTINEL': 'SENTINEL', 'HIS_1940': 'HIS_1940', 'VMAP_1990': 'VMAP_1990', 'OBJECTID_1': 'OBJECTID', 'GRID_ID_1': 'GRID_ID', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1_1': 'OBJECTID', 'GRID_ID_12': 'GRID_ID', 'AREA_1': 'AREA', 'PERCENTAGE_1': 'PERCENTAGE', 'OBJECTID_1_12': 'OBJECTID', 'GRID_ID_12_13': 'GRID_ID', 'AREA_12': 'AREA', 'PERCENTAGE_12': 'PERCENTAGE', 'OBJECTID_1_12_13': 'OBJECTID', 'SIATKA_GRID_ID': 'GRID_ID', 'AREA_12_13': 'AREA', 'PERCENTAGE_12_13': 'PERCENTAGE', 'OBJECTID_1_12_13_14': 'OBJECTID', 'SIATKA_GRID_ID_1': 'GRID_ID', 'AREA_12_13_14': 'AREA', 'PERCENTAGE_12_13_14': 'PERCENTAGE', 'Roznica_histi_vmapa': 'Roznica_histi_vmapa', 'Roznica_vmapa_senti': 'Roznica_vmapa_senti', 'OBJECTID_1_12_13_14_15': 'OBJECTID', 'SIATKA_GRID_ID_12': 'GRID_ID', 'AREA_12_13_14_15': 'AREA', 'PERCENTAGE_12_13_14_15': 'PERCENTAGE_2026', 'SENTINEL_2026': 'SENTINEL_2026', 'Róznica_1940_1990': 'Róznica_1940_1990', 'Róznica_1990_2026': 'Róznica_1990_2026', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ObszarstaegowystpowaniaBugu_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RasterT_Reclas_SmoothPolygon': 'FID_RasterT_Reclas_SmoothPolygon', 'Id': 'Id', 'gridcode': 'gridcode', 'pole': 'pole', 'obwod': 'obwod', 'pole2': 'pole2', 'FID_HYDRO_WODY_VMAPA_Clip': 'FID_HYDRO_WODY_VMAPA_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID', 'pole_1': 'pole', 'obwod_1': 'obwod', 'FID_CALY_BUG': 'FID_CALY_BUG', 'Id_12': 'Id', 'pole_12': 'pole', 'obwod_12': 'obwod', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Histo_1940_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'pole': 'Range', 'obwod': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAZWA': 'TextEdit', });
lyr_VMAP_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'nazwa_1': 'TextEdit', });
lyr_Sentinel2_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'pole2': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nazwa': 'TextEdit', });
lyr_Porwnanieprocentowerzekinalata19902026_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'ROZNICA_HIS_VMAPA': 'Range', 'ROZNICA_VMAPA_SENTINEL': 'Range', 'HIS': 'Range', 'VMAP': 'Range', 'SENTINEL': 'Range', 'HIS_1940': 'TextEdit', 'VMAP_1990': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTAGE_1': 'TextEdit', 'OBJECTID_1_12': 'Range', 'GRID_ID_12_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTAGE_12': 'TextEdit', 'OBJECTID_1_12_13': 'Range', 'SIATKA_GRID_ID': 'TextEdit', 'AREA_12_13': 'TextEdit', 'PERCENTAGE_12_13': 'TextEdit', 'OBJECTID_1_12_13_14': 'Range', 'SIATKA_GRID_ID_1': 'TextEdit', 'AREA_12_13_14': 'TextEdit', 'PERCENTAGE_12_13_14': 'TextEdit', 'Roznica_histi_vmapa': 'TextEdit', 'Roznica_vmapa_senti': 'TextEdit', 'OBJECTID_1_12_13_14_15': 'Range', 'SIATKA_GRID_ID_12': 'TextEdit', 'AREA_12_13_14_15': 'TextEdit', 'PERCENTAGE_12_13_14_15': 'TextEdit', 'SENTINEL_2026': 'TextEdit', 'Róznica_1940_1990': 'Range', 'Róznica_1990_2026': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ObszarwystepowaniaBugu_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RasterT_Reclas_SmoothPolygon': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'pole2': 'Range', 'FID_CALY_BUG': 'Range', 'Id_1': 'Range', 'pole_1': 'Range', 'obwod_1': 'Range', 'FID_HYDRO_WODY_VMAPA_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'Range', 'pole_12': 'TextEdit', 'obwod_12': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Porwnanieprocentowerzekinalata19401990_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'ROZNICA_HIS_VMAPA': 'Range', 'ROZNICA_VMAPA_SENTINEL': 'Range', 'HIS': 'Range', 'VMAP': 'Range', 'SENTINEL': 'Range', 'HIS_1940': 'TextEdit', 'VMAP_1990': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTAGE_1': 'TextEdit', 'OBJECTID_1_12': 'Range', 'GRID_ID_12_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTAGE_12': 'TextEdit', 'OBJECTID_1_12_13': 'Range', 'SIATKA_GRID_ID': 'TextEdit', 'AREA_12_13': 'TextEdit', 'PERCENTAGE_12_13': 'TextEdit', 'OBJECTID_1_12_13_14': 'Range', 'SIATKA_GRID_ID_1': 'TextEdit', 'AREA_12_13_14': 'TextEdit', 'PERCENTAGE_12_13_14': 'TextEdit', 'Roznica_histi_vmapa': 'TextEdit', 'Roznica_vmapa_senti': 'TextEdit', 'OBJECTID_1_12_13_14_15': 'Range', 'SIATKA_GRID_ID_12': 'TextEdit', 'AREA_12_13_14_15': 'TextEdit', 'PERCENTAGE_12_13_14_15': 'TextEdit', 'SENTINEL_2026': 'TextEdit', 'Róznica_1940_1990': 'Range', 'Róznica_1990_2026': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ObszarstaegowystpowaniaBugu_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RasterT_Reclas_SmoothPolygon': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'pole2': 'Range', 'FID_HYDRO_WODY_VMAPA_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'Range', 'pole_1': 'TextEdit', 'obwod_1': 'TextEdit', 'FID_CALY_BUG': 'Range', 'Id_12': 'Range', 'pole_12': 'Range', 'obwod_12': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Histo_1940_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'pole': 'hidden field', 'obwod': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'NAZWA': 'hidden field', });
lyr_VMAP_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID': 'inline label - always visible', 'pole': 'hidden field', 'obwod': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'nazwa_1': 'hidden field', });
lyr_Sentinel2_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - visible with data', 'pole': 'hidden field', 'obwod': 'hidden field', 'pole2': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Nazwa': 'inline label - always visible', });
lyr_Porwnanieprocentowerzekinalata19902026_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'ROZNICA_HIS_VMAPA': 'hidden field', 'ROZNICA_VMAPA_SENTINEL': 'hidden field', 'HIS': 'hidden field', 'VMAP': 'hidden field', 'SENTINEL': 'hidden field', 'HIS_1940': 'hidden field', 'VMAP_1990': 'hidden field', 'OBJECTID_1': 'hidden field', 'GRID_ID_1': 'hidden field', 'AREA': 'hidden field', 'PERCENTAGE': 'hidden field', 'OBJECTID_1_1': 'hidden field', 'GRID_ID_12': 'hidden field', 'AREA_1': 'hidden field', 'PERCENTAGE_1': 'hidden field', 'OBJECTID_1_12': 'hidden field', 'GRID_ID_12_13': 'hidden field', 'AREA_12': 'hidden field', 'PERCENTAGE_12': 'hidden field', 'OBJECTID_1_12_13': 'hidden field', 'SIATKA_GRID_ID': 'hidden field', 'AREA_12_13': 'hidden field', 'PERCENTAGE_12_13': 'hidden field', 'OBJECTID_1_12_13_14': 'hidden field', 'SIATKA_GRID_ID_1': 'hidden field', 'AREA_12_13_14': 'hidden field', 'PERCENTAGE_12_13_14': 'hidden field', 'Roznica_histi_vmapa': 'hidden field', 'Roznica_vmapa_senti': 'hidden field', 'OBJECTID_1_12_13_14_15': 'hidden field', 'SIATKA_GRID_ID_12': 'hidden field', 'AREA_12_13_14_15': 'hidden field', 'PERCENTAGE_12_13_14_15': 'hidden field', 'SENTINEL_2026': 'hidden field', 'Róznica_1940_1990': 'inline label - always visible', 'Róznica_1990_2026': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszarwystepowaniaBugu_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_RasterT_Reclas_SmoothPolygon': 'no label', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'pole': 'hidden field', 'obwod': 'hidden field', 'pole2': 'hidden field', 'FID_CALY_BUG': 'hidden field', 'Id_1': 'hidden field', 'pole_1': 'hidden field', 'obwod_1': 'hidden field', 'FID_HYDRO_WODY_VMAPA_Clip': 'hidden field', 'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'hidden field', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID_12': 'hidden field', 'pole_12': 'hidden field', 'obwod_12': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Porwnanieprocentowerzekinalata19401990_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'ROZNICA_HIS_VMAPA': 'hidden field', 'ROZNICA_VMAPA_SENTINEL': 'hidden field', 'HIS': 'hidden field', 'VMAP': 'hidden field', 'SENTINEL': 'hidden field', 'HIS_1940': 'hidden field', 'VMAP_1990': 'hidden field', 'OBJECTID_1': 'hidden field', 'GRID_ID_1': 'hidden field', 'AREA': 'hidden field', 'PERCENTAGE': 'hidden field', 'OBJECTID_1_1': 'hidden field', 'GRID_ID_12': 'hidden field', 'AREA_1': 'hidden field', 'PERCENTAGE_1': 'hidden field', 'OBJECTID_1_12': 'hidden field', 'GRID_ID_12_13': 'hidden field', 'AREA_12': 'hidden field', 'PERCENTAGE_12': 'hidden field', 'OBJECTID_1_12_13': 'hidden field', 'SIATKA_GRID_ID': 'hidden field', 'AREA_12_13': 'hidden field', 'PERCENTAGE_12_13': 'hidden field', 'OBJECTID_1_12_13_14': 'hidden field', 'SIATKA_GRID_ID_1': 'hidden field', 'AREA_12_13_14': 'hidden field', 'PERCENTAGE_12_13_14': 'hidden field', 'Roznica_histi_vmapa': 'hidden field', 'Roznica_vmapa_senti': 'hidden field', 'OBJECTID_1_12_13_14_15': 'hidden field', 'SIATKA_GRID_ID_12': 'hidden field', 'AREA_12_13_14_15': 'hidden field', 'PERCENTAGE_12_13_14_15': 'hidden field', 'SENTINEL_2026': 'hidden field', 'Róznica_1940_1990': 'inline label - always visible', 'Róznica_1990_2026': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszarstaegowystpowaniaBugu_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_RasterT_Reclas_SmoothPolygon': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'pole': 'hidden field', 'obwod': 'hidden field', 'pole2': 'hidden field', 'FID_HYDRO_WODY_VMAPA_Clip': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'inline label - always visible', 'ID_1': 'hidden field', 'pole_1': 'hidden field', 'obwod_1': 'hidden field', 'FID_CALY_BUG': 'hidden field', 'Id_12': 'hidden field', 'pole_12': 'hidden field', 'obwod_12': 'hidden field', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszarstaegowystpowaniaBugu_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});