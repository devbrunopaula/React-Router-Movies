import axios from 'axios'
import * as actions from '../types'

export const saveToFavorites = (movie) => {
  return {
    type: actions.ADD_FAVORITE_MOVIE,
    payload: movie,
  }
}

export const toggleFavoriteStatus = (movie) => {
  return {
    type: actions.TOGGLE_FAVORITE_STATUS,
    payload: movie,
  }
}

export const fetchMoviesRequest = () => {
  return {
    type: actions.FETCH_MOVIE_REQUEST,
  }
}

export const fetchMoviesSuccess = (movie) => {
  return {
    type: actions.FETCH_MOVIE_SUCCESS,
    payload: movie,
  }
}

export const fetchMoviesError = (error) => {
  return {
    type: actions.FETCH_MOVIE_FAILURE,
    payload: error,
  }
}

export const fetchMovies = (name) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest())
    return axios
      .get(`https://www.omdbapi.com/?t=${name}&plot=full?&apikey=1245a4d4`)
      .then((res) => {
        dispatch(fetchMoviesSuccess(res.data))
      })
      .catch((error) => dispatch(fetchMoviesError(error.message)))
  }
}
