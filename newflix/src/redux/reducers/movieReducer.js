import * as actions from '../types'

const initialState = {
  loading: false,
  movie: [],
  favorites: [],
  error: '',
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actions.FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
        error: '',
      }

    case actions.FETCH_MOVIE_FAILURE:
      return {
        loading: true,
        movie: [],
        error: action.payload,
      }

    default:
      return state
  }
}

export default movieReducer
