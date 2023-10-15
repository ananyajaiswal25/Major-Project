// Function to fetch upcoming Codeforces contests
function fetchUpcomingContests() {
    const apiUrl = 'https://codeforces.com/api/contest.list?gym=false';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          const contests = data.result.filter(contest => contest.phase === 'BEFORE');
          
          if (contests.length > 0) {
            console.log('Upcoming Codeforces Contests:');
            contests.forEach(contest => {
              console.log(`Contest Name: ${contest.name}`);
              console.log(`Start Time: ${new Date(contest.startTime * 1000).toLocaleString()}`);
              console.log(`Duration: ${contest.duration / 3600} hours`);
              console.log('-----------------------------------------');
            });
          } else {
            console.log('No upcoming Codeforces contests.');
          }
        } else {
          console.error('Error fetching Codeforces contests:', data.comment);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to fetch upcoming contests
  fetchUpcomingContests();
  