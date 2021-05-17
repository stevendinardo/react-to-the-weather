import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.label}</td>
        <td className="value">{this.props.value}</td>
      </tr>
    );
  }
}

class CurrentWeather extends React.Component {
  render() {
    const weather = this.props.weather
    return (
      <div className="card">
        <div className="current-weather">
          <h1>Current Weather</h1>
        </div>
        <div className="columns">
          <div className="column">
            <div className="current-temp">{weather.temperature}°</div>
          </div>
          <div className="column">
            <table className="weather-details">
              <tbody>
                <Row label="Humidity:" value={weather.humidity + '%'} />
                <Row label="Dew Point:" value={weather.dewPoint + '°'} />
                <Row label="Pressure:" value={weather.pressure + ' kPa'} />
                <Row label="Wind:" value={weather.wind} />
                <Row label="Visibility:" value={weather.visibility + ' km'} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;