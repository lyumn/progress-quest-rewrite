import random from 'random';
import { SpecialItem, randomEquip, randomeMonsterTask } from '../utils/randomHelpers';

const completeTask = (
  data,
  nextTask,
  loot,
  buy,
  sellOne,
  {
    isEncumbranceFull,
    currentTaskType,
    currentTaskMonster,
    isInventoryEmpty,
    nextEquipmentPrice,
    getGold,
    currentMonsterLoot
  }
) => {
  const taskType = currentTaskType(data);
  if (taskType == 'kill') {
    if (currentTaskMonster(data).loot === '*') {
      loot(SpecialItem());
    } else {
      loot(currentMonsterLoot(data));
    }
  } else if (taskType == 'buying') {
    const equips = randomEquip();
    buy(equips.type, equips.name, nextEquipmentPrice(data));
  } else if (taskType == 'market' || taskType == 'sell') {
    if (!isInventoryEmpty(data) && taskType == 'sell') {
      let amt = data.inventory[1].quantity * data.characterSheet.Traits.Level;

      if (data.inventory[1].name.includes(' of ')) {
        amt *= (1 + random.int(1, 10)) * (1 + random.int(1, data.characterSheet.Traits.level));
      }
      sellOne(amt);
    }

    if (data.inventory.length > 2) {
      nextTask(`Selling ${data.inventory[2].name}`, 'sell');
      return 0;
    }
  }
  if (isEncumbranceFull(data)) {
    nextTask(`Heading to market to sell loot`, 'market');
    return 0;
  }
  if (
    taskType != 'kill' &&
    taskType != 'heading'
    // (Pos('kill|', old) <= 0) && (old != 'heading')
  ) {
    if (getGold(data) > nextEquipmentPrice(data)) {
      nextTask(`Negotiating purchase of better equipment`, 'buying');
      return 0;
    }
    nextTask(`Heading to the killing fields`, 'heading');
    return 0;
  }
  const result = randomeMonsterTask(data.characterSheet.Traits.Level);
  nextTask(`Executing ${result.text}`, 'kill', result.monster);

  //     var nn = GetI(Traits, 'Level');
  //     var t = MonsterTask(nn);
  //     var InventoryLabelAlsoGameStyleTag = 3;
  //     nn = Math.floor((2 * InventoryLabelAlsoGameStyleTag * t.level * 1000) / nn);
  //     Task('Executing ' + t.description, nn);
};

export default completeTask;
