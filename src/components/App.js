import React from 'react';
import logo from './../logo.svg';
import './App.css';
import Header from './Header/HeaderContainer';
import CartList from './Cart-List/CartListContainer';
import CartTotal from './Cart-Total/CartTotalContainer';

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
