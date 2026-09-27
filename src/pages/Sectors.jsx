import ContactCta from '../components/ContactCta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images, sectors } from '../data/siteData'

export default function Sectors() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Entornos que requieren continuidad"
        text="Atendemos necesidades eléctricas en operaciones industriales, comerciales y de infraestructura."
        image={images.panels}
      />
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Aplicaciones"
            title="Capacidades adaptables a distintos tipos de operación"
            text="El alcance final se define según la infraestructura, criticidad del equipo y necesidad del cliente."
          />
          <div className="sector-grid sector-grid--large">
            {sectors.map(({ title, text, icon: Icon }) => (
              <article className="sector-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section sector-focus">
        <div className="container sector-focus__grid">
          <img src={images.safety} alt="Técnico trabajando en tablero eléctrico" loading="lazy" />
          <div>
            <span className="eyebrow">Mantenimiento planificado</span>
            <h2>La prevención reduce imprevistos y mejora la disponibilidad de los equipos.</h2>
            <p>Podemos integrar mantenimientos programados a partir de la condición y criticidad de los activos eléctricos, priorizando los puntos que impactan directamente la operación.</p>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
