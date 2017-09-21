import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import * as selectors from '../../../store/selectors'
// import * as actionCreators from '../../../store/actions'
import styles from './style.css'
import * as ku from '../../../lib/ke-utils'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {showAnswer: false}
  }
  handleClick = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }
  render() {
    ku.log('previous', this.props.previous, 'green')
    ku.log('next', this.props.next, 'green')
    const previousButton = this.props.previous
      // ? <button className={styles.active} onClick={this.props.handlePreviousCardClick}><i className="fa fa-chevron-circle-left  fa-2x" aria-hidden="true"></i></button>
      ? <div className={styles.active} onClick={this.props.handlePreviousCardClick}><i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i></div>
      : <div className={styles.disabled}><i className="fa fa-chevron-circle-left  fa-2x disabled" aria-hidden="true"></i></div>
    const nextButton = this.props.next
      ? <div className={styles.active} onClick={this.props.handleNextCardClick}><i className="fa fa-chevron-circle-right  fa-2x" aria-hidden="true"></i></div>
      : <div className={styles.disabled}><i className="fa fa-chevron-circle-right  fa-2x disabled" aria-hidden="true"></i></div>
    return (
      <div className={styles.card}>
        <div></div>
        <div className={styles.middleRow}>
          {previousButton}
          <div className={styles.qandaContainer}>
            {this.state.showAnswer
              ? <div className={styles.qora}>{this.props.answer}</div>
              : <div className={styles.qora}>{this.props.question}</div>}

          </div>
          {nextButton}
        </div>
        <div>
          <button className="btn btn-success" onClick={this.handleClick}>Show Answer</button>
        </div>
      </div>
    )
  }
}

export default Card
