import React from 'react';
import { FC, useEffect, useState, useRef, useContext  } from "react";
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"
import axios from 'axios'

/********************************
 * メインウィンドウ作成ファイル
 ********************************/
function MainWindow() {

  const inputRef = useRef<HTMLInputElement>(null);  

    /******************************
   * geojsonファイル追加ボタン押下時のイベントハンドラ
   *****************************/
  const onfileInputChange = async (event: React.ChangeEvent<HTMLInputElement>)=> {
    console.log(event.target.files);
    const selectFile = event.target.files

    /*選択されたファイルループ*/
    for (let i = 0; i < selectFile?.length!; i++ ) {

      const file     = selectFile?.[i]
      const filename = selectFile?.[i].name
      console.log(filename)

      /**********画像のアップロード***********/
      const params = new FormData();

      /*型チェック*/
      if(typeof file == 'undefined'){return}
      if(typeof filename == 'undefined'){return}
      
      params.append('file', file);
      params.append("filename", filename)

      await axios.post(`http://localhost:8000/recog`, params,
            {
                headers: {
                'content-type': 'multipart/form-data',
            },
      })
      .then((response) =>{
        console.log("識別結果取得");
      })
      .catch((error)=>{
        console.log("接続失敗");
      })

    }
  }
  

  /******************************
   *ファイルアップロード押下時イベントハンドラ(これを経由して上のonfileInputChangeが呼ばれる)
   *****************************/
  const fileUpload = () => {
    inputRef.current?.click();
  }

  /********************************
  * メインウィンドウ本体
  ********************************/
  return (
    <p>
      
        <input hidden ref={inputRef} type="file" multiple accept=".png, .jpg" onChange={onfileInputChange} />
        <SButton onClick={fileUpload}>画像をアップロードして識別</SButton>
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
    text-align: center;
    background-color: #fffeec;
    border: none;
    box-shadow: #ddd 3px 3px 3px 3px;
    border-radius: 8px;
    &:hover {
      cusor: pointer;
      opacity: 0.5;
    }
`