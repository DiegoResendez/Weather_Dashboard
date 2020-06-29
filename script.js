


const userInput = document.getElementById("userInput");
const cityElement = document.getElementById("searchedCity");
const weatherIconElement = document.getElementById("weather-icon");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const indexUVElement = document.getElementById("indexUV");


let APIKey = '9df96d10ddb6902ee29290be45dda446'
let city = "";
let lat, long;
let previousSearches = [];


searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);

//City Search Function
function searchUserInput() {
  event.preventDefault();
  let searchCity = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    cityElement.innerHTML = searchCity.toUpperCase();
    $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
    temperatureElement.innerHTML = `Temperature: ${response.main.temp} F`;
    humidityElement.innerHTML = `Humidity: ${response.main.humidity}`;
    windSpeedElement.innerHTML = `Wind Speed: ${response.wind.speed}`;
    // indexUVElement.innerHTML = `UV Index: `
  });  
};


//5-Day Forecast Function
function fiveDayForecastSearch(){
  event.preventDefault();
  getCity();
  addToCityList();
  // previousSearchList();
  // UVIndex();
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


// create empty Array  -- previousSearches = [];

function getCity(){
  let newCity = userInput.value
  // console.log(newCity)
}
// get input value push input to array
// set value in array
//innerhtml
function addToCityList (newCity, add) { // function to keep the array list for local storage
  let length;
  
  if(add) { // boolean value to check if we want to add (if the user clicks on a previous search, don't add to the list)
  
  console.log(add);
  
  if(previousSearches != null)
  {
    length = previousSearches.length;
  }
  
  if(length === 8)
  {
    if(previousSearches[0] === newCity) {
      return;
    }
    previousSearches.pop();
    previousSearches.unshift(newCity);
  }
  else if(length)
  {
    if(previousSearches[0] === newCity) {
      return;
    }
    previousSearches.unshift(newCity);
  }
  else {
    previousSearches = [];
    previousSearches.push(newCity);
  }
  
  var json = JSON.stringify(previousSearches);
  localStorage.setItem("searches", json);
  
}
}


function previousSearchList() {
  previousSearches = JSON.parse(localStorage.getItem("searches"));
  if(previousSearches)
  console.log(previousSearches);
  {
    for(let i = 0; i < previousSearches.length; i++) {
      $('#past-search-' + i).text(previousSearches[i]);
    }
  }
}




// function UVIndex (lat, long){
  //   console.log("UVIndex");
  //   let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + APIKey;

//   $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);

//     //console.log("UVI: " + response.value);

//     var uvi = response.value;
//     var uviFloor = Math.floor(uvi);
//     var cityDiv = $(".city").children();
    
//     var low = "badge-success";
//     var mod = "badge-warning";
//     var hi = "badge-hi"; // css class bg-orange!
//     var vhi = "badge-danger"; 
//     var extreme = "badge-extreme"; // css class bg-purple

//     if(uviFloor <= 2) {
//         $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + low + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
//     }
//     else if(uviFloor >= 3 && uviFloor <= 5) {
//         $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + mod + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
//     }
//     else if(uviFloor >= 6 && uviFloor <= 7) {
//         $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + hi + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
//     }
//     else if(uviFloor >= 8 && uviFloor <= 10) {
//         $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + vhi + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
//     }
//     else if(uviFloor >= 11) {
//         $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + extreme + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
//     }
// });
// }









