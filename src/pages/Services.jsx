import ContactCta from '../components/ContactCta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { images, services } from '../data/siteData'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones eléctricas industriales"
        text="Servicios especializados para equipos, infraestructura y mantenimiento de operaciones eléctricas."
        image={images.electric}
      />
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Capacidades"
            title="Servicios para prevenir, recuperar y mejorar"
            text="Cada requerimiento se evalúa según el estado del equipo, la criticidad y el objetivo de la operación."
          />
          <div className="service-grid">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section service-promise">
        <div className="container service-promise__grid">
          <div>
            <span className="eyebrow">Enfoque de servicio</span>
            <h2>Primero diagnosticamos. Luego definimos la intervención adecuada.</h2>
          </div>
          <p>La propuesta técnica se estructura a partir de la condición del equipo y del alcance requerido, evitando intervenciones genéricas y priorizando trazabilidad del trabajo.</p>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
