import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Contact from './components/Comments';
import Home from './components/Home';
import Navigation from './components/Navigation';
import LogoQuery from './components/LogoQuery';
import About from './components/About';
import Product from './components/Product';
import ExpandedImage from './components/ExpandedImage';
import Comments from './components/Comments';

function App() {
  return (
    <div className="app">
      <Router>
      <LogoQuery/>
        <Switch>
          <Route path="/about">
              <About/> 
          </Route>
          {/* Image data being passed through URL, here src and pattern are variables which can get values whenever Navlink is called
          check ImageElement for it  */}
          <Route path="/expanded/:src/:pattern" component={(props) => <ExpandedImage text="yo bro" {...props}/>}>
            
          </Route>
          <Route path="/product">
            <Product/> 
          </Route>

          <Route path="/comments">
            <Comments/>
          </Route>

          <Route path="/">
            <Home />
          </Route> 
          {/* all the other paths Route should come above home */}
          
        </Switch>
        <Navigation/>
      </Router>
    </div>
  );
}
export default App;