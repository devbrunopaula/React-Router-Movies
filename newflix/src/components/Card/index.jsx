import React, {useState} from 'react'
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
    Genre
    


} from './styles'

function Card({data}) {
    const [heartState, setHeartState] = useState(true)
    
    console.log(data)
    return (
        
    <MovieWrapper >
        <WrapperContainer>
                <MoviesHeader>
                    <HeaderTitle>{data.Title}</HeaderTitle>
                    <div>
                        <PlayIcon />
                        { heartState ? <HeartIcon onClick={() => setHeartState(!heartState)}/>: <HeartSolidIcon onClick={() => setHeartState(!heartState)}/>}
                        
                     <GoBackIcon/>
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
                                <Ratings>{data.imdbRating}</Ratings>
                                <Genre>{data.Genre}</Genre>
                            </div>
                        </MovieInfoHeader>
{/*
                        
                        <MainInfo>
                            <DirectedBy></DirectedBy>
                            <WrittenBy></WrittenBy>
                            <Language></Language>
                            <Country></Country>
                            <Awards></Awards>
                            <Description></Description>
                        </MainInfo>    */}
                    </MovieInfo>  
            </ContentWrapper>
        </WrapperContainer> 
    </MovieWrapper >
    )
    
}

export default Card
