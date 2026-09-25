import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ContactCta from '../components/ContactCta'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFound />

  const related = services.filter((item) => item.slug !== slug).slice(0, 3)
  const Icon = service.icon

  return (
    <>
      <PageHero
        eyebrow="Servicio especializado"
        title={service.title}
        text={service.short}
        image={service.image}
      />
      <section className="section">
        <div className="container service-detail">
          <div className="service-detail__main">
            <div className="service-detail__icon"><Icon size={30} /></div>
            <h2>Alcance del servicio</h2>
            <p className="lead">{service.intro}</p>
            <div className="service-detail__bullets">
              {service.bullets.map((item) => <span key={item}><CheckCircle2 size={19} /> {item}</span>)}
            </div>
            <h3>Proceso de atención</h3>
            <div className="process-steps process-steps--compact">
              {['Recepción del requerimiento', 'Evaluación técnica', 'Definición de alcance', 'Ejecución y pruebas'].map((item, index) => (
                <div className="process-step" key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="service-detail__aside">
            <div className="quote-card">
              <span className="eyebrow">Cotización</span>
              <h3>Cuéntanos qué equipo o instalación necesitas atender.</h3>
              <p>Comparte datos básicos del requerimiento y coordinamos la evaluación.</p>
              <Link className="btn btn--accent" to="/contacto">Solicitar atención <ArrowRight size={18} /></Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">También puede interesarte</span><h2>Servicios relacionados</h2></div>
          <div className="service-grid service-grid--related">
            {related.map((item) => <ServiceCard key={item.slug} service={item} />)}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
