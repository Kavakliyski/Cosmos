import '../../styles/Films_styles/Film.scss';
import styled from 'styled-components';


interface IFilm {
    title: string;
    director: string;
    cast: string;
    genre: string;
    year: string;
    movie_image: string;
}


const HoverFigure = styled.figure`

    display: grid;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    
    img {
        width: 60vw;
        height: auto;
    }

    & > * {
        grid-area: 1/1;
        transition: .4s;
    }

    figcaption {
        display: grid;
        align-items: start;
        font-family: sans-serif;
        font-weight: bold;
        padding: .75rem;
        background: var(--c,#0009);
        clip-path: inset(0 var(--_i,100%) 0 0);
        // -webkit-mask:
        linear-gradient(#000 0 0),
        linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        -webkit-mask-clip: text, padding-box;
    }

    &:hover figcaption {
        --_i: 0%;
    }

    &:hover img {
        transform: scale(1.2);
    }

    @supports not (-webkit-mask-clip: text) {
        figcaption {
            -webkit-mask: none;
            color: #e4e4e4 !important;
        }
    }  


    @media (max-width: 768px) {
        img {
            width: 100%;
        }

        figcaption {
            display: none;
        }
    }
`

const StyledH4 = styled.h4`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 70px;
    color: #e4e4e4 !important;

`

const StyledPar = styled.p`
    font-size: 26px;
    padding: 0px;
    color: #e4e4e4 !important;

`


// image on the right
export const FilmRight = ({ title, director, cast, genre, year, movie_image }: IFilm) => {


    return (
        <div className='FilmDivWrapper'>

            <div className='FilmTextContainer'>
                <div className='FilmTextContainerTitleRight'>
                    <h3>{title}</h3>
                </div>
                <div className='FilmTextContainerYear'>
                    <p>{year}</p>
                </div>
            </div>

            <div className='FilmImage'>
                <HoverFigure>
                    <img src={`${import.meta.env.VITE_STRAPI_CMS_URL}${movie_image}`} />
                    <figcaption>
                        <StyledH4>{title}</StyledH4>
                        <div>
                            <StyledPar>директор: {director}</StyledPar>
                            <StyledPar>с участието на: {genre}</StyledPar>
                            <StyledPar>жанр: {cast}</StyledPar>
                        </div>
                    </figcaption>
                </HoverFigure>
            </div>
        </div >
    )
}



// image on the Left
export const FilmLeft = ({ title, director, cast, genre, year, movie_image }: IFilm) => {


    return (
        <div className='FilmDivWrapper'>

            <div className='FilmImage'>
                <HoverFigure>
                    <img src={`${import.meta.env.VITE_STRAPI_CMS_URL}${movie_image}`} />
                    <figcaption>
                        <StyledH4>{title}</StyledH4>
                        <div>
                            <StyledPar>директор: {director}</StyledPar>
                            <StyledPar>с участието на: {genre}</StyledPar>
                            <StyledPar>жанр: {cast}</StyledPar>
                        </div>
                    </figcaption>
                </HoverFigure>
            </div>

            <div className='FilmTextContainer'>
                <div className='FilmTextContainerTitleLeft'>
                    <h3>{title}</h3>
                </div>
                <div className='FilmTextContainerYear'>
                    <p>{year}</p>
                </div>
            </div>


        </div >
    )
}
