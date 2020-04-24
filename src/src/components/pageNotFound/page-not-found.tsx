import React, { Component } from 'react';
import './page-not-found.css';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="notfoundComponent">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
        </div>
      </div>
    );
  }
}
