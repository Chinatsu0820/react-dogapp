import React from 'react';
import Header from './components/Header'; 
import RandomPicture from './components/RandomPicture';
import RenderBreed from './components/RenderBreed'


function App() {
  return (
    <div className='App'>
      <Header />
      <RandomPicture />
      <RenderBreed />
    </div>
  );
}

export default App;
