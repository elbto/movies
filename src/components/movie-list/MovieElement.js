import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/51GA6V6VE1L._AC_SY445_.jpg"
            className="card-img-top"
            alt="a placeholder for a film"
          />
          <div className="card-body">
            <h5 className="card-title">Gladiator</h5>
            <p className="card-text">lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    );
  }
}
