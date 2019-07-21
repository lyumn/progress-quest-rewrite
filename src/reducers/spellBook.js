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
   [  
      "Holy Batpole",
      "I"
   ],
   [  
      "Braingate",
      "I"
   ],
   [  
      "Clever Fellow",
      "I"
   ]
]

export const getSpellBook = (state) =>
   state.spellBook
 

const spellBook = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
     case 'LOAD_GAME':
      return state
   default:
     return state
 }
}

export default spellBook
