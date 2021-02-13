axios.get("https://extreme-ip-lookup.com/json/").then(res => {
    document.getElementById("location").innerHTML = `Your country is <strong id="country">${res.data.country}</strong>`;
    axios.get(`https://disease.sh/v3/covid-19/countries/${res.data.country}`).then(res => {
        data = res.data
        document.getElementById("info").innerHTML = `Cases : ${parseInt(data.cases).toLocaleString()}<br>Today's Cases : ${parseInt(data.todayCases).toLocaleString()}<br>Deaths : ${parseInt(data.deaths).toLocaleString()}
        <br>Today's Deaths : ${parseInt(data.todayDeaths).toLocaleString()}<br>Recovered : ${parseInt(data.recovered).toLocaleString()}<br>Today's Recovered : ${parseInt(data.todayRecovered).toLocaleString()}<br>Critical Cases : ${parseInt(data.critical).toLocaleString()}
        <br>Population : ${parseInt(data.population).toLocaleString()}<br><a href="https://disease.sh/">Thanks to disease.sh</a>`
    })
})