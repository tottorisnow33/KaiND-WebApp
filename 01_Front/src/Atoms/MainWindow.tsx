import React from 'react';
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"

/********************************
 * メインウィンドウ作成ファイル
 ********************************/
function MainWindow() {
  
  /********************************
  * メインウィンドウ本体
  ********************************/
  return (
    <p>
      <SButton>Step1 画像をアップロード</SButton>
      <SButton>Step2 識別開始</SButton>
      
    </p>
  );
}

export default MainWindow;


/********************************
 * CSS
 ********************************/
/*全体*/
 const SButton = styled.button`
    width: 60%;
    margin-top: 40px;
    margin-left: 20%;
    height: 100px;
    font-size: 40px;
    text-align: left;
    background-color: #fffeec;
    border: none;
    box-shadow: #ddd 3px 3px 3px 3px;
    border-radius: 8px;
    &:hover {
      cusor: pointer;
      opacity: 0.5;
    }
`