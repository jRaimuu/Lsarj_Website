import React from 'react';
// import MainPage from './components/LandingPage/MainPage'
// import OtherMainPage from './components/LandingPage/OtherMainPage'
import MainPageV2 from './components/MainPageV2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageV2 />} />
        </Routes>
      </BrowserRouter>

      {/* <MainPageV2 /> */}
    </>
  )
}

export default App