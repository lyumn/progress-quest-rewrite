import { save } from '../../utils/storage';

// eslint-disable-next-line import/prefer-default-export
export const sold = state => {
  return () => {
    save(state);
    // eslint-disable-next-line no-undef
    window.location.href = `/game/${state.characterSheet.Traits.Name}`;
  };
};
