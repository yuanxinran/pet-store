import React, { Component } from 'react';
import './App.css';
import Browse from './Views/browse';
import Detail from './Views/detail'
import Navbar from './Components/navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import { Button } from 'vanilla-framework-react';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
        <div>
          <Route exact={true} path='/browse' render={() => (
            <div className="App">
              <Browse />
            </div>
          )}/>
          <Route exact={true} path='/detail' render={() => (
            <div className="App">
              <Detail />
            </div>
          )}/>
        </div>
      </BrowserRouter>
        <Button brand value="Custom VF React Button!" />
        <Navbar />
      </div>
    );
  }
}



export default App;
