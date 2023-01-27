
import { useState } from 'react';

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


const MovieImage = styled.img`
    width: 100%;
    transition: filter 0.2s ease-in-out;

    :hover{
        hue-rotate(90deg);
    }

`




function Film({ title, director, cast, genre, year, movie_image }: IFilm) {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className='FilmDivWrapper'>

            <div className='FilmTextContainer'>
                <div className='FilmTextContainerTitle'>
                    <h2>{title}</h2>
                </div>
                <div className='FilmTextContainerYear'>
                    <p>{year}</p>
                </div>
            </div>

            {/* <p>{director}</p>
            <p>{cast}</p>
            <p>{genre}</p> */}

            <div
                className='FilmImage'
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >

                <MovieImage
                    src={movie_image}
                />
                {
                    isHovered &&
                    <div className={`FilmImageText  ${isHovered ? 'show-text' : ''}`} >
                        <h2>{title}</h2>
                        <p>
                            директор: {director}
                            <br />
                            <br />
                            с участието на: {cast}
                            <br />
                            <br />
                            жанр: {genre}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Film