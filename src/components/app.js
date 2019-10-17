import React from "react";
import { connect } from "react-redux";
import ZipCode from "./zipCode";

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
        <button>click</button>
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
