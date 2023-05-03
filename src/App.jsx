import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./Hero";
import Goals from "./Goals";
import Projects from "./projects"
import Contact from "./Contact";

// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Hero />} />
          <Route path="goals" element={<Goals />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact" element={<Contact />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

