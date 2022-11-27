import React from 'react';
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

import modem1 from "../assets/images/modem1.jpg";
import modem2 from "../assets/images/modem2.jpg";
import modem3 from "../assets/images/modem3.webp";

const StyledGallery = styled.div`
  padding: 0 50px;
  padding-top: 50px;
  padding-bottom: 80px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 30px;
  //background: #2c2c2c90;
  
`

const SliderWrapper = styled.div`
  height: 100%;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`
function Gallery() {
  return (
    <StyledGallery>
      <h2>Фото галерея</h2>
      <SliderWrapper>
      <AwesomeSlider>
        <div data-src={modem1}/>
        <div data-src={modem2}/>
        <div data-src={modem3}/>
      </AwesomeSlider>
      </SliderWrapper>

    </StyledGallery>
  );
}

export default Gallery;