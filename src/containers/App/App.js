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
      <div className="App">
        <header className="App-header">
          <h1>Current Time</h1>
          <Clock color={this.props.color} />
        </header>
        <div className="App-intro">
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
