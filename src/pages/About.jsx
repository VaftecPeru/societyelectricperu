import { CheckCircle2 } from 'lucide-react'
import ContactCta from '../components/ContactCta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { company, images, values } from '../data/siteData'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Society Electric Perú"
        title="Nosotros"
        text="Experiencia técnica orientada al mantenimiento, reparación y confiabilidad de sistemas eléctricos."
        image={images.safety}
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">Nuestra empresa</span>
            <h2>Una operación técnica construida alrededor de la continuidad eléctrica.</h2>
            <p>
              Society Electric desarrolla servicios para transformadores, motores, tableros, subestaciones e instalaciones eléctricas. Nuestro enfoque combina evaluación técnica, mantenimiento y ejecución ordenada para ayudar a reducir riesgos y mantener los equipos operativos.
            </p>
            <p>
              Desde {company.since}, fortalecemos nuestra experiencia mediante trabajos en campo y taller, atendiendo requerimientos preventivos, correctivos y de mejora.
            </p>
            <div className="check-grid">
              {['Diagnóstico previo al servicio', 'Comunicación técnica clara', 'Ejecución ordenada', 'Recomendaciones posteriores'].map((item) => (
                <span key={item}><CheckCircle2 size={18} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="about-grid__media">
            <img src={images.project} alt="Trabajo técnico de Society Electric" loading="lazy" />
            <div className="about-grid__stat"><strong>+10</strong><span>años de experiencia en el sector</span></div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Principios de trabajo"
            title="Criterios que guían cada intervención"
            text="No se trata solo de reparar un equipo: buscamos entender la necesidad y ejecutar con orden técnico."
            align="center"
          />
          <div className="value-grid value-grid--centered">
            {values.map(({ title, text, icon: Icon }) => (
              <article className="value-card" key={title}>
                <div><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container mission-grid">
          <div>
            <span className="eyebrow">Misión</span>
            <h2>Brindar soluciones eléctricas confiables y técnicamente sustentadas.</h2>
            <p>Contribuir a la continuidad de nuestros clientes mediante servicios de mantenimiento, reparación y mejora ejecutados con responsabilidad.</p>
          </div>
          <div>
            <span className="eyebrow">Visión</span>
            <h2>Consolidarnos como un aliado técnico para la industria peruana.</h2>
            <p>Crecer sobre una base de calidad, respuesta técnica y relaciones de largo plazo con clientes que valoran la confiabilidad operativa.</p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
