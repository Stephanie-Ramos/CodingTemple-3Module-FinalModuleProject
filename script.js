// Utility function to display images
function displayImage(containerId, url) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
}
// RANDOM DOG
async function getDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    displayImage('dog-output', data.message);
}

// RANDOM CAT
async function getCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    displayImage('cat-output', data[0].url);
}

// WEATHER
async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&hourly=temperature_2m');
    const data = await response.json();

    // Get the output container
    const container = document.getElementById('weather-output');
    container.innerHTML = ''

    // Show the current hour temperature
    const currentHourIndex = 0; // first hour in the array
    const currentTime = data.hourly.time[currentHourIndex];
    const currentTemp = data.hourly.temperature_2m[currentHourIndex];

    container.innerHTML = `${currentTime}: ${currentTemp}°C`;

    container.appendChild(list);
}

