// TODO: use gameProgress instead?
const TOTAL = 20

const initialState = {
  position: 0
}

export const getPosition = (state) =>
  `${state.encumbranceBar.position}%`

export const isEncumbranceFull = (state) =>
  state.encumbranceBar.position >= TOTAL

const encumbranceBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState
    case 'LOAD_GAME':
      return state
    default:
      return state
  }
}

export default encumbranceBar
