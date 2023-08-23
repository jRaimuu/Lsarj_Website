import React from 'react';
// import MainPage from './components/LandingPage/MainPage'
// import OtherMainPage from './components/LandingPage/OtherMainPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPageV2 from './components/MainPageV2';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import EndFooter from './components/EndFooter';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageV2 />} />
        </Routes>
      </BrowserRouter> */}
      <MainPageV2/>
      <ProjectsPage />
      <AboutPage />
      <EndFooter/>

      {/* <MainPageV2 /> */}
    </>
  )
}

export default App