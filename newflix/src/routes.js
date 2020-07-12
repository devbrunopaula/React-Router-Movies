import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import MovieDetails from './components/MoviesDetails'
import Favorites from './components/Favorites'




const Routes = ({ movieData, currentMovie, setCurrentMovie, loading }) => {
 

    return (
        <Switch>
            <Route path="/favorite/:movie" component={Favorites}/>
            <Route path="/favorites/" component={Favorites}/>
            <Route path="/movie/:movie" component={MovieDetails}/>
            <Route path="/movies" component={MovieDetails} />  
            <Route path="/" component={Layout}/> 
                
        </Switch>
    )
}
    
   


export default Routes