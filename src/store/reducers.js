import { combineReducers } from 'redux';
// import { merge, prepend, dissoc, without } from 'ramda';
import { merge } from 'ramda';
import cardData from '../data/card-data'
import * as ku from '../lib/ke-utils'

export const cards = (state = cardData, { type, payload }) => {
  switch (type) {

    default:
      return state;
  }
};

export const currentCard = (state = 1, { type, payload }) => {
  // ku.log('reducers.currentCard: state', state, 'blue')
  // ku.log('reducers.currentCard: type', type, 'blue')
  // ku.log('reducers.currentCard: payload', payload, 'blue')
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

// cards: [
//   {},
//   {},
// ]
// currentCard: ''

// Having problems initializing Redux state in React app. The first reducer where state = cardData, cardData is an array imported from a module. The second reducer doesn't initialize properly with message "Error: Reducer "currentCard" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
