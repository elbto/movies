import React, { Component } from "react";
import { Header, MovieDetails, MovieList, MovieElement } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Godfather",
          img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
          details: "R | 175min | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        },
        {
          title: "Apocalypse Now",
          img: "https://resize-media.festival-cannes.com/fit-in/2560x1103/film_film/0002/12/fd2b9ccba8e15fab4c531e20f528436d004e8ad8.jpeg",
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

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
