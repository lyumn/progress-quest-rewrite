import { combineReducers } from 'redux';
import inventory from './inventory';
import characterSheet from './characterSheet';
import equipments from './equipments';
import plotDevelopment from './plotDevelopment';
import quests from './quests';
import spellBook from './spellBook';
import encumbranceBar from './bars/encumbranceBar';
import experienceBar from './bars/experienceBar';
import plotBar from './bars/plotBar';
import questBar from './bars/questBar';
import taskBar from './bars/taskBar';

export default combineReducers({
  inventory,
  characterSheet,
  equipments,
  plotDevelopment,
  quests,
  spellBook,
  encumbranceBar,
  experienceBar,
  plotBar,
  questBar,
  taskBar
});
