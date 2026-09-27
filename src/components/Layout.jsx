import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company, images, navItems } from '../data/siteData'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const titles = {
      '/': 'Society Electric Perú | Soluciones eléctricas industriales',
      '/nosotros': 'Nosotros | Society Electric Perú',
      '/servicios': 'Servicios eléctricos industriales | Society Electric Perú',
      '/proyectos': 'Proyectos | Society Electric Perú',
      '/sectores': 'Sectores | Society Electric Perú',
      '/contacto': 'Contacto y cotización | Society Electric Perú',
    }
    document.title = titles[pathname] || (pathname.startsWith('/servicios/') ? 'Servicio especializado | Society Electric Perú' : 'Society Electric Perú')
  }, [pathname])

  return (
    <div className="site-shell">
      <ScrollToTop />

      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__links">
            <a href={`tel:+${company.phoneRaw}`}><Phone size={14} /> {company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}><Mail size={14} /> {company.email}</a>
          </div>
          <span><MapPin size={14} /> Carabayllo, Lima</span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="Society Electric - Inicio">
            <img src={images.logo} alt="Society Electric" />
            <div>
              <strong>SOCIETY ELECTRIC</strong>
              <small>SOLUCIONES ELÉCTRICAS INDUSTRIALES</small>
            </div>
          </Link>

          <nav className="nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contacto" className="btn btn--nav">
            Cotizar <ArrowUpRight size={16} />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
          <div className="container">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacto" className="btn">Solicitar cotización</Link>
          </div>
        </div>
      </header>

      <main><Outlet /></main>

      <a
        className="whatsapp"
        href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent('Hola Society Electric, deseo solicitar información sobre sus servicios.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WA
      </a>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="brand brand--footer">
              <img src={images.logo} alt="" />
              <div><strong>SOCIETY ELECTRIC</strong><small>PERÚ</small></div>
            </Link>
            <p>Soluciones para transformadores, bobinado, subestaciones, tableros y mantenimiento eléctrico industrial.</p>
          </div>

          <div>
            <h3>Navegación</h3>
            {navItems.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </div>

          <div>
            <h3>Servicios</h3>
            <Link to="/servicios/transformadores">Transformadores</Link>
            <Link to="/servicios/bobinado">Bobinado</Link>
            <Link to="/servicios/subestaciones">Subestaciones</Link>
            <Link to="/servicios/tableros-electricos">Tableros eléctricos</Link>
          </div>

          <div>
            <h3>Contacto</h3>
            <a href={`tel:+${company.phoneRaw}`}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.address}</span>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Society Electric. Todos los derechos reservados.</span>
          <span>Web corporativa · ReactJS</span>
        </div>
      </footer>
    </div>
  )
}
