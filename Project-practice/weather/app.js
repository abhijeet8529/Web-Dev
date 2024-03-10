const apikey = "bb06f1a78cd059119e5d4d83084a2d4d";
const apiurl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const button = document.querySelector(".search button");

async function checkWeather(place) {
	const response = await fetch(apiurl + place + `&appid=${apikey}`);
	
	if (response.status == 404) {
		document.querySelector(".err").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		let data = await response.json();
		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h";
		const icon = document.querySelector(".weather-icon");
		console.log(data);

		if (data.weather[0].main == "Clouds") {
			icon.src = "./clouds.png";
		} else if (data.weather[0].main == "Clear") {
			icon.src = "./clear.png";
		} else if (data.weather[0].main == "Rain") {
			icon.src = "./rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			icon.src = "./drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			icon.src = "./mist.png";
		}

		document.querySelector(".err").style.display = "none";
		document.querySelector(".weather").style.display = "block";
	}
}
button.addEventListener("click", () => {
	checkWeather(search.value);
});
