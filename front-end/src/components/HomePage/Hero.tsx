
import { useEffect, useState } from 'react';
import heroIMG from '../../assets/heroimg.png';
import styled from 'styled-components';


const ImageContainer = styled.div`
    position: relative;
    background-color: #1d0623;
    z-index: -2;

`

const HeroBanner = styled.img<{ loaded: boolean }>`
    width: 100vw;
    max-width: 100%;
    height: auto;    
    position: relative;

    opacity: ${(props) => (props.loaded ? 1 : 0)};
    transition: opacity ease-in-out;
    transition-duration: 2s; /* Increase the duration to 4 seconds */

`

const TextWrapper = styled.div<{ loaded: boolean }>`

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
    const [loaded, setLoaded] = useState(false);


    const handleImageLoad = () => {
        setLoaded(true);
    };

    useEffect(() => {
        const image = new Image();
        image.onload = handleImageLoad;
        image.src = heroIMG;
    }, []);

    return (
        <ImageContainer>
            <HeroBanner src={heroIMG} alt='' loaded={loaded} />
            <TextWrapper loaded={loaded}>
                <Heading>проект</Heading>
                <SubHeading>сияние</SubHeading>
                <Date>23.08.2023</Date>
            </TextWrapper>
        </ImageContainer >
    )
}

export default Hero