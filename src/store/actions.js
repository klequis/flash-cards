
export const incrementCard = () => {
  return ({
    type: 'app/incrementCard',
  })
}

export const decrementCard = () => {
  return ({
    type: 'app/decrementCard',
  })
}

export const initCurrentCard = () => {
  return ({
    type: 'app/initCurrentCard',
    payload: 1,
  })
}
