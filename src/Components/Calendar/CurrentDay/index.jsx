import React, { Component } from 'react';

const getNameOfDay = (date) =>
  date.toLocaleString('default', { weekday: 'long' });

class CurrentDay extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="half current-day-view">
        <span className="name-of-day">{getNameOfDay(date)}</span>
        <span className="number-of-day">{date.getDate()}</span>
      </div>
    );
  }
}

export default CurrentDay;
