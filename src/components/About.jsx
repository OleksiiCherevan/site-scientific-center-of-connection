import * as React from 'react';
import styled from "styled-components";
import NETWORK from "../assets/images/network.jpg"
import NETWORK2 from "../assets/images/network2.jpg"
import COMMUTATOR from "../assets/images/comutator-bg.jpg"

const StyledAbout = styled.div`
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  color: #fff;
  background-color: #282c3499;
  background-blend-mode: multiply;
  background-image: url(${COMMUTATOR});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`

const Description = styled.span`
  flex: 1;
  
  & > p {
    font-size: 1rem;
  }
  
  & > h2 {
    font-size: 1.2rem;
  }
`
const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  
  & img {
    display: block;
  }
`
const Image = styled.img`

  width: 65%;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 30px;
  box-shadow: 2px 2px 5px #2c2c2c;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const About = () => {
  return (
    <StyledAbout>
      <ImageWrapper>
        {/*<Image src={NETWORK} alt={"network"}></Image>*/}
        <Image src={NETWORK2} alt={"network2"}></Image>
      </ImageWrapper>

      <Description>
        <h2>Зв'язок у всі часи був дуже важливий і наш час не виняток!<br /><br />
          Сьогодні ми використовуєм зв'язок для комунікації, обміну інформації та передачі повідомлень тощо...<br/><br />
          Передача інформації дуже важлива але також потрібно розуміти як використовувати відомості про зв'язок в системі!<br/><br/>
          І тому дуже важливо мати змогу контролювати потоки інформації в середовищі інституту!</h2><br />
        <p>Цей додаток працює як менеджер обміну даними між підрозділами. При скоєнні дзвінка відбувається збереження даних про та дані вносяться
        до внутрішньої бази даних і зюерігаються протягом визначеного часу. Для підримки роботи додатку використовується
        перевірка користувача за допомогою системи авторизації та новітньої системи аутентифікації.
        Після підтвердження особи особа отримує можливість працювати з функціоналом додатку.</p>
        <p>На малюнку зображено приклад комунікації різних інформаційних систем один з одним.</p>
      </Description>
    </StyledAbout>
  );
};

export default About;