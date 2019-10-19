import React from "react";
import { connect } from "react-redux";
import { fetchedServices1 } from "../actions";

class Services extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    let radio_1 = document.getElementsByName("services_1");

    for (let i = 0, length = radio_1.length; i < length; i++) {
      if (radio_1[i].checked) {
        // do whatever you want with the checked radio
        this.props.fetchedServices1(radio_1[i].value);
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  };

  servicesForm = () => {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Collapsible Group Item #1
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        1
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="1"
                        ref={element => {
                          this.input1 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        2
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="2"
                        ref={element => {
                          this.input1 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        3
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="3"
                        ref={element => {
                          this.input1 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        4
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="4"
                        ref={element => {
                          this.input1 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        5
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="5"
                        ref={element => {
                          this.input1 = element;
                        }}
                      ></input>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Collapsible Group Item #2
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        6
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="6"
                        ref={element => {
                          this.input2 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        7
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="7"
                        ref={element => {
                          this.input2 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        8
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="8"
                        ref={element => {
                          this.input2 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        9
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="9"
                        ref={element => {
                          this.input2 = element;
                        }}
                      ></input>
                    </li>
                    <li className="list-group-item">
                      <label className="pr-5" htmlFor="services_1">
                        10
                      </label>
                      <input
                        className="pr-5"
                        type="radio"
                        name="services_1"
                        value="10"
                        ref={element => {
                          this.input2 = element;
                        }}
                      ></input>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.servicesForm()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state.services1.length)
  return {
    services1: state.services1,
    services2: state.services2
  };
};

export default connect(
  mapStateToProps,
  { fetchedServices1 }
)(Services);
