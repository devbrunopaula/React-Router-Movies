import * as actions from '../actions/index'

const initialState = {
    loading: false,
    favoriteMovie: [],
    error: ''
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case 'ADD_FAVORITE_MOVIE':
            return {
               
                loading: false,
                    
                favoriteMovie: [...state.favoriteMovie, action.payload],
                
                error: ''
                
            }  
            


    default:
      return state
  }
}

export default favoriteReducer
