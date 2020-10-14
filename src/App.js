import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/shopping-list">
            <ShoppingList />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
