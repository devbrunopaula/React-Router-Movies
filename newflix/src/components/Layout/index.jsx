import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
import Main from '../Main'

function Layout() {
    const [movie, setMovies] = useState('')
    

    const handleChanges = (event) => {
        const moviedSearched = event.target.value
        setMovies(moviedSearched)
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
                        <EmailInput onChange={handleChanges} placeholder="Search a Movie" />
                        <Link to={`/movie/${movie}`}>
                            <SearchBtn>SEARCH <ArrowIcon /></SearchBtn>
                        </Link>
                        <p>Ready to Query? Enter a movie title to get all the details.</p>
                    </HeroContainer>
                </HeroWrapper>
               <Main />
            </Container>
        </ExtWrapper>
            
    )
}

export default Layout
