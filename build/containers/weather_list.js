'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _chart = require('../components/chart');

var _chart2 = _interopRequireDefault(_chart);

var _google_map = require('../components/google_map');

var _google_map2 = _interopRequireDefault(_google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherList = function (_Component) {
  _inherits(WeatherList, _Component);

  function WeatherList() {
    _classCallCheck(this, WeatherList);

    return _possibleConstructorReturn(this, (WeatherList.__proto__ || Object.getPrototypeOf(WeatherList)).apply(this, arguments));
  }

  _createClass(WeatherList, [{
    key: 'renderWeather',
    value: function renderWeather(cityData) {
      var name = cityData.city.name; //This var handles a key error with the map array function
      //the key is placed in the top element holding the data
      //
      var temps = cityData.list.map(function (weather) {
        return weather.main.temp;
      });
      var pressures = cityData.list.map(function (weather) {
        return weather.main.pressure;
      });
      var humidities = cityData.list.map(function (weather) {
        return weather.main.humidity;
      });
      //
      var _cityData$city$coord = cityData.city.coord,
          lon = _cityData$city$coord.lon,
          lat = _cityData$city$coord.lat;

      console.log({ lon: lon, lat: lat });
      //console.log (cityData.city.coord.lat +   "  "+cityData.city.coord.lon);
      //const mylat = cityData.city.coord.lat;
      //const mylon = cityData.city.coord.lon;
      return _react2.default.createElement(
        'tr',
        { key: name },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_google_map2.default, { lon: lon, lat: lat })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_chart2.default, { data: temps, color: 'lightblue', height: 150, units: "Fahrenheit", width: 175 })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_chart2.default, { data: pressures, color: 'lightblue', height: 150, units: 'hPa', width: 175 })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_chart2.default, { data: humidities, color: 'lightblue', height: 150, units: '%', width: 175 })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var tableStyle = {
        backgroundColor: "#262626",
        marginTop: "-15px"
      };

      //console.log(this.props.weather)

      return _react2.default.createElement(
        'table',
        { className: 'table table-hover', style: tableStyle },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'CITY'
            ),
            _react2.default.createElement(
              'th',
              null,
              'TEMPERATURE'
            ),
            _react2.default.createElement(
              'th',
              null,
              'PRESSURE'
            ),
            _react2.default.createElement(
              'th',
              null,
              'HUMIDITY'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.props.weather.map(this.renderWeather)
        )
      );
    }
  }]);

  return WeatherList;
}(_react.Component);

//ES5
/*function mapStateToProps(state) {
return {weather: state.weather}
}*/

//BELOW IS ES6


function mapStateToProps(_ref) {
  var weather = _ref.weather;

  return { weather: weather }; // {weather} === {weather: weather} === {state.weather}
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WeatherList);