import React, { Component } from 'react';
import Row from './index';
import { startOfMonth, lastDayOfMonth, eachDayOfInterval } from 'date-fns';

class NumbersRow extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="calendar-rows">
        {CreateCalendarRows(BuildNumberArray(date))}
      </div>
    );
  }
}
export default NumbersRow;

const CreateCalendarRows = (arr) => {
  const currentDay = new Date().getDate();
  const result = [];
  arr.forEach((i) => {
    result.push(
      <div key={'row' + i} className="row">
        <Row array={i} current={currentDay} />
      </div>
    );
  });
  return result;
};

const BuildNumberArray = (date) => {
  const arr = [];
  const GroupedArr = [];
  const STEP = 7;
  for (let i = 0; i < startOfMonth(date).getDay(); i++) {
    arr.push('');
  }
  eachDayOfInterval({
    start: startOfMonth(date),
    end: lastDayOfMonth(date),
  }).forEach((item) => {
    arr.push(item.getDate());
  });

  for (let i = 0; i < 6; i++) {
    const buffer = arr.slice(i * STEP, i * STEP + STEP);
    if (buffer.length === 0) {
      break;
    }
    if (buffer.length < STEP) {
      const quantityOfAppend = STEP - buffer.length;
      for (let j = 0; j < quantityOfAppend; j++) {
        buffer.push('');
      }
    }
    GroupedArr.push(buffer);
  }
  return GroupedArr;
};
