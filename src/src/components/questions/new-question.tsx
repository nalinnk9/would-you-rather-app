import React, { Component } from 'react';

export default class NewQuestion extends Component<any, any> {
  private optionOne: any;
  private optionTwo: any;
  render() {
    return (
      <div
        className="card p-3 mb-2 "
        style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}
      >
        <h5 className="card-title border-bottom">Create new Question</h5>
        <div className="card-body">
          <h5 className="card-title">Would You rather...</h5>
          <div className="card-text">
            <input
              type="text"
              ref={(input) => (this.optionOne = input)}
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <h6> Or </h6>
            <input
              type="text"
              className="form-control"
              ref={(input) => (this.optionTwo = input)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />

            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{ marginTop: '1rem' }}
              onClick={() =>
                this.props.onSubmit({
                  optionOneText: this.optionOne.value,
                  optionTwoText: this.optionTwo.value,
                  author: this.props.currentUser,
                })
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
