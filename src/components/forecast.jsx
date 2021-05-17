import React from 'react';

class Forecast extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const forecast = this.props.forecast

    const items = []

    for (const day of forecast) {
      items.push(<tr>
        <td>{day.day}</td>
        <td className="value">{day.value}°</td>
      </tr>);
    }
    return (
      <div className="card">
        <div className="forecast">
          <h1>Forecast</h1>
          <table className="weather-details">
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Forecast;