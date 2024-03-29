
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
            .then((response) => response.json())
            .then((jsonData) => {
                setFilms(jsonData.data);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);


    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error.. <br /> {error.message}</h2>

    return (
        <div className='FilmsListWrapper'>
            {
                films.map((film: any, index: number) => {


                    return (
                        index % 2 === 0 ? (
                            <Link
                                style={{ textDecoration: 'none' }}
                                key={film.id}
                                to={`/films/${film.attributes.slug}`}
                                state={{ film }}
                            >
                                <FilmRight
                                    title={film.attributes.Title}
                                    director={film.attributes.Director}
                                    cast={film.attributes.Gener}
                                    genre={film.attributes.Cast}
                                    year={film.attributes.Year}
                                    movie_image={film.attributes.Cover?.data?.attributes?.url}
                                />
                            </Link>
                        ) : (
                            <Link
                                style={{ textDecoration: 'none' }}
                                key={film.id}
                                to={`/films/${film.attributes.slug}`}
                            >
                                <FilmLeft
                                    title={film.attributes.Title}
                                    director={film.attributes.Director}
                                    cast={film.attributes.Gener}
                                    genre={film.attributes.Cast}
                                    year={film.attributes.Year}
                                    movie_image={film.attributes.Cover?.data?.attributes?.url}
                                />
                            </Link>
                        )
                    )

                })
            }
        </div>
    )
}