import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import ColorPicker from './ColorPicker';

/**
 * Just a note for myself about testing...(https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)
 *
 * - Will the test have to duplicate exactly the application code? This will make it brittle.
 * - Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
 * - From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
 */

describe('ColorPicker', () => {
  let props;
  let mountedColorPicker;
  const clock = () => {
    if (!mountedColorPicker) {
      mountedColorPicker = mount(
        <ColorPicker onChange={() => {}} {...props} />
      );
    }
    return mountedColorPicker;
  };

  beforeEach(() => {
    props = {
      color: undefined,
      colors: undefined,
      onChange: () => {},
    };
    mountedColorPicker = undefined;
  });

  it('ColorPicker should always renders a div', () => {
    const div = clock().find('div');
    expect(div.length).toBeGreaterThan(0);
  });

  it('ColorPicker should render the correct colors links', () => {
    props = {
      colors: ['purple', 'yellow', 'orange'],
    };
    const links = clock().find('a');
    const texts = links.map(link => link.text());

    const expected = ['Purple', 'Yellow', 'Orange'];

    expect(texts).toEqual(expect.arrayContaining(expected));
  });

  it('ColorPicker should trigger onChange when user clicks a link', () => {
    let value = undefined;

    props = {
      colors: ['purple', 'yellow', 'orange'],
      onChange: event => {
        value = event.target.dataset.color;
      },
    };
    const links = clock().find('a');

    links.forEach((link, index) => {
      link.simulate('click');
      expect(value).toEqual(props.colors[index]);
    });
  });
});
