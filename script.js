


//I want to combine document.getElementByID() and 
// document.getElementById("The newCity").style.textTransform = "uppercase";

const userInput = document.getElementById("userInput");
const cityElement = document.getElementById("searchedCity");
const weatherIconElement = document.getElementById("weather-icon");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const indexUVElement = document.getElementById("indexUV");



let city = "";
let lat, long;
let previousSearches = [];


searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);


function searchUserInput() {  //City Search Function
  event.preventDefault();
  let searchCity = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    cityElement.innerHTML = searchCity.toUpperCase();
    document.getElementById("past-search-0").innerHTML = searchCity.toUpperCase();

    $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");

    lat = response.coord.lat;
    long = response.coord.lon;

    temperatureElement.innerHTML = `Temperature: ${response.main.temp} F`;
    humidityElement.innerHTML = `Humidity: ${response.main.humidity}`;
    windSpeedElement.innerHTML = `Wind Speed: ${response.wind.speed}`;
    indexUVElement.innerHTML = `UV Index: `;
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
    // console.log(response);



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
  addToCityList();
  previousSearchList();
  // getPosition();
  // UVIndex();
};


// }
// get input value push input to array
// set value in array
//innerhtml
function addToCityList() { // function to keep the array list for local storage
  console.log("Add to City List")

  previousSearches = JSON.parse(localStorage.getItem("searches"));
  if (previousSearches) {
    for (let i = 0; i < previousSearches.length; i++) {
      $('#past-search-' + i).text(previousSearches[i]);
    }
  }
}


function previousSearchList() {
  console.log(previousSearches);
  // let previousSearchList = localStorage.getItem("previousSearches");
  
  // var json = JSON.stringify(previousSearches);
  // localStorage.setItem("searches", json);

  // if(previousSearches){
  //   previousSearches = JSON.parse(previousSearches);
  //   previousSearches.push(previousSearchList);
  // }

  // let cityList = document.getElementById("past-search-[i]").innerHTML;

  // for(let i = 0; i < cityList.length; i++) {
  //   let node = document.createElement("li");
  //   let textnode = document.createTextNode(cityList);
  //   node.appendChild(textnode);
  // }
}



  function getPosition(lat, long) {
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="
      + lat + "&lon=" + long + "&appid=9df96d10ddb6902ee29290be45dda446";
    console.log("Getting Lat and Long");

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });
  }

  function UVIndex() {
    console.log("UVIndex");
    let queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat="
      + lat + "&lon=" + long + "&appid=9df96d10ddb6902ee29290be45dda446";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      //console.log("UVI: " + response.value);

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








