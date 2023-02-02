const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ebd326778msh47eceeadc4871f1p1d4cc1jsnda7cdb0653f2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  cityName2.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  /*it will stop page from reloading */
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Toronto");

const getWeather2 = () => {
  cityName.innerHTML = "Vancouver";
  cityName2.innerHTML = "Vancouver";
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=vancouver",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

const getWeather3 = () => {
  cityName.innerHTML = "Montreal";
  cityName2.innerHTML = "Montreal";
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=montreal",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
