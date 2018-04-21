import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './js/store';
import { Provider } from 'react-redux';
import ListGeneralStockItem from './js/components/ListGeneralStockItem';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ListGeneralStockItem />          
        </div>
      </Provider>
    );
  }
}

export default App;
