const initialState = {
  status:{}
}

export const getStatus = (state) =>
 state.equipments

const status = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   default:
     return state
 }
}

export default status
