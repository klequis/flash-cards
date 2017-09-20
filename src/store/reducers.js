import { combineReducers } from 'redux';
// import { merge, prepend, dissoc, without } from 'ramda';
import { merge } from 'ramda';
import cardData from '../data/card-data'

export const cards = (state = cardData, { type, payload }) => {
  switch (type) {

    default:
      return state;
  }
};

export const currentCard = (state = 1, { type }) => {
  switch (type) {
    case 'app/incrementCard':
      return state + 1
    case 'app/decrementCard':
      return state - 1
    default:
      return state
  }
}

export default combineReducers({
  cards,
  currentCard,
})
