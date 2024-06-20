// global vars
var locationInput = document.getElementById("locationInput");
var locationSearch = document.getElementById("locationButton");

var currentCity = document.getElementById("city");
var currentDate = document.getElementById("currentDate");
var currentDegree = document.getElementById("currentDegree");
var currentCondition = document.getElementById("conditionText");
var currentWindSpeed = document.getElementById("windSpeed");
var currentHumaditiyPercent = document.getElementById("humaditiyPercent");

var todayDayFooter = document.getElementById("todayDayFooter");
var todadyDegreeFooter = document.getElementById("todayDegreeFooter");
var todayconditionFooter = document.getElementById("todayconditionFooter");

var secDayFooter = document.getElementById("secDayFooter");
var secDayDegreeFooter = document.getElementById("secDegreeFooter");
var secDayConditionFooter = document.getElementById("secCondtionFooter");

var thirdDayFooter = document.getElementById("thirDayFooter");
var thirdDegreeFooter = document.getElementById("thirDegreeFooter");
var thirdConditionFooter = document.getElementById("thirdConditionFooter");

var forthDayFooter = document.getElementById("forthDayFooter");
var forthDegreeFooter = document.getElementById("forthDegreeFooter");
var forthConditionFooter = document.getElementById("forthConditionFooter");

var fifthDayFooter = document.getElementById("fifthDayFooter");
var fifthDegreeFooter = document.getElementById("fifthDegreeFooter");
var fifthConditionFooter = document.getElementById("fifthConditionFooter");

var sixthDayFooter = document.getElementById("sixthDayFooter");
var sixthDegreeFooter = document.getElementById("sixthDegreeFooter");
var sixthConditionFooter = document.getElementById("sixthConditionFooter");

var morningOrEvening = document.getElementById("morningEveningGreeting");
var TodayCurrentTime = document.getElementById("currentTime");
var AmOrPm = document.getElementById("amPm");

var CurrenWeatherImage =document.getElementById("currentWeatherIcon");

var firstHour = document.getElementById("firstNextHour")
var firstHourDegree = document.getElementById("firstNextHourDegree")
var firstHourCondition = document.getElementById("firstNextHourCondition")

var SecondHour = document.getElementById("secNextHour")
var SecondHourDegree = document.getElementById("secNextHourDegree")
var SecondHourCondition = document.getElementById("secNextHourCondition")

var thirdHour = document.getElementById("thridNextHour")
var thirdHourDegree = document.getElementById("thridNextHourDegree")
var thirdHourCondition = document.getElementById("thridNextHourcondition")

var fouthHour = document.getElementById("fourthNextHour")
var fouthHourDegree = document.getElementById("fourthNextHourDegree")
var fouthHourCondition = document.getElementById("fourthNextHourCondition")

var fifthHour = document.getElementById("fifthNextHour")
var fifthHourDegree = document.getElementById("fifthNextHourDegree")
var fifthHourCondition = document.getElementById("fifthNextHourCondition")

var sixthHour = document.getElementById("sixthNextHour")
var sixthHourDegree = document.getElementById("sixthNextHourDegree")
var sixthHourCondition = document.getElementById("sixthNextHourCondition")

var fakeString;
var numbeOfSpaces;

var finalDataGlobalVar;

// functions

function getDay(specificDate){
    let date = new Date(specificDate);
    let dayNumber = date.getDay();

    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = daysOfWeek[dayNumber];

    return dayName; 
}

function displayCurrentWeather(){
    currentCity.innerHTML= finalDataGlobalVar.location.name;
    currentDate.innerHTML = finalDataGlobalVar.location.localtime.split(" ").slice(0,1).join(' ');
    currentDegree.innerHTML = `${finalDataGlobalVar.current.temp_c}`;
    currentCondition.innerHTML = finalDataGlobalVar.current.condition.text;
    CurrenWeatherImage.innerHTML = `<img  src=${finalDataGlobalVar.current.condition.icon} class="img-fluid" alt="weather Icon">`
    currentWindSpeed.innerHTML = finalDataGlobalVar.current.wind_mph;
    currentHumaditiyPercent.innerHTML = finalDataGlobalVar.current.humidity;
    TodayCurrentTime.innerHTML = finalDataGlobalVar.location.localtime.split(" ").slice(1,).join(' ');
    
    if(finalDataGlobalVar.current.is_day){
        morningOrEvening.innerHTML = "Morning";
    }
    else{
        morningOrEvening.innerHTML = "Night";
    }

}

