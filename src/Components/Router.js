import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "../Routes/Home";
import About from "../Routes/About";

// import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import Brandstory from "../Routes/BrandStory";
import Product from "../Routes/Product/Product";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/brandstory" exact component={Brandstory} />
      <Route path="/product" exact component={Product} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

// <Route path="/product" exact render={props => <Product {...props} />} />;
