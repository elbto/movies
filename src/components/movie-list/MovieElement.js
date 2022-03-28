import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-50 p-2">
        <div className="border d-flex">
          <img
            src="https://m.media-amazon.com/images/I/51GA6V6VE1L._AC_SY445_.jpg"
            alt="film"
            width="150"
            height="200"
          />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>Titre</h5>
            <hr className="w-100" />
            <p>lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    );
  }
}
