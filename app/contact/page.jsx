import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Icon } from '../components/Icons';

export const metadata = {
  title: 'Contact OneTech | Islamabad & Karachi Offices',
  description: 'Get in touch with OneTech — send us your brief or call our Islamabad or Karachi office. A principal engineer responds within one business day.',
};

function PageHero() {
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact</span>
          </div>
          <span className="eyebrow">Get in Touch</span>
          <h1>Talk to a<br /><em>principal engineer.</em></h1>
          <p>
            Send us the brief, the floorplan, or just a question. There is no sales funnel, no SDR,
            no runaround. A certified engineer responds within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const offices = [
    {
      city: 'Islamabad',
      badge: 'HQ',
      address: 'LG-11 The Onyx Plaza, Plot 28–29 F.E.C.H.S, E-11/2, Islamabad, Pakistan',
      phone: { display: '+92 51 271 2563', tel: '+925127125163' },
      email: 'info@onetech.live',
    },
    {
      city: 'Karachi',
      badge: 'Regional Office',
      address: 'Office #306, 3rd Floor, Silver Trade Tower, SB-46, Block-13A, Gulshan-e-Iqbal, Karachi, Pakistan',
      phone: { display: '+92 21 3483 6014', tel: '+922134836014' },
      email: 'info@onetech.live',
    },
  ];

  return (
    <section className="section section-white">
      <div className="wrap">
        <div className="contact-layout">
          {/* Left: Office info */}
          <div className="contact-info">
            {offices.map((o) => (
              <div key={o.city} className="contact-info-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3>{o.city}</h3>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--amber)', color: 'var(--navy)', padding: '3px 10px', borderRadius: 999, fontWeight: 700 }}>{o.badge}</span>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><Icon name="pin" size={14} /></div>
                  <p style={{ lineHeight: 1.6 }}>{o.address}</p>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><Icon name="phone" size={14} /></div>
                  <a href={`tel:${o.phone.tel}`}>{o.phone.display}</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><Icon name="mail" size={14} /></div>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </div>
              </div>
            ))}

            {/* Quick contact links */}
            <div className="contact-info-card" style={{ background: 'var(--navy)', color: 'var(--white)', border: 'none' }}>
              <h3 style={{ color: 'var(--white)' }}>Connect with us</h3>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                {['Facebook','LinkedIn','Twitter','YouTube','Instagram'].map((s) => (
                  <a key={s} href="#" rel="noopener noreferrer" style={{ fontFamily: 'var(--f-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)', transition: 'all 0.15s' }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div id="book">
            <div className="contact-form" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ marginBottom: 8 }}>
                <h2 style={{ fontFamily: 'var(--f-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.015em', marginBottom: 8 }}>
                  Send us a message
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  We respond within one business day — usually much faster.
                </p>
              </div>

              <form action="mailto:info@onetech.live" method="GET" encType="text/plain" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Ahmed" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name *</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Khan" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work email *</label>
                  <input id="email" name="email" type="email" placeholder="ahmed@company.com" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company / Organisation</label>
                    <input id="company" name="company" type="text" placeholder="Your organisation" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+92 ___" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Area of interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service area...</option>
                    <optgroup label="Critical Infrastructure">
                      <option value="data-center">Data Center Consultancy</option>
                      <option value="audits">Infrastructure Audit & Assessment</option>
                      <option value="tier-design">Certified Tier III/IV Design</option>
                      <option value="pmc">Project Management (PMC)</option>
                    </optgroup>
                    <optgroup label="Smart Buildings">
                      <option value="smart-buildings">Smart Building Systems (BMS)</option>
                      <option value="fire-safety">Fire & Life Safety Engineering</option>
                    </optgroup>
                    <optgroup label="Cybersecurity">
                      <option value="vapt">Vulnerability Assessment & VAPT</option>
                      <option value="soc">SOC as a Service</option>
                      <option value="edr">Endpoint Detection & Response</option>
                      <option value="cloud">Cloud Security Assessment</option>
                      <option value="siem">SIEM & Threat Intelligence</option>
                      <option value="grc">Compliance & GRC</option>
                    </optgroup>
                    <option value="other">Other / Multiple services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Brief *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project, requirement, or question. The more detail you can share, the better we can respond."
                    rows={5}
                    required
                  />
                </div>

                <p className="form-note">
                  By submitting this form you agree to OneTech contacting you about your enquiry.
                  We do not share your data with third parties.
                </p>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Send message <Icon name="arrow" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How quickly do you respond to enquiries?', a: 'A principal engineer reviews every new enquiry and responds within one business day. For urgent matters, call our Islamabad or Karachi office directly.' },
    { q: 'Do you work outside Pakistan?', a: 'Yes. While we are headquartered in Pakistan, we deliver projects across the GCC and South Asia. Site visits are attended in person — we don\'t do remote-only consulting.' },
    { q: 'Are you vendor-neutral?', a: 'Completely. We have no reseller relationships and take no channel commissions. Every specification we write is based solely on technical merit and client requirements.' },
    { q: 'What is the minimum project size you work on?', a: 'We work on projects of all sizes — from single infrastructure audits to full data center builds. Contact us with your brief and we\'ll tell you if and how we can help.' },
    { q: 'Can you provide a proposal without a formal brief?', a: 'Yes. A call or email with a brief description of your requirements is enough for us to prepare a high-level scope and fee indication.' },
  ];

  return (
    <section className="section section-cream">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="section-header">
          <span className="eyebrow">Frequently Asked</span>
          <h2 className="display-md" style={{ color: 'var(--navy)', marginTop: 12 }}>Common questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px 28px' }}>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10, letterSpacing: '-0.01em' }}>{f.q}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
