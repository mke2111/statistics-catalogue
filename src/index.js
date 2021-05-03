import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './container/App';
import rootReducer from './reducers/index';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

const Main = () => {
  React.useEffect(() => {
    document.title = 'Biit';
  });

  return (
    <App />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
