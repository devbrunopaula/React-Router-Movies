import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import MovieDetails from './components/MoviesDetails'

const Routes = () => {
    return (
        <Switch>
            <Route path="/movie/:movie" component={MovieDetails} />  
             <Route path="/movies" component={MovieDetails}/>  
            <Route path="/" component={Layout}/>  
        </Switch>
    )
}
    
   


export default Routes