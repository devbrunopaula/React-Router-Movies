import movieReducer from './movieReducer'
import favoriteReducer from './favoritesReduce'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    movie: movieReducer,
    favoriteMovie: favoriteReducer
})

export default allReducers
