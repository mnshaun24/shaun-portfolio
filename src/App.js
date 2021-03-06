import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Page from "./components/Page";
import Footer from "./components/Footer"

function App() {
  const [pages] = useState([
    "Home",
    "About",
    "Projects",
    "Skills",
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  
  return (
    <div className='page__container'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
      <main>
      <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

