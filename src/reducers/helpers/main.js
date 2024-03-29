export const getMain = state => state;

const isEncumbranceFull = state => state.encumbranceBar.position >= 11;

const isExperienceBarFull = state => state.experienceBar.position >= state.experienceBar.total - 1;

const isPlotBarFull = state => state.plotBar.position >= state.plotBar.total - 1;

const isQuestBarFull = state => state.questBar.position >= state.questBar.total - 1;

const isTaskBarFull = state => state.taskBar.position > 100;

const currentTaskType = state => state.taskBar.taskType;

const currentTaskMonster = state => state.taskBar.monster;

const isInventoryEmpty = state => state.inventory.length <= 1; // gold does not count

const getLevel = state => state.characterSheet.Traits.Level;

const getGold = state => state.inventory[0].quantity;

const nextEquipmentPrice = state =>
  5 * getLevel(state) * getLevel(state) + 10 * getLevel(state) + 20;

const currentMonsterLoot = state =>
  `${state.taskBar.monster.name.toLowerCase()} ${state.taskBar.monster.loot}`;

const nextLevelUpTime = state => 20 * (getLevel(state) + 1) * 60;

export const helpers = {
  isEncumbranceFull,
  isExperienceBarFull,
  isPlotBarFull,
  isQuestBarFull,
  isTaskBarFull,
  currentTaskType,
  currentTaskMonster,
  isInventoryEmpty,
  nextEquipmentPrice,
  getGold,
  currentMonsterLoot,
  nextLevelUpTime
};
