const apiKey = '2fde543afe74ba1fc6abc3e0ed8b7f96';
const unsplashApiKey = 'OmphNu5oFmLvUDM7ywMtXxTQK6EkaaLpbJOFxGL95Hc';
const city = 'Nitra';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


function fetchWeather() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('location').textContent = `City: ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp.toFixed(2)} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed.toFixed(2)} km/h`;
    document.getElementById('update-time').textContent = `Last Updated: ${new Date().toLocaleString()}`;

    document.getElementById('temperature').insertAdjacentHTML('afterbegin', '<img src="temperature.png" alt="Temperature Icon">');
    document.getElementById('humidity').insertAdjacentHTML('afterbegin', '<img src="humidity.png" alt="Humidity Icon">');
    document.getElementById('pressure').insertAdjacentHTML('afterbegin', '<img src="gauge.png" alt="Pressure Icon">');
    document.getElementById('wind').insertAdjacentHTML('afterbegin', '<img src="wind.png" alt="Wind Icon">');
  })
  .catch(error => console.error('Error fetching weather:', error));

  fetchCityImage();
}

function fetchCityImage() {
  const pageNumber = Math.floor(Math.random() * 10) + 1;


  const imageUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}&orientation=landscape&per_page=1&page=${pageNumber}`;

  fetch(imageUrl)
  .then(response => response.json())
  .then(data => {
    if (data.results.length > 0) {
      const imageUrl = data.results[0].urls.small;
      console.log(imageUrl)
      document.getElementById('city-image').innerHTML = `<img src="${imageUrl}" alt="View of ${city}" style="width:100%; height:auto;">`;
    }
  })
  .catch(error => console.error('Error fetching city image:', error));
}

document.addEventListener('DOMContentLoaded', fetchWeather);
