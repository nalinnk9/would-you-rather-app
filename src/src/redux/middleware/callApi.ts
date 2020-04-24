import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';

export interface ICallAPI<S> {
  baseType: string;
  callAPI: (state: S, payload: object) => Promise<any>;
  payload?: object;
}

export const callApi = (store: MiddlewareAPI<Dispatch<AnyAction>>) => (
  next: Dispatch<AnyAction>
) => (action: any): any => {
  const apiAction = action as ICallAPI<AnyAction>;
  const { baseType, callAPI, payload = {} } = apiAction;
  const [requestType, successType, errorType] = [
    'REQ',
    'RECV',
    'XHR_ERROR',
  ].map((prefix) => `${prefix}_${baseType}`);

  if (!baseType) {
    return next(action);
  }
  store.dispatch({ type: requestType, payload });
  return callAPI(store.getState(), payload).then(
    (response: any) =>
      store.dispatch({
        type: successType,
        response,
        payload,
      }),
    (error: any) =>
      store.dispatch({
        type: errorType,
        error,
        payload,
      })
  );
};
