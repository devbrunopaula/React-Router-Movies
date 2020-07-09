import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

function MovieDetails({ movie, id, location }) {
  
  const { title, director, metascore, stars } = movie;
  
  // Query string

  // const result = queryString.parse(location.search)
  // const { queries, ex sortBy, id }= queryString.parse(location.search)

  return (
    <Link to={`movie/${id}`}> 
      <div className="movie-card" >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      </Link>
    );
  }
  
  export default MovieDetails;