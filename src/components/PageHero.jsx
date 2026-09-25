import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero" style={{ '--page-hero-image': `url(${image})` }}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <ChevronRight size={15} />
          <span>{title}</span>
        </div>
      </div>
    </section>
  )
}
