const axios = require("axios");

module.exports = async function() {
    try {
      const response = await axios.get(`https://api.kawalcorona.com/indonesia/provinsi`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};