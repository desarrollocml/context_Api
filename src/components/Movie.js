export default function Movie({ movie }) {
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavorite = true;

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
        <button className={`btn ${isFavorite ? 'btn-success':'btn btn-outline-primary'}`}>
            Favorito
        </button>
      </div>
    </div>
  );
}
