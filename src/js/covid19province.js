const url_province = `https://api.kawalcorona.com/indonesia/provinsi`;

fetch(url_province)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        document.getElementById("province").innerHTML = data[0].attributes.Provinsi;
        document.getElementById("positive").innerHTML = data.attributes.Kasus_Posi;
        document.getElementById("recover").innerHTML = data.attributes.Kasus_Semb;
        document.getElementById("died").innerHTML = data.attributes.Kasus_Meni;

        console.log('data :', data);
    });