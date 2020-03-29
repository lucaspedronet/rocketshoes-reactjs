import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Global from './styles/global';
import Routes from './routes';

import history from './servers/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <Global />
        <ToastContainer autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;
