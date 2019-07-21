import { combineReducers } from 'redux'
import inventory from './inventory'
import characterSheet from './characterSheet'
import equipments from './equipments'
import plotDevelopment from './plotDevelopment'
import quests from './quests'
import spellBook from './spellBook'
import status from './status'
import seed from './seed'

export default combineReducers({
  inventory,
  characterSheet,
  equipments,
  inventory,
  plotDevelopment,
  quests,
  spellBook,
  status,
  seed,
})
