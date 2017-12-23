import React from 'react';
import logo from './../logo.svg';
import './App.css';
import Header from './Header/Header';
import CartList from './Cart-List/CartList';
import CartTotal from './Cart-Total/CartTotal';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Header />
    <CartList />
    <CartTotal />
  </div>
);

export default App;
