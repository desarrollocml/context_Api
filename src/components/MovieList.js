import initialMovies from "../consts/initialMovies";
import Movie from "./Movie";

export default function MovieList() {
    return (
        <div className="container">
            <div className="row">
                {
                    initialMovies.map(movie => (
                        <div className="col-md-4" key={movie}>
                            <Movie
                            movie={movie}></Movie>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
