
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
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    z-index: 1;

    position: absolute;
    top: 52vh;
    padding-left: 10vw;
    @media (max-width: 768px) {top:10.7vh;}


    display: flex;
    flex-direction: column;


    .flex-item-1 {
        display: flex;

        .flex-item-1-sub-1 {
            display: flex;
            align-self: flex-end
        }

        .flex-item-1-sub-2 {
            padding-top: 4vw
        }
    }

    .flex-item-2 {
        position: absolute;
        top: 7vh;

        @media (max-width: 768px) {
            top: 2vh;
        }
    }
`

const Heading = styled.h1`
    color: #E4E4E4;
    font-size: 7vw;
    text-align: left;
    margin: 0px !important;
`

const SubHeading = styled.h1`
    color: #E4E4E4;
    font-size: 11vw;
    text-align: left;
    margin: 0px !important;
`

const Date = styled.h1`
    color: #DD3758;
    font-size: 3vw;
    text-align: left;
    font-weight: 100;
    margin: 0px !important;
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


export const Hero = () => {
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
                <div className="flex-item-1">
                    <div className="flex-item-1-sub-1">
                        <Heading>проект</Heading>
                    </div>
                    <div className="flex-item-1-sub-2">
                        <Date>23.08.2023</Date>
                    </div>
                </div>
                <div className="flex-item-2">
                    <SubHeading>сияние</SubHeading>
                </div>
            </TextWrapper>
            <Link to="/about">
                <LearnMoreButton>
                    научи повече
                </LearnMoreButton>
            </Link>
        </ImageContainer >
    )
}