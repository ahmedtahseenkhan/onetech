import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Icon } from '../components/Icons';
import LogosSection from '../components/LogosSection';

export const metadata = {
  title: 'About OneTech | 17 Years of Mission-Critical ICT Consultancy',
  description: 'Learn about OneTech — Pakistan\'s independent ICT consultancy specialising in data centers, smart buildings, and cybersecurity since 2008.',
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
            <span>About</span>
          </div>
          <span className="eyebrow">About OneTech</span>
          <h1>Engineering <em>mission-critical</em> infrastructure since 2008.</h1>
          <p>
            OneTech is an independent ICT consultancy headquartered in Islamabad, Pakistan.
            We design and audit the data centers, smart buildings, and cybersecurity infrastructure
            that owners can&rsquo;t afford to get wrong.
          </p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section section-white">
      <div className="wrap">
        <div className="about-story">
          <div className="about-story-text">
            <h2>A single practice. One standard of work.</h2>
            <p>
              Founded in 2008, OneTech was built on a simple conviction: that the firms managing
              mission-critical infrastructure should be independently focused on engineering — not
              on selling products or earning vendor commissions.
            </p>
            <p>
              Over 17 years, we have grown into Pakistan&rsquo;s most trusted ICT consultancy for
              data centers, smart buildings, and — more recently — cybersecurity. We operate
              across Islamabad and Karachi, with project delivery extending into the GCC and
              South Asia.
            </p>
            <p>
              Every engagement is principal-led by a certified engineer from kickoff to handover.
              No handoffs to juniors after the kickoff dinner. No vendor relationships influencing
              specifications. Just rigorous engineering and honest advice.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Book a consultation <Icon name="arrow" size={16} /></Link>
              <Link href="/services" className="btn btn-outline-dark">Our services</Link>
            </div>
          </div>

          <div className="about-stats-grid">
            {[
              { val: '17', unit: ' YRS', lbl: 'Years in practice' },
              { val: '24', unit: '+',   lbl: 'Certified engineers' },
              { val: '38', unit: '',    lbl: 'Tier III/IV designs' },
              { val: '99.982', unit: '%', lbl: 'Portfolio uptime (TTM)' },
            ].map((s) => (
              <div key={s.lbl} className="about-stat-card">
                <div className="stat-val">{s.val}<em>{s.unit}</em></div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <div className="section-header center">
          <span className="eyebrow">Our Foundation</span>
          <h2 className="display-lg" style={{ color: 'var(--navy)' }}>Mission, Vision &amp; Values</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
          <div style={{ background: 'var(--navy)', color: 'var(--white)', borderRadius: 20, padding: '40px 36px' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16, display: 'block' }}>Vision</div>
            <p style={{ fontSize: '1.3rem', fontFamily: 'var(--f-display)', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.015em' }}>
              To unlock the potential of an idea for the growth of individuals and businesses.
            </p>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px 36px' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16, display: 'block' }}>Mission</div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
              To provide innovative, scalable, and high-performance technology-driven solutions
              with exceptional support — independently and without compromise.
            </p>
          </div>
        </div>

        <div className="values-grid" id="values">
          {[
            { n: '01', title: 'Creative & Professional', desc: 'We bring fresh thinking to every brief while maintaining the professional rigour that mission-critical infrastructure demands.' },
            { n: '02', title: 'Always Improving',        desc: 'Our engineers hold and actively maintain the most current industry certifications — from CDCS and CDCP to TIA-942 and Uptime Institute.' },
            { n: '03', title: 'Honest & Dependable',     desc: 'Vendor-neutral specifications. No channel commissions. No pressure. Just the honest technical advice your project deserves.' },
          ].map((v) => (
            <div key={v.n} className="value-card">
              <div className="value-num">/ {v.n}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { mark: 'CDCS', title: 'Certified Data Centre Specialist',          issuer: 'EPI / CNet' },
    { mark: 'CDCP', title: 'Certified Data Centre Professional',         issuer: 'EPI / CNet' },
    { mark: 'CDMS', title: 'Certified Data Centre Migration Specialist', issuer: 'EPI' },
    { mark: 'CTDC', title: 'Certified TIA-942 Design Consultant',        issuer: 'TIA / EPI' },
  ];
  return (
    <section className="section section-white" id="credentials">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Credentials &amp; Affiliations</span>
          <h2 className="display-lg" style={{ color: 'var(--navy)' }}>The certifications<br />that actually matter.</h2>
          <p>Our team holds the certifications regulators, auditors, and insurers actually recognise — and we keep them current.</p>
        </div>
        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.mark} className="cert-card">
              <div className="cert-stamp">{c.mark}</div>
              <h4>{c.title}</h4>
              <div className="cert-issuer">Issued by {c.issuer}</div>
            </div>
          ))}
        </div>
        <div className="affil-row">
          <span className="affil-label">/ Affiliations</span>
          {[['Uptime Institute','Authorized Design Reviewer'],['TIA','Telecom Industry Association'],['NFPA','Fire Protection Association'],['PSEB','Software Export Board'],['BICSI','Cabling & ICT Infrastructure']].map(([n,s]) => (
            <div key={n} className="affil-item">
              <span className="affil-name">{n}</span>
              <span className="affil-sub">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="cta-inner">
          <h2 className="cta-headline">Ready to work with<br /><em>Pakistan&rsquo;s most trusted</em><br />ICT consultancy?</h2>
          <div className="cta-body">
            <p>Send us the brief, the floorplan, or just a question. A principal engineer responds within one business day.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Get in touch <Icon name="arrow" size={18} /></Link>
              <Link href="/services" className="btn btn-outline btn-lg">Our services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <Story />
        <Mission />
        <Certifications />
        <LogosSection cream />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
