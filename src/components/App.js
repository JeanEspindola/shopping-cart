import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './App.css';
import Header from './Header/HeaderContainer';
import CartList from './Cart-List/CartListContainer';
import CartTotal from './Cart-Total/CartTotalContainer';

const App = () => (
  <Jumbotron className="app">
    <Grid>
      <Header />
      <CartList />
      <CartTotal />
    </Grid>
  </Jumbotron>
);

export default App;
