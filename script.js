

const userInput = document.getElementById("userInput");
const cityElement = document.getElementById("searchedCity");
const weatherIconElement = document.getElementById("weather-icon");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const indexUVElement = document.getElementById("indexUV");
const previousSearchesElement = document.getElementById("previousSearchList");



let city = "";
let lat, long;
let previousSearches = [];
let cityArray = JSON.parse(localStorage.getItem("searches"));
if(cityArray){
  previousSearches = cityArray;
  for(let i = 0; i < previousSearches.length; i++) {
    let node = document.createElement("li");
    node.classList.add("list-group-item");
    node.innerHTML = previousSearches[i];
    previousSearchesElement.appendChild(node);
    }
}

searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);


function searchUserInput() {  //City Search Function
  event.preventDefault();
  let searchCity = $("#userInput").val().toUpperCase();
  if(previousSearches.length == 10){
    previousSearches.shift();
    previousSearchesElement.removeChild(previousSearchesElement.getElementsByTagName("li")[0]);           // Remove <ul>'s first child node (index 0)
    console.log(previousSearchesElement);
  };
  previousSearches.push(searchCity);
  localStorage.setItem("searches", JSON.stringify(previousSearches));

     let node = document.createElement("li");
    node.innerHTML = searchCity;
    node.classList.add("list-group-item");
    previousSearchesElement.appendChild(node); 
  // console.log(previousSearches);

  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    cityElement.innerHTML = searchCity.toUpperCase();

    $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");

    lat = response.coord.lat;
    long = response.coord.lon;

UVIndex(lat, long);

    temperatureElement.innerHTML = `Temperature: ${response.main.temp} F`;
    humidityElement.innerHTML = `Humidity: ${response.main.humidity}`;
    windSpeedElement.innerHTML = `Wind Speed: ${response.wind.speed}`;
  });
};

function fiveDayForecastSearch() { //5-Day Forecast Function
  event.preventDefault();
  let fiveDayForecast = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${fiveDayForecast}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
      
    for (let i = 0; i < 5; i++) {
      let day = '.day-' + (i + 1);
      // console.log(day);
      let forecastDay = $(day).children();
      // console.log(forecastDay);
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

  function UVIndex(lat, long) {
    let queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat="
    + lat + "&lon=" + long + "&appid=9df96d10ddb6902ee29290be45dda446";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response, "UVIndex");
      
      //console.log("UVI: " + response.value);
      indexUVElement.innerHTML = `UV Index: ${response.value}`;
      
      let uvi = response.value;
      let uviFloor = Math.floor(uvi);
      let cityDiv = $(".city").children();
      
      let low = "badge-success";
      let mod = "badge-warning";
      let hi = "badge-hi"; // css class bg-orange!
      let vhi = "badge-danger";
      let extreme = "badge-extreme"; // css class bg-purple
      
      if (uviFloor <= 2) {
        $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + low + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
      }
      else if (uviFloor >= 3 && uviFloor <= 5) {
        $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + mod + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
      }
      else if (uviFloor >= 6 && uviFloor <= 7) {
        $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + hi + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
      }
      else if (uviFloor >= 8 && uviFloor <= 10) {
        $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + vhi + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
      }
      else if (uviFloor >= 11) {
        $(cityDiv[4]).html("<p mb-0>UV Index: " + "<span class=\"text-white badge " + extreme + "\" + style=\"font-size: 16px;\">" + uvi + "</span></p>");
      }
    });
  }
