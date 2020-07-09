import styled, {css} from 'styled-components';
import plexBG from '../../assets/plexBG.jpg'
import { Container } from '../../styles/styles'

// Icons
import { Play } from '../../styles/icons'
import { Heart } from '../../styles/icons'
import { SolidHeart } from '../../styles/icons'
import { ArrowGoBack } from '../../styles/icons'

export const MovieWrapper = styled.div`
      width:  100vw;
    height: 100vh;
   background: 
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.55)
    ), 
    
    url(${plexBG})no-repeat;
    background-size:cover;
    
    position: relative;
`;

export const WrapperContainer = styled(Container)`
 
`;

export const MoviesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  
  top: 0;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  box-shadow: 10px  -10px 10px 1px  rgba(0,0,0,0.4);
  z-index: 3;
`;

export const HeaderTitle = styled.h3`
  color: var(--grayFont);
`;

const iconCSS = css`
    width: 30px;
    height: 30px;
    cursor:pointer;
    fill: var(--grayFont);
    margin-left: 2rem;
    margin-right: 2rem;
`

export const PlayIcon = styled(Play)`
  ${iconCSS}
  
`;
export const HeartIcon = styled(Heart)`
   ${iconCSS}
  &:hover{
    fill: red;
  }
`;
export const HeartSolidIcon = styled(SolidHeart)`
    width: 30px;
    height: 30px;
    fill: red;
   
`;
export const GoBackIcon = styled(ArrowGoBack)`
  ${iconCSS}
`;

export const ContentWrapper = styled.div`
border: solid yellow;
  display: flex;
  margin-top: 8rem;
`;

export const PosterSideBar = styled.div`
  border: solid green;
  flex:1;
`;

export const Poster = styled.img`
  border: solid green;
  width: 350px;
  height: 500px;
  margin: 0 auto;
  
`;

export const MovieInfo = styled.div`
  border: solid blue;
  flex: 2;
`;

export const MovieInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  
`;

export const Year = styled.p`
  
`;
export const Runtine = styled.p`
  
`;
export const Rated = styled.p`
  
`;
export const Ratings = styled.p`
  
`;
export const Genre = styled.p`
  
`;