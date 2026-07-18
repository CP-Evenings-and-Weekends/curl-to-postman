// open google.com
// open DevTools console: cmd + option + I
// past in function hit enter
// then run the function by typing `fetchData()` in the console and pressing Enter. You should see a random joke object logged in the console.

// async function fetchData() {
//   const url = "https://official-joke-api.appspot.com/random_joke";
//   const response = await fetch(url);
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// fetchData();

// require("dotenv").config();

// async function fetchData() {
//   const url = "https://api.thedogapi.com/v1/breeds";
//   const response = await fetch(url, {
//     headers: {
//       "x-api-key": process.env.DOG_API_KEY,
//     },
//   });
//   const jsonData = await response.json();
//   console.log(JSON.stringify(jsonData, null, 2));
// }

// fetchData();

require("dotenv").config();

async function fetchData() {
  const url = "https://apod.nasa.gov/apod/astropix.html";
  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.NASA_API_KEY,
    },
  });
  const textData = await response.text();
  console.log(textData);
}

fetchData();
