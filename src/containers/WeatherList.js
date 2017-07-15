import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeatherData(cityData, i) {
    const city = cityData.city.name;

    return (
      <div>
        <p><b>{city}</b> temperature in 5 days.</p>
        <table key={i} className="table table-hover">
          <thead>
            <tr>
              <th>{city}</th>
              <th>Temperature</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            {cityData.list.map((weather, j) =>
              <tr key={j}>
                <td>{ moment.unix(weather.dt).format("YYYY-MM-DD") }</td>
                <td>{ Math.round(weather.temp.day - 273) } C</td>
                <td>{ Math.round(weather.temp.max - weather.temp.min) } C</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
    )
  }

  render() {

    return (
      <div>
        {this.props.weather.map(this.renderWeatherData)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
