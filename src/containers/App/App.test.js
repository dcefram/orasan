import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import { App } from './App';
import Clock from 'components/Clock/Clock';
import ColorPicker from 'components/ColorPicker/ColorPicker';

/**
 * Just a note for myself about testing...(https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)
 *
 * - Will the test have to duplicate exactly the application code? This will make it brittle.
 * - Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
 * - From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
 */

describe('App', () => {
  let props;
  let mountedApp;

  const clock = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {
      store: {},
      color: undefined,
      onColorChange: () => {},
    };
    mountedApp = undefined;
  });

  it('App should always mount the Clock', () => {
    const clocks = clock().find(Clock);
    expect(clocks.length).toBeGreaterThan(0);
  });

  it('App should always mount the ColorPicker', () => {
    const pickers = clock().find(ColorPicker);
    expect(pickers.length).toBeGreaterThan(0);
  });
});
