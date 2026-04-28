import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { HomeSection } from './pages/Home'
import { WorkSection } from './pages/Work'
import { AboutSection } from './pages/About'
import { ContactSection } from './pages/Contact'

function App() {
  const { pathname } = useLocation()

  const pageTitle = (() => {
    if (pathname === '/work') return 'Selected Works'
    if (pathname === '/about') return 'About Studio'
    if (pathname === '/contact') return 'Contact'
    return 'AI Motion Studio'
  })()

  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="studio-id">CT/3042</p>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/work" element={<WorkSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>

      <footer className="footer-row">
        <p>// 2026 / All rights reserved</p>
        <p className="page-title">{pageTitle}</p>
      </footer>
    </div>
  )
}

export default App
