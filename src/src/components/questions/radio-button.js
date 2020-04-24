import React, { Component } from 'react';

export default class RadioButton extends Component {
  render() {
    const width = this.props.isAnswered ? this.props.percentage : 0;
    const className = this.props.checked
      ? 'border border-dark mt-4 text-success'
      : 'border border-dark mt-4';
    return (
      <div style={{ overflow: 'visible', border: '1px' }} className={className}>
        <div
          className="input-group input-group-lg"
          style={{ height: '100%', width: '100%' }}
        >
          <div
            className="input-group-prepend"
            style={{ height: '100%', fontSize: '25px' }}
          >
            {!this.props.isAnswered ? (
              <div className="input-group-text">
                <input
                  type="radio"
                  name="options"
                  value={this.props.value}
                  defaultChecked={this.props.checked}
                />
              </div>
            ) : (
              <div />
            )}
            <div className="ml-4">{this.props.option1}</div>
          </div>
        </div>
        {this.props.isAnswered ? (
          <div style={{ margin: 'auto' }}>
            <div
              className="progress mt-4 mb-4"
              style={{
                height: '25px',
                width: '75%',
                align: 'center',
                margin: 'auto',
              }}
            >
              <div
                className="bg-success progress-bar"
                role="progressbar"
                style={{ width: `${width}%`, fontSize: '18px' }}
                aria-valuenow={
                  this.props.isAnswered ? this.props.percentage : 0
                }
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.props.percentage + '%'}
              </div>
            </div>
            <div>
              {this.props.numAnswers +
                ' out of ' +
                this.props.totalAnswers +
                ' votes'}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
