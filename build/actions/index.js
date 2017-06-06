'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_WEATHER = undefined;
exports.fetchWeather = fetchWeather;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = '982967731cbfe4c44b240ef9a7c06065';
//VAR BELOW IS CONCACTED WITH ES6 SYNTAX//
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//const ROOT_URL =  "http://api.openweathermap.org/data/2.5/forecast?appid="+API_KEY;
var FETCH_WEATHER = exports.FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
  var url = ROOT_URL + '&q=' + city + ',us';
  var request = _axios2.default.get(url);
  //console.log('Request: '+request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}