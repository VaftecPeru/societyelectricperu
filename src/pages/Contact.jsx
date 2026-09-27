import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import { company, images, services } from '../data/siteData'

const initialForm = { name: '', company: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleSubmit = (event) => {
    event.preventDefault()
    const service = services.find((item) => item.slug === form.service)?.title || 'Servicio por definir'
    const message = [
      'Hola Society Electric, deseo solicitar una cotización.',
      `Nombre: ${form.name}`,
      form.company ? `Empresa: ${form.company}` : '',
      `Teléfono: ${form.phone}`,
      `Servicio: ${service}`,
      `Detalle: ${form.message}`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu requerimiento"
        text="Envíanos los datos principales y coordinamos una evaluación técnica."
        image={images.electric}
      />
      <section className="section section--soft">
        <div className="container contact-grid">
          <div className="contact-panel">
            <span className="eyebrow">Atención comercial</span>
            <h2>Información clara para responder mejor.</h2>
            <p>Indica el equipo, servicio o instalación que necesitas atender. Si cuentas con fotos o datos técnicos, podrás compartirlos luego por WhatsApp.</p>
            <div className="contact-list">
              <a href={`tel:+${company.phoneRaw}`}><span><Phone size={20} /></span><div><small>Teléfono / WhatsApp</small><strong>{company.phoneDisplay}</strong></div></a>
              <a href={`mailto:${company.email}`}><span><Mail size={20} /></span><div><small>Correo</small><strong>{company.email}</strong></div></a>
              <div><span><MapPin size={20} /></span><div><small>Dirección</small><strong>{company.address}</strong></div></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Nombre y apellido<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Tu nombre" /></label>
              <label>Empresa<input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} placeholder="Razón social (opcional)" /></label>
            </div>
            <div className="form-row">
              <label>Teléfono<input required inputMode="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="+51 ..." /></label>
              <label>Servicio
                <select required value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
                  <option value="">Seleccionar</option>
                  {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                </select>
              </label>
            </div>
            <label>Describe el requerimiento
              <textarea required rows="6" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Equipo, potencia, falla, ubicación u otra información relevante..." />
            </label>
            <button className="btn btn--accent btn--full" type="submit">Enviar por WhatsApp <Send size={18} /></button>
            <p className="form-note"><MessageCircle size={15} /> El formulario prepara tu mensaje y abre WhatsApp. No almacenamos tus datos en esta web.</p>
          </form>
        </div>
      </section>
    </>
  )
}
