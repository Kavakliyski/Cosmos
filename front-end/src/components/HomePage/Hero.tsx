
import hero from '../../assets/heroimg.png';
import styled from 'styled-components';


const ImageContainer = styled.div`
    position: relative;
    background-color: #1d0623;
    z-index: -2;

`

const HeroBanner = styled.img`
    width: 100vw;
    max-width: 100%;
    height: auto;    
    position: relative;
`

const Heading = styled.h1`
    position: absolute;
    top: 38%;
    left: 25%;
    transform: translate(-50%,-50%);
    color: #E4E4E4;
    z-index: -1;
    font-size: 7vw;
    text-align: left;
`

const SubHeading = styled.h1`
    position: absolute;
    top: 46%;
    left: 35%;
    transform: translate(-50%,-50%);
    color: #E4E4E4;
    z-index: -1;
    font-size: 11vw;
    text-align: left;
`

const Date = styled.h1`
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #DD3758;
    z-index: -1;
    font-size: 3vw;
    text-align: left;
    font-weight: 100;
`


function Hero() {


    return (
        <ImageContainer>
            <HeroBanner src={hero} alt='' />
            <Heading>проект</Heading>
            <SubHeading>сияние</SubHeading>
            <Date>23.08.2023</Date>
        </ImageContainer >
    )
}

export default Hero