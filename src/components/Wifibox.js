import styled from 'styled-components';
import { Link } from 'react-router-dom';

const handleColorType = wifiPeople => {
    console.log(wifiPeople)
    if (wifiPeople < 7) {
        return "color: black; background: lime;"
    }
    else if(wifiPeople < 17){
        return "color: black; background: yellow;"
    }
    else{
        return "color: white; background: red;"
    }
  };

const WifiContainer = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-left: 1vw;
    ${({ wifiPeople }) => handleColorType(wifiPeople)};

    @media (min-width: 0px) {
        font-size: 10px;
        width: 25px; 
        height: 40px;
    }
    @media (min-width: 770px) {
        width: 45px; 
        height: 55px;
    }
`

const WifiNumber = styled.div`
    width: 100%;
    height: 40%;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WifiPeople = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`


function Wifibox(props) {

    return (
        <WifiContainer wifiNumber ={props.wifiNumber} wifiPeople={props.wifiPeople}>
            <WifiNumber>{props.wifiNumber}</WifiNumber>
            <WifiPeople>{props.wifiPeople}</WifiPeople>
        </WifiContainer>
    );
}

export default Wifibox;