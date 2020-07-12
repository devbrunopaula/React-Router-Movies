import styled from 'styled-components'
import moviesBG from '../../assets/movieBG.jpg'
import { ArrowIosForwardOutline } from '../../styles/icons'

export const ExtWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55)),
    url(${moviesBG}) repeat;
  box-shadow: 4px 14px 19px -8px rgba(0, 0, 0, 0.79);
  min-height: 100vh;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  margin-top: 20px;
  img {
    width: 150px;
    height: 45px;
  }

  button {
    background-color: var(--primary);
    width: 100px;
    height: 35px;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 90vh;
  top: 0;
`

export const HeroContainer = styled.div`
  color: white;
  text-align: center;
  font-size: 2rem;

  h5 {
    padding: 1rem;
  }

  p {
    font-size: 1rem;
    padding: 0.5rem;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const EmailInput = styled.input`
  padding: 0;
  margin: 0;
  width: 30vw;
  height: 50px;
  border: none;
  padding-left: 1rem;
  color: #2b2c2d;
  font-size: 1.2rem;
  outline: none;
  &::placeholder {
    color: gray;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`

export const ArrowIcon = styled(ArrowIosForwardOutline)`
  width: 24px;
  height: 24px;
`

export const SearchBtn = styled.button`
  border: none;
  height: 50px;
  width: 150px;
  background-color: var(--primary);
  color: white;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`
