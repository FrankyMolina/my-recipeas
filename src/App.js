import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ShoppingList from './components/ShoppingList';
import NewRecipe from './components/NewRecipe';
import RecipesList from './components/RecipesList';
// import SingleRecipe from './components/NewRecipe';

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

          <Route exact path="/recipes/new-recipe">
            <NewRecipe />
          </Route>

          {/* <Route exact path="/recipe/XXXXXXX">
            <SingleRecipe />
          </Route> */}

          <Route exact path="/recipes">
            <RecipesList />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
