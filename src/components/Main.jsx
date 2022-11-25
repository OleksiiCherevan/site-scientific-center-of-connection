import styled from "styled-components";
import Container from "./Container";
import "react-awesome-slider/dist/styles.css";

import { AiOutlineArrowDown } from "react-icons/ai";

import OFFICE2 from '../assets/images/office2.jpeg';

import OFFICE from "./../assets/images/office.jpeg";
import Button from "./Button";
import Managementing from "./Managementing";

const StyledMain = styled.main`
    color: #fff;
    text-shadow: 1px 1px 2px black;
    text-align: start;

    height: calc(100vh - 100px);
    background-image: url(${OFFICE});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Introducing = styled.div`
    margin-top: 100px;
    display: flex;
    gap: 10px;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const Info = styled.div`
    /* flex: 1.4; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 10px;
`;

const Description = styled.p`
    /* text-align: start; */
    margin-top: 10px;
    margin-bottom: 220px;
`;

const AnimateArrowDown = styled.span`
    display: inline-block;
    animation: 1s linear 1s infinite alternate down-up;

    @keyframes down-up {
        from {
            transform: translateY(-5px);
        }
        to {
            transform: translateY(5px);
        }
    }
`;

const StyledManagementing = styled.div`
    background: rgb(28, 91, 57);
    height: calc(100vh );
`
function Main() {
    return (
        <>
            <StyledMain>
                <Container>
                    <Introducing>
                        <Info>
                            <MainTitle>
                                Швидкий спосіб допомоги
                                <br /> для відділу кадрів!
                            </MainTitle>
                            <Description>
                                Дуже важливо підтримувати облік особового складу
                                та мати змогу швидко редактувати інформацію!
                            </Description>
                            <a href="#managementing">
                                <Button Button>
                                    <div>
                                        Дізнатись більше{" "}
                                        <AnimateArrowDown>
                                            <AiOutlineArrowDown />
                                        </AnimateArrowDown>
                                    </div>
                                </Button>
                            </a>
                        </Info>
                    </Introducing>
                </Container>
            </StyledMain>
            <StyledManagementing>
                <Container>
                    <Managementing></Managementing>
                </Container>
            </StyledManagementing>
        </>
    );
}
export default Main;
