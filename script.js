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