function displayDailyWeather(){

    todadyDegreeFooter.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].day.avgtemp_c} C`;
    
    fakeString = finalDataGlobalVar.forecast.forecastday[0].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        todayconditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[0].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        todayconditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[0].day.condition.text;
    }

    secDayFooter.innerHTML = getDay(finalDataGlobalVar.forecast.forecastday[1].date).substring(0,3) ;
    secDayDegreeFooter.innerHTML = `${finalDataGlobalVar.forecast.forecastday[1].day.avgtemp_c} C`;

    fakeString = finalDataGlobalVar.forecast.forecastday[1].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        secDayConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[1].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        secDayConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[1].day.condition.text;
    }

    thirdDayFooter.innerHTML = getDay(finalDataGlobalVar.forecast.forecastday[2].date).substring(0,3) ;
    thirdDegreeFooter.innerHTML  = `${finalDataGlobalVar.forecast.forecastday[2].day.avgtemp_c} C`;

    fakeString = finalDataGlobalVar.forecast.forecastday[2].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        thirdConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[2].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        thirdConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[2].day.condition.text;
    }

    forthDayFooter.innerHTML = getDay(finalDataGlobalVar.forecast.forecastday[3].date).substring(0,3) ;
    forthDegreeFooter.innerHTML = `${finalDataGlobalVar.forecast.forecastday[3].day.avgtemp_c} C`;

    fakeString = finalDataGlobalVar.forecast.forecastday[3].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        forthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[3].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        forthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[3].day.condition.text;
    }

    fifthDayFooter.innerHTML = getDay(finalDataGlobalVar.forecast.forecastday[4].date).substring(0,3) ;
    fifthDegreeFooter.innerHTML = `${finalDataGlobalVar.forecast.forecastday[4].day.avgtemp_c} C`;

    fakeString = finalDataGlobalVar.forecast.forecastday[4].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        fifthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[4].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        fifthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[4].day.condition.text;
    }

    sixthDayFooter.innerHTML = getDay(finalDataGlobalVar.forecast.forecastday[5].date).substring(0,3) ;
    sixthDegreeFooter.innerHTML = `${finalDataGlobalVar.forecast.forecastday[5].day.avgtemp_c} C`;

    fakeString = finalDataGlobalVar.forecast.forecastday[5].day.condition.text.split(' ');
    numbeOfSpaces = fakeString.length-1;

    if(numbeOfSpaces > 1){
        sixthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[5].day.condition.text.split(' ').slice(0,2).join(' ');;
    }
    else{
        sixthConditionFooter.innerHTML = finalDataGlobalVar.forecast.forecastday[5].day.condition.text;
    }

}

function displayHourlyWeather(){

    var currentTimeOnlyHours =parseInt(finalDataGlobalVar.location.localtime.split(" ").slice(1,).join(' '));

    if(currentTimeOnlyHours+1 <= 23){
        firstHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].time.split(" ").slice(1,).join(' '))}:00`;
        firstHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].temp_c} C`;
        firstHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;

        firstHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].time.split(" ").slice(1,).join(' '))}:00`;
        firstHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].temp_c} C`;
        firstHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+1].condition.text;
    }

    if(currentTimeOnlyHours+2 <= 23){
        SecondHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].time.split(" ").slice(1,).join(' '))}:00`;
        SecondHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].temp_c} C`;
        SecondHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;
        SecondHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].time.split(" ").slice(1,).join(' '))}:00`;
        SecondHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].temp_c} C`;
        SecondHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+2].condition.text;
    }

    if(currentTimeOnlyHours+3 <= 23){
        thirdHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].time.split(" ").slice(1,).join(' '))}:00`;
        thirdHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].temp_c} C`;
        thirdHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;
        thirdHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].time.split(" ").slice(1,).join(' '))}:00`;
        thirdHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].temp_c} C`;
        thirdHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+3].condition.text;

    }

    if(currentTimeOnlyHours+4 <= 23){
        fouthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].time.split(" ").slice(1,).join(' '))}:00`;
        fouthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].temp_c} C`;
        fouthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;
        fouthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].time.split(" ").slice(1,).join(' '))}:00`;
        fouthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].temp_c} C`;
        fouthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+4].condition.text;
    }

    if(currentTimeOnlyHours+5 <= 23){
        fifthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].time.split(" ").slice(1,).join(' '))}:00`;
        fifthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].temp_c} C`;
        fifthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;
        fifthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].time.split(" ").slice(1,).join(' '))}:00`;
        fifthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].temp_c} C`;
        fifthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+5].condition.text;
    }

    if(currentTimeOnlyHours+6 <= 23){
        sixthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].time.split(" ").slice(1,).join(' '))}:00`;
        sixthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].temp_c} C`;
        sixthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].condition.text;
    }
    else{
        currentTimeOnlyHours-=24;
        sixthHour.innerHTML = `${parseInt(finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].time.split(" ").slice(1,).join(' '))}:00`;
        sixthHourDegree.innerHTML = `${finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].temp_c} C`;
        sixthHourCondition.innerHTML = finalDataGlobalVar.forecast.forecastday[0].hour[currentTimeOnlyHours+6].condition.text;
    }

}

async function getDataFromApi(targetedCountry){

    try{
        var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0eb506ffebb64ddd926143034241506&q=${targetedCountry}&days=7`)
        var finalData = await response.json();
        
        finalDataGlobalVar = finalData;

        sessionStorage.setItem("targeted-City",finalDataGlobalVar.location.name);
    
        // display current forecast
        displayCurrentWeather();
    
        // display daily forecast
        displayDailyWeather();
    
        // display hourly forecast
        displayHourlyWeather();
    }
    catch(error){
        console.log("Cant find the city");
    }

}


// events
if(sessionStorage.getItem("targeted-City")){
    getDataFromApi(sessionStorage.getItem("targeted-City"));
}
else{
    getDataFromApi("Alex");
}


locationInput.addEventListener("input",function(){
    var countryInputValue = locationInput.value;
    getDataFromApi(countryInputValue);
})

locationSearch.addEventListener("click",function(){
    var countryInputValue = locationInput.value;
    getDataFromApi(countryInputValue);
    locationInput.value = "";


})























