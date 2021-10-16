import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import Blog from './pages/Blog.js';
import Events from './pages/Events.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import Reviews from './pages/Reviews.js';
import Navbar from './Navbar/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
        <Route path="/events" component={Events} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reviews" component={Reviews} />
        </Switch>
      </Router>
   </div>
  );
}

export default App;
