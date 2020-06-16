

let APIKey = '9df96d10ddb6902ee29290be45dda446'


const userInput = document.getElementById("userInput");
const cityElement = document.querySelector(".searchedCity");
const weatherIconElement = document.querySelector(".weather-icon");
const temperatureElement = document.querySelector(".tempetature");
const humidityElement = document.querySelector(".humidity");
const windSpeedElement = document.querySelector(".windSpeed");
const indexUVElement = document.querySelector(".indexUV");


searchButton.addEventListener("click", fiveDayForecastSearch);
searchButton.addEventListener("click", searchUserInput);


// I want to replace the city with localStorage previous search or window.location (latitude and longitude) 
// location.assign(?)
// location.replace(?);

// function

// Weather Search and Five Day Forecast API calls:
let api = 'http://www.openweather.com'
let city = 'userInput'
let units = '&units=metric'

function searchUserInput() {
  event.preventDefault();
  let city = $("#userInput").val();
  let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9df96d10ddb6902ee29290be45dda446&units=imperial`;
  // console.log(city);
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
  function getWeather() {
    let url = api + input.value() + apiKey + units
    loadJSON(url, gotData);
  }
  setNewWeatherKeyValues();
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
  function getWeather() {
    let url = api + input.value() + apiKey + units
    loadJSON(url, gotData);
  }
};
// let cardObjects = window.location.assign("API Strings?");
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
      let newweatherKeyValues = weatherKeyValues[i];
      let node = document.createElement("li");
      let textnode = document.createTextNode(newweatherKeyValues);
      node.appendChild(textnode);
      weatherCard.appendChild(node);
      console.log(newweatherKeyValues)
    }
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
  
  // function checkTemperatureValue() {
    
  //   if (weather.temperature.value === undefined) return;
    
  //   if (weather.temperature.unit === "celcius") {
  //     let fahrenheit = celciusToFahrenheit(weather.temperature.value);
      
  //     fahrenheit = Math.floor(farenheit);
      
  //     temperatureElement.innerHTML = `S{fahrenheit} degrees <span> Fahrenheit </span>`;
      
  //     weather.temperature.unit == "fahrenheit"
      
  //   }
  //   else {
  //     temperatureElement.innerHTML = `${weather.temperature.value} degrees <span> Fahrenheit </span>`
  //   }
  // }
  
  
  function celciusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
    console.log(temperature);
  }
  
  function createWeatherCard() {
    let newSearch = {};
    
    for (i = 0; i < currentWeatherValues.length; i++) {
      let newWeatherCard = currentWeatherValues[i];
      let node = document.createElement("li");
      let textnode = document.createTextNode(newWeatherCard);
      node.appendChild(textnode);
      currentWeatherValuesList.appendChild(node);
      console.log(newWeatherCard)
    }
  }
  
  // let newCardValues = {[returnValues.value] : [newapiValues]};
  
  function setup() {
    
    let button = select('#submit');
    buttton.mousePressed(getWeather);
    
    input = select('#city')
  }
  

















//https://uwa.bootcampcontent.com/UWA-Bootcamp/uw-sea-fsf-pt-03-2020-u-c/blob/master/06-Server-Side-APIs/01-Activities/11-BandsInTownApp/Solved/bands-in-town-solved.html






//API activity 10
// https://uwa.bootcampcontent.com/UWA-Bootcamp/uw-sea-fsf-pt-03-2020-u-c/blob/master/06-Server-Side-APIs/01-Activities/10-WorkingMovieApp/Solved/working-movie-app-solved.html
// {
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // Initial array of movies
    var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayMovieInfo() {

      var movie = $(this).attr("data-name");
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"; }*/

        // // Creating an AJAX call for the specific movie button being clicked
        // $.ajax({
        //   url: queryURL,
        //   method: "GET"
        // }).then(function(response) {

          // Creating a div to hold the movie
        //   var movieDiv = $("<div class='movie'>");

          // Storing the rating data
        //   var rating = response.Rated;

          // Creating an element to have the rating displayed
        //   var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
        //   movieDiv.append(pOne);

          // Storing the release year
        //   var released = response.Released;

          // Creating an element to hold the release year
        //   var pTwo = $("<p>").text("Released: " + released);

          // Displaying the release year
        //   movieDiv.append(pTwo);

          // Storing the plot
        //   var plot = response.Plot;

          // Creating an element to hold the plot
        //   var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
        //   movieDiv.append(pThree);

          // Retrieving the URL for the image
        //   var imgURL = response.Poster;

          // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

          // Appending the image
        //   movieDiv.append(image);

          // Putting the entire movie above the previous movies
//           $("#movies-view").prepend(movieDiv);
//         });

//       }
// </script>