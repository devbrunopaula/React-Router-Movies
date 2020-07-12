import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import { Loading, Loader, PleaseWait } from './styles/styles'

import { useParams } from 'react-router-dom'
import Popcorn from './assets/popcorn.gif'
import waiting from './assets/loading.gif'
import { Movie } from 'styled-icons/boxicons-regular'
import './App.css';
import GlobalStyle from './styles/GlobalStyles'
import Routes from './routes'




function App() {
  const [ movieData, setMovieData ] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentMovie, setCurrentMovie] = useState('')
  
  const params = useParams()
  console.log(params)
  
  const getMovies = async () => {
    setLoading(true)
   
    try {
    
      if (currentMovie !== "") {
        const response = await axios.get(`http://www.omdbapi.com/?t=${currentMovie}&plot=full?&apikey=1245a4d4`)
        console.log('API')
        setMovieData(response.data)
      }
    

    
    setLoading(false)
  } catch (error) {
    setLoading(true)
    console.log(error)
  }
  
  }
  
  useEffect(() => {
          
     getMovies()
    
  }, [currentMovie])



  return (
    <>
      <GlobalStyle />
      <Routes movieData={movieData} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} loading={loading}/>
    </>
  );
}

export default App;
 