const WEATHER_API_KEY = "96aad394a9f612808beee4d8a32028f1";
const createApi = (lat, lng) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=${WEATHER_API_KEY}`;
};
