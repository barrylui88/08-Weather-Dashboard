// Links to HTML
let searchForm = $("#search-form");
let searchInput = $("#search-input");
let searchButton = $("#search-button");
let todaySection = $("#today");
let cityNameDateText = $("#city-name-date");
let todayTempText = $("#today-temperature");
let todayWindText = $("#today-wind");
let todayHumidityText = $("#today-humidity");
let dayPlus1Date = $("#day-plus-1-date");
let dayPlus1Temp = $("#day-plus-1-temperature");
let dayPlus1Wind = $("#day-plus-1-wind");
let dayPlus1Humidity = $("#day-plus-1-humidity");
let dayPlus2Date = $("#day-plus-2-date");
let dayPlus2Temp = $("#day-plus-2-temperature");
let dayPlus2Wind = $("#day-plus-2-wind");
let dayPlus2Humidity = $("#day-plus-2-humidity");
let dayPlus3Date = $("#day-plus-3-date");
let dayPlus3Temp = $("#day-plus-3-temperature");
let dayPlus3Wind = $("#day-plus-3-wind");
let dayPlus3Humidity = $("#day-plus-3-humidity");
let dayPlus4Date = $("#day-plus-4-date");
let dayPlus4Temp = $("#day-plus-4-temperature");
let dayPlus4Wind = $("#day-plus-4-wind");
let dayPlus4Humidity = $("#day-plus-4-humidity");
let dayPlus5Date = $("#day-plus-5-date");
let dayPlus5Temp = $("#day-plus-5-temperature");
let dayPlus5Wind = $("#day-plus-5-wind");
let dayPlus5Humidity = $("#day-plus-5-humidity");

// Event Listeners
searchButton.click(function (event) {
    event.preventDefault();
    queryTerm = searchInput.val();
    callAPI();
});

// JS Variables
let responseCityNameDate;
let responseTodayTemperature;
let responseTodayWind;
let responseTodayHumidity;
let responseForecastDay1Date;
let responseForecastDay1Temperature;
let responseForecastDay1Wind;
let responseForecastDay1Humidity;
let responseForecastDay2Date;
let responseForecastDay2Temperature;
let responseForecastDay2Wind;
let responseForecastDay2Humidity;
let responseForecastDay3Date;
let responseForecastDay3Temperature;
let responseForecastDay3Wind;
let responseForecastDay3Humidity;
let responseForecastDay4Date;
let responseForecastDay4Temperature;
let responseForecastDay4Wind;
let responseForecastDay4Humidity;
let responseForecastDay5Date;
let responseForecastDay5Temperature;
let responseForecastDay5Wind;
let responseForecastDay5Humidity;

// API URL Construction
// TODAY SECTION
let queryURLTop = "https://api.openweathermap.org/data/2.5/weather?q=";
let queryTerm; // e.g. London
let queryURLBottom = "&appid=";
let APIKey = "1f171651aeaa44734ffe7198c60a1f2c";
// FORECAST SECTION
let queryForecastURLTop = "http://api.openweathermap.org/data/2.5/forecast?q=";

function callAPI () {
    // Today URL
    apiCall = $.ajax({
        url: queryURLTop + queryTerm + queryURLBottom + APIKey,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        responseCityNameDate = `${response["name"]}, ${response["sys"]["country"]}`;
        responseTodayTemperature = response["main"]["temp"];
        responseTodayWind = response["wind"]["speed"];
        responseTodayHumidity = response["main"]["humidity"];
        updateScreen();

    })
    // Forecast URL
    apiCall = $.ajax({
        url: queryForecastURLTop + queryTerm + queryURLBottom + APIKey,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        responseForecastDay1Date = response["list"][7]["dt_txt"];
        responseForecastDay1Temperature = response["list"][7]["main"]["temp"];
        responseForecastDay1Wind = response["list"][7]["wind"]["speed"];
        responseForecastDay1Humidity = response["list"][7]["main"]["humidity"];
        responseForecastDay2Date = response["list"][15]["dt_txt"];
        responseForecastDay2Temperature = response["list"][15]["main"]["temp"];
        responseForecastDay2Wind = response["list"][15]["wind"]["speed"];
        responseForecastDay2Humidity = response["list"][15]["main"]["humidity"];
        responseForecastDay3Date = response["list"][23]["dt_txt"];
        responseForecastDay3Temperature = response["list"][23]["main"]["temp"];
        responseForecastDay3Wind = response["list"][23]["wind"]["speed"];
        responseForecastDay3Humidity = response["list"][23]["main"]["humidity"];
        responseForecastDay4Date = response["list"][31]["dt_txt"];
        responseForecastDay4Temperature = response["list"][31]["main"]["temp"];
        responseForecastDay4Wind = response["list"][31]["wind"]["speed"];
        responseForecastDay4Humidity = response["list"][31]["main"]["humidity"];
        responseForecastDay5Date = response["list"][39]["dt_txt"];
        responseForecastDay5Temperature = response["list"][39]["main"]["temp"];
        responseForecastDay5Wind = response["list"][39]["wind"]["speed"];
        responseForecastDay5Humidity = response["list"][39]["main"]["humidity"];
        updateScreen();
    })

}

// Functions
function updateScreen () {
    cityNameDateText.text(responseCityNameDate);
    todayTempText.text(`Temperature: ${Math.floor(responseTodayTemperature-273.15)}°C`);
    todayWindText.text(`Wind: ${responseTodayWind}kph`);
    todayHumidityText.text(`Humidity: ${responseTodayHumidity}%`);
    searchInput.val("");
    dayPlus1Date.text(responseForecastDay1Date);
    dayPlus1Temp.text(`Temperature: ${Math.floor(responseForecastDay1Temperature-273.15)}°C`);
    dayPlus1Wind.text(`Wind: ${responseForecastDay1Wind}kph`);
    dayPlus1Humidity.text(`Humidity: ${responseForecastDay1Humidity}%`);
    dayPlus2Date.text(responseForecastDay2Date);
    dayPlus2Temp.text(`Temperature: ${Math.floor(responseForecastDay2Temperature-273.15)}°C`);
    dayPlus2Wind.text(`Wind: ${responseForecastDay2Wind}kph`);
    dayPlus2Humidity.text(`Humidity: ${responseForecastDay2Humidity}%`);
    dayPlus3Date.text(responseForecastDay3Date);
    dayPlus3Temp.text(`Temperature: ${Math.floor(responseForecastDay3Temperature-273.15)}°C`);
    dayPlus3Wind.text(`Wind: ${responseForecastDay3Wind}kph`);
    dayPlus3Humidity.text(`Humidity: ${responseForecastDay3Humidity}%`);
    dayPlus4Date.text(responseForecastDay4Date);
    dayPlus4Temp.text(`Temperature: ${Math.floor(responseForecastDay4Temperature-273.15)}°C`);
    dayPlus4Wind.text(`Wind: ${responseForecastDay4Wind}kph`);
    dayPlus4Humidity.text(`Humidity: ${responseForecastDay4Humidity}%`);
    dayPlus5Date.text(responseForecastDay5Date);
    dayPlus5Temp.text(`Temperature: ${Math.floor(responseForecastDay5Temperature-273.15)}°C`);
    dayPlus5Wind.text(`Wind: ${responseForecastDay5Wind}kph`);
    dayPlus5Humidity.text(`Humidity: ${responseForecastDay5Humidity}%`);
}

// Function Calls