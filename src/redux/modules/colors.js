const initialState = {
  color: 'black',
};

const Logic = {};

export const COLORS_SET_COLOR = 'colors.SET_COLOR';
export function setColor(color) {
  if (typeof color !== 'string') {
    return;
  }

  return { type: COLORS_SET_COLOR, color };
}

Logic[COLORS_SET_COLOR] = (state, action) => ({
  ...state,
  color: action.color,
});

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  if (typeof Logic[type] !== 'function') {
    return state;
  }

  return Logic[type](state, action);
}
