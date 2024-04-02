import './styles/reset.css';
import './styles/style.css';

const main = document.querySelector('.main');
const form = document.getElementById('weatherForm');

class WeatherApp {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getWeatherData(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const weatherData = await response.json();

      // Process the weather data
      const processedData = this.processWeatherData(weatherData);

      // Update the main div with icons representing weather information
      this.updateMainDiv(processedData);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  }

  processWeatherData(weatherData) {
    const processedData = {
      location: weatherData.location.name,
      country: weatherData.location.country,
      temperature: weatherData.current.temp_c,
      condition: weatherData.current.condition.text,
      humidity: weatherData.current.humidity,
      wind_speed: weatherData.current.wind_kph,
      conditionIcon: weatherData.current.condition.icon,
    };

    return processedData;
  }

  updateMainDiv(data) {
    main.innerHTML = `
      <div>Location: ${data.location}, ${data.country}</div>
      <div>Temperature: ${data.temperature}°C</div>
      <div>Condition: ${data.condition}</div>
      <div>Humidity: ${data.humidity}%</div>
      <div>Wind Speed: ${data.wind_speed} km/h</div>
      <img src="${data.conditionIcon}" alt="Weather Condition Icon" class="weather-icon">
    `;
  }
}

const apiKey = '77d2ed1dd01544d8ae8214819242803';
const weatherApp = new WeatherApp(apiKey);

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const location = document.getElementById('locationInput').value;
  weatherApp.getWeatherData(location);
});
