import './App.css';
import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather';
import Forecast from './components/forecast';
import React from 'react';

// const site_url = './public/siteList.xml';

function getSites() {

  // const response = fetch(site_url);
  // console.log(response);

}

function getTime() {
  let date = new Date();
  return date.getHours();
}

function getWeather() {
  let weather = {
    "temperature": 13,
    "condition": "rain",
    "humidity": 78,
    "dewPoint": 4.8,
    "pressure": 100.7,
    "wind": "SSW 9 km/h",
    "visibility": 24
  }
  return weather
}

function getForecast() {
  let forecast = [
    {
      "day": "Wednesday",
      "value": 18
    },
    {
      "day": "Thursday",
      "value": 15
    },
    {
      "day": "Friday",
      "value": 19
    },
    {
      "day": "Saturday",
      "value": 20
    },
    {
      "day": "Sunday",
      "value": 20
    },
    {
      "day": "Monday",
      "value": 16
    }
  ]

  return forecast
}

class App extends React.Component {
  constructor(props) {
    super(props);
    getSites();

  }

  render() {
    let appClass = 'app';

    let time = getTime();
    if (time > 16 && time < 7) {
      appClass += " night"
    } else {
      appClass += " day"
    }

    return (
      <div className={appClass}>
        <SearchBar />
        <section className="cards">
          <CurrentWeather weather={getWeather()} />
          <Forecast forecast={getForecast()} />
        </section>
      </div>
    );
  }
}

export default App;
