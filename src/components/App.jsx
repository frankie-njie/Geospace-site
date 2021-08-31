import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductDesc from "./Pages/ProductDesc";
import SingleService from "./Pages/SingleService";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/productsdesc" component={ProductDesc} />
          <Route path="/singleservice" component={SingleService} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
