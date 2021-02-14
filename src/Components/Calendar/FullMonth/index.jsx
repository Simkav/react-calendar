import React, { Component } from 'react';
import Month from './Month';
import CalendarGrid from './CalendarGrid';

class FullMonth extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="half calendar-container">
        <Month date={date} />
        <CalendarGrid date={date} />
      </div>
    );
  }
}

export default FullMonth;
