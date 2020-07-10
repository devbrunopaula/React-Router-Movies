import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

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
// import Main from '../Main'

function Layout() {
    const [movie, setMovies] = useState('')
    

    const handleChanges = (event) => {
        const moviedSearched = event.target.value
        setMovies(moviedSearched)
        
    }
    

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(movie)
            const moviedSearched = e.target.value
          return   <Route  path='/test' render={ () => <div>test</div>}  />
            
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
                        <Link to={`/movie/${movie}`}>
                            <SearchBtn>SEARCH <ArrowIcon /></SearchBtn>
                        </Link>
                        <p>Ready to Query? Enter a movie title to get all the details.</p>
                    </HeroContainer>
                </HeroWrapper>
               
            </Container>
        </ExtWrapper>
            
    )
}

export default Layout
