import styled, { css } from 'styled-components'
import plexBG from '../../assets/plexBG.jpg'
import { Container } from '../../styles/styles'

// Icons
import { AddToQueue } from '../../styles/icons'
import { Heart } from '../../styles/icons'
import { SolidHeart } from '../../styles/icons'
import { ArrowGoBack } from '../../styles/icons'

export const MovieWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.55)),
    url(${plexBG}) no-repeat center center fixed;
  background-size: cover;
  background-repeat: repeat;
  position: relative;

  min-height: 100vh;
`

export const WrapperContainer = styled(Container)`
  height: 100%;
`

export const MoviesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 10px -10px 10px 1px rgba(0, 0, 0, 0.4);
  z-index: 3;
`

export const HeaderTitle = styled.h4`
  color: var(--grayFont);
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`

const iconCSS = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: var(--grayFont);
  margin-left: 2rem;
`

export const PlayIcon = styled(AddToQueue)`
  ${iconCSS}
`
export const HeartIcon = styled(Heart)`
  ${iconCSS}
  &:hover {
    fill: red;
  }
`
export const HeartSolidIcon = styled(SolidHeart)`
  width: 30px;
  height: 30px;
  fill: red;
`
export const GoBackIcon = styled(ArrowGoBack)`
  ${iconCSS}
  margin-right: 1rem;
`

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const PosterSideBar = styled.div`
  flex: 1;
  margin-right: 10%;
  @media (max-width: 500px) {
    margin-right: 0;
  }
`

export const Poster1 = styled.img`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 10px -10px 10px 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const MovieInfo = styled.div`
  flex: 2;
`

export const MovieInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const spanTitle = css`
  color: var(--darkGray);
  padding-right: 0.5rem;
`

export const Title1 = styled.p`
  color: var(--grayFont);
  font-size: 2rem;
  font-weight: bold;
  /* padding: 0 0 1rem 0; */

  span {
    ${spanTitle}
  }
`

export const Year1 = styled.p`
  color: var(--grayFont);
  font-weight: bold;
  font-size: 1.5rem;
  /* padding: .3rem 0; */
`
export const Runtine1 = styled.p`
  color: var(--darkGray);
  font-size: 1rem;
  padding: 0.3rem 0;
`
export const Rated1 = styled.p`
  background: var(--grayFont);
  text-align: center;
  width: 5rem;
  color: var(--line);
  border-radius: 1rem;
  padding: 0.2rem 0;
`
export const Ratings1 = styled.p`
  color: var(--grayFont);
`
export const Genre1 = styled.p`
  color: var(--grayFont);
`

export const Line = styled.hr`
  color: var(--line);
  margin: 1rem 0;
  box-shadow: 10px -10px 5px 2px rgba(0, 0, 0, 0.2);
`

export const MainInfo = styled.div`
  padding: 1rem 0;

  span {
    ${spanTitle}
  }
`

const infoCss = css`
  /* font-size: 1.3rem; */
  color: var(--grayFont);
  padding: 0.3rem 0;
`

export const DirectedBy = styled.p`
  ${infoCss}
`

export const WrittenBy = styled.p`
  ${infoCss}
`

export const Language1 = styled.p`
  ${infoCss}
`

export const Country1 = styled.p`
  ${infoCss}
`

export const Awards1 = styled.p`
  ${infoCss}
`

export const Description = styled.p`
  padding-top: 4rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--grayFont);
`

export const Button = styled.button`
  color: var(--grayFont);
  font-size: 1em;
  margin: 5rem 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--darkGray);
  border-radius: 3px;
  background: transparent;
  float: right;
  cursor: pointer;
  &:hover {
    background: var(--darkGray);
    color: var(--Line);
  }
`

export const FavList = styled.li`
  font-size: 1.2rem;
  padding-left: 1rem;
`
