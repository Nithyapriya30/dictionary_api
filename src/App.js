import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Meaning from "./Pages/Meaning";
function App() {
  return (
      <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Meaning' element={<Meaning />} />
     </Routes>
      </div>
    
  );
}

export default App;
