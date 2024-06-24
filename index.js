 const apiKey =  "e1ea4ed8e95f4df118194f55e141cd14" ;
 const weatherdataEl = document.getElementById("weather-data");
 const cityInputEl = document.getElementById("city-input");
 const formEl = document.querySelector("form");



 formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
 } );

 async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            throw new Eroor("Network reponse was not ok");
        }
        const data = await response.json();

        const temperature = Math.round(data.main.temp);

        const description = data.weather[0].descripion;

        const icon = data.weather[0].icon;

        const details= [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.main.windspeed}`,
        ];

        weatherdataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

        weatherdataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherdataEl.querySelector(".description").textContent = description ;
        weatherdataEl.querySelector(".details").innerHTML = details.map((detail)=> `<div>${ detail}</div>`).join("");
    } catch (error) {
        weatherdataEl.querySelector(".icon").innerHTML = "";

        weatherdataEl.querySelector(".temperature").textContent = "";
        weatherdataEl.querySelector(".description").textContent = "" ;
        weatherdataEl.querySelector(".details").innerHTML = "";
    }
        


     
 }
 