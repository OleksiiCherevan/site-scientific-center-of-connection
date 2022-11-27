import React from 'react';
import styled from "styled-components";

const StyledButton = styled.span`
  cursor: pointer;
  width: 200px;
  aspect-ratio: 4/1;
  border-radius: 50px;
  background-color: #282c34f0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s all;
  
  &:hover {
    transform: scale(1.2);
  }
  
`

function Button(props) {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  );
}

export default Button;