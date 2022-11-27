import "./App.css";
import React, {useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Gallery from "./components/Gallery";

import styled from "styled-components";
import MAIN_BACKGROUND from "./assets/images/main-bg.jpg"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

const StyledApp = styled.div`
  display: flex;
  flex: 1;

`

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
  background-image: url(${MAIN_BACKGROUND});
  background-color: #282c3440;
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 150px;
`

const ContainerWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <>
    <StyledApp>

      <BrowserRouter>
        <Header/>
        <Background />

        <ContainerWrapper>
          <Container>
            <Routes>
              <Route path={"/"} element={<Main/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/gallery"} element={<Gallery/>}/>
              <Route path={"/news"} element={<News/>}/>
              <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>
          </Container>
          </ContainerWrapper>
      </BrowserRouter>

    </StyledApp>

  <Footer></Footer>
  </>
);
}

export default App;
