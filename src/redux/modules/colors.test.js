import { setColor, COLORS_SET_COLOR } from './colors';

describe('actions', () => {
  it('should create an action to set colors', () => {
    expect(setColor('black')).toEqual({
      type: COLORS_SET_COLOR,
      color: 'black',
    });
  });
});
