import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
<<<<<<< Updated upstream
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
=======
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
>>>>>>> Stashed changes
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
<<<<<<< Updated upstream
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
=======
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </>
  )
}

export default App
