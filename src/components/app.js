import React from 'react';
import {Component} from 'react';
import MyTitle from '../components/mytitle';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <MyTitle className="myheader"/>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
