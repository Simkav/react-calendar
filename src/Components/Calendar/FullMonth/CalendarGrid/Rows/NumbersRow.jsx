import React, { Component } from 'react';
import Row from './index';
import { startOfMonth, lastDayOfMonth, eachDayOfInterval } from 'date-fns';

class NumbersRow extends Component {
  render() {
    const { date } = this.props;
    return (
      <div key={'abc'} className="calendar-rows">
        {BuildNumberArray(date)}
      </div>
    );
  }
}

export default NumbersRow;
const BuildNumberArray = (date) => {
  const currentDay = date.getDate();
  const arr = [];
  const GroupedArr = [];
  const result = [];
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
  for (let i = 0; i < GroupedArr.length; i++) {
    result.push(
      <>
        <div className="row">
          <Row
            array={GroupedArr[i]}
            id={i * 10 + 10}
            key={i * 10 + 10}
            current={currentDay}
          />
        </div>
      </>
    );
  }
  return result;
};
