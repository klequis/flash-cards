// import * as ku from './../lib/ke-utils'
export const getCards = (state) => {
  return state.cards
}

export const getCurrentCard = (state) => {
  const o = state.currentCard
  console.log('state', state)
  console.log('state.currentCard', o)
  return o
}
