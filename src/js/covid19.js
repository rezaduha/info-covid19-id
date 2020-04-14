
const url = `https://kawalcovid19.harippe.id/api/summary`;

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        document.getElementById("confirmed").innerHTML = data.confirmed.value;
        document.getElementById("activeCare").innerHTML = data.activeCare.value;
        document.getElementById("recovered").innerHTML = data.recovered.value;
        document.getElementById("deaths").innerHTML = data.deaths.value;

        document.getElementById('covid19').classList.remove("hidden");

        console.log('data :', data);
    });