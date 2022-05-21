import React from 'react';
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"

function Header() {
  
  const handleClick = ()=>{
    console.log("test")
  }


  return (
    <SHeader>
      <p>
        KaiND
      </p>
    </SHeader>
    
  );
}

export default Header;

const SHeader = styled.header`
    font-size: 60px;
    max-width: 100%;
    display: flex;
    height: 150px;
    background-color: #86cecb;
    box-shadow: #000 0px 0px 4px 4px;
`;



