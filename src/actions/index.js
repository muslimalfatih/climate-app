import axios from 'axios';

const APP_ID = '481e3bc28e5264e5607c2b65b449bfc1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?&cnt=5&appid=${APP_ID}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
