import random from 'random'

const initialState = [  
   [  
      "Lockjaw",
      "V"
   ],
   [  
      "Good Move",
      "IV"
   ],
   [  
      "Rabbit Punch",
      "III"
   ],
   [  
      "Hastiness",
      "IV"
   ],
   [  
      "Slime Finger",
      "V"
   ],
   [  
      "Seasick",
      "II"
   ],
   [  
      "Shoelaces",
      "II"
   ],
   [  
      "Cone of Paste",
      "I"
   ],
   [  
      "Sadness",
      "II"
   ],
   [  
      "Cone of Annoyance",
      "II"
   ],
   [  
      "Invisible Hands",
      "II"
   ],
   [  
      "Spectral Miasma",
      "I"
   ],
   [  
      "History Lesson",
      "I"
   ],
   [  
      "Magnetic Orb",
      "I"
   ],
   [  
      "Revolting Cloud",
      "I"
   ],
   [  
      "Hydrophobia",
      "I"
   ],
]

export const getSpellBook = (state) =>
   state.spellBook

const levelUp = (state) => {
   const newState = [...state]
   newState.push([window.K.Spells[random.int(0, window.K.Spells.length-1)], 'I'])

   return newState;
}

const spellBook = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   case 'LOAD_GAME':
   return state
   case 'LEVEL_UP':
      return levelUp(state)
   default:
     return state
 }
}

export default spellBook
