import React,{Fragment, useState} from "react";

import MovieList from './MoviePages/MoviesList';
import './App.css';

function App(){
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading]= useState(false);

  async function fetchMoviesHandler(){
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/')
     const data = await response.json();
     
        const transformedMovies = data.results.map((movieData)=>{
        return{
            id:movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate : movieData.release_Date
        };
     }) ;
     setMovies(transformedMovies);
     setIsLoading(false);
}
 
return(
<Fragment>
    <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    </section>
    <section>
        {!isLoading && movies.length>0 &&<MovieList movies ={movies} />}
        {!isLoading && movies.length ===0 && <p>Found no Movie!</p>}
        {isLoading && <p>Loading....</p>}
    </section>
</Fragment>
);
}
export default App;