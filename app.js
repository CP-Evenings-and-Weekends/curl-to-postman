// Grab references to the DOM elements up front so we can use them later
const fetchButton = document.getElementById("fetch-button");
const dateInput = document.getElementById("date");
const pictureContainer = document.getElementById("picture-container");

// Safety check to ensure the button exists before adding an event listener
if (!fetchButton) {
  console.error("NASA fetch button not found");
  throw new Error("NASA fetch button not found");
}

// Wire up the event listener for the button click
fetchButton.addEventListener("click", async () => {
  // Async function to fetch data from NASA's APOD API
  try {
    // .value reads whatever the user has typed into the input field
    const date = dateInput.value;

    // Build the URL for the API request, including the date if provided
    let url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    // If the user has entered a date, append it to the URL
    if (date) {
      url += "&date=" + date;
    }

    // Fetch data from the NASA API
    const response = await fetch(url);

    // fetch() only rejects on network failure or if anything prevented the request from completing like 404 or 500 errors. We need to check the response.ok property to see if the request was successful.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data from the response
    const data = await response.json();
    console.log(data);

    // Build the HTML for the result and insert it into the picture container
    // Template literals (backticks) allow for multi-line strings and variable interpolation
    pictureContainer.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.url}" alt="${data.title}" />
            <p>${data.explanation}</p>
        `;
  } catch (error) {
    // Catches anything that went wrong above and logs it to the console for debugging
    console.error("Error fetching NASA data:", error);
  }
});
