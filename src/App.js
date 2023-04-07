import styled from 'styled-components';
import GlobalStyles from './GrobalStyles';
import mainBg from "./imgs/mainBg.png";
import Box from './Box';
import floorB2 from './imgs/b2f.jpg'
import floorB1 from './imgs/b1f.jpg'
import floor1 from './imgs/1f.jpg'
import floor2 from './imgs/2f.jpg'
import floor3 from './imgs/3f.jpg'
import floor4 from './imgs/4f.jpg'
import floor5 from './imgs/5f.jpg'

const TopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainBg});
  background-size: cover;
  background-position: center;
  z-index: 2;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow-y: scroll;
`

const Mainbg = styled.div` //배경화면 흰색으로 만들기 위함.
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.8);
  position: absolute;
  z-index: 0;
`

const Title = styled.div`
    margin-top: 10vh;
    z-index: 2;
    width: 100%;
    height: 50px;
    text-align: center;
    @media (min-width: 0px) {
      font-size: 40px;
      font-weight: 900;
      /* color: rgba(41,88,255,1); */
      
    }
    @media (min-width: 770px) {
      font-size: 70px;
    }
    @media (min-width: 1020px) {
    }

`

const BoxContainer = styled.div`
    z-index: 2;
    display: grid;
    margin-top: 10vh;
    @media (min-width: 0px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 770px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1020px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`


function App() {
  return (
    <>
    <GlobalStyles/>

    <TopContainer>

      <Title>WIA</Title>
      

      <BoxContainer>
        <Box text="B2F" backImg={floorB2}></Box>
        <Box text="B1F" backImg={floorB1}></Box>
        <Box text="1F" backImg={floor1}></Box>
        <Box text="2F" backImg={floor2}></Box>
        <Box text="3F" backImg={floor3}></Box>
        <Box text="4F" backImg={floor4}></Box>
        <Box text="5F" backImg={floor5}></Box>
      </BoxContainer>

      <Mainbg/>
    </TopContainer>
    </>
  );
}

export default App;
