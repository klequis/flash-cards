// Page
import React from 'react';
import { connect } from 'react-redux'
import * as selectors from '../../store/selectors'
import * as actionCreators from '../../store/actions'
import Card from './Card'

const Page = ({ cards, currentCard, incrementCard }) => {
  console.log('cards', cards)
  console.log('currentCard', currentCard)

  const handleNextCardClick = () => {
    incrementCard()
  }

  const renderCards = cards.filter((c, index) => {
    return (index + 1 === currentCard)
  }).map((c, index) => (
    <Card
      key={index}
      question={c.question}
      answer={c.answer}
      handleNextCardClick={handleNextCardClick}
    />
  ))



  return (

    <div>
      <h1>Flash Cards</h1>
      {renderCards}
    </div>
  )
}

const mapStateToProps = (state) => {
  const o = selectors.getCards(state)
  // console.log('mapStateToProps: o', o)
  return {
    cards: o,
    currentCard: selectors.getCurrentCard(state),
  }
}

export default connect(mapStateToProps, actionCreators)(Page)
