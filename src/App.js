import styled from "styled-components";
import GlobalStyles from "./GrobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Firstfloor from './components/Firstfloor';
import Section1 from './components/Section1';

function App() {
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
