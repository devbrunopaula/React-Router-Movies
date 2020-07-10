import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import MovieDetails from './components/MoviesDetails'
import Favorites from './components/Favorites'



const Routes = () => {
    const [ favorites, setFavorites ] = useState([])
    return (
        <Switch>
            <Route path="/favorites" component={Favorites} />
             {/* <Route path="/movie/:movie" component={MovieDetails} />   */}
             <Route path="/movie/:movie" render={() => <MovieDetails setFavorites={setFavorites} favorites={favorites}/>}  />  
             <Route path="/movies" component={MovieDetails} />  
            <Route path="/" component={Layout}/>  
        </Switch>
    )
}
    
   


export default Routes