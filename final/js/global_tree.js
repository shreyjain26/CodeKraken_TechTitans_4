var treeCover = ee.Image('UMD/hansen/global_forest_change_2015').select('treecover2000');


Map.addLayer(treeCover, {min: 0, max: 100, palette: ['000000', '00FF00']}, 'Tree Cover');


Map.setCenter(-95.738,37.964,3);