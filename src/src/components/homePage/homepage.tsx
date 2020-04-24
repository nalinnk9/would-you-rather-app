import React, { Component } from 'react';
import { Navbar } from '../navbar/navbar';
import { Route } from 'react-router-dom';
import NewQuestion from '../questions/new-question';
import QuestionsList from '../questions/QuestionsList';
import Leaderboard from '../leaderBoard/leaderboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { QuestionExpandedCard } from './../questions/question-expanded-card';
import {
  getUsers,
  currentUser,
  updateIsFetchingUser,
} from '../../redux/action/user-actions';
import {
  getQuestions,
  saveQuestionAndFecthUsersAndQuestions,
  addQuestionAndFetchQuestionsAndUser,
} from '../../redux/action/question-actions';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/loading.svg';
import PageNotFound from '../pageNotFound/page-not-found';

class HomepageNotConnected extends Component<any, any> {
  private tmp: string;

  componentDidMount() {
    this.props.getusers();
    this.props.getquestions();
  }

  private onSubmitClicked = (question: any) => {
    this.props.saveQuestionAndFecthUsersAndQuestions({
      authedUser: this.props.currentUser,
      qid: `${question}`,
      answer: `${this.tmp}`,
    });
    this.props.history.push({
      pathname: '/loggedin/home',
    });
  };

  private onChange = (e: any) => {
    this.tmp = e.target.value;
  };

  private onSubmitQuestion = (q: any) => {
    this.props.addQuestionAndFetchQuestionsAndUser(q);
    this.props.history.push({
      pathname: '/loggedin/home',
    });
  };

  private renderQuestionList = () => {
    return (
      <div>
        {this.props.isFetchingQuestions ||
        this.props.isSavingQuestion ||
        this.props.isFetchingUsers ||
        this.props.isAddingQuestion ? (
          <Logo />
        ) : (
          <QuestionsList {...this.props} />
        )}
      </div>
    );
  };
  private renderPoll = () => {
    return (
      <div>
        {this.props.isFetchingQuestions ||
        this.props.isSavingQuestion ||
        this.props.isFetchingUsers ||
        this.props.isAddingQuestion ? (
          <Logo />
        ) : (
          <QuestionExpandedCard
            {...this.props}
            onChange={this.onChange}
            onClick={this.onSubmitClicked}
          />
        )}
      </div>
    );
  };

  private renderLeaderboard = () => {
    return (
      <div>
        {this.props.isFetchingQuestions ||
        this.props.isSavingQuestion ||
        this.props.isFetchingUsers ||
        this.props.isAddingQuestion ? (
          <Logo />
        ) : (
          <Leaderboard {...this.props} />
        )}
      </div>
    );
  };
  private renderNewQuestion = () => {
    return (
      <div>
        {this.props.isFetchingQuestions ||
        this.props.isSavingQuestion ||
        this.props.isFetchingUsers ||
        this.props.isAddingQuestion ? (
          <Logo />
        ) : (
          <NewQuestion {...this.props} onSubmit={this.onSubmitQuestion} />
        )}
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.props.isFetchingUsers ||
        this.props.isFetchingQuestions ||
        this.props.isSavingQuestion ||
        this.props.isAddingQuestion ? (
          <Logo />
        ) : (
          <div>
            <Route path="/loggedIn" render={() => <Navbar />} />
            <Route path="/loggedIn/home" render={this.renderQuestionList} />
            <Route
              path="/loggedIn/newQuestion"
              render={this.renderNewQuestion}
            />
            <Route
              path="/loggedIn/leaderboard"
              render={this.renderLeaderboard}
            />
            <Route path={`/loggedIn/poll/:id`} render={this.renderPoll} />
            <Route path="/notFound" render={() => <PageNotFound />} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    users: state.getUsers.users,
    isFetchingUsers: state.getUsers.isFetchingUsers,
    questions: state.getQuestions.questions,
    isFetchingQuestions: state.getQuestions.isFetchingQuestion,
    currentUser: state.getUsers.currentUser,
    isSavingQuestion: state.getQuestions.isSavingQuestion,
    isAddingQuestion: state.getQuestions.isAddingQuestion,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getusers: bindActionCreators(getUsers, dispatch),
    getquestions: bindActionCreators(getQuestions, dispatch),
    saveQuestionAndFecthUsersAndQuestions: bindActionCreators(
      saveQuestionAndFecthUsersAndQuestions,
      dispatch
    ),
    updateUser: bindActionCreators(currentUser, dispatch),
    updateIsFetchingUser: bindActionCreators(updateIsFetchingUser, dispatch),
    addQuestionAndFetchQuestionsAndUser: bindActionCreators(
      addQuestionAndFetchQuestionsAndUser,
      dispatch
    ),
  };
};
export const Homepage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomepageNotConnected)
);
