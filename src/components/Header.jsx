import styled from "styled-components";
import VITI_LOGO from "./../assets/images/vitiLogo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 10%;

    background: rgb(28, 91, 57);
`;

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f0f0f0;
    font-size: 1rem;
`;

const NavItems = styled.ul`
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavItem = styled.li`
    position: relative;
    list-style: none;
    white-space: nowrap;
    padding-bottom: 10px;
    padding-top: 5px;

    &:hover {
        padding-bottom: 15px;
        color: #c0c0c0;
    }

    & a {
        padding: 10px;
        padding-bottom: 0;
    }
`;

const Logo = styled.img`
    height: 80px;
    aspect-ratio: 1, 1;
`;

export default () => {
    return (
        <StyledHeader>
            <Link to="/">
                <Logo src={VITI_LOGO} alt="MITIT" />
            </Link>
            <Navigation>
                <NavItems>
                    <NavItem className="nav-item">
                        <Link to="/">Головна</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <a href="#managementing">Переглянути записи</a>
                    </NavItem>
                    <NavItem className="nav-item">
                        <a href="#managementing">Додати записи</a>
                    </NavItem>
                </NavItems>
            </Navigation>
        </StyledHeader>
    );
};
