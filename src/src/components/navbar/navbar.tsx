import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateIsAuthenticated } from '../../redux/action/user-actions';

class Nav extends Component<any, any> {
  private logout = () => {
    this.props.updateIsAuthenticated();
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark navbar-icon-top"
          style={{ background: '#e3f2fd' }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse">
            <ul
              className="navbar-nav mr-auto"
              style={{ alignContent: 'center' }}
            >
              <li
                className="nav-item"
                id="Home"
                style={{ marginLeft: '20rem' }}
              >
                <Link className="nav-link text-dark" to="/loggedIn/home">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '5rem' }}>
                <Link className="nav-link text-dark" to="/loggedIn/newQuestion">
                  <i className="fa fa-question-circle"></i>
                  New Question
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '5rem' }}>
                <Link className="nav-link text-dark" to="/loggedIn/leaderboard">
                  <i className="fa fa-graduation-cap"></i>
                  Leaderboard
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ marginLeft: '5rem', display: 'flex' }}
              >
                <Link
                  className="nav-link text-dark"
                  to="/login"
                  onClick={() => this.logout}
                >
                  <h5> {this.props.currentUser} </h5>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    currentUser: state.getUsers.currentUser,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateIsAuthenticated: bindActionCreators(updateIsAuthenticated, dispatch),
  };
};
export const Navbar = connect(mapStateToProps, mapDispatchToProps)(Nav);
