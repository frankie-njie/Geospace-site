import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Services from "./pages/our_services/Services";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProductDesc from "./pages/products/ProductDesc";
import SingleService from "./pages/our_services/SingleService";

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
          <Route path="/:id/productsdesc" component={ProductDesc} />
          <Route path="/singleservice" component={SingleService} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
