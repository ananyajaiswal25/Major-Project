const axios = require('axios');

async function getHackerEarthContests() {
  // Replace with the actual API endpoint for HackerEarth contests
  const apiEndpoint = 'https://www.hackerearth.com/api/events/';

  try {
    // Send a GET request to the API endpoint
    const response = await axios.get(apiEndpoint);

    // Check if the request was successful (HTTP status code 200)
    if (response.status === 200) {
      const contests = response.data.response.events;

      // Extract and print information about ongoing and upcoming contests
      contests.forEach(contest => {
        if (contest.status === 'ONGOING' || contest.status === 'UPCOMING') {
          console.log(`Contest Name: ${contest.title}`);
          console.log(`Start Time: ${contest.start_utc_tz}`);
          console.log(`End Time: ${contest.end_utc_tz}`);
          console.log(`Status: ${contest.status}\n`);
        }
      });
    } else {
      console.log(`Failed to fetch data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

getHackerEarthContests();
