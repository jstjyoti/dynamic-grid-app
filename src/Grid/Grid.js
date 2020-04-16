import React, { Component } from 'react';
import Cell from '../Cells/Cells'
import './Grid.css'
export default class Grid extends Component {
  render() {
    let gridStyle = {
      display: 'flex',
      'flex-direction': 'row'
    }
    var rows = [];
    for (var i = 0; i < this.props.rows; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Cell key={i} />);
    }
    return <div className='Column'>{rows}</div>
  }
}
