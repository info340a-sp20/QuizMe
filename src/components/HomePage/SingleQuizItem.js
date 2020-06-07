import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export default class SingleQuizItem extends Component {
  static defaultProps = {
    quiz: {
      question: "no questions saved yet",
      answers: "no answers saved yet"
    }
  }

  state = {
    quiz: this.props.location.state,
  }

  render() {
    const quiz = this.state.quiz;
    let back = (
      <Link to="/" style={{ color: 'orange' }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: 'orange' }}
          className="mr-2" />
        Back
      </Link>
    )

    return (
      this.state.quiz ? (
        <div >
          {back}
          <Card quiz={quiz} renderMode={true} />
        </div>
      ) : (
          <div>
            <p>Whoops! Invalid access. Please select a valid quiz</p>
          </div>
        )
    )
  }
}
