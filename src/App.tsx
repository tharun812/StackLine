import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/common/TopNav';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <>
      <div className="App">
        <TopNav></TopNav>
        <ProductDetail></ProductDetail>
      </div>
    </>
  );
}

export default App;
