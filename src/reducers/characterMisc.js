import { Alea } from '../utils/randomHelpers';

const initialState = {
  dna: [0.06654448481276631, 0.3819211523514241, 0.7914541012141854, 200298],
  seed: [0.9569065496325493, 0.07272393722087145, 0.5347971464507282, 1890335],
  birthday: 'Sun Jun 30 2019 11:21:14 GMT-0400 (Eastern Daylight Time)',
  birthstamp: 1561908074765,
  saveName: 'Brovdrub'
};

const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default characterMisc;
