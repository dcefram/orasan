import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import TimeZone from './TimeZone';

/**
 * Just a note for myself about testing...(https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)
 *
 * - Will the test have to duplicate exactly the application code? This will make it brittle.
 * - Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
 * - From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
 */

describe('TimeZone', () => {
  let props;
  let mountedTimeZone;
  const timezone = () => {
    if (!mountedTimeZone) {
      mountedTimeZone = mount(<TimeZone onChange={() => {}} {...props} />);
    }
    return mountedTimeZone;
  };

  beforeEach(() => {
    props = {
      value: '',
      onChange: () => {},
    };
    mountedTimeZone = undefined;
  });

  it('TimeZone should always renders a div', () => {
    const div = timezone().find('div');
    expect(div.length).toBeGreaterThan(0);
  });

  it('TimeZone should trigger onChange when user changes the selected timezone', () => {
    let value = undefined;

    props = {
      value: '',
      onChange: event => {
        value = event.target.value;
      },
    };
    const select = timezone().find('select');

    select.simulate('change', { target: { value: 'Asia/Manila' } });
    expect(value).toEqual('Asia/Manila');
  });
});
