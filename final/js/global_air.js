var airQuality = ee.ImageCollection("COPERNICUS/S5P/NRTI/L3_NO2")
    .filterDate("2022-01-01", "2022-12-31");

var no2 = airQuality.select("NO2_column_number_density");
var airQualityVis = {
  min: 0,
  max: 0.00015,
  palette: ["purple", "blue", "cyan", "lime", "yellow", "red"]
};

Map.addLayer(no2.mean(), airQualityVis, "Air Quality");

Map.setCenter(16.3738,48.2093,5);