import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers, currentUser } from '../../redux/action/user-actions';

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.props.getusers();
  }
  login = () => {
    this.props.setCurrentUser(this.state.user);
    this.props.history.push({
      pathname: '/loggedIn/home',
    });
  };
  updateUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    const { users } = this.props;
    return (
      <div>
        {!this.props.isFetchingUsers ? (
          <div
            className="card p-3 mb-2 "
            style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}
          >
            <h5 className="card-title border-bottom">
              Welcome to Would You Rather App
            </h5>
            <p> Please signin to continue</p>
            <img
              src="https://www.gstatic.com/webp/gallery/1.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">SignIn</h5>
              <p className="card-text">Would You rather...</p>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle mb-4"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ width: '100px' }}
                >
                  {}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {Object.values(users).map((user) => {
                    return (
                      <button
                        className="dropdown-item"
                        href="#"
                        onClick={() => this.updateUser(user.id)}
                      >
                        {user.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button className="btn btn-primary btn-lg" onClick={this.login}>
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.getUsers.users,
    isFetchingUsers: state.getUsers.isFetchingUsers,
    currentUser: state.getUsers.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getusers: bindActionCreators(getUsers, dispatch),
    setCurrentUser: bindActionCreators(currentUser, dispatch),
  };
};
export const Login = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Loginpage)
);
