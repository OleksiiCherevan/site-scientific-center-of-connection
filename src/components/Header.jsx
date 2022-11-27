import styled from "styled-components";
import VITI_LOGO from "./../assets/images/vitiLogo.png";
import MENU_BG from "./../assets/images/menu-bg.jpg";
import {Link} from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #282c3490;
  position: fixed;
  height: 100vh;
  width: 150px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Navigation = styled.nav`
  box-sizing: content-box;
  padding: 10px;
`;

const NavItems = styled.ul`

`;

const NavItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

const Logo = styled.img`
  width: 80px;
  aspect-ratio: 1;
`;

export default () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={VITI_LOGO} alt="MITIT"/>
      </Link>
      <Navigation>
        <NavItems>
          <NavItem className="nav-item">
            <Link to="/">Головна</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/about">Про сайт</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/gallery">Галерея</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/news">Головні новини</Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/contacts">Контакти</Link>
          </NavItem>
        </NavItems>
      </Navigation>
    </StyledHeader>
  );
};
