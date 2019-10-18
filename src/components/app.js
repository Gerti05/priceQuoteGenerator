import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ZipCode from "./zipCode";
import SelectorBtn from "./selectorBtn";
import ServicesForm from "./servicesForm";

// Connects all the components together.
function App(props) {
  if (!props.zipCode) {
    return (
      <div>
        <ZipCode />
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
        <div>
          <SelectorBtn />
          <Route path="/" exact component={ServicesForm} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zipCode: state.zipCode
  };
};

export default connect(mapStateToProps)(App);
