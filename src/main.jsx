import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// const router = createBrowserRouter([
// {
//   path: "/Lsarj_Website/",
//   element: <App/>,
//   children: [
//     {
//       path: 
//     }

//   ]



// }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter basename='/Lsarj_Website'>
      <Routes>
        <Route path="/Lsarj_Website" element={<App />} />
      </Routes>
    </HashRouter> */}
    <App />
  </React.StrictMode>,
)
