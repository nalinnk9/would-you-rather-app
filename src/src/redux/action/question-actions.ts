import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../../data/_DATA';
import { getUsers } from './user-actions';

export const getQuestions = () => {
  return {
    baseType: 'GET_QUESTIONS',
    callAPI: () => _getQuestions(),
  };
};

export const saveQuestionAndFecthUsersAndQuestions = (q: any) => (
  dispatch: any
) => {
  return _saveQuestionAnswer(q).then(() => {
    dispatch(getQuestions());
    dispatch(getUsers());
  });
};

export const addQuestionAndFetchQuestionsAndUser = (q: any) => (
  dispatch: any
) => {
  return _saveQuestion(q).then(() => {
    dispatch(getQuestions());
    dispatch(getUsers());
  });
};
