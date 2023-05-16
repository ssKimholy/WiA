import styled from "styled-components";
import GlobalStyles from "./GrobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Firstfloor from './components/Firstfloor';
import Secondfloor from './components/Secondfloor';
import Thirdfloor from './components/Thirdfloor';
import Fourthfloor from './components/Fourthfloor';
import Fifthfloor from './components/Fifthfloor';



import { useEffect } from 'react';
import { call_api } from '../src/apiCall/wifi_call';

import Section1 from './components/Section1';



function App() {

  // console.log("function first");
  // useEffect(() => {
  //   console.log("useEffect first");
  //   call_api(); // call immediately

  //   const intervalId = setInterval(() => {
  //       call_api(); // call every 45 seconds
  //   }, 45000);

  //   // Return a cleanup function to clear the interval on unmount
  //   return () => {
  //       clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/1F" element={<Firstfloor/>}/>
          <Route path="/1F/section1" element={<Section1/>}/>
          <Route path="/2F" element={<Secondfloor/>}/>
          <Route path="/3F" element={<Thirdfloor/>}/>
          <Route path="/4F" element={<Fourthfloor/>}/>
          <Route path="/5F" element={<Fifthfloor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
