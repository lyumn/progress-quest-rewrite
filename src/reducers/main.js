export const getMain = state => state;

const main = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return state;
    default:
      return state;
  }
};

export default main;
