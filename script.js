

const userInput = document.getElementById("userInput");
const cityElement = document.getElementById("searchedCity");
const weatherIconElement = document.getElementById("weather-icon");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const indexUVElement = document.getElementById("indexUV");


let APIKey = '9df96d10ddb6902ee29290be45dda446'
let city = "";


let previousSearches = [];

// previousSearchList();
// initialize();


searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);


// I want to replace the city with localStorage previous search or window.location (latitude and longitude) 
// location.assign(?)
// location.replace(?);

// function previousSearchList() {
//   previousSearches = JSON.parse(localStorage.getItem("searches"));
//   if(previousSearches)
//   {
//       for(let i = 0; i < previousSearches.length; i++) {
//           $('#past-search-' + i).text(previousSearches[i]);
//       }
//   }
// }

// function initialize()
// {
    // if(previousSearches)
    // {
    //     city = previousSearches[0];
    //     grabCity(city);
    //     console.log("Looking for previous city")
    //     console.log(city)
    // }
    // else if(navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position);
    // }

    // function position(position) {
    //     lat = position.coords.latitude;
    //     long = position.coords.longitude;

    //     let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + APIKey;

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       }).then(function(response) {
    //         console.log(response);
    //         console.log("Need to add response to side column")
    //         loadFiveDayForecast();
    //         setNewWeatherKeyValues();
    //         addToPrev();
    //       });
    //     }
    //   }
          


// Weather Search and Five Day Forecast API calls:
let api = 'http://www.openweather.com'
let searchCity = 'userInput'
let units = '&units=metric'

function searchUserInput() {
  event.preventDefault();
  let searchCity = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    cityElement.innerHTML = searchCity;
    $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
    temperatureElement.innerHTML = `Temperature: ${response.main.temp} F`;
    humidityElement.innerHTML = `Humidity: ${response.main.humidity}`;
    windSpeedElement.innerHTML = `Wind Speed: ${response.wind.speed}`;

  });  
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
    
    
    for(let i = 0; i < 5; i++)
    {
      let day = '.day-' + (i + 1);
      console.log(day);
      let forecastDay = $(day).children();
      console.log(forecastDay);
      let dateText = response.list[i * 8].dt_txt.split(" ");
      let splitDate = dateText[0].split("-");
      let m = splitDate[1];
      let d = splitDate[2];
        let y = splitDate[0];
        
        
        $(forecastDay[0]).text(m + "/" + d + "/" + y);
        $(forecastDay[1]).attr("src", "http://openweathermap.org/img/wn/" + response.list[i * 8].weather[0].icon + ".png");
        $(forecastDay[2]).text("Temp: " + response.list[i * 8].main.temp);
        $(forecastDay[3]).text("Humidity: " + response.list[i * 8].main.humidity);
      }
    });
  };
  
  
  // create empty Array
  // get input value push input to array
  // set value in array
  //innerhtml
  
  
  function addToPrev (cityName, add) { // function to keep the array list for local storage
    let length;
    
    if(add) { // boolean value to check if we want to add (if the user clicks on a previous search, don't add to the list)
    
    console.log(add);
    
    if(previousSearches != null)
    {
      length = previousSearches.length;
    }
    
    if(length === 8)
    {
      if(previousSearches[0] === cityName) {
        return;
      }
      previousSearches.pop();
      previousSearches.unshift(cityName);
    }
    else if(length)
    {
      if(previousSearches[0] === cityName) {
        return;
      }
      previousSearches.unshift(cityName);
    }
    else {
      previousSearches = [];
      previousSearches.push(cityName);
    }
    
    let json = JSON.stringify(previousSearches);
    localStorage.setItem("searches", json);
    
  }
}







