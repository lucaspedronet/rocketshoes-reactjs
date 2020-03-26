import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Global from './styles/global';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Global />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
