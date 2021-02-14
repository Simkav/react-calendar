import React, { Component } from 'react';
import Row from './index';
import { addDays, startOfWeek } from 'date-fns';

class NamedRow extends Component {
  render() {
    const { date, classes } = this.props;
    const arr = buildCharArray(date);
    return (
      <div className={classes}>
        <Row array={arr} />
      </div>
    );
  }
}

export default NamedRow;

const getFirstCharOfDayName = (date) =>
  date.toLocaleString('default', { weekday: 'long' }).charAt(0);

const buildCharArray = (date) => {
  const arr = [];
  const startDay = startOfWeek(date);
  arr.push(getFirstCharOfDayName(startDay));
  arr.push(getFirstCharOfDayName(addDays(startDay, 1)));
  arr.push(getFirstCharOfDayName(addDays(startDay, 2)));
  arr.push(getFirstCharOfDayName(addDays(startDay, 3)));
  arr.push(getFirstCharOfDayName(addDays(startDay, 4)));
  arr.push(getFirstCharOfDayName(addDays(startDay, 5)));
  arr.push(getFirstCharOfDayName(addDays(startDay, 6)));
  return arr;
};
