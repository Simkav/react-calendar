import React, { Component } from 'react';
import NamedRow from './Rows/NamedRow';
import NumbersRow from './Rows/NumbersRow';

class CalendarGrid extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="full-calendar">
        <NamedRow classes="days row" date={date} />
        <NumbersRow date={date} />
      </div>
    );
  }
}

export default CalendarGrid;
