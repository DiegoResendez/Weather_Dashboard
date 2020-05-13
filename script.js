

const searchButton = document.getElementById("searchButton");
const weatherCard = document.getElementById("weatherCard");
const searchedCity = document.getElementById("searchedCity");
const temperature = document.getElementById("temperature");
const lineThree = document.getElementById("lineThree");
const currentWeatherValuesList = document.getElementById("returnValuesList");
const forecastNextFiveDays = document.getElementById("forecastNextFiveDays");


// searchButton.addEventListener("click", currentWeatherData);

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast




// function searchUserInput(){

// }

let cardObjects = window.location.assign("API Strings?");
let currentWeatherValues = ["city", "date", "temperature", "humidity", "wind-speed", "uv-index"]
let apiKeys = {"city": "", "date": "", "temperature": "", "humidity": "", "wind-speed": "", "uv-index": ""}
let apiSource = "http//:api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid={9df96d10ddb6902ee29290be45dda446";


function createWeatherCard(){
let newSearch = {};

	for(i = 0; i < currentWeatherValues.length; i++){
	let newWeatherCard = currentWeatherValues[i];
	let node = document.createElement("li");
	let textnode = document.createTextNode(newWeatherCard);
	node.appendChild(textnode);
	currentWeatherValuesList.appendChild(node);
	console.log(newWeatherCard)
	}
}

// create object values for returnValues and add to localStorage


function createObjectFromAPI(){
let newapiKeys = {};

	for(i = 0; i < apiKeys.length; i++){
	let newapiValues = apiKeys[i];
	let node = document.createElement("li");
	let textnode = document.createTextNode(newapiValues);
	node.appendChild(textnode);
	weatherCard.appendChild(node);
	console.log(newapiValues)
}
}


// let newCardValues = {[returnValues.value] : [newapiValues]};

// Create 5-Day Forecast

function pullFiveDayForecast(){
let 


}




let searchCityWeather = function(city){
	let queryURL = "http://api.Cityweathermap.org/data/2.5/weather?q=" + city + state + "&appid=9df96d10ddb6902ee29290be45dda446"
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response){
		createRow(response);
		console.log(response);
	});
};
$("#searchButton").click(searchCityWeather)




// API CALLS
// API key = 906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c

// let weatherURL = "https://home.openweathermap.org/api_keys"
// let api_keys = "9df96d10ddb6902ee29290be45dda446"

// let cityStateSearch = "http://api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}"

let currentWeatherData = function () {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "9df96d10ddb6902ee29290be45dda446"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#searchButton").click(currentWeatherData)
    


let fiveDayForcast = function () {

  let settings = {
	"async": true,
	"crossDomain": true,
	"url": "community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%252Cus",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "9df96d10ddb6902ee29290be45dda446"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
}
$("#searchButton").click(fiveDayForcast);
