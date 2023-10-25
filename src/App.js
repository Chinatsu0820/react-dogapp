import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContent from './components/organisms/PageContent';
import DogBreedPage from './components/organisms/DogBreedPage';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import "./App.css"
import CursorContext from './components/CursorContext'; // CursorContextをインポート

function App() {
  const [isHovered, setHovered] = useState(false); // boolean state to be used as the value for the context

  return (
    <CursorContext.Provider value={isHovered}>
      <BrowserRouter>
        <section className='whole'>
          <Header />
          <Routes>
            <Route path="/" element={<PageContent setHovered={setHovered}/>} />
            <Route path="/breed/:lowerCaseBreedName" element={<DogBreedPage />} />
          </Routes>
          <Footer />
        </section>
      </BrowserRouter>
    </CursorContext.Provider>
  );
}

export default App;

// BrowserRouter = Reactプロジェクトの中で一度しか使えない
// React Routerは「BrowserRouter」の中でしか使えない
// [:breedName]はパラメータ
