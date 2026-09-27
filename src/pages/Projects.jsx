import ContactCta from '../components/ContactCta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images, projects } from '../data/siteData'

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Experiencia"
        title="Proyectos y trabajos"
        text="Aplicaciones reales de mantenimiento, reparación e infraestructura eléctrica."
        image={images.project}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Trabajo técnico"
            title="Experiencia aplicada a necesidades de campo y taller"
            text="La siguiente selección resume frentes de trabajo representativos de la experiencia de Society Electric."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card project-card--tall" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card__overlay" />
                <div className="project-card__content">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container project-note">
          <span className="eyebrow">Evaluación previa</span>
          <h2>Cada proyecto comienza entendiendo el activo, el riesgo y el resultado esperado.</h2>
          <p>Antes de ejecutar, definimos el alcance técnico en función del requerimiento. Esto ayuda a ordenar recursos, tiempos y criterios de entrega.</p>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
