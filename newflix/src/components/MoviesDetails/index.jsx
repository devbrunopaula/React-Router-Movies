import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card'
import { Loading, Loader, PleaseWait } from './styles'

import { useParams } from 'react-router-dom'
import Popcorn from '../../assets/popcorn.gif'
import waiting from '../../assets/loading.gif'
function MovieDetails() {

    const [ movieData, setMovieData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    const key = process.env.REACT_APP_KEY
    const {movie} = useParams()

    const getMovies = async () =>{
            setLoading(true)
        try {
            const response = await axios.get(`http://www.omdbapi.com/?t=${movie}&plot=full?&apikey=${key}`)
            
            setMovieData(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
        
    }
    useEffect(() => {
       getMovies()
    },[])

    return (
        <>
            {loading ? <Loading><Loader src={Popcorn} /> <PleaseWait src={waiting} /></Loading> : <Card data={movieData}/>}
        </>
    )
        
}

export default MovieDetails
