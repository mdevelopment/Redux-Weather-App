'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_weather = require('./reducer_weather');

var _reducer_weather2 = _interopRequireDefault(_reducer_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  weather: _reducer_weather2.default
});

exports.default = rootReducer;