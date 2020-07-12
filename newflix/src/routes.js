import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Favorites from './components/Favorites'
import LoaderScreen from './components/Loader/Loader'
import { useSelector } from 'react-redux'
import Card from './components/Card'

const Routes = () => {
  const movie = useSelector((state) => state.movie)

  return (
    <>
      {movie.loading ? <LoaderScreen /> : ''}
      <Switch>
        <Route path='/favorite/:movie' component={Favorites} />
        <Route path='/favorites/' component={Favorites} />
        <Route path='/movie/:movie' component={Card} />
        <Route path='/' component={Layout} />
      </Switch>
    </>
  )
}

export default Routes
