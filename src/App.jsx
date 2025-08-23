import './App.css';

import React from 'react';

import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Interests from './components/Interests';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <Header />
        <main className="p-8">
          <Profile />
          <Education />
          <Skills />
          <Projects />
          <Awards />
          <Interests />
        </main>
      </div>
    </div>
  );
}

export default App;
