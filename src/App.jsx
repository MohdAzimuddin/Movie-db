import { useEffect, useState } from "react"
import MovieList from "./Components/MovieList" 
const App = () => {
 
  const [movies,setMovies]=useState([])
const [loading,SetLoading]=useState(true)
 
const FetchMovie=async()=>{
try{
const res=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=b19a032083aa92a8ff5fc868c24d20e2") 
const data=await res.json()
const movieData=data.results
console.log(movieData)
SetLoading(false)
setMovies(movieData)
}

catch(error){
  SetLoading (false)
  console.log(error)
}
 }

useEffect(()=>{
  FetchMovie();
},[])

return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Movie Database</h1>
        {loading ? (
          <p className="text-center">Loading movies...</p>
        ) : (
          <MovieList movies={movies}/>
        )}
      </div>
    )
}

export default App