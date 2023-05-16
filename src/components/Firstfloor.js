import styled from 'styled-components';
import { Link } from 'react-router-dom';
import floor1 from '../imgs/1f.jpg'
import { motion } from 'framer-motion';
import homeImg from"../imgs/house-solid.svg";
import { useEffect } from 'react';
import { call_api } from '../apiCall/wifi_call';


const TopContainer = styled.div`

`

const HomeBox = styled.div`


`
const HomeLink = styled(Link)`

`

const HomeImg = styled(motion.svg)`
    
`



const MainImg = styled.div`
    
`
const Sections = styled.div`

`
const Section = styled(Link)`

`

function Firstfloor() {

    // console.log("function first");
    // useEffect(() => {
    //     console.log("useEffect first")
    //     call_api();
    //     setInterval(() => {
    //         console.log("setInterval");
    //         call_api();
    //     }, 45000);
    //     // setInterval(() => {
    //     //     call_api();
    //     // }, 50000);
        
    // }, []);

    return(
        <TopContainer>
            <HomeBox>
                <HomeLink>
                    
                </HomeLink>
            </HomeBox>
        </TopContainer>
    );
}

export default Firstfloor;