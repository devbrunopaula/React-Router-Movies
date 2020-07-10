import React, { useState, useEffect } from 'react'
import { Modal, Alert } from 'react-bootstrap';
import { Route, NavLink, useHistory, Link} from 'react-router-dom'

import {
    MovieWrapper,
    WrapperContainer,
    MoviesHeader,
    HeaderTitle,
    PlayIcon,
    HeartIcon,
    HeartSolidIcon,
    GoBackIcon,
    ContentWrapper,
    PosterSideBar,
    Poster,
    MovieInfo,
    MovieInfoHeader,
    Title,
    Year,
    Runtine,
    Rated,
    Ratings,
    Genre,
    Line,
    MainInfo,
    DirectedBy,
    WrittenBy,
    Language,
    Country,
    Awards, 
    Description,
    Button,
    FavList
    } from './styles'

function Card({data, favorites, setFavorites,getMovies}) {
    const [heartState, setHeartState] = useState(true)
    const [show, setShow] = useState(false);
   
    const history = useHistory()
   
    //Modal Handle
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    // Helpers Function
    
    function clickHandle() {
      return  <NavLink to="/"/>
    }

    function favModal() {
        handleShow()

    }   

    function saved() {
       setFavorites([...favorites, data.Title])
        
    }

    function Move(i) {
       return <NavLink  key={i} to={`/movie/${favorites[i]}`}>test</NavLink>
    }

    
    return (
        <>
    <MovieWrapper >
        <WrapperContainer>
                <MoviesHeader>
                    <HeaderTitle>{data.Title}</HeaderTitle>
                    <div>
                        <PlayIcon onClick={favModal}/>
                        <HeartIcon onClick={saved}/>
                        
                         <NavLink to="/"> <GoBackIcon/> </NavLink>
                    </div>
             </MoviesHeader>
                <ContentWrapper>
                    <PosterSideBar>
                        <Poster src={data.Poster}/>
                    </PosterSideBar>
            
                    <MovieInfo>
                        <MovieInfoHeader>
                            <div>
                                <Title>{data.Title}</Title>
                                <Year>{data.Year}</Year>
                                <Runtine>{data.Runtime}</Runtine>
                                <Rated>{data.Rated}</Rated>
                            </div>
                            <div style={{textAlign: 'right'}}> 
                                <Ratings><span>Ratings: </span>{data.imdbRating}</Ratings>
                                <Genre><span>Genre: </span>{data.Genre}</Genre>
                            </div>
                        </MovieInfoHeader>
                        <Line/>
                                
                        <MainInfo>
                            <DirectedBy><span>DIRECTED BY</span>{data.Director}</DirectedBy>
                            <WrittenBy><span>WRITTEN BY</span>{data.Writer}</WrittenBy>
                            <Language><span>AUDIO</span>{data.Language}</Language>
                            <Country><span>Country</span>{data.Country}</Country>
                            <Awards><span>Awards</span>{data.Awards}</Awards>
                            <Description>{data.Plot}</Description>
                        </MainInfo>    
                            <Button onClick={clickHandle}>Back</Button>
                            
                            {favorites.map((el, i) => <span style={{padding: '0 .6rem'}}><NavLink  key={i} to={`/movie/${favorites[i]}`}>{el}</NavLink></span>)}
                          
                    </MovieInfo>  
                                
                    
            </ContentWrapper>
        </WrapperContainer> 
    </MovieWrapper>
            
            {/* My Favorites Modal */}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Favorites</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                   
                {favorites.map((el, i) => <li><NavLink  key={i} to={`/movie/${favorites[i]}`}>{el}</NavLink></li>)}
                    
                    
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
            </Modal>
            
            <Route exact path='/'>
          <h3>Please select a topic.</h3>
        </Route>
    </>
    )
    
}

export default Card
