import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCta from '../components/ContactCta'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { heroSlides, images, projects, sectors, services, values } from '../data/siteData'

const sliderItems = [
  { ...heroSlides[0], slideIndex: 0, clone: true, trackKey: 'clone-first' },
  ...[...heroSlides].reverse().map((slide, reverseIndex) => ({
    ...slide,
    slideIndex: heroSlides.length - 1 - reverseIndex,
    clone: false,
    trackKey: `real-${slide.id}`,
  })),
  {
    ...heroSlides[heroSlides.length - 1],
    slideIndex: heroSlides.length - 1,
    clone: true,
    trackKey: 'clone-last',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [trackIndex, setTrackIndex] = useState(heroSlides.length)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const showPrevious = () => {
    setTransitionEnabled(true)
    setTrackIndex((current) => current + 1)
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const showNext = () => {
    setTransitionEnabled(true)
    setTrackIndex((current) => current - 1)
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const goToSlide = (index) => {
    setTransitionEnabled(true)
    setActiveSlide(index)
    setTrackIndex(heroSlides.length - index)
  }

  const handleTrackTransitionEnd = () => {
    if (trackIndex === 0) {
      setTransitionEnabled(false)
      setTrackIndex(heroSlides.length)
    } else if (trackIndex === heroSlides.length + 1) {
      setTransitionEnabled(false)
      setTrackIndex(1)
    }
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const timer = window.setInterval(() => {
      setTransitionEnabled(true)
      setTrackIndex((current) => current - 1)
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <section className="hero hero-slider" aria-roledescription="carrusel" aria-label="Soluciones eléctricas de Society Electric">
        <div
          className="hero-slider__track"
          onTransitionEnd={handleTrackTransitionEnd}
          style={{
            transform: `translateX(-${trackIndex * 100}%)`,
            transition: transitionEnabled ? undefined : 'none',
          }}
        >
          {sliderItems.map((slide) => {
            const isInteractive = !slide.clone && slide.slideIndex === activeSlide

            return (
              <article
                className="hero-slide"
                key={slide.trackKey}
                aria-hidden={!isInteractive}
                inert={!isInteractive ? true : undefined}
              >
                <img
                  className="hero__media hero__media--image"
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  onError={(event) => {
                    if (event.currentTarget.dataset.fallbackApplied) return
                    event.currentTarget.dataset.fallbackApplied = 'true'
                    event.currentTarget.src = slide.fallback
                  }}
                />
                <div className="hero__overlay" />
                <div className="hero__grid-overlay" />

                <div className="container hero__content">
                  <div className="hero__copy">
                    <span className="eyebrow eyebrow--light">{slide.eyebrow}</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                    <div className="hero__actions">
                      <Link className="btn btn--accent" to="/contacto">Solicitar cotización <ArrowRight size={18} /></Link>
                      <Link className="btn btn--ghost" to="/servicios">Ver servicios <ChevronRight size={18} /></Link>
                    </div>
                    <div className="hero__trust">
                      <span><ShieldCheck size={18} /> Atención técnica especializada</span>
                      <span><CheckCircle2 size={18} /> Soluciones para industria y comercio</span>
                    </div>
                  </div>

                  <aside className="hero__card">
                    <span>Society Electric</span>
                    <strong>{slide.cardTitle}</strong>
                    <p>{slide.cardText}</p>
                    <div className="hero__card-line" />
                    <small>Lima · Perú</small>
                  </aside>
                </div>
              </article>
            )
          })}
        </div>

        <div className="hero-slider__controls" aria-label="Controles del carrusel">
          <button type="button" onClick={showPrevious} aria-label="Banner anterior">
            <ChevronLeft size={22} />
          </button>
          <div className="hero-slider__dots">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                className={index === activeSlide ? 'is-active' : ''}
                onClick={() => goToSlide(index)}
                aria-label={`Mostrar banner ${index + 1}: ${slide.id}`}
                aria-current={index === activeSlide ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Banner siguiente">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="hero-slider__direction" aria-hidden="true">
          <span>Deslizamiento automático</span>
          <ArrowRight size={14} />
        </div>
      </section>

      <section className="section intro-strip">
        <div className="container intro-strip__grid">
          <div className="intro-strip__number">+10</div>
          <div>
            <span className="eyebrow">Experiencia técnica</span>
            <h2>Soluciones enfocadas en seguridad, confiabilidad y continuidad operativa.</h2>
          </div>
          <p>
            Integramos diagnóstico, mantenimiento y ejecución técnica para responder a necesidades reales de equipos e instalaciones eléctricas.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Servicios principales"
            title="Capacidad técnica para cada etapa de tu operación"
            text="Una cartera orientada a equipos críticos, infraestructura eléctrica y mantenimiento industrial."
          />
          <div className="service-grid service-grid--home">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <div className="section-action">
            <Link className="btn btn--outline" to="/servicios">Explorar todos los servicios <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section feature-split">
        <div className="container feature-split__grid">
          <div className="feature-split__media">
            <img src={images.transformer} alt="Mantenimiento técnico de transformador eléctrico" loading="lazy" />
            <div className="feature-split__caption" aria-hidden="true">
              <span>Mantenimiento industrial</span>
              <strong>Diagnóstico y continuidad operativa</strong>
            </div>
            <div className="feature-split__badge">
              <strong>Diagnóstico</strong>
              <span>Antes de intervenir, entendemos la condición del equipo.</span>
            </div>
          </div>
          <div className="feature-split__content">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>Un proceso técnico claro, desde la evaluación hasta la entrega.</h2>
            <p>
              Priorizamos una comunicación directa y un flujo ordenado para que cada intervención tenga alcance, objetivo y recomendaciones comprensibles.
            </p>
            <div className="process-list">
              {['Evaluación inicial del requerimiento', 'Diagnóstico técnico y definición de alcance', 'Ejecución del servicio con control de calidad', 'Pruebas, entrega y recomendaciones'].map((item, index) => (
                <div key={item} className="process-item">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <Link className="text-link text-link--large" to="/nosotros">Conoce nuestra empresa <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Sectores"
            title="Soluciones para entornos que no pueden detenerse"
            text="Atendemos necesidades eléctricas en operaciones industriales, talleres, edificaciones e infraestructura técnica."
          />
          <div className="sector-grid">
            {sectors.map(({ title, text, icon: Icon }) => (
              <article className="sector-card" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Trabajos y aplicaciones"
            title="Experiencia aplicada en campo y taller"
            text="Una muestra de los frentes de trabajo que forman parte de nuestra operación técnica."
          />
          <div className="project-grid project-grid--home">
            {projects.slice(0, 3).map((project) => (
              <article className="project-card" key={project.title}>
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
          <div className="section-action">
            <Link className="btn btn--outline" to="/proyectos">Ver proyectos <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container value-grid">
          {values.map(({ title, text, icon: Icon }) => (
            <article className="value-card" key={title}>
              <div><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  )
}
