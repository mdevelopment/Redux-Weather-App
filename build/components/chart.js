'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSparklines = require('react-sparklines');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function average(data) {
  var myAvg = _lodash2.default.round(_lodash2.default.sum(data) / data.length);
  var convertedTemp = _lodash2.default.round(myAvg * 9 / 5 - 459.67); //Fahrenheit
  return convertedTemp;
}

// Sparklines: pass the following props
// data = an array of numbers
// color = the sparkline color
// height and width = of sparkline
// units = symbol to be displayed next to the average

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactSparklines.Sparklines,
      { height: props.height, width: props.width, data: props.data },
      _react2.default.createElement(_reactSparklines.SparklinesLine, { color: props.color }),
      _react2.default.createElement(_reactSparklines.SparklinesReferenceLine, { type: 'avg' })
    ),
    _react2.default.createElement(
      'div',
      null,
      average(props.data),
      ' ',
      props.units
    )
  );
};