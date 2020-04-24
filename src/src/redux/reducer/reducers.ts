import { combineReducers } from 'redux';
import getUsers from './user-reducer';
import { getQuestions, addQuestions, saveQuestions } from './question-reducer';

export default combineReducers({
  getUsers,
  getQuestions,
  addQuestions,
  saveQuestions,
});
