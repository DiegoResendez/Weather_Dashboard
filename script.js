

const searchButton = document.getElementById("searchButton");
const weatherCard = document.getElementById("weatherCard");
const searchedCity = document.getElementById("searchedCity");
const temperature = document.getElementById("temperature");
const lineThree = document.getElementById("lineThree");
const cardHeader = document.getElementById("cardHeader");
const bottomForm = document.getElementById("bottomForm");
const weatherImage = document.getElementById("weatherImage");
const humidity = document.getElementById("humidity");
const placeholder = document.getElementById("placeholder");
const pastSearches = document.getElementById("pastSearches");
const citySearch = document.getElementById("citySearch");
const searchInput = document.getElementById("searchInput");
const userInput = document.getElementById("userInput");
const searchBarAndPastSearches = document.getElementById("searchBarAndPastSearches");
const currentWeatherValuesList = document.getElementById("returnValuesList");
const pastSearchesTextArea = document.getElementById("pastSearchesTextArea");
const currentCityWeather = document.getElementById("currentCityWeather");
const forecastNextFiveDays = document.getElementById("forecastNextFiveDays");



searchButton.addEventListener("click", searchUserInput);
// searchButton.addEventListener("click", currentWeatherData);
// searchButton.addEventListener("click", currentWeatherData);
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

// API call:
// let citySearch = api.openweathermap.org/data/2.5/weather?q=userInput&appid="9df96d10ddb6902ee29290be45dda446";

// let cityStateSearch = api.openweathermap.org/data/2.5/weather?q=userInput&appid="9df96d10ddb6902ee29290be45dda446";

// weatherAPIKey: "9df96d10ddb6902ee29290be45dda446"

// let fiveDayForecast = api.openweathermap.org/data/2.5/forecast?q={city name}&appid="9df96d10ddb6902ee29290be45dda446"

// let cityStateFiveDayForecast = api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid="9df96d10ddb6902ee29290be45dda446"



function searchUserInput(){
	let city = $(this).attr("#userInput");
	let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9df96d10ddb6902ee29290be45dda446";

	$ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response){
	console.log(response)
});

// let cardObjects = window.location.assign("API Strings?");
// let currentWeatherValues = ["city", "date", "temperature", "humidity", "wind-speed", "uv-index"]
// let apiKeys = {"city": "", "date": "", "temperature": "", "humidity": "", "wind-speed": "", "uv-index": ""}
// let apiSource = "https//:api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid={9df96d10ddb6902ee29290be45dda446";


// function createWeatherCard(){
// let newSearch = {};

// 	for(i = 0; i < currentWeatherValues.length; i++){
// 	let newWeatherCard = currentWeatherValues[i];
// 	let node = document.createElement("li");
// 	let textnode = document.createTextNode(newWeatherCard);
// 	node.appendChild(textnode);
// 	currentWeatherValuesList.appendChild(node);
// 	console.log(newWeatherCard)
// 	}
// }

// create object values for returnValues and add to localStorage


// let newCardValues = {[returnValues.value] : [newapiValues]};

// Create 5-Day Forecast

// function pullFiveDayForecast(){
// let} ;

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

// I have no clue what the fuck is going on.  