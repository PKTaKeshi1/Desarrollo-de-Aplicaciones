import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Página Home</h1>;
}
function About() {
  return <h1>Página About</h1>;
}
function Contact() {
  return <h1>Página Contact</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;