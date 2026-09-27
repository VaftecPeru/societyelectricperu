import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card__icon"><Icon size={26} /></div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/servicios/${service.slug}`} className="text-link">
        Ver servicio <ArrowRight size={16} />
      </Link>
    </article>
  )
}
