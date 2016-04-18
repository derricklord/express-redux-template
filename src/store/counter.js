import {createStore} from 'redux';

const counter = (_state = 0, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return _state += 1;
    case 'DECREMENT':
      return _state -= 1;
    default:
      return _state;
  }
}

//Create Store (Application State)
const store = createStore(counter);
export default store;
