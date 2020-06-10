import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/globals';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
