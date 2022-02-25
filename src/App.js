import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>
      </main>

    </div>
  );
}

export default App;
