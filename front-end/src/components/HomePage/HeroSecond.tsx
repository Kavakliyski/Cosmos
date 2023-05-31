// assets
// import MovieHero from '../../assets/moviehero.png';
import MovieHero2 from '../../assets/HomePage/moviehero.webp';
import LogoCutted from '../../assets/cosmos_cutted.svg';

// styles
import '../../styles/HomePage_styles/HeroSecond.scss';
import styled from 'styled-components';


const LogoCutImg = styled.img`
    position: absolute;
    width: 30vw !important;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    margin-right: -50%; /* Half of the image width */
`


export const HeroSecond = () => {

    return (
        <div className='HeroSecondWrapper'>

            <LogoCutImg src={LogoCutted} alt='logo' />
            <img style={{ maxWidth: "100%", width: "auto", height: "auto" }} src={MovieHero2} alt='студио' />
        </div>
    )
}

