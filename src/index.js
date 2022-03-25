import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import icecreamReducer from './reducers/icecreamReducer';
import { Provider } from 'react-redux';


/*
Store - här sparar vi vårt state
Reducer - här uppdaterar vi vårt state
Actions - vad vi skall uppdatera
Dispatch - triggar actions
*/


const store = createStore(
  icecreamReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//första raden är vår reducer så den kommer in i store
//andra är så vi kan se shit i browserns devtools


ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
