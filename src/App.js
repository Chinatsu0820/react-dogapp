import React from 'react';
import HelloWorld from './components/HelloWorld'; // this is just a test for me so it will be deleted
import Header from './components/Header';
import RandomPicture from './components/RandomPicture';

function App() {
  return (
    <div className='App'>
      <Header />
      <HelloWorld />
      <RandomPicture />
    </div>
  );
}

export default App;
