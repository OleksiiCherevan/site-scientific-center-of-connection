import styled from "styled-components"

const StyledFormAddUser = styled.form`
    
`



function FormAddUser() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <StyledFormAddUser onSubmit={handleSubmit}>

        </StyledFormAddUser>
    )
}
export default FormAddUser