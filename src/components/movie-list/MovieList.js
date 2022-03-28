import React, { Component } from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        {this.props.movies.map((movie, index) => (
          <MovieElement
            movie={movie}
            updateSelectedMovie={this.props.updateSelectedMovie}
          />
        ))}
      </div>
    );
  }
}
