import styled from "styled-components";
import GlobalStyles from "./GrobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Firstfloor from './components/Firstfloor';

import { useEffect, useState } from 'react';
import { call_api } from '../src/apiCall/wifi_call';

import Section1 from './components/Section1';


function App() {
  const [oneFloor, setOneFloor] = useState([]);

  console.log("function first");
  console.log(oneFloor);
  useEffect(() => {
    console.log("useEffect first");
    call_api()
    .then(data => {
      let oneF = data.RESULT.filter((item) => {
        return item.location.startsWith("중앙도서관-1F");
      });
      console.log(oneF);
      setOneFloor(oneF);
    })

    const intervalId = setInterval(() => {  
       call_api().then(data => console.log(data));
    }, 45000);

    // Return a cleanup function to clear the interval on unmount
    return () => {
        clearInterval(intervalId);
    };
    
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/1F" element={<Firstfloor/>}/>
          <Route path="/1F/section1" element={<Section1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
