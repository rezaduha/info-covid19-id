const axios = require("axios");

module.exports = async function() {
    try {
      const response = await axios.get(`https://kawalcovid19.harippe.id/api/summary`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};