
const nasaBtn = document.querySelector("button");
const nasaImg = document.querySelector("img");
const nasaInput = document.querySelector("input");
nasaBtn.addEventListener("click", fetchData);

async function fetchData() {
    const userInput = nasaInput.value;

    // Create the NASA API URL
    // ${userInput} inserts the date selected by the user into the URL
    const nasaURL =
        `https://api.nasa.gov/planetary/apod?api_key=h1qCVK3eNJ3Ns7GTZyZc76USKJ59pspswuUFI0zS&date=${userInput}`;


    // Send a request to the NASA API and wait for a response
    const response = await fetch(nasaURL);
    // Convert NASA's JSON response into a JavaScript object
    const jsonData = await response.json();


    // Print all of NASA's returned data to the console
    console.log(jsonData);
    // Print only the image URL to the console
    console.log(jsonData.url);

    // Get the image URL from NASA's data
    // Save the URL in the nasaImgURL variable
    let nasaImgURL = jsonData.url;

    // Set the src of our HTML img element to NASA's image URL
    // This makes the NASA image appear on the webpage
    nasaImg.src = nasaImgURL;
}