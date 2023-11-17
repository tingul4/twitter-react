import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponent from './components/home-component.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route index element={<HomeComponent />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
