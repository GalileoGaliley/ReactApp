import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import logo from './Components/logo.png';
import logo2 from "./Components/logo2.png"




function App() {
  return (
      <>
          <div id={'antiModal'} className={'antiModal'}>
              <img className={'text-center backLogo'} src={logo2}  height='600' width='600' />

              <img id='image' className={'block-center image'} src={logo}  height='289.5' width='250'/>

          </div>
      <Header />
      </>
  );
}

export default App;
