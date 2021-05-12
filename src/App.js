import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "./app/Header Components/Header";
import HomeScreen from "./app/HomeScreen Components/HomeScreen";
import Order from "./app/Order Components/Order";
import Footer from "./app/Reusable Components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import Stores from "./app/Stores Components/Stores";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeScreen />
          </Route>

          <Route exact path="/order">
            <Header />
            <Order />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
