
import MovieHero from '../../assets/moviehero.png';
import LogoCutted from '../../assets/cosmos_cutted.svg';

import '../../styles/HomePage_styles/HeroSecond.scss';
import styled from 'styled-components';


const LogoCutImg = styled.img`
    width: 30vw !important;
`


function HeroSecond() {


    return (
        <div className='HeroSecondWrapper'>

            <div className='HeroSecondLogo'>
                <LogoCutImg src={LogoCutted} />
            </div>

            <img src={MovieHero} />
        </div>
    )
}

export default HeroSecond