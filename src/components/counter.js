import React from 'react';
import store from '../store/counter';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = this._getAppState();
  }

  componentDidMount(){
      store.subscribe(this._updateAppState.bind(this));
  }

  _getAppState(){
      return {value: store.getState()}
  }

  _updateAppState(){
    this.setState(this._getAppState());
  }

  _increment(){
    store.dispatch({type:'INCREMENT'})
  }

  _decrement(){
    store.dispatch({type:'DECREMENT'})
  }

  render(){
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this._increment.bind(this)}>+</button>
        <button onClick={this._decrement.bind(this)}>-</button>
      </div>
    )
  }
}
