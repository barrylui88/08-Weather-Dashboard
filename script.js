// Links to HTML
let searchForm = $("#search-form");
let searchInput = $("#search-input");
let searchButton = $("search-button");

// Event Listeners
searchForm.click(function (event) {
    event.preventDefault();
    queryTerm = searchInput.val();
    callAPI();
});

// JS Variables

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
        console.log(response)
    })
}

// Functions

// Function Calls