import React, { Component } from "react";
import { Header, MovieDetails, MovieList, MovieElement } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Godfather",
          img: "https://m.media-amazon.com/images/I/51RTC05Z38L._AC_SY445_.jpg",
          details: "R | 175min | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        },
        {
          title: "Apocalypse Now",
          img: "https://m.media-amazon.com/images/I/411Bw4v3HAL._AC_SY445_.jpg",
          details: "R | 147min | Drama, War",
          description:
            "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.",
        },
        {
          title: "The lord of the rings",
          img: "https://m.media-amazon.com/images/I/513N2WS7ENL._AC_SY445_.jpg",
          details: "PG-13 | 195min | Action, Adventure, Fantasy",
          description:
            "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        },
        {
          title: "Gladiator",
          img: "https://m.media-amazon.com/images/I/51GA6V6VE1L._AC_SY445_.jpg",
          details: "R | 155min | Action, Drama, History",
          description:
            "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
        },
      ],
      selectedMovie: 0,
    };
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((movie) => movie.title === title);
    this.setState({ selectedMovie: index });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList
            movies={this.state.movies}
            updateSelectedMovie={this.updateSelectedMovie}
          />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
