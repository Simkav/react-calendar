import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import FullMonth from './FullMonth';

class Calendar extends Component {
  render() {
    const { date } = this.props;
    return (
      <section className="calendar">
        <CurrentDay date={date} />
        <FullMonth date={date} />
      </section>
    );
  }
}

export default Calendar;
