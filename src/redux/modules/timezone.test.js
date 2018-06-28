import { setTimezone, TIMEZONE_SET_ZONE } from './timezone';

describe('actions', () => {
  it('should create an action to set the timezone', () => {
    expect(setTimezone('Asia/Manila')).toEqual({
      type: TIMEZONE_SET_ZONE,
      value: 'Asia/Manila',
    });
  });
});
