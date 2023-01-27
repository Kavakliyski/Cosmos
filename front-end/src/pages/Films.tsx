
import FilmsList from '../components/Films/FilmsList';
import '../styles/Films_styles/Films.scss';


function Films() {


    return (
        <div className='FilmsDivWrapper'>
            <h1>Филми</h1>
            <FilmsList />
        </div>
    )
}

export default Films