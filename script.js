// Links to HTML
let searchForm = $("#search-form");
let searchInput = $("#search-input");
let searchButton = $("#search-button");
let todaySection = $("#today");
let cityNameDateText = $("#city-name-date");
let todayTempText = $("#today-temperature");
let todayWindText = $("#today-wind");
let todayHumidityText = $("#today-humidity");

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

// API URL Construction
let queryURLTop = "https://api.openweathermap.org/data/2.5/weather?q=";
let queryTerm; // e.g. London
let queryURLBottom = "&appid=";
let APIKey = "1f171651aeaa44734ffe7198c60a1f2c";

function callAPI () {
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
}

// Functions
function updateScreen () {
    cityNameDateText.text(responseCityNameDate);
    todayTempText.text(`Temperature: ${Math.floor(responseTodayTemperature-273.15)}°C`);
    todayWindText.text(`Wind: ${responseTodayWind}kph`);
    todayHumidityText.text(`Humidity: ${responseTodayHumidity}%`);
    searchInput.val("");
}

// Function Calls