import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import * as selectors from '../../../store/selectors'
// import * as actionCreators from '../../../store/actions'
import styles from './style.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {showAnswer: false}
  }
  handleClick = () => {
    // console.log('handleClick')
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }
  render() {

    return (
      <div className={styles.card}>
        <button onClick={this.handleClick}>Show Answer</button>
        <button onClick={this.props.handleNextCardClick}>Next Card</button>
        {this.state.showAnswer
          ? this.props.answer
          : this.props.question}
      </div>
    )
  }
}

export default Card
