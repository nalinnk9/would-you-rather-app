import { _getUsers } from '../../data/_DATA';

export const getUsers = () => {
  return {
    baseType: 'GET_USERS',
    callAPI: () => _getUsers(),
  };
};

export const currentUser = (user: any) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

export const updateIsAuthenticated = () => {
  return {
    type: 'UPDATE_IS_AUTHENTICATED_FALSE',
  };
};
export const updateIsFetchingUser = (value: boolean) => {
  return {
    type: 'UPDATE_FETCHING_USERS',
    payload: value,
  };
};
