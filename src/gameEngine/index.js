import delay from 'delay';
import completeTask from './completeTask';
import { save } from '../utils/storage';

const delayedCall = async action => {
  await delay(100);
  action();
};

const start = async ({
  data,
  incrementTask,
  levelUp,
  completeQuest,
  completePlot,
  nextTask,
  incrementExperience,
  incrementQuest,
  incrementPlot,
  loot,
  buy,
  sellOne,
  helpers
}) => {
  const {
    isExperienceBarFull,
    isPlotBarFull,
    isQuestBarFull,
    isTaskBarFull,
    currentTaskType,
    nextLevelUpTime
  } = helpers;

  if (isTaskBarFull(data)) {
    if (isExperienceBarFull(data)) {
      levelUp(nextLevelUpTime(data));
    } else if (currentTaskType(data) === 'kill') {
      incrementExperience(1);
    }
    if (currentTaskType(data) === 'kill' || currentTaskType(data) === 'heading') {
      if (isQuestBarFull(data) || data.quests.length === 0) {
        completeQuest();
      } else {
        incrementQuest(1);
      }

      if (isPlotBarFull(data)) {
        completePlot();
      } else {
        incrementPlot(1);
      }
    }

    completeTask(data, nextTask, loot, buy, sellOne, helpers);
  } else {
    delayedCall(incrementTask);
  }
  save(data);
};

export default start;
