const axios = require("axios");

async function getUser() {
    try {
      const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=c96898cdc1c8417c8b15dfac8004c4a3&pageSize=5`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
} 