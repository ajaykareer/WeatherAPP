const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ebd326778msh47eceeadc4871f1p1d4cc1jsnda7cdb0653f2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
function getWeather(city) {
  cityName.innerHTML = city;
  cityName2.innerHTML = city;
  Promise.all([
    fetch(
      "https://api.weatherapi.com/v1/astronomy.json?key=70ebb746f81e415f822235122231801&q=" +
        city
    ).then((response) => response.json()),
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    ).then((response) => response.json()),
  ])
    .then((values) => {
      console.log(values);
      data = values;
      console.log(data[1].cloud_pct);
      console.log(data[0].astronomy.astro.sunrise);
      cloud_pct.innerHTML = data[1].cloud_pct;
      feels_like.innerHTML = data[1].feels_like;
      humidity.innerHTML = data[1].humidity;
      max_temp.innerHTML = data[1].max_temp;
      min_temp.innerHTML = data[1].min_temp;
      sunrise.innerHTML = data[0].astronomy.astro.sunrise;
      sunset.innerHTML = data[0].astronomy.astro.sunset;
      moonrise.innerHTML = data[0].astronomy.astro.moonrise;
      moonset.innerHTML = data[0].astronomy.astro.moonset;
      temp.innerHTML = data[1].temp;
      wind_speed.innerHTML = data[1].wind_speed;
    })
    .catch((err) => console.error(err));
}
submit.addEventListener("click", (e) => {
  /*it will stop page from reloading */
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Toronto");

const getWeather2 = () => {
  cityName.innerHTML = "Vancouver";
  cityName2.innerHTML = "Vancouver";
  Promise.all([
    fetch(
      "https://api.weatherapi.com/v1/astronomy.json?key=70ebb746f81e415f822235122231801&q=Vancouver"
    ).then((response) => response.json()),
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vancouver",
      options
    ).then((response) => response.json()),
  ])
    .then((values) => {
      console.log(values);
      data = values;
      console.log(data[1].cloud_pct);
      console.log(data[0].astronomy.astro.sunrise);
      cloud_pct.innerHTML = data[1].cloud_pct;
      feels_like.innerHTML = data[1].feels_like;
      humidity.innerHTML = data[1].humidity;
      max_temp.innerHTML = data[1].max_temp;
      min_temp.innerHTML = data[1].min_temp;
      sunrise.innerHTML = data[0].astronomy.astro.sunrise;
      sunset.innerHTML = data[0].astronomy.astro.sunset;
      moonrise.innerHTML = data[0].astronomy.astro.moonrise;
      moonset.innerHTML = data[0].astronomy.astro.moonset;
      temp.innerHTML = data[1].temp;
      wind_speed.innerHTML = data[1].wind_speed;
    })
    .catch((err) => console.error(err));
};

const getWeather3 = () => {
  cityName.innerHTML = "Montreal";
  cityName2.innerHTML = "Montreal";
  Promise.all([
    fetch(
      "https://api.weatherapi.com/v1/astronomy.json?key=70ebb746f81e415f822235122231801&q=Montreal"
    ).then((response) => response.json()),
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Montreal",
      options
    ).then((response) => response.json()),
  ])
    .then((values) => {
      console.log(values);
      data = values;
      console.log(data[1].cloud_pct);
      console.log(data[0].astronomy.astro.sunrise);
      cloud_pct.innerHTML = data[1].cloud_pct;
      feels_like.innerHTML = data[1].feels_like;
      humidity.innerHTML = data[1].humidity;
      max_temp.innerHTML = data[1].max_temp;
      min_temp.innerHTML = data[1].min_temp;
      sunrise.innerHTML = data[0].astronomy.astro.sunrise;
      sunset.innerHTML = data[0].astronomy.astro.sunset;
      moonrise.innerHTML = data[0].astronomy.astro.moonrise;
      moonset.innerHTML = data[0].astronomy.astro.moonset;
      temp.innerHTML = data[1].temp;
      wind_speed.innerHTML = data[1].wind_speed;
    })
    .catch((err) => console.error(err));
};

// fetch(
//   "http://api.weatherapi.com/v1/astronomy.json?key=70ebb746f81e415f822235122231801&q=Toronto"
// );

//     .then ((response)=> response.json())
//     .then((response)) => console.log(response)
