import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './components/login/login';
import { Homepage } from './components/homePage/homepage';
import { configureStore } from './redux/configureStore';
import { PrivateRoute } from './components/login/private-route';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    let { store, persistor } = configureStore(this.props);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Route path="/login" component={Login} />
            <PrivateRoute path="/">
              <Homepage />
            </PrivateRoute>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
