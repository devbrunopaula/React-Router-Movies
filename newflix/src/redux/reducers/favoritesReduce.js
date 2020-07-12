import * as actions from '../types'

const initialState = {
  loading: false,
  favoriteMovie: [],
  favoriteStatus: false,
  error: '',
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FAVORITE_MOVIE:
      return {
        loading: false,
        favoriteMovie: [...state.favoriteMovie, action.payload],
        favoriteStatus: false,
        error: '',
      }

    case actions.TOGGLE_FAVORITE_STATUS:
      return {
        ...state,
        favoriteStatus: state.favoriteMovie.map((movie) =>
          movie.imdbID === action.payload ? true : false
        ),
      }

    default:
      return state
  }
}

export default favoriteReducer
