import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var CALC_BUTTONS = [
  { value: '+ Add',
    operation: 'add'
  },
  { value: '- Subtract',
    operation: 'subtract'
  },
  { value: 'x Multiply',
    operation: 'multiply'
  },
  { value: '/ Divide',
    operation: 'divide'
  }
];

ReactDOM.render(
  <App calcButtons={ CALC_BUTTONS } />,
  document.getElementById('root')
);
