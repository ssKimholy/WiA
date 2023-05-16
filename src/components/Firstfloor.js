import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mainImg from "../imgs/f1section.jpg";


const TopContainer = styled.div`
 width: 100vw;
 height: 100vh;
`




const MainTitle = styled.div`
    text-align: center;
    width:100%;
    height: 10vh;
    padding-top: 1vh; //임시로 해봄 너무 천장에 붙어있어서

    @media (min-width: 0px) {
      font-size: 30px;
      font-weight: 700;
      
    }
    @media (min-width: 770px) {
      font-size: 40px;
    }
`

const SecondContainer = styled.div`
 width: 100vw;
 height: 90vh;
 display: flex;
 justify-content: space-around;
 align-items: center;

    @media (min-width: 0px) {
      flex-direction: column;
      
    }
    @media (min-width: 770px) {
      flex-direction: row;
    }
`

const MainImg = styled.img`
    /* background-image: url(${mainImg});
    background-position: center;
    background-size: cover; */

    @media (min-width: 0px) {
        width:70vw;
        height:70vw;
      
    }
    @media (min-width: 770px) {
        width:40vw;
        height:40vw;
    }
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height:30vw;
`

const Section = styled(Link)`
    font-weight: 500;
    margin: 0.5vw;

    @media (min-width: 0px) {
      font-size: 20px;
      font-weight: 500;
      
    }
    @media (min-width: 770px) {
      font-size: 45px;
    }
`

function Firstfloor() {

    return(
        <TopContainer>
            <MainTitle>1층</MainTitle>
            <SecondContainer>
                <MainImg src={mainImg} />
                <SectionContainer>
                    <Section to={"section1"}>section1</Section>
                    <Section to={"section2"}>section2</Section>
                </SectionContainer>
            </SecondContainer>
        </TopContainer>
    );
}

export default Firstfloor;