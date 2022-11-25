import styled from "styled-components"


const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 1170px;
    padding-left: 3%;
    padding-right: 3%;
`

const Container = ({children}) => {
  return (
    <StyledContainer >
        <Content>
            {children}
        </Content>
    </StyledContainer>
  )
}
export default Container