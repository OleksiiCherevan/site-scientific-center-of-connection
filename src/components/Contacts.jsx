import React from 'react';
import styled from "styled-components";
import Iframe from "react-iframe";

const StyledContacts = styled.div`
  padding-top: 30px;
  color: white;
  text-align: center;
  
  & :nth-child(1) {
    margin-bottom: 20px;
  }
`
function Contacts(props) {
  return (
    <StyledContacts>
      <h2>Наші контакти:
        <br/><br/>
        <p>Головний редактор: Семенюк Богдан</p>
        <p>Головний розробник: Семенюк Богдан</p>
        <p>Головний головний: Семенюк Богдан</p>
        <p>Головний замовник: Семенюк Богдан</p>
      </h2>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.479005757095!2d30.513394850438104!3d50.45080429512109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5baa2d8469%3A0x8cd2d441f969dee9!2z0KHQu9GD0LbQsdCwINCx0LXQt9C_0LXQutC4INCj0LrRgNCw0ZfQvdC4!5e0!3m2!1suk!2sua!4v1669552210458!5m2!1suk!2sua"
        width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></Iframe>
    </StyledContacts>
  );
}

export default Contacts;