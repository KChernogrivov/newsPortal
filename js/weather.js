let res;
navigator.geolocation.getCurrentPosition((data) => {
     res = [data.coords.latitude, data.coords.longitude];
     let API_KEY = 'd927bc14f8fbdcdefa194fb79f2532f4';
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0]}&lon=${res[1]}&lang=ru&units=metric&appid=${API_KEY}`)
         .then((data) => data.json()
         .then((data) => displayTemp(data)));

}, (err) => {
    console.log(err);
});
function displayTemp(data) {
    console.log(data);
    let el = document.querySelector(".header__userCity");
    el.innerHTML = Math.round(data.main.temp);
    let img = document.createElement("img");
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector('.header__weather').appendChild(img);
}