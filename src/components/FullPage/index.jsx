import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

const StyledFullPage = styled.div`
  position: relative;
  width: 100%;
  height: calc(100%);
`

const StyledDots = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 17px;
  top: calc(50% - 32px);

  & .dot_active {
    transform: scale(1.8) !important;
  }
`

const Dot = styled.a`
  height: 6px;
  width: 6px;
  background-color: #61dafb;
  border-radius: 10px;
  margin-bottom: 15px;

  transition: all .3s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(1.5);
  }
`


const Dots = ({pages, currentIndex}) => {
  const [dotIndex, setDotIndex] = useState(currentIndex);

  return (
    <StyledDots>
      {
        pages.map((page, index) => <Dot key={page.id} className={index === dotIndex ? "dot_active" : ""} href={page.id} />)
      }
    </StyledDots>
  )
}


const FullPage = ({pages}) => {

  return (
    <StyledFullPage >

    </StyledFullPage>
  );
};

export default FullPage;