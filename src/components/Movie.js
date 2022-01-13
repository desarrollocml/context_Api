import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

export default function Movie({ movie }) {
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext)
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={imgStyles}
      ></img>
      <div className="card-body">
        <h4>{movie.title}</h4>
        <button className={`btn ${isFavorite ? 'btn-success':'btn btn-outline-primary'}`}
        onClick={() => toggleFavoriteMovieToUser(movie.id)}>
            Favorito
        </button>
      </div>
    </div>
  );
}
