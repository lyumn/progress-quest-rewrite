import delay from 'delay';
import { complement } from 'polished';
import { roll, incrementTask, levelUp } from '../actions';

const delayedCall = async action => {
  await delay(50);
  action();
};

export const start = async ({
  incrementTask,
  levelUp,
  completeQuest,
  completePlot,
  completeTask,
  incrementExperience,
  incrementQuest,
  incrementPlot,
  isEncumbranceFull,
  isExperienceBarFull,
  isPlotBarFull,
  isQuestBarFull,
  isTaskBarFull
}) => {
  if (isTaskBarFull) {
    if (isExperienceBarFull) {
      debugger;
      levelUp();
    } else {
      incrementExperience(10);
    }

    if (isQuestBarFull) {
      completeQuest();
    } else {
      incrementQuest(1);
    }

    if (isPlotBarFull) {
      completePlot();
    } else {
      incrementPlot(1);
    }

    completeTask();
  } else {
    delayedCall(incrementTask);
  }
};
