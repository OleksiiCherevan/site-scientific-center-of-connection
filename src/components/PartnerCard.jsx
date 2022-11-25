import styled from "styled-components"

const StyledPartnerCard = styled.div``;

const Logo = styled.div``;

const Description = styled.span``;

function PartnerCard({image, text}) {
  return (
    <StyledPartnerCard>
        <Logo style={{backgroundImage: `${image}`}} />
        <Description>{text}</Description>
    </StyledPartnerCard>
  )
}
export default PartnerCard