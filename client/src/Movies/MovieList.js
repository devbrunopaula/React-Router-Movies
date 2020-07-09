import React from 'react';
import MovieDetails from './MovieDetails'
import {useParams} from 'react-router-dom'

const MovieList = props => {

  const params = useParams()
  console.log(params)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} id={movie.id} movie={movie} />
        
      ))}
    </div>
  );
}

export default MovieList


