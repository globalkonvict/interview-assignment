import { ADD_CARD, REMOVE_CARD, SEARCH_CARD, EDIT_CARD, EDITING_CARD } from '../contants';

export const createCard = payload => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const removeCard = payload => {
  return {
    type: REMOVE_CARD,
    payload,
  };
};

export const searchCard = payload => {
  return {
    type: SEARCH_CARD,
    payload,
  };
};

export const editCard = payload => {
  return {
    type: EDIT_CARD,
    payload,
  };
};

export const editingCard = payload => {
  return {
    type: EDITING_CARD,
    payload,
  };
};
