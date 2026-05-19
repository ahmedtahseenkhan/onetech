import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Icon } from '../components/Icons';

export const metadata = {
  title: 'Services | Data Center, Smart Building & Engineering Solutions — OneTech',
  description: 'OneTech delivers data center consultancy, Tier III/IV design, smart building systems, fire & life safety, and project management across Pakistan and the Gulf.',
};

const SERVICES = [
  {
    id: 'data-center',
    icon: 'server', color: 'amber',
    title: 'Data Center Consultancy',
    headline: 'End-to-end Tier III/IV facility design, oversight, and commissioning.',
    desc: 'From initial site selection through to Level-5 commissioning, our engineers manage every phase of data center delivery. We are independent — no vendor relationships influence the specification.',
    deliverables: [
      'Site selection & feasibility studies',
      'Conceptual, schematic & detailed design',
      'MEP (Mechanical, Electrical & Plumbing) engineering',
      'White-space planning & capacity modelling',
      'Tender documents & bid evaluation (RFP/RFQ)',
      'Site supervision & construction administration',
      'Level-5 commissioning & witnessed testing',
      'Uptime Institute & TIA-942 certification support',
    ],
    standards: ['TIA-942', 'Uptime Institute Tier I–IV', 'ASHRAE', 'NFPA 75'],
  },
  {
    id: 'audits',
    icon: 'chart', color: 'navy',
    title: 'Infrastructure Audit & Assessment',
    headline: 'Independent gap analysis, energy audits, and operational assessments.',
    desc: 'An objective view of your infrastructure — whether you need to validate resilience, satisfy a board, or prepare for a compliance audit. Our reports are defensible and action-ready.',
    deliverables: [
      'Facility & gap analysis audits',
      'ASHRAE energy audits & modelling',
      'Capacity planning & headroom studies',
      'Operational assessments & runbook review',
      'Root-cause analysis & post-incident reports',
      'Resilience & redundancy assessments',
      'Compliance audit readiness',
    ],
    standards: ['ASHRAE', 'Uptime Institute', 'TIA-942', 'ISO 50001'],
  },
  {
    id: 'tier-design',
    icon: 'cpu', color: 'navy',
    title: 'Certified Tier III/IV Design',
    headline: 'Civil, electrical, mechanical and telecoms design to Uptime Institute standards.',
    desc: 'Concurrent maintainability is the floor, not the ceiling. Every design carries an engineer\'s stamp and ships with a runbook operations actually wants to read.',
    deliverables: [
      'Civil & structural design coordination',
      'Electrical power systems (HV/LV, UPS, gensets)',
      'Mechanical cooling & HVAC systems',
      'Telecom & structured cabling infrastructure',
      'Safety & security system design',
      'White-space & hot/cold aisle optimisation',
      'Cooling strategy & PUE modelling',
      'DCIM & automation system design',
      'Command & control centre design',
    ],
    standards: ['Uptime Institute Tier III/IV', 'TIA-942 Rated 3/4', 'NFPA', 'IEC 62040'],
  },
  {
    id: 'fire-safety',
    icon: 'fire', color: 'rose',
    title: 'Fire & Life Safety Engineering',
    headline: 'NFPA-compliant fire suppression, detection, and mass notification design.',
    desc: 'Life-safety engineering for data centers, commercial buildings, and healthcare environments — specified to NFPA 75 and international standards with full commissioning support.',
    deliverables: [
      'Fire alarm system design & engineering',
      'Clean agent suppression systems (FM-200, NOVEC)',
      'Sprinkler system design',
      'Smoke detection & management systems',
      'Mass notification system design',
      'Emergency action planning & evacuation strategies',
      'Fire protection commissioning & witnessed testing',
    ],
    standards: ['NFPA 75', 'NFPA 72', 'NFPA 13', 'NFPA 2001', 'IBC'],
  },
  {
    id: 'smart-buildings',
    icon: 'building', color: 'green',
    title: 'Smart Building Systems',
    headline: 'Integrated BMS, access control, CCTV, and energy management on one control plane.',
    desc: 'Modern commercial buildings demand unified, auditable control. OneTech designs BMS, access, surveillance, and energy systems that work together — reducing operational overhead and improving energy efficiency.',
    deliverables: [
      'Building Management System (BMS) design',
      'HVAC & lighting control strategies',
      'Access control & visitor management systems',
      'CCTV & surveillance system design',
      'Energy Management System (EMS)',
      'Remote monitoring & IoT integration',
      'Integrated Facilities Management (IFM) systems',
      'Wireless & structured cabling (ELV)',
    ],
    standards: ['BACnet', 'Modbus', 'LEED', 'ISO 50001', 'CPTED'],
  },
  {
    id: 'pmc',
    icon: 'layers', color: 'azure',
    title: 'Project Management Consultancy (PMC)',
    headline: 'Vendor-neutral PMC from design management through to handover.',
    desc: 'One accountable principal from kickoff to keys. Our PMC practice delivers programme management, cost control, quality assurance, and documentation discipline across complex, multi-discipline build-outs.',
    deliverables: [
      'Project & programme management',
      'Design management & coordination',
      'Cost management & value engineering',
      'Schedule development & control',
      'Quality assurance & inspection',
      'Vendor evaluation & bid management',
      'Risk management & mitigation',
      'Commissioning management & handover',
      'Logistics coordination for sensitive environments',
    ],
    standards: ['PMBoK', 'PRINCE2', 'ISO 9001', 'CDM Regulations'],
  },
];

