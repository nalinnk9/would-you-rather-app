import { createStore, applyMiddleware, Store } from 'redux';
import { callApi } from './middleware/callApi';
import reducer from './reducer/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = (props: any) => {
  const middleWare = [thunk, callApi];
  const store: Store = createStore(
    persistedReducer,
    applyMiddleware(...middleWare)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
