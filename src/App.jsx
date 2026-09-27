import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import SectorPage from './pages/Sectors'
import ServiceDetail from './pages/ServiceDetail'
import Services from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="sectores" element={<SectorPage />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
