import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../styles/styles'
import {
    ExtWrapper,
    Header,
    HeroWrapper,
    HeroContainer,
    EmailInput,
    SearchBtn,
    ArrowIcon
} from './styles'
import logo from '../../assets/logo.png'
import { fetchMovies }  from '../../redux/actions'

function Layout({setPressEnter, movieData, setCurrentMovie, currentMovie}) {
    const [movie, setMovies] = useState('')
    
    console.log('Layout', currentMovie)
    

    // Redux

    const movieRedux = useSelector( state => state.movies)
    const dispatch = useDispatch()

    const handleChanges = (event) => {
        const moviesSearched = event.target.value
        setMovies(moviesSearched)
    
    }
    

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            
            console.log('Enter Pressed')
          return <Link to={`/movie/${movie}`} onClick={ () => dispatch(fetchMovies(movie))} />
        }
    }


    

    return (
        <ExtWrapper >
            <Container>
                <Header>
                    <img src={logo} alt="" /> 
                    <button>Sign In</button>     
                </Header> 
                <HeroWrapper>
                    <HeroContainer>
                        <h1>Unlimited Search, <br/>
                        Movies, TV shows, and more.</h1>
                        <h5>Search the massive Bruflix database</h5>
                        <EmailInput onChange={ handleChanges } onKeyPress={ handleEnter } placeholder="Search a Movie" />
                        <Link to={`/movie/${movie}`} onClick={ () => dispatch(fetchMovies(movie))} >
                            <SearchBtn >SEARCH <ArrowIcon /></SearchBtn>
                        </Link>
                        <p>Ready to Query? Enter a movie title to get all the details.</p>
                    </HeroContainer>
                </HeroWrapper>
               
            </Container>
        </ExtWrapper>
            
    )
}

export default Layout
