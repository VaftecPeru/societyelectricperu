import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span>404</span>
        <h1>Página no encontrada</h1>
        <p>La dirección que ingresaste no existe o fue modificada.</p>
        <Link className="btn btn--accent" to="/"><ArrowLeft size={18} /> Volver al inicio</Link>
      </div>
    </section>
  )
}
