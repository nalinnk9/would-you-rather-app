const initialState = {
  isFetchingUsers: true,
  users: {},
  currentUser: {},
  isAuthenticated: false,
};
export default function getUsers(state = initialState, action: any) {
  switch (action.type) {
    case 'REQ_GET_USERS':
      return Object.assign({}, state, {
        isFetchingUsers: true,
      });
    case 'RECV_GET_USERS':
      return Object.assign({}, state, {
        isFetchingUsers: false,
        users: action.response,
      });
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        isAuthenticated: true,
        currentUser: action.payload,
      });
    case 'UPDATE_IS_AUTHENTICATED_FALSE':
      return Object.assign({}, state, {
        currentUser: {},
        isAuthenticated: false,
      });
    case 'UPDATE_IS_AUTHENTICATED_TRUE':
      return Object.assign({}, state, {
        isAuthenticated: true,
      });
    case 'UPDATE_FETCHING_USERS':
      return Object.assign({}, state, {
        isFetchingUsers: action.payload,
      });
    default:
      return state;
  }
}
