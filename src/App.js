import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL ='http://www.omdbapi.com?apikey=c032e2d7'
const movie1 = 
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "imdbID": "tt1201607",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
 }
const App = () => {

const[movies, setMovies] = useState([]); 
const[searchTerm, setSearchTerm] = useState([]);
const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`) //call the API
    const data = await response.json(); //get the data from response
    setMovies(data.Search);
}           



    useEffect(() => {
    searchMovies('Harry Potter');

    }, []);

  


    return (
      <div className='app'>
        <h1>Movie Land</h1>
        
        <div className='search'>
          <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
         <img
          src={SearchIcon}
          alt="search"
          onClick={() => {searchMovies(searchTerm)}}
        />
        </div>

        {

          movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) =>(
                <>
                <MovieCard movie={movie}/>
                </>

              ))}  
              </div>
          ) : (
            <div className='empty'>
            <h2>There is no Movie</h2>
            </div>
          )
        }
    </div>
    )
}

export default App;