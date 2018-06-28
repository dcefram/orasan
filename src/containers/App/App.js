import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Clock from 'components/Clock/Clock';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import TimeZone from 'components/TimeZone/TimeZone';

// Redux stuff
import { setColor } from 'redux/modules/colors';
import { setTimezone } from 'redux/modules/timezone';

// Stylesheets
import './App.css';

export class App extends Component {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: 'black',
  };

  onColorChange = event => this.props.onColorChange(event.target.dataset.color);

  onTimezoneChange = event => this.props.onTimezoneChange(event.target.value);

  render() {
    return (
      <div className="slds-box ors-app">
        <header className="slds-page-header">
          <div className="slds-media">
            <div className="slds-media__body">
              <h1 className="slds-page-header__title slds-truncate slds-align-middle">
                Current Time
              </h1>
            </div>
          </div>
        </header>

        <Clock color={this.props.color} zone={this.props.timezone} />

        <div className="slds-box">
          <ColorPicker color={this.props.color} onChange={this.onColorChange} />
          <TimeZone
            value={this.props.timezone}
            onChange={this.onTimezoneChange}
          />
        </div>
      </div>
    );
  }
}

const state = state => ({
  color: state.colors.color,
  timezone: state.timezone.zone,
});

const actions = dispatch => ({
  onColorChange: color => dispatch(setColor(color)),
  onTimezoneChange: zone => dispatch(setTimezone(zone)),
});

export default connect(
  state,
  actions
)(App);
