import cardsSeed from './seed';
import { ADD_CARD, REMOVE_CARD, EDIT_CARD, SEARCH_CARD, EDITING_CARD } from '../contants';

const cardState = {
  cards: cardsSeed,
  searchedCards: [],
  editing: {
    status: false,
    card: {},
  },
};

const cardReducer = (state = cardState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return { ...state, cards: [...state.cards, payload] };
    case REMOVE_CARD:
      return { ...state, cards: state.cards.filter(card => card.id !== payload) };
    case EDITING_CARD:
      return { ...state, editing: { status: true, card: payload } };
    case EDIT_CARD:
      return { ...state, cards: state.cards.map(card => (card.id === payload.id ? payload : card)), editing: { status: false, card: {} } };
    case SEARCH_CARD:
      return { ...state, searchedCards: state.cards.filter(card => searchCardsHelper(card, payload)) };
    default:
      return state;
  }
};

const searchCardsHelper = (card, payload) => {
  if (payload === '' || !payload) return false;
  return card.title.toLowerCase().includes(payload.toLowerCase());
};

export default cardReducer;
