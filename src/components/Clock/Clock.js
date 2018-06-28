import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-timezone';

import './Clock.css';

// The only stateful component. My brain argued that it's much more expensive to do "polling" in redux.
// And that it didn't make much sense to do polling outside the Clock component (ie. in the parent)
// We'll see if this would make it hard to test it out...
export default class Clock extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    zone: PropTypes.string,
  };

  static defaultProps = {
    color: 'black',
    zone: '',
  };

  constructor(props) {
    super(props);

    this.timeout = undefined;
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.pollCurrentTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getCurrentTime = () => {
    const now = moment(Date.now());

    // Immutable lol
    if (this.props.zone !== '') {
      now.tz(this.props.zone);
    }

    return now.format('hh:mm:ss A');
  };

  pollCurrentTime = () => {
    this.timeout = setTimeout(
      () =>
        this.setState(
          {
            time: this.getCurrentTime(),
          },
          () => this.pollCurrentTime()
        ),
      1000
    );
  };

  render() {
    const styles = {
      color: this.props.color,
    };

    return (
      <div className="ors-clock">
        <h1 className="ors-clock__text" style={styles}>
          {this.state.time}
        </h1>
      </div>
    );
  }
}
