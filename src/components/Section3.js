import styled from 'styled-components';
import sectionImg from "../imgs/f1s1.jpg";
import Wifibox from './Wifibox';
// import Section1 from './Section1';



const TopContainer = styled.div`
    width:100vw;
    height:100vh;
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SectionTitle = styled.div`
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
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: red; */

    @media (min-width: 0px) {
      flex-direction: column;
    }
    @media (min-width: 770px) {
        flex-direction: row;
    }
`

const SectionImg = styled.img`
    
    /* background-image: url(${sectionImg});
    background-position: center;
    background-size: cover; */
    /* align-items: center; */

    @media (min-width: 0px) {
        width: 60vw;
        height: 29vh;
    }
    @media (min-width: 770px) {
        width: 30vw;
        height: 25vw;
    }
`

const WifiContainer = styled.div`
    
    /* background-color: green; */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    @media (min-width: 0px) {
        width: 90vw;
        height: 29vh;
    }
    @media (min-width: 770px) {
        width: 50vw;
        height: 50vh;
    }
`

// const Wifi = styled.div`
    
//     border: 2px solid black;
//     display: flex;
//     flex-direction: column;
//     margin-left: 1vw;

//     @media (min-width: 0px) {
//         font-size: 10px;
//         width: 25px; 
//         height: 40px;
//     }
//     @media (min-width: 770px) {
//         width: 45px; 
//         height: 55px;
//     }
// `

// const WifiNumber = styled.div`
//     width: 100%;
//     height: 40%;
//     border-bottom: 2px solid black;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
// const WifiPeople = styled.div`
//     width: 100%;
//     height: 60%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

const DetailImgsContainer = styled.div`
    width: 100vw;
    height: 30vh;
    /* background-color: blue; */
`

function Section3() {


    return (
        <TopContainer>

            <SectionTitle>section3</SectionTitle>

            <SecondContainer>

                <SectionImg src={sectionImg} />

                <WifiContainer>
                    
                    <Wifibox wifiNumber={1} wifiPeople={2} />

                    <Wifibox wifiNumber={2} wifiPeople={4} />

                    <Wifibox wifiNumber={3} wifiPeople={5} />

                    <Wifibox wifiNumber={4} wifiPeople={6} />

                    <Wifibox wifiNumber={5} wifiPeople={10} />

                    <Wifibox wifiNumber={6} wifiPeople={12} />

                    <Wifibox wifiNumber={7} wifiPeople={15} />

                    <Wifibox wifiNumber={8} wifiPeople={18} />

                    <Wifibox wifiNumber={9} wifiPeople={21} />
                </WifiContainer>

            </SecondContainer>
            <DetailImgsContainer>
                {/* 성수를 위한 공간 :) */} 성수야 여기를 채워
            </DetailImgsContainer>
        </TopContainer>
    );
}


export default Section3;