const axios = require('axios');

async function getLiveScores() {
  try {
    const response = await axios.get('https://api.cricapi.com/v1/currentMatches', {
      params: { apikey: '03bd60d7-3c70-49de-a48f-786abb615e98', offset: 0 }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
}