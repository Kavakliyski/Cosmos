
import MovieHero from '../../assets/moviehero.png';
import LogoCutted from '../../assets/cosmos_cutted.svg';

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


function HeroSecond() {


    return (
        <div className='HeroSecondWrapper'>

            <LogoCutImg src={LogoCutted} />


            <img src={MovieHero} />
        </div>
    )
}

export default HeroSecond