import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/counter';
import Counter from './components/counter';

const app = document.getElementById('app');

ReactDOM.render(<Counter/>, app);
