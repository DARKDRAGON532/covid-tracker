axios.get("http://ip-api.com/json").then(res => {
    document.getElementById("location").innerHTML = `Your country is <strong id="country">${res.data.country}</strong>`;
    axios.get(`https://disease.sh/v3/covid-19/countries/${res.data.country}`).then(res => {
        data = res.data
        document.getElementById("info").innerHTML = `Cases : ${data.cases}<br>Today's Cases : ${data.todayCases}<br>Deaths : ${data.deaths}
        <br>Today's Deaths : ${data.todayDeaths}<br>Recovered : ${data.recovered}<br>Today's Recovered : ${data.todayRecovered}<br>Critical Cases : ${data.critical}
        <br>Population : ${data.population}`
    })
})