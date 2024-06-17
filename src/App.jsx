import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{
  Home,
  NotFound,
  Login,
  Register,
  Ss,
  Sr,
  Videos,
  Images,
  Regalos
}from "./views"

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Ss" element={<Ss />} />
      <Route path="/Sr" element={<Sr />} />
      <Route path="/Videos" element={<Videos />} />
      <Route path="/Images" element={<Images />} />
      <Route path="/Regalos" element={<Regalos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
