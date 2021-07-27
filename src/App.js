import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import CocktailInfo from './pages/CocktailInfo';

//import components
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailInfo />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
