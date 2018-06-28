import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import Clock from './Clock';

/**
 * Just a note for myself about testing...(https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)
 *
 * - Will the test have to duplicate exactly the application code? This will make it brittle.
 * - Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
 * - From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
 */

describe('Clock', () => {
  let props;
  let mountedClock;
  const clock = () => {
    if (!mountedClock) {
      mountedClock = mount(<Clock {...props} />);
    }
    return mountedClock;
  };

  beforeEach(() => {
    props = {
      color: undefined,
    };
    mountedClock = undefined;
  });

  it('Clock always renders a h1', () => {
    const h1 = clock().find('h1');
    expect(h1.length).toBeGreaterThan(0);
  });

  it('Clock should change color when we pass color props to it', () => {
    props = {
      color: 'red',
    };
    const h1 = clock().find('h1');

    expect(h1.prop('style')).toEqual(
      expect.objectContaining({
        color: 'red',
      })
    );
  });

  it('Clock should also display the correct format', () => {
    const h1 = clock().find('h1');

    expect(h1.text()).toEqual(expect.stringMatching(/([\d]{2}:?){3}\s(AM|PM)/));
  });
});
