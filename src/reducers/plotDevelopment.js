const initialState = {  
  "bestplot":"Act II"
}

export const getPlotDevelopment = (state) =>
 state.plotDevelopment

const plotDevelopment = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   default:
     return state
 }
}

export default plotDevelopment
