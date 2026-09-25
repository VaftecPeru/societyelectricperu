import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactCta() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow eyebrow--light">Atención técnica</span>
          <h2>¿Necesitas revisar un equipo o cotizar un servicio?</h2>
          <p>Cuéntanos el requerimiento y coordinamos una evaluación técnica.</p>
        </div>
        <Link className="btn btn--light" to="/contacto">
          Solicitar cotización <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
