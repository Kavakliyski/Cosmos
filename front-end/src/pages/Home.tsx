
import CosmosLogo from "../components/HomePage/CosmosLogo"
import Hero from "../components/HomePage/Hero"

import styled from "styled-components"
import HeroSecond from "../components/HomePage/HeroSecond"


const HomeWrapper = styled.div`
    max-width: 100%;
`


function Home() {


    return (
        <HomeWrapper>
            <Hero />
            <CosmosLogo />
            <HeroSecond />
        </HomeWrapper>
    )
}

export default Home