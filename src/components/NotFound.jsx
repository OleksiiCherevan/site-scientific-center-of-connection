import styled from "styled-components"

const StyledNotFound = styled.h2`
    color: #fff;
`

function NotFound() {
  return (
    <StyledNotFound>
        Error 404, page wasn`t found :(
    </StyledNotFound>
  )
}
export default NotFound