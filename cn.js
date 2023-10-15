const axios = require('axios');

async function getCodingNinjasContests() {
  // Replace with the actual API endpoint for Coding Ninjas contests
  const apiEndpoint = 'https://codingninjas.com/api/v3/contest';

  try {
    // Send a GET request to the API endpoint
    const response = await axios.get(apiEndpoint);
    console.log(response.data);
    // Check if the request was successful (HTTP status code 200)
    if (response.status === 200) {
      const contestsData = response.data.data;

      // Check if contestsData is defined and contains contests
      if (contestsData && contestsData.contests) {
        const contests = contestsData.contests;

        // Extract and print information about ongoing and upcoming contests
        contests.forEach(contest => {
          if (contest.status === '1' || contest.status === '2') {
            console.log(`Contest Name: ${contest.name}`);
            console.log(`Start Time: ${contest.startDate}`);
            console.log(`End Time: ${contest.endDate}`);
            console.log(`Status: ${contest.status === '1' ? 'Ongoing' : 'Upcoming'}\n`);
          }
        });
      } else {
        console.log('No contests found in the response.');
      }
    } else {
      console.log(`Failed to fetch data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

getCodingNinjasContests();
