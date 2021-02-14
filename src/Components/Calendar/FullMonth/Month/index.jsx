import React, { Component } from 'react';
const getNameOfMonthFromDate = (date) =>
  date.toLocaleString('default', { month: 'long' });

class Month extends Component {
  render() {
    const { date } = this.props;
    return (
      <span className="info-about-month">
        {getNameOfMonthFromDate(date)} {date.getFullYear()}
      </span>
    );
  }
}

export default Month;
