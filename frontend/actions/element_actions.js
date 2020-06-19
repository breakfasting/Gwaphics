export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
export const RECEIVE_ELEMENT = 'RECEIVE_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const CREATE_ELEMENT = 'CREATE_ELEMENT';

export const receiveElement = (element) => ({
  type: RECEIVE_ELEMENT,
  element,
});

export const createElement = (designId, element) => ({
  type: CREATE_ELEMENT,
  designId,
  element,
});

export const receiveElements = (elements) => ({
  type: RECEIVE_ELEMENTS,
  elements,
});

export const removeElement = (element) => ({
  type: REMOVE_ELEMENT,
  element,
});
