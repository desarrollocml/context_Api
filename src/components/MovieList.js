import { useContext } from "react";
import Movie from "./Movie";
import { MoviesContext } from "../contexts/MovieContext";

export default function MovieList() {

     const {movies} = useContext(MoviesContext)

    return (
        <div className="container">
            <div className="row">
                {
                    movies.map(movie => (
                        <div className="col-md-4" key={movie.id}>
                            <Movie
                            movie={movie}></Movie>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