function PageHero() {
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </div>
          <span className="eyebrow">Critical Infrastructure &amp; Smart Buildings</span>
          <h1>The systems you need,<br /><em>engineered right</em> the first time.</h1>
          <p>
            Six practice areas. One principal-led team. Vendor-neutral specifications on every
            engagement — from data center design to smart building integration and project management.
          </p>
          <div className="page-hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Request consultation <Icon name="arrow" size={18}/></Link>
            <Link href="/cybersecurity" className="btn btn-outline btn-lg">Cybersecurity services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ s, reverse }) {
  const colorMap = { amber: 'amber', navy: 'navy', rose: 'rose', green: 'green', azure: 'azure' };
  return (
    <section
      className={`section ${s.color === 'navy' ? 'section-white' : 'section-cream'}`}
      id={s.id}
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: reverse ? '1fr 1.4fr' : '1.4fr 1fr', gap: 72, alignItems: 'start' }}>
          <div>
            <div className={`card-icon ${colorMap[s.color]}`} style={{ width: 56, height: 56, borderRadius: 14, marginBottom: 24 }}>
              <Icon name={s.icon} size={26} />
            </div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>{`Service ${SERVICES.indexOf(s) + 1} of ${SERVICES.length}`}</span>
            <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(1.8rem,3vw,3rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}>{s.title}</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 12 }}>{s.headline}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 28 }}>{s.desc}</p>
            <Link href="/contact" className="btn btn-primary">Discuss this service <Icon name="arrow" size={16}/></Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 16, padding: '28px 24px' }}>
              <h4 style={{ fontFamily: 'var(--f-mono)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16, fontWeight: 500 }}>/ Deliverables</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.deliverables.map((d) => (
                  <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                    <Icon name="check" size={15} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 24px' }}>
              <h4 style={{ fontFamily: 'var(--f-mono)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12, fontWeight: 500 }}>/ Standards &amp; Frameworks</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.standards.map((st) => (
                  <span key={st} className="card-tag">{st}</span>
                ))}
              </div>
            </div>
          </div>
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
          <h2 className="cta-headline">Need a service<br />not listed here?<br /><em>Talk to us.</em></h2>
          <div className="cta-body">
            <p>Our engineers work across a broad range of ICT and infrastructure disciplines. If you have a brief, we can help — even if it falls outside our standard practice areas.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Get in touch <Icon name="arrow" size={18}/></Link>
              <Link href="/cybersecurity" className="btn btn-outline btn-lg">Cybersecurity services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        {SERVICES.map((s, i) => (
          <ServiceDetail key={s.id} s={s} reverse={i % 2 !== 0} />
        ))}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
