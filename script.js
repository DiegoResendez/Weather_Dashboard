

const userInput = document.getElementById("userInput");
const cityElement = document.querySelector(".searchedCity");
const weatherIconElement = document.querySelector(".weather-icon");
const temperatureElement = document.querySelector(".tempetature");
const humidityElement = document.querySelector(".humidity");
const windSpeedElement = document.querySelector(".windSpeed");
const indexUVElement = document.querySelector(".indexUV");


let APIKey = '9df96d10ddb6902ee29290be45dda446'
let city = "";
// let lat = $(this.latitude);
// let lon = $(this.longitude);
// let date = moment().format("MM/DD/YYYY");

let previousSearches = [];

previousSearchList();
initialize();


searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);


// I want to replace the city with localStorage previous search or window.location (latitude and longitude) 
// location.assign(?)
// location.replace(?);

function previousSearchList() {
  previousSearches = JSON.parse(localStorage.getItem("searches"));
  if(previousSearches)
  {
      for(let i = 0; i < previousSearches.length; i++) {
          $('#past-search-' + i).text(previousSearches[i]);
      }
  }
}

function initialize()
{
    if(previousSearches)
    {
        city = previousSearches[0];
        grabCity(city);
        console.log("Script has been initialized")
        console.log(city)
    }
    else if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
    }

    function position(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log("Need to add response to side column")
            
            
        });
    }
}



// Weather Search and Five Day Forecast API calls:
let api = 'http://www.openweather.com'
let searchCity = 'userInput'
let units = '&units=metric'

function searchUserInput() {
  event.preventDefault();
  let searchCity = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;
  // console.log(city);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
  // function getWeather() {
  //   let url = api + input.value() + apiKey + units
  //   loadJSON(url, gotData);
  // }
  // setNewWeatherKeyValues();
  // displayWeather();
};

function fiveDayForecastSearch(){
  event.preventDefault();
	let fiveDayForecast = $("#userInput").val();
	let queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${fiveDayForecast}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;
  
	$.ajax({
    url: queryURL,
		method: "GET"
	}).then(function(response){
    console.log(response);
  });
  // function getWeather() {
  //   let url = api + input.value() + apiKey + units
  //   loadJSON(url, gotData);
  //   console.log("getWeather");
  // }
  loadFiveDayForecast();
  // getWeather();
};



let weatherKeyValues = {
  "city": "", "date": "", "temperature": "", "humidity": "",
  "wind-speed": "", "uv-index": "",
}

const weather = {
  city : "userInput",
  date : new Date().getHours(), 
  icon : "",
  temperature : {
    value : "",
    unit : "Fahrenheit"
  },
  humidity : "",
  windSpeed : "",
  indexUV : "",
}

// Create 5-Day Forecast
// create object values for returnValues and add to localStorage
  function setNewWeatherKeyValues(){
    console.log("Set New Weather Key Values");
    let newWeatherKeyValues = {};
    
    for(i = 0; i < weatherKeyValues.length; i++){
      let newWeatherKeyValues = weatherKeyValues[i];
      let node = document.createElement("li");
      let textnode = document.createTextNode(newWeatherKeyValues);
      node.appendChild(textnode);
      weatherCard.appendChild(node);
      console.log(weatherKeyValues)
    }
  }
  
  function loadFiveDayForecast(){
    console.log("Needs to create a new card for next five days")
    let newFiveDayForecast = {};
    
  //   for (i = 0; i < currentWeatherValues.length; i++) {
  //     let newWeatherCard = currentWeatherValues[i];
  //     let node = document.createElement("li");
  //     let textnode = document.createTextNode(newWeatherCard);
  //     node.appendChild(textnode);
  //     currentWeatherValuesList.appendChild(node);
  //     console.log(newWeatherCard)
  //   }
  }
  
  
  
  // function displayWeather() {
  //   cityElement.innerHTML =
  //   `${weather.city}, ${weather.country}`;
    
  //   weatherIconElement.innerHTML = 
  //     `${weather<img src = "" />`;
    
  //   temperatureElement.innerHTML =
  //   ${weather.temperature.value} degrees <span> Fahrenheit </span>`;
    
  //   humidityElement.innerHTML = 
  //   weather.humidity;
    
  //   windSpeedElement.innerHTML = 
  //   weather.windSpeed; 
    
  //   indexUVElement.innerHTML = 
  //   weather.indexUV;
  // }
  
  
  // function celciusToFahrenheit(temperature) {
  //   return (temperature * 9 / 5) + 32;
  //   console.log(temperature);
  // }

  
  
  
  
  

  
  
  
  
  