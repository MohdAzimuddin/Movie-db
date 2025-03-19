const MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}         
          alt={movie.title}
          className="w-full h-64"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <p className="text-gray-400">Rating: {movie.vote_average}</p>
          <p className="text-gray-400">Release Date: {movie.release_date}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  