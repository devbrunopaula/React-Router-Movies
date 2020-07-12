import * as actions from '../actions/index'

const initialState = {
    loading: false,
    movie: [],
    favorites: [],
    error: ''
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'FETCH_MOVIE_SUCCESS':
      return {
        loading: false,
        movie: action.payload,
        error: ''
      }

    case 'FETCH_MOVIE_FAILURE':
      return {
        loading: false,
        movie: [],
        error: action.payload
      }
     

    default:
      return state
  }
}

export default movieReducer
