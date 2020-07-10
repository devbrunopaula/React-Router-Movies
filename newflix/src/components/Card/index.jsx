import React, { useState } from 'react'
import { Modal, Alert } from 'react-bootstrap';
import { Route, Link, NavLink, useLocation} from 'react-router-dom'

import {
    MovieWrapper,
    WrapperContainer,
    MoviesHeader,
    HeaderTitle,
    PlayIcon,
    HeartIcon,
    // HeartSolidIcon,
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
   
    } from './styles'

function Card({data, favorites, setFavorites, getMovies, setCurrentMovie}) {
    // const [heartState, setHeartState] = useState(true)
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert ] = useState(false)

   
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

    function AlertMessage(color) {
        setShowAlert(true)
        
        
    }

    const heartClicked = () => {
        
        const n = favorites.includes(data.Title)
        if(!n) {
            console.log('no')
            console.log('Fav if', favorites)
            setFavorites([...favorites, data.Title])
        } else {
            AlertMessage('danger')
        }
    }
//saved()
    
    const location = useLocation
   
    const test = (e) => {
      const currentMovie = e.target.innerHTML
      setCurrentMovie(currentMovie)
        
          
    }
    

    

    
    return (
        <>
    <MovieWrapper >
        <WrapperContainer>
                    <MoviesHeader>
                        
                        <HeaderTitle>{data.Title}</HeaderTitle>
                        
                    <div>
                        <PlayIcon onClick={favModal}/>
                        <HeartIcon onClick={heartClicked}/>
                        
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
                                <div style={{ textAlign: 'right' }}> 
                                <Alert show={showAlert} onClose={() => setShowAlert(false)} transition variant="danger" dismissible>This Movie has been added already...</Alert>
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
                <ul>
                {favorites.map((el, i) => <li key={i}> <Link onClick={test}  to={`/movie/${favorites[i]}`}>{el}</Link></li>)}
                {/* {favorites.map((el, i) => <li key={i}> <Link   to={`/movie/${favorites[i]}`}>{el}</Link></li>)} */}
                </ul>
                    
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
