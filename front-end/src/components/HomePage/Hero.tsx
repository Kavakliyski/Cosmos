
import hero from '../../assets/heroimg.png';
import styled from 'styled-components';


const HeroBanner = styled.img`
    width: 100vw;
    // object-fit: cover;
    background-color: #1d0623;
    max-width: 100%;
    height: auto;
    overflow: hidden;
`

const Heading = styled.h1`
    text-transform: uppercase;
`


function Hero() {


    return (
        <div>
            <Heading>проект сияние</Heading>
            <HeroBanner src={hero} alt='' />
        </div>
    )
}

export default Hero