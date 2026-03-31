// RANDOM DOG
document.addEventListener('DOMContentLoaded', () => {

    // Select buttons and containers
    const singleDogButton = document.getElementById('dog-button');
    const singleDogContainer = document.getElementById('dog-output');

    // Function to fetch and display a single random dog image
    async function getSingleDogImage() {
        // Fetch data from the Dog API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Clear previous image
        singleDogContainer.innerHTML = '';

        // Create an image element and set its source
        const img = document.createElement('img');
        img.src = data.message;

        // Append the image to the container
        singleDogContainer.appendChild(img);
    }

    // Function to fetch and display multiple random dog images// Add event listeners to buttons
    singleDogButton.addEventListener('click', getSingleDogImage);

    });

// RANDOM CAT
document.addEventListener('DOMContentLoaded', () => {

    // Select buttons and containers
    const singleCatButton = document.getElementById('cat-button');
    const singleCatContainer = document.getElementById('cat-output');

    // Function to fetch and display a single random dog image
    async function getSingleCatImage() {
        // Fetch data from the Dog API
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();

        // Clear previous image
        singleCatContainer.innerHTML = '';

        // Create an image element and set its source
        const img = document.createElement('img');
        img.src = data.message;

        // Append the image to the container
        singleCatContainer.appendChild(img);
    }

    // Function to fetch and display multiple random dog images// Add event listeners to buttons
    singleCatButton.addEventListener('click', getSingleCatImage);

    });