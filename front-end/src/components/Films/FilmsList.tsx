// styles
import '../../styles/Films_styles/FilmsList.scss';

// components
import { FilmRight, FilmLeft } from './Film';

// react
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// axios
import axios from 'axios';


export const FilmsList = () => {

    const [films, setFilms] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // ====================== Strapi Unavailable =================
    // useEffect(() => {

    //     setLoading(true);

    //     axios.get(`${import.meta.env.VITE_STRAPI_CMS_URL}/api/movies?populate=*`)
    //         .then((response) => {
    //             setError(null);
    //             setFilms(response.data.data)
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             console.log(error);
    //             setLoading(false);
    //         });
    // }, [])
    // ====================== Strapi Unavailable =================

    useEffect(() => {
        fetch("../../../strapi-movies-api.json")
            .then((response) => (response.json()))
            .then((jsonData) => (setFilms(jsonData.data), console.log(jsonData.data)))
            .catch((error) => (setError(error)));
        setLoading(false);
    }, []);


    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error.. <br /> {error.message}</h2>

<<<<<<< HEAD
    console.log(films && films.data[1].attributes)

=======
>>>>>>> acf29c3b23a5fd13264fbc0c802ce79a45de6482
    return (
        <div className='FilmsListWrapper'>

            {
                films && films.data.map((film: any, index: number) => {
                    const movieImage = film.attributes.Cover?.data?.attributes?.url;
                    return index % 2 === 0 ? (

                        // <Link style={{ textDecoration: 'none' }} key={`${film.id}`} to={`/films/${film.id}`}> // strapi unavailability
                        <Link style={{ textDecoration: 'none' }} key={`${film.id}`} to={`/films`}>
                            <FilmRight title={film.attributes.Title} director={film.attributes.Director} cast={film.attributes.Gener} genre={film.attributes.Cast} year={film.attributes.Year} movie_image={movieImage} />
                        </Link>
                    ) : (
                        // <Link style={{ textDecoration: 'none' }} key={`${film.id}`} to={`/films/${film.id}`}> // strapi unavailability
                        <Link style={{ textDecoration: 'none' }} key={`${film.id}`} to={`/films`}>
                            <FilmLeft title={film.attributes.Title} director={film.attributes.Director} cast={film.attributes.Gener} genre={film.attributes.Cast} year={film.attributes.Year} movie_image={movieImage} />
                        </Link>)
                })
            }
        </div>
    )
}