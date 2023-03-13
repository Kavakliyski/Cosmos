
import '../../styles/Films_styles/FilmsList.scss';
import { FilmRight, FilmLeft } from './Film';

import movie_image from '../../assets/moviehero.png';
import { useEffect, useState } from 'react';
import { ProductsProps } from '../../interfaces/IProducts';
import axios from 'axios';

function FilmsList() {

    const [films, setFilms] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        setLoading(true);

        axios.get("http://localhost:1337/api/movies?populate=*")
            .then((response) => {
                setError(null)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error);
                setLoading(false);
            });
    }, [])

    
    return (
        <div className='FilmsListWrapper'>

            <FilmRight title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
            
            <FilmLeft title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
        
        </div>
    )
}

export default FilmsList