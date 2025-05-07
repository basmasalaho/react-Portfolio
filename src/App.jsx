import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Communicate from './Pages/Communicate';

import './i18n';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route  exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/communicate" element={<Communicate />} />
      </Routes>
    </Router>
  );
}

export default App;



