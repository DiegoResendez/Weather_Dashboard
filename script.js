


const userInput = document.getElementById("userInput");
const cityElement = document.querySelector(".searchedCity");
const weatherIconElement = document.querySelector(".weather-icon");
const temperatureElement = document.querySelector(".tempetature");
const humidityElement = document.querySelector(".humidity");
const windSpeedElement = document.querySelector(".windSpeed");
const indexUVElement = document.querySelector(".indexUV");
// const Element = document.querySelector(".searchedCity");
// const Element = document.querySelector(".searchedCity");
// const Element = document.querySelector(".searchedCity");
// const Element = document.querySelector(".searchedCity");


const weather = {
  city : "userInput",
  // date : new Date().getHours(), 
  icon : "Unknown: Maybe from the API pull",
  temperature : {
    value : "",
    unit : "Fahrenheit"
  },
  humidity : "from API Pull",
  windSpeed : "from API Pull",
  indexUV : "from API Pull",
}


searchButton.addEventListener("click", searchUserInput);
// searchButton.addEventListener("click", fiveDayForecastSearch);
// searchButton.addEventListener("click", currentWeatherData);
// searchButton.addEventListener("click", currentWeatherData);


 function displayWeather() {
  cityElement.innerHTML = 
`${weather.city}, ${weather.country}`;

weatherIconElement.innerHTML = 
  `<img src = "" />`;

temperatureElement.innerHTML = 
 `${weather.temperature.value} degrees <span> Fahrenheit </span>`;

humidityElement.innerHTML = 
weather.humidity;

windSpeedElement.innerHTML = 
weather.windSpeed; 

indexUVElement.innerHTML = 
weather.indexUV;
}


function celciusToFahrenheit(temperature){
 return (temperature * 9/5) + 32;
}


function checkTemperatureValue(){

 if(weather.temperature.value === undefined) return;

 if(weather.temperature.unit === "celcius"){
  let fahrenheit = celciusToFahrenheit(weather.temperature.value);

  fahrenheit = Math.floor(farenheit);

  temperatureElement.innerHTML = `S{fahrenheit} degrees <span> Fahrenheit </span>`;

  weather.temperature.unit == "fahrenheit"

 }
 else{
  temperatureElement.innerHTML = `${weather.temperature.value} degrees <span> Fahrenheit </span>`
 }
}



// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, 
//    the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

// API call:


let url = openweather + city + API

let api = 'http://www.openweather.com'
let city = 'userInput'
// let APIKey = '9df96d10ddb6902ee29290be45dda446'
let units = '&units=metric'

function searchUserInput(){
  event.preventDefault();
  let city = $(this).attr("#userInput");
  let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9df96d10ddb6902ee29290be45dda446" + units;

  $ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
  console.log(response);
  });
};

let apiKeys = {"city": "", "date": "", "temperature": "", "humidity": "", 
                "wind-speed": "", "uv-index": ""}

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



// function setup(){

// let button = select('#submit');
// buttton.mousePressed(getWeather);

// input = select('#city'
// }

// function getWeather(){
// let url = api + input.value() + apiKey + units
// loadJSON(url, gotData);
// }


// weatherAPIKey: "9df96d10ddb6902ee29290be45dda446"

// let fiveDayForecast = api.openweathermap.org/data/2.5/forecast?q={city name}&appid="9df96d10ddb6902ee29290be45dda446"

// let cityStateFiveDayForecast = api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid="9df96d10ddb6902ee29290be45dda446"
// let apiSource = "https//:api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid=9df96d10ddb6902ee29290be45dda446";

//https://uwa.bootcampcontent.com/UWA-Bootcamp/uw-sea-fsf-pt-03-2020-u-c/blob/master/06-Server-Side-APIs/01-Activities/11-BandsInTownApp/Solved/bands-in-town-solved.html




// function fiveDayForecastSearch(){
//   event.preventDefault();
// 	let fiveDayForecast = $(this).attr("#userInput");
// 	let queryURL = "https//:api.openweathermap.org/data/2.5/forecast?q=" + fiveDayForecast + "&appid=9df96d10ddb6902ee29290be45dda446";

// 	$ajax({
// 		url: queryURL,
// 		method: "GET"
// 	}).then(function(response){
// 		console.log(response);
// 	});
// };
// let cardObjects = window.location.assign("API Strings?");


// create object values for returnValues and add to localStorage


// let newCardValues = {[returnValues.value] : [newapiValues]};

// Create 5-Day Forecast

// function pullFiveDayForecast(){
// let} ;


// function createObjectFromAPI(){
// let newapiKeys = {};

// 	for(i = 0; i < apiKeys.length; i++){
// 	let newapiValues = apiKeys[i];
// 	let node = document.createElement("li");
// 	let textnode = document.createTextNode(newapiValues);
// 	node.appendChild(textnode);
// 	weatherCard.appendChild(node);
// 	console.log(newapiValues)
// }
// });


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