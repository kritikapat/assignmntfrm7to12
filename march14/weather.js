let weather = {
    apiKey: "1464009b92345057cd5ef468ccb60733",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        var city = document.querySelector(".city");
        city.innerText = "Weather in " + name;
        var icon1 = document.querySelector(".icon");
        icon1.src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        var desc = document.querySelector(".description");
        desc.innerText = description;
        var temperature = document.querySelector(".temp");
        temperature.innerText = temp + "°C";
        var humd = document.querySelector(".humidity")
        humd.innerText = "Humidity: " + humidity + "%";
        var wind1 = document.querySelector(".wind");
        wind1.innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("mumbai");