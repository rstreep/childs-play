/* importing all pages */

import AnimalGame from "./pages/AnimalGame";
import ColorGame from "./pages/ColorGame";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SpellingGame from "./pages/SpellingGame";
import Navbar from './pages/Navbar';
import './App.css'

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


    <HashRouter>
      <div>

      <Navbar />
        <Routes>

          <Route path="/animalgame" element={<AnimalGame />} />
          <Route path="/colorgame" element={<ColorGame />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spellinggame" element={<SpellingGame />} />


        </Routes> 

      </div>

    </HashRouter>
  );
}

export default App;
