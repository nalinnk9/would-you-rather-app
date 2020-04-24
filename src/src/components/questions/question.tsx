import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QuestionComponent extends Component<any, any> {
  render() {
    return (
      <div>
        <div
          className="card p-3 mb-2 "
          style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}
        >
          <h5 className="card-title border-bottom">
            {this.props.question.author}
          </h5>
          <img
            src="https://www.gstatic.com/webp/gallery/1.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Would You rather...</p>
            <Link
              to={`/loggedin/poll/${this.props.question.id}`}
              className="btn btn-primary btn-lg"
            >
              View Poll
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
