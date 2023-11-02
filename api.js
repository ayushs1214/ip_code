const fetch = require('node-fetch');

async function fetchData() {
  const apiUrl = 'https://catfact.ninja/';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    console.log('API Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
