import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Global from './styles/global'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Global />
    </BrowserRouter>
  );
}

export default App;
