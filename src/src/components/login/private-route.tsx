import { Redirect, Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrivateRouter extends Component<any, any> {
  render() {
    return (
      <Route
        {...this.props.rest}
        render={({ location }) =>
          this.props.isAuthenticated ? (
            <div>
              <Redirect
                to={{
                  pathname: '/loggedIn/home',
                }}
              />
              {this.props.children}
            </div>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.getUsers.isAuthenticated,
  };
};

export const PrivateRoute = withRouter(
  connect(mapStateToProps, null)(PrivateRouter)
);
