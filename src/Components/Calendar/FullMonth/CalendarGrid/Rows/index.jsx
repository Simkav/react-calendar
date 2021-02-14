import React, { Component } from 'react';
const createRow = (arr, current = null) => {
  return arr.map((item, i) => {
    return React.createElement(
      'div',
      { key: i, className: item === current ? 'selected-day' : null },
      item
    );
  });
};
class Row extends Component {
  render() {
    const { array, current } = this.props;
    return createRow(array, current);
  }
}

export default Row;
