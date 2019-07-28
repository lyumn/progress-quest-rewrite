export const humanizePosition = (position, total) => `${(position / total).toFixed(2) * 100}%`;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value || 1;

  return newState;
};
