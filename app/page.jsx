import Link from 'next/link';
import LogosSection from './components/LogosSection';
import Header from './components/Header';
import Footer from './components/Footer';
import { Icon } from './components/Icons';

/* ─── Logo SVG ─── */
function Logo({ white = false }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill={white ? '#F4B324' : '#F4B324'}/>
      <text x="14" y="19.5" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill={white ? '#0E2240' : '#0E2240'} letterSpacing="0.5">1T</text>
    </svg>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-inner">
          {/* Content */}
          <div className="hero-content">
            <span className="eyebrow">ICT · Data Centers · Cybersecurity · Smart Buildings</span>
            <h1 className="hero-headline">
              Mission-Critical<br />
              Technology,<br />
              <em>Delivered Right.</em>
            </h1>
            <p className="hero-sub">
              OneTech is Pakistan&rsquo;s trusted ICT consultancy — engineering the data centers,
              smart buildings, and cybersecurity infrastructure that modern enterprises depend on.
            </p>
            <div className="hero-actions">
              <a href="/services" className="btn btn-primary btn-lg">
                Explore Services <Icon name="arrow" size={18} />
              </a>
              <a href="/contact" className="btn btn-outline btn-lg">
                Book Consultation
              </a>
            </div>
          </div>

          {/* Hero service metric cards */}
          <div className="hero-visual" aria-hidden="true">
            {/* Card 1 — Data Centers */}
            <div className="hero-card hero-card-1">
              <div className="hc-icon" style={{ background: 'rgba(244,179,36,0.15)', color: '#F4B324' }}>
                <Icon name="server" size={24} />
              </div>
              <div className="hc-body">
                <div className="hc-metric">38</div>
                <div className="hc-label">Tier III/IV Designs Delivered</div>
                <div className="hc-tags">
                  <span className="hc-tag">TIA-942</span>
                  <span className="hc-tag">Uptime Institute</span>
                  <span className="hc-tag">MEP</span>
                </div>
              </div>
            </div>

            {/* Card 2 — Cybersecurity */}
            <div className="hero-card hero-card-2">
              <div className="hc-icon" style={{ background: 'rgba(42,111,219,0.15)', color: '#2A6FDB' }}>
                <Icon name="shield" size={24} />
              </div>
              <div className="hc-body">
                <div className="hc-metric">24/7</div>
                <div className="hc-label">SOC Operations &amp; Coverage</div>
                <div className="hc-tags">
                  <span className="hc-tag">VAPT</span>
                  <span className="hc-tag">EDR</span>
                  <span className="hc-tag">Cloud Security</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Uptime */}
            <div className="hero-card hero-card-3">
              <div className="hc-icon" style={{ background: 'rgba(79,166,125,0.15)', color: '#4FA67D' }}>
                <Icon name="activity" size={24} />
              </div>
              <div className="hc-body">
                <div className="hc-metric">99.982%</div>
                <div className="hc-label">Portfolio Uptime Record</div>
                <div className="hc-status">
                  <span className="hc-status-dot" />
                  All systems operational
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="wrap" style={{ padding: 0, maxWidth: '100%' }}>
        <div className="hero-stats">
          {[
            { value: '17', suffix: ' YRS', label: 'Years in practice' },
            { value: '24', suffix: '+', label: 'Certified engineers' },
            { value: '38', suffix: '', label: 'Tier III/IV designs' },
            { value: '99.982', suffix: '%', label: 'Portfolio uptime' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-value">{s.value}<em>{s.suffix}</em></div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const items = [
    { icon: 'check', text: 'CDCS & CDCP Certified' },
    { icon: 'check', text: 'Uptime Institute Recognized' },
    { icon: 'check', text: 'TIA-942 Certified Design Consultant' },
    { icon: 'check', text: 'NFPA & BICSI Affiliated' },
    { icon: 'check', text: 'PSEB Registered' },
  ];
  return (
    <div className="trust-bar">
      <div className="wrap">
        <div className="trust-bar-inner">
          {items.map((item) => (
            <div key={item.text} className="trust-item">
              <Icon name={item.icon} size={14} />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Three Pillars ─── */
function Pillars() {
  const pillars = [
    {
      color: 'amber',
      icon: 'server',
      title: 'Critical Infrastructure',
      desc: 'End-to-end data center design, Tier III/IV certification, infrastructure audits, and project management for mission-critical facilities.',
      link: '#data-centers',
      services: ['Data Center Design', 'Infrastructure Audits', 'Tier III/IV Certification', 'Project Management'],
    },
    {
      color: 'green',
      icon: 'building',
      title: 'Smart Building Systems',
      desc: 'Integrated building automation, fire & life safety engineering, HVAC controls, and energy management for modern commercial facilities.',
      link: '#smart-buildings',
      services: ['Building Automation (BMS)', 'Fire & Life Safety', 'HVAC Controls', 'Energy Management'],
    },
    {
      color: 'azure',
      icon: 'shield',
      title: 'Cybersecurity Services',
      desc: 'Comprehensive endpoint-to-cloud security — from vulnerability assessments and penetration testing to SOC operations and threat intelligence.',
      link: '#cybersecurity',
      services: ['Vulnerability Assessment', 'Penetration Testing', 'SOC as a Service', 'Cloud Security'],
    },
  ];

  return (
    <section className="section section-white" id="services" aria-labelledby="pillars-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">What We Do</span>
          <h2 id="pillars-heading" className="display-lg" style={{ color: 'var(--navy)' }}>
            Three practice areas.<br />One integrated team.
          </h2>
          <p>
            OneTech operates as a single principal-led practice. You get certified engineers
            on every engagement — not a sales team handing the brief to subcontractors.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((p) => (
            <div key={p.title} className="pillar">
              <div className={`pillar-icon ${p.color}`}>
                <Icon name={p.icon} size={26} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                {p.services.map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-2)' }}>
                    <Icon name="check" size={14} />
                    {s}
                  </li>
                ))}
              </ul>
              <a href={p.link} className="pillar-link">
                Explore services <Icon name="arrow" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Infrastructure Services Grid ─── */
const INFRA_SERVICES = [
  {
    icon: 'server', color: 'amber',
    title: 'Data Center Consultancy',
    desc: 'End-to-end design and oversight for Tier III & IV facilities — site selection, MEP engineering, white-space planning, and Level-5 commissioning.',
    tags: ['TIA-942', 'Uptime III/IV', 'MEP', 'Commissioning'],
  },
  {
    icon: 'chart', color: 'navy',
    title: 'Infrastructure Audit & Assessment',
    desc: 'Independent gap analysis, ASHRAE energy audits, capacity planning, root-cause analysis, and post-incident reviews with actionable roadmaps.',
    tags: ['Gap Analysis', 'Energy Audit', 'Capacity Planning'],
  },
  {
    icon: 'cpu', color: 'navy',
    title: 'Certified Tier III/IV Design',
    desc: 'Civil, electrical, mechanical and telecom design aligned to Uptime Institute Tier standards — including cooling strategy and command center design.',
    tags: ['Tier III', 'Tier IV', 'Cooling Design'],
  },
  {
    icon: 'fire', color: 'rose',
    title: 'Fire & Life Safety Engineering',
    desc: 'Fire alarm systems, clean agent suppression, sprinkler design, smoke detection, mass notification, and emergency action planning to NFPA 75.',
    tags: ['NFPA 75', 'Clean Agent', 'Mass Notification'],
  },
  {
    icon: 'building', color: 'green',
    title: 'Smart Building Systems',
    desc: 'BMS, HVAC and lighting controls, access control, CCTV, energy management systems, and integrated facilities management on a single control plane.',
    tags: ['BMS', 'Access Control', 'IoT', 'Energy'],
  },
  {
    icon: 'layers', color: 'azure',
    title: 'Project Management (PMC)',
    desc: 'Vendor-neutral PMC across cost, schedule, quality and risk. RFP/tender issuance, bid evaluation, design management, and fit-out inspections.',
    tags: ['PMC', 'PMO Setup', 'Cost Control', 'QA'],
  },
];

function InfraServices() {
  return (
    <section className="section section-cream" id="data-centers" aria-labelledby="infra-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Critical Infrastructure &amp; Smart Buildings</span>
          <h2 id="infra-heading" className="display-lg" style={{ color: 'var(--navy)' }}>
            Built for the systems<br />you can&rsquo;t afford to get wrong.
          </h2>
          <p>
            From initial site selection through to Level-5 commissioning, our engineers
            manage every phase — independently, with no vendor relationships influencing the specification.
          </p>
        </div>
        <div className="services-grid">
          {INFRA_SERVICES.map((s) => (
            <div key={s.title} className="service-card">
              <div className={`card-icon ${s.color}`}>
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-tags">
                {s.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
              </div>
              <a href="/contact" className="card-link">
                Get in touch <Icon name="arrow" size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cybersecurity Platform (Rapid7-inspired unified platform section) ─── */
const CYBER_SERVICES = [
  {
    icon: 'search', color: 'rgba(244,179,36,0.15)', iconColor: '#d4940f',
    title: 'Vulnerability Assessment & Pen Testing',
    desc: 'Identify, prioritize, and remediate security weaknesses across your infrastructure before attackers exploit them.',
  },
  {
    icon: 'eye', color: 'rgba(42,111,219,0.12)', iconColor: '#2A6FDB',
    title: 'Security Operations Center (SOC)',
    desc: '24/7 threat monitoring, detection, and response — managed by certified security analysts watching your environment.',
  },
  {
    icon: 'cpu', color: 'rgba(124,58,237,0.12)', iconColor: '#7c3aed',
    title: 'Endpoint Detection & Response',
    desc: 'Real-time endpoint monitoring with behavioral analytics to detect, contain, and eliminate threats across every device.',
  },
  {
    icon: 'cloud', color: 'rgba(79,166,125,0.12)', iconColor: '#4FA67D',
    title: 'Cloud Security Assessment',
    desc: 'Audit your AWS, Azure, or GCP environments for misconfigurations, compliance gaps, and active threats.',
  },
  {
    icon: 'activity', color: 'rgba(42,111,219,0.12)', iconColor: '#2A6FDB',
    title: 'SIEM & Threat Intelligence',
    desc: 'Centralized log management, correlation rules, and actionable threat intelligence to cut through alert noise.',
  },
  {
    icon: 'lock', color: 'rgba(244,179,36,0.15)', iconColor: '#d4940f',
    title: 'Compliance & GRC',
    desc: 'Achieve and maintain compliance with ISO 27001, PCI DSS, HIPAA, NIST, and other frameworks through structured advisory.',
  },
  {
    icon: 'network', color: 'rgba(224,82,82,0.12)', iconColor: '#e05252',
    title: 'Network Security Monitoring',
    desc: 'Deep packet inspection, traffic analysis, and intrusion detection across your on-premise and hybrid network infrastructure.',
  },
  {
    icon: 'shield', color: 'rgba(124,58,237,0.12)', iconColor: '#7c3aed',
    title: 'Digital Risk & Dark Web Monitoring',
    desc: 'Track your organization\'s exposure across the dark web, data breach feeds, and threat actor forums.',
  },
  {
    icon: 'settings', color: 'rgba(79,166,125,0.12)', iconColor: '#4FA67D',
    title: 'Security Architecture & Design',
    desc: 'Zero-trust network design, secure infrastructure blueprints, and technology stack selection by experienced architects.',
  },
];

function CybersecurityPlatform() {
  return (
    <section className="cyber-platform" id="cybersecurity" aria-labelledby="cyber-heading">
      <div className="wrap">
        <div className="cyber-intro">
          <div>
            <div className="cyber-badge">
              <span className="cyber-badge-dot" />
              Cybersecurity Practice
            </div>
            <h2 id="cyber-heading" className="cyber-headline" style={{ marginTop: 24 }}>
              The only endpoint-to-cloud,<br /><em>unified cybersecurity</em><br />practice you need.
            </h2>
          </div>
          <div className="cyber-intro-right">
            <p>
              OneTech&rsquo;s cybersecurity practice delivers the full spectrum of security services
              — from initial vulnerability assessment through to 24/7 SOC operations and compliance
              management. One team. Complete coverage.
            </p>
            <p>
              We work with your existing stack or help you build one, always vendor-neutral
              and always led by certified security engineers.
            </p>
            <a href="/contact" className="btn btn-primary" style={{ width: 'fit-content' }}>
              Talk to a security engineer <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>

        <div className="cyber-grid">
          {CYBER_SERVICES.map((s) => (
            <div key={s.title} className="cyber-card">
              <div className="cyber-card-icon" style={{ background: s.color }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: s.iconColor }}>
                  <Icon name={s.icon} size={24} />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="/contact" className="cyber-card-link">
                Learn more <Icon name="arrow" size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why OneTech ─── */
function WhyOneTech() {
  const reasons = [
    {
      n: '01',
      title: 'Vendor-Neutral',
      desc: 'We specify technology on merit — not commission. No reseller relationships, no margin sharing, no vendor pressure on your specification.',
    },
    {
      n: '02',
      title: 'Principal-Led Engagements',
      desc: 'Senior certified engineers on every project from day one. Not a sales lead handing off to subcontractors after the kickoff.',
    },
    {
      n: '03',
      title: '17 Years of Proven Practice',
      desc: 'Founded in 2008, OneTech has delivered 38 Tier III/IV data center designs and maintains a 99.982% portfolio uptime record.',
    },
    {
      n: '04',
      title: 'Standards-Backed Expertise',
      desc: 'CDCS, CDCP, CDMS, and CTDC certified. Affiliated with Uptime Institute, TIA, NFPA, BICSI, and PSEB.',
    },
  ];

  return (
    <section className="section section-white" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="section-header center">
          <span className="eyebrow">Why OneTech</span>
          <h2 id="why-heading" className="display-lg" style={{ color: 'var(--navy)' }}>
            Built on the principles<br />that never bend.
          </h2>
          <p>
            Technology that earns its place. Scalability that survives the next two refresh cycles.
            Reliability you can put in a contract.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.n} className="why-card">
              <div className="why-card-num">/ {r.n}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certifications ─── */
function Certifications() {
  const certs = [
    { mark: 'CDCS', title: 'Certified Data Centre Specialist',          desc: 'Advanced operational design competency.',        issuer: 'EPI / CNet' },
    { mark: 'CDCP', title: 'Certified Data Centre Professional',         desc: 'Foundational facility planning & operations.',   issuer: 'EPI / CNet' },
    { mark: 'CDMS', title: 'Certified Data Centre Migration Specialist', desc: 'End-to-end migration governance.',               issuer: 'EPI' },
    { mark: 'CTDC', title: 'Certified TIA-942 Design Consultant',        desc: 'TIA-942 conformity design authority.',           issuer: 'TIA / EPI' },
  ];

  const affiliations = [
    ['Uptime Institute', 'Authorized Design Reviewer'],
    ['TIA', 'Telecom Industry Association'],
    ['NFPA', 'Fire Protection Association'],
    ['PSEB', 'Software Export Board'],
    ['BICSI', 'Cabling & ICT Infrastructure'],
  ];

  return (
    <section className="section section-cream" id="credentials" aria-labelledby="certs-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Credentials &amp; Affiliations</span>
          <h2 id="certs-heading" className="display-lg" style={{ color: 'var(--navy)' }}>
            Certifications that<br />regulators recognise.
          </h2>
          <p>
            Anyone can claim expertise. Our team holds the industry certifications that auditors,
            insurers, and regulators actually recognise — and we keep them current.
          </p>
        </div>

        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.mark} className="cert-card">
              <div className="cert-stamp">{c.mark}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className="cert-issuer">Issued by {c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Locations ─── */
function Locations() {
  const offices = [
    {
      city: 'Islamabad',
      address: 'LG-11 The Onyx Plaza, Plot 28–29 F.E.C.H.S, E-11/2, Islamabad, Pakistan',
      phone: { display: '+92 51 271 2563', tel: '+925127125163' },
      email: 'info@onetech.live',
    },
    {
      city: 'Karachi',
      address: 'Office #306, 3rd Floor, Silver Trade Tower, SB-46, Block-13A, Gulshan-e-Iqbal, Karachi, Pakistan',
      phone: { display: '+92 21 3483 6014', tel: '+922134836014' },
      email: 'info@onetech.live',
    },
  ];

  return (
    <section className="section section-white" id="presence" aria-labelledby="locations-heading">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Our Presence</span>
          <h2 id="locations-heading" className="display-lg" style={{ color: 'var(--navy)' }}>
            Two offices.<br />One standard of work.
          </h2>
          <p>
            Headquartered in Islamabad, with a full-service office in Karachi. Site-attended
            engineering across Pakistan and the Gulf — not remote-only consulting.
          </p>
        </div>

        <div className="locations-grid">
          {offices.map((o) => (
            <address key={o.city} className="location-card" style={{ fontStyle: 'normal' }}>
              {/* Background map decoration */}
              <svg className="loc-map-bg" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <defs>
                  <pattern id={`grd-${o.city}`} width="14" height="14" patternUnits="userSpaceOnUse">
                    <path d="M 14 0 L 0 0 0 14" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill={`url(#grd-${o.city})`} />
              </svg>

              <div className="location-city">{o.city}</div>
              <p className="location-address">{o.address}</p>
              <div className="location-contacts">
                <div className="location-contact-row">
                  <div className="location-contact-icon"><Icon name="phone" size={14} /></div>
                  <a href={`tel:${o.phone.tel}`}>{o.phone.display}</a>
                </div>
                <div className="location-contact-row">
                  <div className="location-contact-icon"><Icon name="mail" size={14} /></div>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </div>
              </div>
            </address>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="cta-section" id="contact" aria-labelledby="cta-heading">
      <div className="cta-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="cta-inner">
          <div>
            <span className="eyebrow light" style={{ display: 'block', marginBottom: 20 }}>
              Start a Conversation
            </span>
            <h2 id="cta-heading" className="cta-headline">
              Ready to spec it<br /><em>right the first time?</em>
            </h2>
          </div>
          <div className="cta-body">
            <p>
              Send the brief, the floorplan, or just a question. A principal engineer
              responds within one business day — no funnel, no SDR, no runaround.
            </p>
            <div className="cta-actions">
              <a href="mailto:info@onetech.live" className="btn btn-primary btn-lg">
                info@onetech.live <Icon name="arrow" size={18} />
              </a>
              <a href="#presence" className="btn btn-outline btn-lg">
                Visit an office
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                <Icon name="phone" size={13} />
                Islamabad: +92 51 271 2563
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                <Icon name="phone" size={13} />
                Karachi: +92 21 3483 6014
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Pillars />
        <InfraServices />
        <CybersecurityPlatform />
        <WhyOneTech />
        <Certifications />
        <LogosSection />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
