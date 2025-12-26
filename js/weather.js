const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "e6481988977589dcdd29254b16c7a6c4";
const city = "Stockholm";
const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error: response didnt return with OK");
    }
    return response.json();
  })
  .then((data) => {
    const temperature = data.main.temp;
    const location = data.name;
    const icon = data.weather[0].icon;
    const weatherInfoElement = document.getElementById("weatherInfo");
    const weatherIconElement = document.getElementById("weatherIcon");
    weatherInfoElement.innerHTML = `Weather where i am based: ${temperature}°C (${location})`;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  })
  .catch((error) => {
    console.error("Could not retrieve weather data:", error);
  });
