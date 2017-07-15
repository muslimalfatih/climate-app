import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeatherData(cityData) {
    const city = cityData.city.name;

    return (
      <div key={city}>
        <p><b>{city}</b> temperature in 5 days.</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>{city}</th>
              <th>Temperature</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            {cityData.list.map((data, i) =>
              <tr key={i}>
                <td>{ moment.unix(data.dt).format("YYYY-MM-DD") }</td>
                <td>{ Math.round(data.temp.day - 273) } C</td>
                <td>{ Math.round(data.temp.max - data.temp.min) } C</td>
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
