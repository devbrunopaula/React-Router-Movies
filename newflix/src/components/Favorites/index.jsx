import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fetchMovies } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  MovieWrapper,
  WrapperContainer,
  MoviesHeader,
  HeaderTitle,
  GoBackIcon,
  ContentWrapper,
  Poster1,
} from './styles'

function Favorite() {
  // Redux
  const favorites = useSelector((state) => state.favoriteMovie)
  const dispatch = useDispatch()

  //Hooks
  const history = useHistory()
  const params = useParams()

  // Helpers Function

  function backButton() {
    history.goBack()
  }

  //UseEffect

  useEffect(() => {
    dispatch(fetchMovies(params.movie))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MovieWrapper>
        <WrapperContainer>
          <MoviesHeader>
            <HeaderTitle>My Favorite Movies</HeaderTitle>
            <div>
              <GoBackIcon onClick={backButton} />
            </div>
          </MoviesHeader>
          <ContentWrapper>
            {favorites.favoriteMovie.map((movies) => (
              <Poster1 key={movies.imdbID} src={movies.Poster} />
            ))}
          </ContentWrapper>
        </WrapperContainer>
      </MovieWrapper>
    </>
  )
}

export default Favorite
