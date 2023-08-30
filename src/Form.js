import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="container">
        <form id="search-form">
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                placeholder="Search City..."
                autofocus="off"
                className="form-control"
                id="search-input"
                autocomplete="off"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-outline-primary">Search</button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-primary" id="currentLocation">
                Current Location
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
