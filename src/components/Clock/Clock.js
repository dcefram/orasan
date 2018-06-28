import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

// The only stateful component. My brain argued that it's much more expensive to do "polling" in redux.
// And that it didn't make much sense to do polling outside the Clock component (ie. in the parent)
// We'll see if this would make it hard to test it out...
export default class Clock extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: 'black',
  };

  state = {
    time: format(new Date(), 'hh:mm:ss A'),
  };

  timeout;

  componentDidMount() {
    this.getCurrentTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getCurrentTime = () => {
    this.timeout = setTimeout(
      () =>
        this.setState(
          {
            time: format(new Date(), 'hh:mm:ss A'),
          },
          () => this.getCurrentTime()
        ),
      1000
    );
  };

  render() {
    const styles = {
      color: this.props.color,
    };

    return <h1 style={styles}>{this.state.time}</h1>;
  }
}
