import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from "redux-thunk";
import {compose,combineReducers,createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import listReducers from "./reducers/listReducers";


const allToMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootReducers = combineReducers({
  listReducers:listReducers
})


const store = createStore(rootReducers,allToMiddleware);


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);