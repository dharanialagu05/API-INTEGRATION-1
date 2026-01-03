function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "9ca4251b4cf272df35349e033d52ebe1";

    var url =  "https://api.openweathermap.org/data/2.5/weather?q="
        + city + ",IN&units=metric&appid=" + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML =
            "City: " + data.name + "<br>" +
            "Temperature: " + data.main.temp + " °C<br>" +
            "Weather: " + data.weather[0].description;
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "City not found";
    });
}
