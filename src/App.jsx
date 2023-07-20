import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeroGrid from "./Components/HeroGrid";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact";



import "./App.css"

export default function App() {
  return (
<div className="page">
 <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<HeroGrid />} />
           <Route exact path="projects" element={<Projects />} />
           <Route exact path="contact" element={
           <Contact />} />
            <Route exact path="main" element={
           <HeroGrid />} />
         </Route>
         
       </Routes>
     </BrowserRouter>


</div>
    
  );
}

