import React from 'react'
import { Link  } from 'react-router-dom'

function SavedList(props) {
  console.log(props)
  return (
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <span key={index} className="saved-movie">{movie}</span>
    ))}
      <button className="home-button">
      <Link to="/"> Home</Link>
      </button>
  </div>
  )
}

export default SavedList
