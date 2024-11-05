
function call(city) {
    let API_Key = "5833b36c07ec07b9f016037a9ec3a4ee";
    cityName.innerHTML = '<div class="text-center"> <div class="spinner-border" role = "status" ><span class="visually-hidden">Loading...</span></div ></div > '
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`City ${city} not found`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(city, data);

            const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
            cityName.innerHTML = formattedCity;

            humidity.innerHTML = `Humidity: ${data.main.humidity}`;
            weather.innerHTML = `Weather: ${data.weather[0].main}`;
            temperature.innerHTML = `Temperature: ${data.main.temp} ºC`;
            temp_max.innerHTML = `Max-Temp: ${data.main.temp_max} ºC`;
            temp_min.innerHTML = `Min-Temp: ${data.main.temp_min} ºC`;

        })
}

function searchWeather() {
    let city = cityInput.value;
    call(city);
}
cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
})
//  call("delhi")

