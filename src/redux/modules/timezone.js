const initialState = {
  zone: '',
};

const Logic = {};

export const TIMEZONE_SET_ZONE = 'timezone.SET_ZONE';
export function setTimezone(value) {
  if (typeof value !== 'string') {
    return;
  }

  return { type: TIMEZONE_SET_ZONE, value };
}

Logic[TIMEZONE_SET_ZONE] = (state, action) => ({
  ...state,
  zone: action.value,
});

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  if (typeof Logic[type] !== 'function') {
    return state;
  }

  return Logic[type](state, action);
}
