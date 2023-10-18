import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContent from './components/organisms/PageContent';
import DogBreedPage from './components/organisms/DogBreedPage';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <section className='whole'>
        <Header />
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/breed/:lowerCaseBreedName" element={<DogBreedPage />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter = Reactプロジェクトの中で一度しか使えない
// React Routerは「BrowserRouter」の中でしか使えない
// [:breedName]はパラメータ