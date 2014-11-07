define([
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer'
 //   'esri/layers/osm'
], function (Basemap, BasemapLayer) {
    return {
        map: true, // needs a refrence to the map
        mode: 'custom', //must be either 'agol' or 'custom'
        title: 'Basemaps', // tilte for widget
        mapStartBasemap: 'streets', // must match one of the basemap keys below
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?
        basemapsToShow: ['streets', 'satellite', 'anno'],

        // define all valid custom basemaps here. Object of Basemap objects. For custom basemaps, the key name and basemap id must match.
        basemaps: { // agol basemaps
        
            
            streets: {
                title: 'Streets',
                basemap: new Basemap({
                    id: 'streets',
                    layers: [new BasemapLayer({
                        url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/scpaZoomGrid_WM/MapServer'
                    }), new BasemapLayer ({
                        url: 'https://ags2.scgov.net/arcgis/rest/services/CachedMapServices/SarasotaCountyStreetsWM/MapServer'
                    }), new BasemapLayer({
                        url: 'https://ags2.scgov.net/arcgis/rest/services/CachedMapServices/SarasotaCountyBaseMapWM/MapServer'
                    })]
                })
            },
            satellite: {
                title: '2014 Aerial',
                basemap: new Basemap({
                    id: 'satellite',
                    layers: [new BasemapLayer({
                        url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/scpaZoomGrid_WM/MapServer'
                    }), new BasemapLayer({
                        url: 'https://ags2.scgov.net/arcgis/rest/services/ImageServices/SC2014/ImageServer'
                    })

                    ]
                })
            }
            
            
             }

        };


     });
//});

//  hybrid: { 
// 63                 title: 'Hybrid', 
// 64                 basemap: new Basemap({ 
// 65                     id: 'hybrid', 
// 66                     layers: [new BasemapLayer({ 
// 67                         url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' 
// 68                     }), new BasemapLayer({ 
// 69                         url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer', 
// 70                         isReference: true, 
// 71                         displayLevels: [0, 1, 2, 3, 4, 5, 6, 7] 
// 72                     }), new BasemapLayer({ 
// 73                         url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer', 
// 74                         isReference: true, 
// 75                         displayLevels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 
// 76                     })] 
// 77                 }) 
// 78             }, 
