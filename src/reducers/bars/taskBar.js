// TODO: use gameProgress instead?
const initialState = {
  position: '0%'
}

export const getPosition = (state) =>
 state.position

const taskBar = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
     case 'LOAD_GAME':
      return state
   default:
     return state
 }
}

export default taskBar
