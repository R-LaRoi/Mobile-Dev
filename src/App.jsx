// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact";
import "./App.css"

export default function App() {
  return (
<div className="page"

><Layout/>


<Hero/>

<Projects />
<Contact />



</div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Hero />} />
    //       <Route exact path="projects" element={<Projects />} />
    //       <Route exact path="contact" element={<Contact />} />
    
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

