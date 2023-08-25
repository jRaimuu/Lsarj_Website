import React from 'react';
// import MainPage from './components/LandingPage/MainPage'
// import OtherMainPage from './components/LandingPage/OtherMainPage'
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import MainPageV2 from './components/MainPageV2';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import EndFooter from './components/EndFooter';

function App() {
  return (
    <>
      <HashRouter basename='/Lsarj_Website'>
        <Routes>
          <Route path="/Lsarj_Website" element={<MainPageV2 />} />
        </Routes>
      </HashRouter>
      {/* <MainPageV2/> */}
      <ProjectsPage />
      <AboutPage />
      <EndFooter />

      {/* <MainPageV2 /> */}
    </>
  )
}

export default App
