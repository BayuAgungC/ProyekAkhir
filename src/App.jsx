// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css'; // Mengimpor file CSS

function App() {
  return (
    <Router>
      <div className="App"> {/* Menambahkan kelas App di sini */}
        <Sidebar className="sidebar" /> {/* Menambahkan kelas sidebar di sini */}
        <div className="content"> {/* Menambahkan kelas content di sini */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
