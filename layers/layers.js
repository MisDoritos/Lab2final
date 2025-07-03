ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([661071.576101, 5917178.198568, 690120.568993, 5932894.448569]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunas_1 = new ol.format.GeoJSON();
var features_Comunas_1 = format_Comunas_1.readFeatures(json_Comunas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Comunas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_1.addFeatures(features_Comunas_1);
var lyr_Comunas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunas_1, 
                style: style_Comunas_1,
                popuplayertitle: 'Comunas',
                interactive: true,
                title: '<img src="styles/legend/Comunas_1.png" /> Comunas'
            });
var format_Barrios_2 = new ol.format.GeoJSON();
var features_Barrios_2 = format_Barrios_2.readFeatures(json_Barrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Barrios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_2.addFeatures(features_Barrios_2);
var lyr_Barrios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_2, 
                style: style_Barrios_2,
                popuplayertitle: 'Barrios',
                interactive: true,
                title: '<img src="styles/legend/Barrios_2.png" /> Barrios'
            });
var format_PuntosTuristicos_3 = new ol.format.GeoJSON();
var features_PuntosTuristicos_3 = format_PuntosTuristicos_3.readFeatures(json_PuntosTuristicos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PuntosTuristicos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosTuristicos_3.addFeatures(features_PuntosTuristicos_3);
cluster_PuntosTuristicos_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PuntosTuristicos_3
});
var lyr_PuntosTuristicos_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PuntosTuristicos_3, 
                style: style_PuntosTuristicos_3,
                popuplayertitle: 'Puntos Turisticos',
                interactive: true,
    title: 'Puntos Turisticos<br />\
    <img src="styles/legend/PuntosTuristicos_3_0.png" /> El Morro<br />\
    <img src="styles/legend/PuntosTuristicos_3_1.png" /> Estadio El Morro<br />\
    <img src="styles/legend/PuntosTuristicos_3_2.png" /> Estadio Ester Roa<br />\
    <img src="styles/legend/PuntosTuristicos_3_3.png" /> Estadio Tomé<br />\
    <img src="styles/legend/PuntosTuristicos_3_4.png" /> Estatua Ben Brereton<br />\
    <img src="styles/legend/PuntosTuristicos_3_5.png" /> Jurel gigante<br />\
    <img src="styles/legend/PuntosTuristicos_3_6.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/PuntosTuristicos_3_7.png" /> Laguna Tres Pascualas<br />\
    <img src="styles/legend/PuntosTuristicos_3_8.png" /> Mina Chiflon del Diablo<br />\
    <img src="styles/legend/PuntosTuristicos_3_9.png" /> Mirador Los Pinos<br />\
    <img src="styles/legend/PuntosTuristicos_3_10.png" /> Museo Historico Lota<br />\
    <img src="styles/legend/PuntosTuristicos_3_11.png" /> Parque Laguna Redonda<br />\
    <img src="styles/legend/PuntosTuristicos_3_12.png" /> Tribunales<br />\
    <img src="styles/legend/PuntosTuristicos_3_13.png" /> Cerro Amarillo Concepción<br />\
    <img src="styles/legend/PuntosTuristicos_3_14.png" /> Cerro Amarillo Hualpén<br />\
    <img src="styles/legend/PuntosTuristicos_3_15.png" /> Club Hípico<br />\
    <img src="styles/legend/PuntosTuristicos_3_16.png" /> Plaza de armas Concepción<br />\
    <img src="styles/legend/PuntosTuristicos_3_17.png" /> Plaza Perú<br />\
    <img src="styles/legend/PuntosTuristicos_3_18.png" /> Vega monumental Hualpén<br />\
    <img src="styles/legend/PuntosTuristicos_3_19.png" /> Zoologico Nonguén<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Comunas_1.setVisible(true);lyr_Barrios_2.setVisible(true);lyr_PuntosTuristicos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Comunas_1,lyr_Barrios_2,lyr_PuntosTuristicos_3];
lyr_Comunas_1.set('fieldAliases', {'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', });
lyr_Barrios_2.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_PuntosTuristicos_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Comuna': 'Comuna', 'Barrio': 'Barrio', 'Video': 'Video', 'x': 'x', 'y': 'y', });
lyr_Comunas_1.set('fieldImages', {'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_Barrios_2.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_PuntosTuristicos_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Comuna': 'TextEdit', 'Barrio': 'TextEdit', 'Video': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Comunas_1.set('fieldLabels', {'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', });
lyr_Barrios_2.set('fieldLabels', {'Nombre': 'no label', });
lyr_PuntosTuristicos_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Video': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_PuntosTuristicos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});