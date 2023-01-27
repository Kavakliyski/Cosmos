
import '../../styles/Films_styles/Films.scss';

interface IFilm {
    title: string;
    director: string;
    cast: string;
    genre: string;
    year: string;
}


function Film({ title, director, cast, genre, year }: IFilm) {


    return (
        <div className='FilmDivWrapper'>
            <h2>{title}</h2>
            <p>{director}</p>
            <p>{cast}</p>
            <p>{genre}</p>
            <p>{year}</p>
        </div>
    )
}

export default Film