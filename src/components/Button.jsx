import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  /* border-radius: 40px; */
  text-shadow: none;
  width: 250px;
  aspect-ratio: 23 / 5;
  color: #767676;
  text-transform: uppercase;
  font-weight: 700;
  /* transition-duration: .1s; */

  &:hover {
    background-color: #5f5f5f;
    color: #1c1c1c;
  }
`;

function Button({children, style,}) {
  return (
    <StyledButton style={style}>{children}</StyledButton>
  )
}
export default Button