import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContent from './components/organisms/PageContent';
import DogBreedPage from './components/organisms/DogBreedPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/breed/:lowerCaseBreedName" element={<DogBreedPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter = Reactプロジェクトの中で一度しか使えない
// React Routerは「BrowserRouter」の中でしか使えない
// [:breedName]はパラメータ