import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom'

import MovieList from './Movies/MovieList'
 import Movie from './Movies/Movie'
import Test from './test'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Switch>
          <Route path='/movie/:id' render={props => <Movie addToSavedList={addToSavedList} savedList={savedList} {...props} /> }/>
          <Route path="/test" component={Test} test='we'></Route>
          <Route path='/' render={() => <MovieList movies={movieList} /> }/>
      </Switch>
    </>
  );
};

export default App;
