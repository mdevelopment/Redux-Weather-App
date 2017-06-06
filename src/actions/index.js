import axios from 'axios';
const API_KEY = '982967731cbfe4c44b240ef9a7c06065';
//VAR BELOW IS CONCACTED WITH ES6 SYNTAX//
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL =  "http://api.openweathermap.org/data/2.5/forecast?appid="+API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log();
 const url =  `${ROOT_URL}&q=${city},us`;
 const request =  axios.get(url);
//console.log('Request: '+request);
 console.log(ROOT_URL);
return {
type: FETCH_WEATHER,
payload: request
};

}
