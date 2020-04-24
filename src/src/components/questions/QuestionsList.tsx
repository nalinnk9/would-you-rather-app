import React, { Component } from 'react';
import Question from './question';

export default class QuestionsList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      shouldShowAnswered: true,
    };
  }

  private showAnswered = () => {
    this.setState({
      shouldShowAnswered: true,
    });
  };

  private showUnAnswered = () => {
    this.setState({
      shouldShowAnswered: false,
    });
  };
  render() {
    const { questions, currentUser } = this.props;
    const cUser: any = Object.values(this.props.users).find(
      (user: any) => user.id === currentUser
    );
    const questionsArray = Array.from(Object.values(questions));
    const userAnsweredQuestions = Array.from(Object.keys(cUser.answers));
    const questionsNotAnsweredByUser = questionsArray.filter(
      (question: any) => {
        return !userAnsweredQuestions.some(
          (answerId) => question.id === answerId
        );
      }
    );
    const questionAnsweredByUser = questionsArray.filter((question: any) => {
      return userAnsweredQuestions.some((answerId) => question.id === answerId);
    });
    const questionsToRender = this.state.shouldShowAnswered
      ? questionAnsweredByUser
      : questionsNotAnsweredByUser;
    const navBar = (
      <nav
        className="navbar navbar-expand-lg navbar-dark navbar-icon-top"
        style={{ background: '#e3f2fd' }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{ alignContent: 'center' }}>
            <li
              className="nav-item rounded-pill"
              id="Home"
              style={{ marginLeft: 'auto' }}
            >
              <button
                className="nav-link text-dark rounded-pill"
                onClick={this.showAnswered}
              >
                Answered Questions
              </button>
            </li>
            <li
              className="nav-item rounded-pill"
              style={{ marginLeft: '5rem' }}
            >
              <button
                className="nav-link text-dark rounded-pill"
                onClick={this.showUnAnswered}
              >
                Unanswered Question
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
    return (
      <div
        style={{ margin: 'auto', width: '20rem' }}
        className="border border-secondary mt-4"
      >
        {navBar}
        {questionsToRender.map((question: any) => {
          return <Question question={question} key={question.id} />;
        })}
      </div>
    );
  }
}
