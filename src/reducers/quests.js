const initialState = [  
  "Seek the Astral Lens",
  "Deliver this planter box",
  "Seek the Grandiose Lens",
  "Placate the Zombies",
  "Deliver this anvil",
  "Fetch me a coin",
  "Fetch me an egg",
  "Fetch me an I.O.U.",
  "Deliver this towel",
  "Deliver this ladder",
  "Placate the Plaid Dragons",
  "Deliver this vest",
  "Seek the Filigreed Orb",
  "Placate the Man-o-wars",
  "Placate the Blink Dogs",
  "Deliver this credenza",
  "Placate the Erinyeses",
  "Deliver this counterpane",
  "Fetch me an axle",
  "Exterminate the Wraiths",
  "Seek the One True Hymnal",
  "Exterminate the Centaurs",
  "Deliver this credenza",
  "Fetch me a trowel",
  "Deliver this teratoma",
  "Exterminate the Anhkhegs",
  "Seek the Ormolu Diadem",
  "Placate the Koalas",
  "Seek the Gilded Bijou",
  "Exterminate the Vrocks",
  "Placate the Wraiths",
  "Fetch me a planter box",
  "Placate the Mermaids",
  "Deliver this toothpick",
  "Fetch me a hat",
  "Fetch me a pint",
  "Fetch me an I.O.U.",
  "Fetch me a toothpick",
  "Seek the Magnificent Brocade",
  "Fetch me a bucket",
  "Placate the Rice Giants",
  "Exterminate the Bronze Dragons",
  "Fetch me a trowel",
  "Deliver this plank",
  "Exterminate the Otyughs",
  "Fetch me a credenza",
  "Exterminate the White Dragons",
  "Placate the Hell Hounds",
  "Deliver this vest",
  "Placate the Brass Dragons",
  "Placate the Copper Dragons",
  "Deliver this bandage",
  "Fetch me a nail",
  "Placate the Pentasauri",
  "Placate the Cockatrices",
  "Exterminate the Ochre Jellies",
  "Placate the Dwarves",
  "Fetch me an anvil",
  "Seek the Arcane Hymnal",
  "Fetch me a rock",
  "Fetch me a canoe",
  "Deliver this coin",
  "Seek the Benevolent Ankh",
  "Seek the Ostentatious Sceptre",
  "Fetch me an anvil",
  "Seek the Blessed Festoon",
  "Exterminate the Porcelain Giants",
  "Seek the Gleaming Talisman",
  "Placate the Blue Dragons",
  "Seek the Astral Laurel",
  "Exterminate the Copper Dragons",
  "Placate the Ropers",
  "Placate the Djinns",
  "Placate the Rakshasas",
  "Fetch me a writ",
  "Exterminate the Vrocks",
  "Fetch me an axle",
  "Fetch me a trinket",
  "Fetch me a teratoma",
  "Exterminate the Sand Elementals",
  "Deliver this nosegay",
  "Seek the Unearthly Hymnal",
  "Fetch me a toothpick",
  "Seek the Magnificent Arrow",
  "Deliver this teratoma",
  "Seek the Arcane Albatross",
  "Exterminate the Bacon Elementals",
  "Placate the Frost Giants",
  "Placate the Maneses",
  "Seek the Unearthly Ornament",
  "Deliver this twig",
  "Placate the Balors",
  "Seek the Dual Amethyst",
  "Fetch me a counterpane",
  "Deliver this toothpick",
  "Seek the Crystalline Talisman",
  "Exterminate the Invisible Stalkers",
  "Fetch me a rock",
  "Seek the Dual Bijou",
  "Seek the Legendary Lamp"
]

export const getQuests = (state) =>
 state.quests

const quests = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   default:
     return state
 }
}

export default quests
