import React from "react";
import { Link } from "react-router-dom";

const SelectorBtn = props => {
  return (
    <div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
        <Link className="navbar-brand" to="/">
          
        <button type="button" className="btn btn-primary">
            1
          </button>
          </Link>
        
          
          <button type="button" className="btn btn-primary">
            2
          </button>
          <button type="button" className="btn btn-primary">
            3
          </button>
          <button type="button" className="btn btn-primary">
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectorBtn;
