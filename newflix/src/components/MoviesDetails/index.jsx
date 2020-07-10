import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card'
import { Loading, Loader, PleaseWait } from './styles'

import { useParams } from 'react-router-dom'
import Popcorn from '../../assets/popcorn.gif'
import waiting from '../../assets/loading.gif'
import { Movie } from 'styled-icons/boxicons-regular'



function MovieDetails({favorites, setFavorites}) {

    const [ movieData, setMovieData ] = useState([])
    const [loading, setLoading] = useState(false)
    

    const key = process.env.REACT_APP_KEY
    const { movie } = useParams()
    const [currentMovie, setCurrentMovie] = useState(movie)
    console.log(currentMovie)
    
    const getMovies = async () =>{
            setLoading(true)
        try {
            const response = await axios.get(`http://www.omdbapi.com/?t=${currentMovie}&plot=full?&apikey=${key}`)
            
            setMovieData(response.data)
            
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
            {loading ? <Loading><Loader src={Popcorn} /> <PleaseWait src={waiting} /></Loading> : <Card setCurrentMovie={setCurrentMovie} data={movieData} favorites={favorites} setFavorites={setFavorites} getMovies={getMovies}/>}
        </>
    )
        
}

export default MovieDetails
