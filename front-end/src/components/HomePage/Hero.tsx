
import { useEffect, useState } from 'react';
import heroIMG from '../../assets/heroimg.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const ImageContainer = styled.div`
    display: flex;
    position: relative;
    background-color: #1d0623;
`

const HeroBanner = styled.img<{ loaded: boolean }>`
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: auto;    
    z-index: 2;

    opacity: ${(props) => (props.loaded ? 1 : 0)};
    transition: opacity ease-in-out;
    transition-duration: 2s; /* Increase the duration to 4 seconds */
`

const TextWrapper = styled.div<{ loaded: boolean }>`
    opacity: ${({ loaded }) => (loaded ? 1 : 0)};
    // transform: translateX(${({ loaded }) => (loaded ? "0" : "-100%")});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`

const Heading = styled.h1`
    position: absolute;
    top: 38%;
    left: 27%;
    transform: translate(-50%,-50%);
    color: #E4E4E4;
    z-index: 1;
    font-size: 7vw;
    text-align: left;
`

const SubHeading = styled.h1`
    position: absolute;
    top: 45%;
    left: 35%;
    transform: translate(-50%,-50%);
    color: #E4E4E4;
    z-index: 1;
    font-size: 11vw;
    text-align: left;
`

const Date = styled.h1`
    position: absolute;
    top: 44.5%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #DD3758;
    z-index: 1;
    font-size: 3vw;
    text-align: left;
    font-weight: 100;
`

const LearnMoreButton = styled.button`
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #E4E4E4;
    background-color: #DD3758;
    text-transform: uppercase;
    font-size: 24px;
    padding: 10px;
    width: 15vw;
    border: none;
    box-shadow: 4px 4px  35px black;
    z-index: 2;
    cursor: pointer;

    Link{
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        width: 60vw;
    }
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
            <Link to="/about">
                <LearnMoreButton>
                    научи повече
                </LearnMoreButton>
            </Link>
        </ImageContainer >
    )
}

export default Hero