const key="9f5c026690db13857d24956058267d88";
const text=document.getElementById("city-input");
const form=document.querySelector("form");
const icon= document.getElementById("icon");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const feeling=document.getElementById("feels");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind-speed");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let city=text.value;
    console.log("Ta ville est "+city);
    getWeather(city);
});
console.log(form);
async function getWeather(city){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metrix`);
        const data= await response.json();
        const feelingData=data.main.feels_like;
        const humidityData=data.main.humidity;
        const windData=data.wind.speed;
        const descriptionData=data.weather[0].main;
        const temperatureData=data.main.temp;
     
        const image=data.weather[0].icon;
        console.log(data);
        console.log(temperatureData);
        description.innerText=`${descriptionData}`;
        icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${image}.png">`;
        temperature.innerHTML=`${temperatureData}&deg;C`;
        feeling.innerHTML=`Feels like: ${feelingData} deg;C`;
        humidity.innerText=`Humidity: ${humidityData} %`;
        wind.innerText=`Wind-speed: ${windData} m/s`;
       console.log(image);
    } catch (error) {
       icon.innerHTML="";
       description.innerHTML="";
       temperature.innerHTML=`<p style="color:red; font-size:12px;">Please try again the text given resulted into an error</p>`;
    }
}

