
import hero from '../../assets/heroimg.png';
import styled from 'styled-components';


const HeroBanner = styled.img`
    // position: absolute;
    width: 100vw;
    left: 0px;
    // top: 0px;
    object-fit: cover;
    max-width: 100%;
    height: auto;
    overflow: hidden;
`

function Hero() {


    return (
        <div>
            <HeroBanner src={hero} alt='' />
        </div>
    )
}

export default Hero