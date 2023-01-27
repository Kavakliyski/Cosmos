
import '../../styles/Films_styles/FilmsList.scss';
import Film from './Film';

import movie_image from '../../assets/moviehero.png';

function FilmsList() {


    return (
        <div className='FilmsListWrapper'>
            <Film title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
            <Film title={'не поглеждай нагоре'} director={'Кристофър Нолан'} cast={'Крисчън Бейл, Морган Фрийман, Алекса Деми'} genre={'научна фантастика'} year={'2020'} movie_image={movie_image}/>
        </div>
    )
}

export default FilmsList