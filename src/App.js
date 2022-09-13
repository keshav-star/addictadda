import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

const apiurl = 'http://omdbapi.com?apikey=6c13bf3c';
function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${apiurl}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);


  }
  useEffect(() => {
    searchMovies('hulk')
  }, [])

  return (
    <div className="app">
      <h1>AddictAdda</h1>
      <div className="search">
        <input
          placeholder='Search Here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }  
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {searchMovies(searchTerm) }}
        />
      </div>
     {
      movies.length > 0 
      ? (
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <h2>No movies Found</h2>
        )
      }
    </div>
  );
}

export default App;
