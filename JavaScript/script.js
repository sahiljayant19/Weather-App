import { nav, ul, box1, box2, weatherImg, weekDay, weatherStatus, celsiusStatus, fehrStatus, descriptionStatus, humidityStatus, windSpeedStatus, windDegStatus, windGustStatus, seaLvlStatus, grndLvlStatus, minC, maxC, inputBox, searchButton, menuButton } from './variables.js';
// addition variables
var Location = null;
let menuClicked = false;

window.addEventListener('resize', () => { // window resize handler for Navbar.
    if (window.innerWidth > 480) {
        nav.style.paddingBottom = '0'
        ul.style.position = 'static';
        ul.style.marginTop = '0'
        ul.style.display = 'flex'
        ul.style.flexDirection = 'row';
        menuClicked = false;
    }
    else if (window.innerWidth <= 480 && menuClicked == false) {
        ul.style.display = 'none';
    }
})

const titleCase = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const updateUI = (data, weekDays) => {
    let weather = data.weather[0].main; // first box data variables.
    weather = weather.toLowerCase(); // convert weather'name all letters in lowercase like Haze -> haze to sync data with /img folder 
    
    let description = data.weather[0].description;
    let day = weekDays[new Date().getDay()];
    let celsius = (data.main.temp - 273.15).toFixed(0);
    let fehrenheit = ((celsius * 9 / 5) + 32).toFixed(1);

    let humidity = data.main.humidity; // second box data variables.
    let wind_speed = (data.wind.speed).toFixed(2);
    let wind_deg = data.wind.deg;
    let wind_gust = data.wind.gust;
    let sea_level = data.main.sea_level;
    let grnd_level = data.main.grnd_level;
    let min_celsius = (data.main.temp_min - 273.15).toFixed(0);
    let max_celsius = (data.main.temp_max - 273.15).toFixed(0);

    Location = titleCase(Location);
    box1.firstElementChild.innerHTML = `${Location} Weather`;
    box2.firstElementChild.innerHTML = `${Location} Sea ForeCast`;

    weatherImg.src = `./img/${weather}.png`; // first box data insertion.
    weekDay.innerHTML = day;
    weatherStatus.innerHTML = titleCase(weather);
    celsiusStatus.innerHTML = `${celsius}<span>&deg;</span>C`;
    fehrStatus.innerHTML = `${fehrenheit}<span>&deg;</span>F`;
    descriptionStatus.innerHTML = description;

    humidity = (humidity != undefined) ? humidity : '-'; // undefined data handler...
    wind_speed = (wind_speed != undefined) ? wind_speed : '-';
    wind_deg = (wind_deg != undefined) ? wind_deg : '-';
    wind_gust = (wind_gust != undefined) ? wind_gust : '-';
    sea_level = (sea_level != undefined) ? sea_level : '-';
    grnd_level = (grnd_level != undefined) ? grnd_level : '-';
    max_celsius = (max_celsius != undefined) ? max_celsius : '-';
    min_celsius = (min_celsius != undefined) ? min_celsius : '-';

    function smallDeviceData() {
        humidityStatus.innerHTML = `Humidity &sim;&rarr; ${humidity}`; // second box data insertion.
        windSpeedStatus.innerHTML = `Wind Speed &sim;&rarr;  ${wind_speed}`;
        windDegStatus.innerHTML = `Wind Degree &sim;&rarr;  ${wind_deg}`;
        windGustStatus.innerHTML = `Wind Gust &sim;&rarr;  ${wind_gust}`;
        seaLvlStatus.innerHTML = `Sea Level &sim;&rarr; ${sea_level}`;
        grndLvlStatus.innerHTML = `Ground Level &sim;&rarr; ${grnd_level}`;
        maxC.innerHTML = `Max Celsius &sim;&rarr; ${max_celsius}`;
        minC.innerHTML = `Min Celsius &sim;&rarr; ${min_celsius}`;
    }
    function bigDeviceData() {
        humidityStatus.innerHTML = `Humidity...................................... ${humidity}`; // second box data insertion.
        windSpeedStatus.innerHTML = `Wind Speed...................................  ${wind_speed}`;
        windDegStatus.innerHTML = `Wind Degree..................................  ${wind_deg}`;
        windGustStatus.innerHTML = `Wind Gust.....................................  ${wind_gust}`;
        seaLvlStatus.innerHTML = `Sea Level..................................... ${sea_level}`;
        grndLvlStatus.innerHTML = `Ground Level................................. ${grnd_level}`;
        maxC.innerHTML = `Max Celsius..................................... ${max_celsius}`;
        minC.innerHTML = `Min Celsius..................................... ${min_celsius}`;
    }

    if (window.innerWidth <= 480) { // insertion for mobile devices.
        smallDeviceData();
    }
    else { // insertion for desktop or large devices.
        bigDeviceData();
    }
};

const fetchDataFromWeb = async () => {
    Location = inputBox.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=9510a5bfea1fc15630529ce7a137be1b`;
    let response = await fetch(url);
    inputBox.value = '';
    return await response.json();
};

const processWeatherData = async () => {
    try {
        let weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        let data = await fetchDataFromWeb();
        updateUI(data, weekDays);
    } catch (err) {
        console.log('Location not found!');
    }
};

searchButton.addEventListener('click', () => { // EventListener for 'Search Button'
    setTimeout(() => {
        searchButton.firstElementChild.style.width = '25px';
    }, 50);
    searchButton.firstElementChild.style.width = '22px';

    if (inputBox.value == '') {
        return;
    }
    processWeatherData();
});

inputBox.addEventListener('keydown', (event) => { // EventListener for 'InputBox Enter Key'
    if (inputBox.value == '') {
        return;
    }
    if (event.key == 'Enter') {
        processWeatherData();
    }
});

menuButton.addEventListener('click', () => { // EventListener for 'MenuButton' < only for mobile >
    menuClicked = true;
    if (ul.style.display == 'none') {
        setTimeout(() => {
            ul.style.display = 'block';
            ul.style.position = 'absolute';
            ul.style.flexDirection = 'column';
            ul.style.marginTop = '33%'
        }, 200);
        nav.style.paddingBottom = '35%'
        nav.style.transition = '0.3s ease-in-out'
    }
    else {
        nav.style.paddingBottom = '0';
        ul.style.display = 'none';
    }
})