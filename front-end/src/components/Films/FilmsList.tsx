
import '../../styles/Films_styles/FilmsList.scss';
import { FilmRight, FilmLeft } from './Film';

import movie_image from '../../assets/moviehero.png';

function FilmsList() {


    return (
        <div className='FilmsListWrapper'>

            <FilmRight title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
            
            <FilmLeft title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
        
        </div>
    )
}

export default FilmsList