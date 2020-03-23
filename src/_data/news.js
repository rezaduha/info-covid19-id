const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
    try {
      const response = await axios.get(`http://newsapi.org/v2/everything?q=corona&country=id&apiKey=${process.env.NEWS_API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};