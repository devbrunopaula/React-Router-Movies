import axios from 'axios'

export const saveToFavorites = (movie) => {
    return {
      type: 'ADD_FAVORITE_MOVIE',
      payload: movie
    }
  }

export const fetchMoviesRequest = () => {
  return {
    type: 'FETCH_MOVIE_REQUEST'
  }
}

export const fetchMoviesSuccess = movie => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie
  }
}

export const fetchMoviesError = error => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
    payload: error
  }
}

export const fetchMovies = name => {
  return dispatch => {
    dispatch(fetchMoviesRequest)
    return axios
      .get(`https://www.omdbapi.com/?t=${name}&plot=full?&apikey=1245a4d4`)
      .then(res => {
        console.log(res.data)
        dispatch(fetchMoviesSuccess(res.data))
      })
      .catch(error => dispatch(fetchMoviesError(error.message)))
  }
}