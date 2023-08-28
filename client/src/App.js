/* importing all pages */

import AnimalGame from "./pages/AnimalGame";
import ColorGame from "./pages/ColorGame";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SpellingGame from "./pages/SpellingGame";

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


    <HashRouter>
      <div>


        <Routes>

          <Route path="/" element={<AnimalGame />} />
          <Route path="/about" element={<ColorGame />} />
          <Route path="/projects" element={<Homepage />} />
          <Route path="/contact" element={<Login />} />
          <Route path="/contact" element={<SpellingGame />} />


        </Routes> 

      </div>

    </HashRouter>
  );
}

export default App;
