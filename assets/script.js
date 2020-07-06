

var currentWeatherEl = document.querySelector('#weather')
var search = function (cityName) {
    var apiKey = "dd6b2cf71546b254edf0cd2c7258de48";
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + apiKey
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayWeather(data);
        })

}
var forecast = function (cityName) {
var apiKey = "dd6b2cf71546b254edf0cd2c7258de48";
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + "&appid=" + apiKey
    )
        .then(function (response) {
            return response.json();
            // console.log("Forecast response: "+JSON.stringify(response));
            // displayForecast(response);
        })
        .then(function (data) {
            console.log(data);
            displayForecast(data);
            
        })

}

var cityInputEl = document.querySelector("#city");
var searchBtn = document.querySelector("#search");
var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if (city) {
        search(city);
        forecast(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);

}

var displayWeather = function (data) {
    var currentWeatherEl = document.querySelector('#weather');
    var currentTemp = document.querySelector("#current-temp");
    var feelsLike = document.querySelector("#feels-like");
    var humidity = document.querySelector("#humidity");
    var tempMax = document.querySelector("#temp-max");
    var tempMin = document.querySelector("#temp-min");

    currentWeatherEl.textContent = "Weather in your City: " + data.name;
    currentTemp.textContent = "Current Temp: " + data.main.temp + " F°";
    feelsLike.textContent = "Feel Like: " + data.main.feels_like + " F°";
    humidity.textContent = "Humidity: " + data.main.humidity;
    tempMax.textContent = "Temp-Max: " + data.main.temp_max + " F°";
    tempMin.textContent = "Temp-Min: " + data.main.temp_min + " F°";
}

var displayForecast = function (data) {
    var dayOne = document.querySelector("#dayone");
    var dayTwo = document.querySelector("#daytwo");

    var array = data.list;
    console.log("array: "+JSON.stringify(array[0]));
    //var myArr = JSON.parse(data.responseText);
    //document.getElementById("#dayOne").innerHTML = myArr[0].list
    for(var i = 0; i < array.length; i++){
        array.length = 5;
        var display = array[i].main.temp;
        console.log("Display: "+array[i].main.temp);
        dayOne.textContent = "Current Temp: " + array[0].main.temp + "Feels Like" + array[0].main.feels_like;
        dayTwo.textContent = display;
        // var temp = display.main.temp;
        // var wind = display.wind.speed;
        // console.log("Temp: "+temp +" Wind: "+wid);
        //console.log(display);
        //dayTwo.textContent = display
}
}

    
    
    //     // answer.classlist=
    //     answer.setAttribute("href", "https://api.openweathermap.org/data/2.5/weather?q=main" + display);
    // }



searchBtn.addEventListener("click", formSubmitHandler)