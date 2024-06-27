let cityInput=document.getElementById('cityInput');
let dayName=document.getElementById('dayName');
let dayDate=document.getElementById('dayDate');
let city=document.getElementById('city');
let img=document.getElementById('img');

const weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let day=new Date().getDay()
let date=new Date().getDate()
let Month=new Date().getMonth()


cityInput.addEventListener('keyup',function (e) { 
    fetchApi(cityInput.value)
 })
async function fetchApi(city)
{
    let res=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=96ac4add3b454adba29182613240104&q=${city}&days=3`)
    let final=await res.json()
    displayCurrent(final.location.name,final.current.condition.icon,final.current.temp_c,
        final.current.wind_kph,final.current.humidity,final.current.wind_dir)
    console.log(final);
    displayNext(final.forecast.forecastday[1],final.forecast.forecastday[1].day.avgtemp_c,
        final.forecast.forecastday[1].day.condition.text,final.forecast.forecastday[1].day.condition.icon)
    displayAfterNext(final.forecast.forecastday[2],final.forecast.forecastday[2].day.avgtemp_c,
        final.forecast.forecastday[2].day.condition.text,final.forecast.forecastday[2].day.condition.icon)
}
fetchApi("cairo")

function displayCurrent (city,icon,temp,wind,humidity,wind_dir) { 
    let cartona=``
    cartona+=`
            
    <div class="card" >
        <div class="card-header d-flex justify-content-between  align-items-center">
            <div id="dayName">${weekDays[day]}</div>
            <div id="dayDate">${date}${months[Month]}</div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="cityName">

                <p id="city">${city}</p>
            </div>
            <div class="d-flex">
            <div>
            <h1 id="temp">${temp}</h1></div>
            <div class="img_Day">
<i class="fa-solid fa-cloud"></i>
            </div>
            </div>
        </div>
        
        <div class="card-body d-flex ">
         <div className="img_wind">
         <i class="fa-solid fa-umbrella"></i> <span id="wind">${wind}</span>
         </div>
         <div className="img_humidity">
         <i class="fa-solid fa-droplet"></i>  <span id="humidity">${humidity}</span>
         </div>
         <div className="img_direction">
         <i class="fa-solid fa-wind"></i>  <span id="wind_direction">${wind_dir}</span>
         </div>
        </div>
      </div>
    
    
    `
    $("#currentDay").html(cartona)
 }

 function displayNext(nextDayArr,avgtemp_c,weather_text,weather_icon)
 {
    let nextDayDate=new Date(nextDayArr.date).getDay()
    let nextDate=new Date(nextDayArr.date).getDate()
    let nextMonthDate=new Date(nextDayArr.date).getMonth()
    
    console.log(nextDayDate);
    let cartona=``

    cartona+=`
    <div class="card" >
    <div class="card-header d-flex justify-content-between  align-items-center">
        <div id="dayName">${weekDays[nextDayDate]}</div>
        <div id="dayDate">${nextDate}${months[nextMonthDate]}</div>
    </div>
       
        <div class=" text-center">
        <h1 id="tempNextDay">${avgtemp_c}</h1>
        <div class="img_Day">
<i class="fa-solid fa-cloud"></i>
        </div>
        <div>${weather_text}</div>
        </div>

        <div>
        </div>
    </div>
    
   
  </div>
</div>


    `

    $("#currentnextDay").html(cartona)
 }
 function displayAfterNext(nextDayArr,avgtemp_c,weather_text,weather_icon)
 {
    let nextDayDate=new Date(nextDayArr.date).getDay()
    let nextDate=new Date(nextDayArr.date).getDate()
    let nextMonthDate=new Date(nextDayArr.date).getMonth()
    
    console.log(nextDayDate);
    let cartona=``

    cartona+=`
    <div class="card" >
    <div class="card-header d-flex justify-content-between  align-items-center">
        <div id="dayName">${weekDays[nextDayDate]}</div>
        <div id="dayDate">${nextDate}${months[nextMonthDate]}</div>
    </div>
       
        <div class=" text-center">
        <h1 id="tempNextDay">${avgtemp_c}</h1>
        <div class="img_Day">
<i class="fa-solid fa-cloud"></i>
        </div>
        <div>${weather_text}</div>
        </div>

        <div>
        </div>
    </div>
    
   
  </div>
</div>


    `

    $("#currentAfternextDay").html(cartona)
 }

