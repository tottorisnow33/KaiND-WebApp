import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../Atoms/Header';

function MainPage() {
  
  const handleClick = ()=>{
    console.log("test")
  }


  return (
    
    <div className="Main">
      <Header />
      test
      
    </div>
  );
}

export default MainPage;