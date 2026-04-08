// Utility function to display images
function displayImage(containerId, url) {
    const container = document.getElementById(containerId); // Example: if containerId is "cat-output", this finds <div id="cat-output"></div>.
    container.innerHTML = ''; // removes previous images or text so that only the new image will show.
    const img = document.createElement('img'); // Creates a new <img> element in memory that will eventually hold the image you want to show.
    img.src = url; // Sets the src attribute of the <img> element to the provided URL.
    container.appendChild(img); // Adds the <img> element inside the container in the DOM.
}
// RANDOM DOG
async function getDogImage() { // The async keyword allows us to use await inside the function, which makes it easier to work with promises like fetch().
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json(); // reads the response body as JSON. The await pauses execution until the JSON is fully parsed. The data now contains a JavaScript object representing the API response
    displayImage('dog-output', data.message);

//     {
//   "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
//   "status": "success"
// }
}

// RANDOM CAT
async function getCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    displayImage('cat-output', data[0].url);
//     [
//   {
//     "id": "abc",
//     "url": "https://cdn2.thecatapi.com/images/abc.jpg",
//     "width": 1200,
//     "height": 800
//   }
// ]
}

// WEATHER
async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&hourly=temperature_2m');
    const data = await response.json();

    // Get the output container
    const container = document.getElementById('weather-output'); // Finds the HTML element where the weather will be displayed.
    container.innerHTML = '' // Clears any previous content in the container.

    // Show the current hour temperature
    const currentHourIndex = 0; // first hour in the hourly forecast array
    const currentTime = data.hourly.time[currentHourIndex]; // Extracts the time corresponding to the first hour in the forecast
    const currentTemp = data.hourly.temperature_2m[currentHourIndex]; // Extracts the temperature corresponding to the first hour.

    container.innerHTML = `${currentTime}: ${currentTemp}°C`; // template literals, which allow us to insert variables into a string.
}

// CURRENCY (USD -> EUR)
async function getExchangeRates() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/654e4290839e7e5bf46b1a39/latest/USD');
    const data = await response.json();

    const container = document.getElementById('currency-output');
    container.innerHTML = '';

    const rate = data.conversion_rates.EUR;

    container.innerHTML = `💱 1 USD = ${rate.toFixed(2)} EUR`;
}

// MOVIES (TMDB - TRENDING)
async function getMovies() {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=76b21021c2918f36c46e296f79b002c4');
    const data = await response.json();

    const container = document.getElementById('movies-output');
    container.innerHTML = '';

    // Get top 5 movies
    data.results.slice(0, 5).forEach(movie => {
        const div = document.createElement('div');
        div.textContent = `🎬 ${movie.title}`;
        container.appendChild(div);
    });
}

// GITHUB USER
async function getGitHubUser() {
    const username = 'octocat'; // you can change this

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const container = document.getElementById('github-output');
    container.innerHTML = '';

    container.innerHTML = `
        <p>👤 ${data.login}</p>
        <p>📦 Repos: ${data.public_repos}</p>
        <p>👥 Followers: ${data.followers}</p>
    `;
}

// JOKE 
async function getJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    const container = document.getElementById('joke-output');
    container.innerHTML = '';

    if (data.type === 'single') {
        container.textContent = data.joke;
    } else {
        container.innerHTML = `
            <p>${data.setup}</p>
            <p><strong>${data.delivery}</strong></p>
        `;
    }
}

// PUBLIC APIS
async function getPublicApiInfo() {
    const container = document.getElementById('publicapi-output');
    container.innerHTML = '';

    const url = 'https://facebook.com'

    const img = document.createElement('img');
    img.src = `https://api.screenshotlayer.com/api/capture?access_key=d28555c2cee5f2db9d5fd4ac7d3f3a3d&url=${encodeURIComponent(url)}`

    container.appendChild(img);

}




