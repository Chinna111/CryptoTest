import React from 'react';
import './App.scss';

import Home from '../src/Screens/Home/Home';

import Menu from '../src/Components/menu/Navbar';


//Styles 
import GlobalsStyles from './globalStyles';
import "./scss/styles.global.scss";

function App() {
  return (
    <div className="App">
      <GlobalsStyles />
      <Menu />
      {/* <Home/> */}
    </div>
  );
}

export default App;
