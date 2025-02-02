const apiKey="ab48c82d6748c39d015efd777712e435";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const icon= document.querySelector(".icon")
async function checkWeather(city) {
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data= await response.json()

    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} KPH`;
    document.querySelector(".min_temp").innerHTML=`${data.main.temp_min}°C`;
    document.querySelector(".max_temp").innerHTML=`${data.main.temp_max}°C`;

    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        icon.src="images/snow.png"
    }
    else if(data.weather[0].main=="Smoke"){
        icon.src="images/smoke.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather("delhi")
