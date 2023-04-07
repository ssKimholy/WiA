import styled from 'styled-components';



const TopContainer = styled.div`
    width: 300px;
    height: 250px;
    /* background-color: tomato; */
    border: 1px solid black;
    margin:10px;
    
    background-image: url(${(props) => props.backImg});
    
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 2;
`

const Bg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: rgba(255,255,255, 0.2);

    }
`


function Box(props) {

    return (
        <TopContainer backImg={props.backImg}>
            <Bg>{props.text}</Bg>
        </TopContainer>
    );
}

export default Box;