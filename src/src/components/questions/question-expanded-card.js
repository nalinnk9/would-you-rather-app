import React, { Component } from 'react';
import RadioButton from './radio-button';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../images/loading.svg';
import { Redirect } from 'react-router-dom';

class QuestionExpanded extends Component {
  render() {
    const handle = this.props.location.pathname;
    const id = handle.split('/')[3];
    const cUser = Object.values(this.props.users).find(
      (user) => user.id === this.props.currentUser
    );
    const userAnsweredQuestions = Array.from(Object.keys(cUser.answers));
    const question = Object.values(this.props.questions).filter(
      (q) => q.id === id
    );
    const totalAnswers =
      question.length > 0
        ? question[0].optionOne.votes.length +
          question[0].optionTwo.votes.length
        : 1;
    const percentageOne =
      question.length > 0
        ? (question[0].optionOne.votes.length / totalAnswers) * 100
        : 0;
    const percentageTwo =
      question.length > 0
        ? (question[0].optionTwo.votes.length / totalAnswers) * 100
        : 0;
    const isAnswered = userAnsweredQuestions.some((q) => q === id);
    const answer = isAnswered ? cUser.answers[id] : 'unAnswered';
    return (
      <div>
        {question.length > 0 ? (
          !this.props.isSaving ? (
            <div
              className="card p-3 mb-2 "
              style={{ width: '30rem', margin: 'auto', marginTop: '1rem' }}
            >
              <h5 className="card-title border-bottom">
                {question[0].author} asks
              </h5>
              <img
                src="https://www.gstatic.com/webp/gallery/1.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Would You rather...</h5>
                <div className="card-text" onChange={this.props.onChange}>
                  <RadioButton
                    option1={question[0].optionOne.text}
                    checked={answer === 'optionOne'}
                    value="optionOne"
                    isAnswered={isAnswered}
                    percentage={percentageOne}
                    numAnswers={question[0].optionOne.votes.length}
                    totalAnswers={totalAnswers}
                  />
                  <RadioButton
                    option1={question[0].optionTwo.text}
                    checked={answer === 'optionTwo'}
                    value="optionTwo"
                    isAnswered={isAnswered}
                    percentage={percentageTwo}
                    numAnswers={question[0].optionTwo.votes.length}
                    totalAnswers={totalAnswers}
                  />
                </div>
                {!isAnswered && (
                  <button
                    className="btn btn-primary btn-lg mt-3"
                    style={{ width: '20rem', margin: 'auto' }}
                    onClick={() => this.props.onClick(id)}
                  >
                    {' '}
                    SUBMIT
                  </button>
                )}
              </div>
            </div>
          ) : (
            <Logo />
          )
        ) : (
          <Redirect
            to={{
              pathname: '/notFound',
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSaving: state.saveQuestions.isSavingQuestion,
    currentUser: state.getUsers.currentUser,
  };
};
export const QuestionExpandedCard = connect(
  mapStateToProps,
  null
)(QuestionExpanded);
