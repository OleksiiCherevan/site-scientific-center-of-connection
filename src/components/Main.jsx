import styled from "styled-components";
import OFFICE from "./../assets/images/office.jpeg";
import USER from "./../assets/images/user.png"
import FullPage from "./FullPage";
import Button from "./Button";

import {GiClassicalKnowledge} from "react-icons/gi"
import {Link} from "react-router-dom";

const StyledMain = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  color: #fff;
  padding: 0 90px;
`;

const Introducing = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  //justify-content: center;
  height: 100%;
  

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 10px;
`;

const Description = styled.p`
  /* text-align: start; */
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UserImage = styled.div`
  flex: 1;

  //background-color: #282c3450;
  //width: 300px;
  //aspect-ratio: 1;

  background-image: url(${USER});
  background-blend-mode: multiply;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
function Main() {
  return (
    <StyledMain>
      <Introducing>
        <Info>
          <MainTitle>Вітаємо Вас!<br/>В науковому центрі зв’язку інституту</MainTitle>
          <Description>З допомогою цього додатки Ви маєте змогу контролювати<br/> зв'язок в інституті та підлеглих об'єктів!</Description>
          <Link to={"/about"}><Button>Як це працює? <GiClassicalKnowledge style={{marginLeft: 10}}/></Button></Link>
        </Info>
      </Introducing>
      <UserImage />
    </StyledMain>
  );
}

export default Main;
