const initialStateGetQuestion = {
  isFetchingQuestion: false,
  questions: {},
};
export function getQuestions(state = initialStateGetQuestion, action: any) {
  switch (action.type) {
    case 'REQ_GET_QUESTIONS':
      return Object.assign({}, state, {
        isFetchingQuestion: true,
      });
    case 'RECV_GET_QUESTIONS':
      return Object.assign({}, state, {
        isFetchingQuestion: false,
        questions: action.response,
      });
    default:
      return state;
  }
}

export function addQuestions(state = { isAddingQuestion: false }, action: any) {
  switch (action.type) {
    case 'REQ_SAVE_QUESTION':
      return Object.assign({}, state, {
        isAddingQuestion: true,
      });
    case 'RECV_SAVE_QUESTION':
      return Object.assign({}, state, {
        isAddingQuestion: false,
      });
    default:
      return state;
  }
}

export function saveQuestions(
  state = { isSavingQuestion: false },
  action: any
) {
  switch (action.type) {
    case 'REQ_QUESTION_ANSWER':
      return Object.assign({}, state, {
        isSavingQuestion: true,
      });
    case 'RECV_QUESTION_ANSWER':
      return Object.assign({}, state, {
        isSavingQuestion: false,
      });
    default:
      return state;
  }
}
