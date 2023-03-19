const container = document.querySelector(".weather-container");

const url =
	"https://api.openweathermap.org/data/2.5/weather?q=Lviv&&units=metric&appid=817a2de68d1ad46ca26943670594c239";

fetch(url)
	.then((response) => response.json())
	.then((json) => {
		const weatherIcon = document.querySelector(".weather-container_img");
		const temperature = document.querySelector(".weather-container__text_temp");
		const weatherText = document.querySelector(
			".weather-container__text_weather"
		);

		switch (json.weather[0].main) {
			case "Clear":
				weatherIcon.src = "./imgs/clear.png";
				break;

			case "Rain":
				weatherIcon.src = "./imgs/rain.png";
				break;

			case "Snow":
				weatherIcon.src = "./imgs/snow.png";
				break;

			case "Clouds":
				weatherIcon.src = "./imgs/cloud.png";
				break;

			case "Haze":
				weatherIcon.src = "./imgs/mist.png";
				break;

			default:
				weatherIcon.src = "";
		}

		temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
		weatherText.innerHTML = `${json.weather[0].description}`;
	});
