import styled from 'styled-components';
import { Link } from 'react-router-dom';
import floor1 from '../imgs/1f.jpg'
import { motion } from 'framer-motion';
import homeImg from"../imgs/house-solid.svg";
import mainImg from "../imgs/f1section.jpg";


const TopContainer = styled.div`
 width: 100vw;
 height: 100vh;
`




const MainTitle = styled.div`
    font-size: 70px;
    text-align: center;
    font-weight: 600;
    width:100%;
    height: 10vh;
    padding-top: 1vh; //임시로 해봄 너무 천장에 붙어있어서
`

const SecondContainer = styled.div`
 width: 100vw;
 height: 90vh;
 display: flex;
 justify-content: space-around;
 align-items: center;
`

const MainImg = styled.div`
    width:40vw;
    height:50vh;
    background-image: url(${mainImg});
    background-position: center;
    background-size: cover;
`

const SectionContainer = styled.div`

`

const Section = styled(Link)`
    font-size: 50px;
    font-weight: 500;
    display: block;
`

function Firstfloor() {

    return(
        <TopContainer>
            <MainTitle>1층</MainTitle>
            <SecondContainer>
                <MainImg></MainImg>
                <SectionContainer>
                    <Section to={"section1"}>section1</Section>
                    <Section to={"section2"}>section2</Section>
                </SectionContainer>
            </SecondContainer>
        </TopContainer>
    );
}

export default Firstfloor;