// styles
import '../styles/Films_styles/FilmDetails.scss';

// react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// axios
import axios from "axios";


function FilmDetails() {
    const location = useLocation();
    const film = location.state?.film;

    const [error, setError] = useState<any | null>(null);


    if (error) return <h2>Error.. <br /> {error}</h2>
    if (!film) {
        return <h2>Film data not found</h2>;
    }

    console.log(film);

    return (
        <div className='FilmDetailsContainer'>
            {/* <img className='Cover' src={CoverImage} />

            <div className='FilmDetailsWrapper'>
                <div className='TextContainer'>
                    <h5>{film.attributes.Title}</h5>
                    <p>директор: {film.attributes.Director}</p>
                    <p>с участието на: {film.attributes.Cast}</p>
                    <p>жанр: {film.attributes.Gener}</p>
                    <p>дата на излизане: {film.attributes.Release_date}</p>
                </div>

                <img className='PosterContainer' src={PosterImage} />
            </div>

            <div className='FilmDetailsCarousel'>
                {
                    film.attributes.Carousel.data && film.attributes.Carousel.data.map((film: any, index: number) => (
                        <div key={index}>
                            <img src={`${import.meta.env.VITE_STRAPI_CMS_URL}${film.attributes.url}`} />
                            <p></p>
                        </div>
                    ))
                }
            </div> */}

        </div>
    )
}

export default FilmDetails;