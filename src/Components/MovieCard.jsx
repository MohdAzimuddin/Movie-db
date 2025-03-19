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
          <p className="text-gray-300">Rating:<span className={`p-1 ${movie.vote_average>=6?"bg-yellow-200":"bg-red-700"} rounded-lg ml-1 mt-2 text-zinc-900 font-bold text-xl`}>{movie.vote_average}</span></p>
          <p className="mt-2 text-gray-300">Release Date: <span className="text-white">{movie.release_date}</span></p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  