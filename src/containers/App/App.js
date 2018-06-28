import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Clock from 'components/Clock/Clock';
import ColorPicker from 'components/ColorPicker/ColorPicker';

// Redux stuff
import { setColor } from 'redux/modules/colors';

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

        <Clock color={this.props.color} />

        <div className="slds-box">
          <ColorPicker color={this.props.color} onChange={this.onColorChange} />
        </div>
      </div>
    );
  }
}

const state = state => ({
  color: state.colors.color,
});

const actions = dispatch => ({
  onColorChange: color => dispatch(setColor(color)),
});

export default connect(
  state,
  actions
)(App);
