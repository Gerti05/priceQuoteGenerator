import React from "react";
import { connect } from "react-redux";
import { fetchedZip } from "../actions";
import "../styles/popup.css";

class ZipCode extends React.Component {
  // Submits the saved input value into the fetchedZip action and gets rid of the pop up.
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchedZip(this.input.value);
    let x = document.getElementsByClassName("modal-backdrop");
    if (x[0].style.display === "none") {
      x[0].style.display = "block";
    } else {
      x[0].style.display = "none";
    }
  };

  // A form that passes down the entered value on submit.
  zipForm = () => {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Get Quote
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close xButton"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="text-center mt-4">
                <p className="modal-title" id="exampleModalLabel">
                  BUILD YOUR QUOTE
                </p>
              </div>
              <div className="text-center mb-1">
                <h4 className="modal-title" id="exampleModalLabel">
                  Please Enter Zip Code
                </h4>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <input
                        type="text"
                        ref={element => {
                          this.input = element;
                        }}
                        placeholder="Zip Code"
                        required
                        pattern="^\d{5}(?:[-\s]\d{4})?$"
                      />
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Renders the form.
  render() {
    return <div>{this.zipForm()}</div>;
  }
}

// Takes state and passes it to the class as props.
const mapStateToProps = state => {
  //console.log(state.zipCode)
  return {
    zipCode: state.zipCode
  };
};

// Wraps the state and action creator with the class function.
export default connect(
  mapStateToProps,
  { fetchedZip }
)(ZipCode);
