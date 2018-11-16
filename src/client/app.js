import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);
export default App;
