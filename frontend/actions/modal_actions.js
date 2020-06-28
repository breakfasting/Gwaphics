export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = (modal, id) => ({
  type: TOGGLE_MODAL,
  modal,
  id,
});
