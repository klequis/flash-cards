// Page
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as selectors from '../../store/selectors'
import * as actionCreators from '../../store/actions'
import Card from './Card'
import * as ku from '../../lib/ke-utils'
import styles from './style.css'


class Page extends Component {
  componentWillMount() {
    // this.props.initCurrentCard()
  }

  render () {
    const { cards, currentCard, incrementCard, decrementCard } = this.props
    const cardCount = cards.length
    // ku.log('cardCount', cardCount, 'green')
    const handleNextCardClick = () => {
      incrementCard()
    }

    const handlePreviousCardClick = () => {
      // ku.log('handlePreviousCardClick',"", 'green')
      decrementCard()
    }


    const renderCards = cards.filter((c, index) => {
      return (index + 1 === currentCard)
    }).map((c, index) => (
      <Card
        key={index}
        question={c.question}
        answer={c.answer}
        handleNextCardClick={handleNextCardClick}
        handlePreviousCardClick={handlePreviousCardClick}
        next={currentCard < cardCount}
        previous={currentCard > 1}
      />
    ))

    return (
      <div className={styles.page}>
        <h1>Flash Cards</h1>
        {renderCards}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const o = selectors.getCards(state)
  return {
    cards: o,
    currentCard: selectors.getCurrentCard(state),
  }
}

export default connect(mapStateToProps, actionCreators)(Page)
