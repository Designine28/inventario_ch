import React from 'react';
import 'antd/dist/antd.css';
import LeftNavbar from './components/LeftNavbar';
import Header from './components/Header';
import Content from './components/Content';

export default function Dashboard(){
  return(
    <div>
      <LeftNavbar />
      <Header />
      
    </div>
  );
}