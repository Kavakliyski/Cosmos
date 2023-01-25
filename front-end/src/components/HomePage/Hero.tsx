
import hero from '../../assets/heroimg.png';
import styled from 'styled-components';


const HeroBanner = styled.img`
    position: absolute;
    width: 100vw;
    left: 0px;
    top: 0px;
`

function Hero() {


    return (
        <div>
            <HeroBanner src={hero} alt='' />
        </div>
    )
}

export default Hero