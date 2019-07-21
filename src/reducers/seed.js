import {Alea} from '../utils/random'

const initialState = {
  seed: Alea()
}

export const getSeed = (state) =>
 state.seed

const seed = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   default:
     return state
 }
}

export default seed
