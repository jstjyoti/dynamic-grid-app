import React, {Component} from 'react';
import Grid from './Grid/Grid';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    gridColumn: 1,
    gridRow: 1
  }
  cellIncrementHandler = () => {
    //adding an additional codition to support upto 100 counts to control state and prvent the visual from breaking
    let incCounter = this.state.count <= 100 ? this.state.count + 1 : 0,
      col = incCounter % 2 === 1 ? this.state.gridColumn + 1: this.state.gridColumn,
      row = incCounter % 2 === 0 ? this.state.gridRow + 1 : this.state.gridColumn;
      col = this.state.count <= 100 ? col : 1;
      row = this.state.count <= 100 ? row : 1;

    this.setState({
      count: incCounter,
      gridColumn: col,
      gridRow: row
    });
  }
  render(){
    var grids = [];
    for (var i = 0; i < this.state.gridColumn; i++) {
      grids.push(<Grid key={i} rows={this.state.gridRow} />);
    }
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
      textAlign: 'center'
    }
    return <div className='App'>
      <div className='Container'>{grids}</div>
      <div style={style}>
      <button onClick = {this.cellIncrementHandler} >Click</button>
      <span>Count: {this.state.count}</span>
      </div>
    </div>
  }
  
}

export default App;
