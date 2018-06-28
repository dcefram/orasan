import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-timezone';

import './TimeZone.css';

export default class TimeZone extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  renderOptions() {
    return moment.tz.names().map((value, index) => (
      <option key={`${value}-${index}`} value={value}>
        {value}
      </option>
    ));
  }

  render() {
    return (
      <div className="ors-timezone">
        <div className="slds-form-element ors-timezone__container">
          <label className="slds-form-element__label" htmlFor="select-01">
            Select Label
          </label>
          <div className="slds-form-element__control">
            <div className="slds-select_container">
              <select
                className="slds-select"
                id="select-01"
                value={this.props.value}
                onChange={this.props.onChange}
              >
                <option value="">Please select</option>
                {this.renderOptions()}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
