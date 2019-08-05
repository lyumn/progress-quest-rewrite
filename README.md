# Progress Quest Rewrite

This is a modern redesign/rewrite for old 0-player adventure game Progress Quest: http://progressquest.com/play.

This project is bootstrapped from Create React App, and uses Redux for flux and Grommet for UI components.

## Demo

https://progress-quest.herokuapp.com


## Goals

I wanted to rewrite the original Progress Quest web version (https://github.com/rudle/progress-quest) in React and modern frontend architecture with a better UI. Also I'd like to learn Redux and Grommet. It's my first project using them.

## Status

Working in Progress.

## Requirements

This game requires browser storage to be enabled.

## Known Issues

### Bugs
1. ProgressBars does not always look the same. Extra gaps are quite visible in some situation.
2. Prural for nouns is off.
3. There are unparsed monster names and undefined items names showing up during the gameplay

### Code issues
1. No automated tests yet 😞.
2. Some copy-pasta from the original game code in the game engine needs to be reviewed and refactored.
3. There are some console warnings from React. e.g., Invalidated prop types.
4. window.K variable should go away.
5. Inconsistent letter cases from the original code.

### Missing Funcationalies
1. Cross-browser UI compatibility
2. Progress in text when hovered on progress bars
3. Highlighting text changes (new level, stats, spellbook, etc.)
