import React from "react";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Teachers from "./pages/teachers.js";
import Contact from "./pages/contact.js";
import Course from "./pages/course.js";
import Single from "./pages/single.js";
import Blog from "./pages/blog.js";
import Admin from "./pages/admin.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/single" element={<Single />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
