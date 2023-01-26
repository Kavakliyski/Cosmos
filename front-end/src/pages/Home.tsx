
import Hero from "../components/HomePage/Hero"

import styled from "styled-components"


const HomeWrapper = styled.div`
    max-width: 100%;
`


function Home() {


    return (
        <HomeWrapper>
            <Hero />
        </HomeWrapper>
    )
}

export default Home