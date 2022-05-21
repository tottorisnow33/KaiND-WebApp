import React from 'react';
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"

/********************************
 * ヘッダー作成ファイル
 ********************************/
function Header() {
  


  /********************************
  * ヘッダー本体
  ********************************/
  return (
    <SHeader>
      <STitle>
        KaiND
      </STitle>
    </SHeader>
    
  );
}

export default Header;


/********************************
 * CSS
 ********************************/
/*全体*/
 const SHeader = styled.header`
    font-size: 60px;
    max-width: 100%;
    display: flex;
    height: 120px;
    background-color: #86cecb;
    box-shadow: #000 0px 0px 4px 4px;
    `;

/*タイトル*/
const STitle = styled.h2`
    margin: 0px 0px 0px 40px
`;

