import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onSubmitForm(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input
          placeholder="Get a daily temperature"
          value={this.state.term}
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
