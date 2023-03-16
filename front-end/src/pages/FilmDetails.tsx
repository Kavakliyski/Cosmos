// styles
import '../styles/Films_styles/FilmDetails.scss';

// react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";


function FilmDetails() {

    const { id } = useParams<{ id: string }>();

    const [film, setFilm] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        setLoading(true);

        axios.get(`http://localhost:1337/api/movies/${id}?populate=*`)
            .then((response) => {
                setError(null);
                setFilm(response.data.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error);
                setLoading(false);
            });
    }, [id])

    

    const CoverImage = `http://localhost:1337${film && film.attributes.Cover2?.data?.attributes?.formats?.large?.url}`;
    const PosterImage = `http://localhost:1337${film && film.attributes.Poster?.data?.attributes?.formats?.large?.url}`;

    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error.. <br /> {error}</h2>

    return (
        <div className='FilmDetailsContainer'>
            <img className='Cover' src={CoverImage} />

            <div className='FilmDetailsWrapper'>
                <div className='TextContainer'>
                    <h5>{film.attributes.Title}</h5>
                    <p>директор: {film.attributes.Director}</p>
                    <p>с участието на: {film.attributes.Cast}</p>
                    <p>жанр: {film.attributes.Genre}</p>
                    <p>дата на излизане: {film.attributes.Release_date}</p>
                </div>

                <img className='PosterContainer' src={PosterImage} />
            </div>

            <div className='FilmDetailsCarousel'>
            </div>

        </div>
    )
}

export default FilmDetails;