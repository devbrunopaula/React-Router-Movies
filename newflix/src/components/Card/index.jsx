import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, NavLink, useParams } from 'react-router-dom'
import { saveToFavorites, fetchMovies } from '../../redux/actions'

import { useDispatch, useSelector } from 'react-redux'

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
  Poster1,
  MovieInfo,
  MovieInfoHeader,
  Title1,
  Year1,
  Runtine1,
  Rated1,
  Ratings1,
  Genre1,
  Line,
  MainInfo,
  DirectedBy,
  WrittenBy,
  Language1,
  Country1,
  Awards1,
  Description,
  Button,
} from './styles'

function Card() {
  const [showAlert, setShowAlert] = useState(false)

  // Redux
  const movieRedux = useSelector((state) => state.movie)
  const favorites = useSelector((state) => state.favoriteMovie)
  const dispatch = useDispatch()

  const {
    Title,
    Poster,
    Year,
    Runtime,
    Rated,
    imdbRating,
    Genre,
    Director,
    Writer,
    Language,
    Country,
    Awards,
    Plot,
  } = movieRedux.movie

  const params = useParams()
  useEffect(() => {
    dispatch(fetchMovies(params.movie))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Helpers Function

  function AlertMessage(color) {
    setShowAlert(true)
  }

  const heartClicked = () => {
    const movieTitles = favorites.favoriteMovie.map((movie) => movie.Title)
    const alreadySaved = movieTitles.includes(Title)

    if (!alreadySaved) {
      dispatch(saveToFavorites(movieRedux.movie))
    } else {
      AlertMessage('danger')
    }
  }

  return (
    <MovieWrapper>
      <WrapperContainer>
        <MoviesHeader>
          <HeaderTitle>{Title}</HeaderTitle>
          <div>
            <Link to={`/favorites`}>
              {' '}
              <PlayIcon />
            </Link>
            <HeartIcon onClick={heartClicked} />
            <NavLink to='/'>
              {' '}
              <GoBackIcon />{' '}
            </NavLink>
          </div>
        </MoviesHeader>
        <ContentWrapper>
          <PosterSideBar>
            <Poster1 src={Poster} />
          </PosterSideBar>

          <MovieInfo>
            <MovieInfoHeader>
              <div>
                <Title1>{Title}</Title1>
                <Year1>{Year}</Year1>
                <Runtine1>{Runtime}</Runtine1>
                <Rated1>{Rated}</Rated1>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Alert
                  show={showAlert}
                  onClose={() => setShowAlert(false)}
                  transition
                  variant='danger'
                  dismissible
                >
                  This Movie has been added already...
                </Alert>
                <Ratings1>
                  <span>Ratings: </span>
                  {imdbRating}
                </Ratings1>
                <Genre1>
                  <span>Genre: </span>
                  {Genre}
                </Genre1>
              </div>
            </MovieInfoHeader>
            <Line />

            <MainInfo>
              <DirectedBy>
                <span>DIRECTED BY</span>
                {Director}
              </DirectedBy>
              <WrittenBy>
                <span>WRITTEN BY</span>
                {Writer}
              </WrittenBy>
              <Language1>
                <span>AUDIO</span>
                {Language}
              </Language1>
              <Country1>
                <span>Country</span>
                {Country}
              </Country1>
              <Awards1>
                <span>Awards</span>
                {Awards}
              </Awards1>
              <Description>{Plot}</Description>
            </MainInfo>
            <NavLink to='/'>
              {' '}
              <Button>Back</Button>
            </NavLink>
          </MovieInfo>
        </ContentWrapper>
      </WrapperContainer>
    </MovieWrapper>
  )
}

export default Card
