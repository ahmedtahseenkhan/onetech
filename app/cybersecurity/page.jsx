import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Icon } from '../components/Icons';

export const metadata = {
  title: 'Cybersecurity Services | Endpoint to Cloud — OneTech',
  description: 'OneTech delivers the full spectrum of cybersecurity services — from vulnerability assessment and penetration testing to 24/7 SOC operations, EDR, cloud security, and compliance.',
};

const CYBER_SERVICES = [
  {
    id: 'vapt',
    icon: 'search', accent: '#d4940f', bg: 'rgba(244,179,36,0.1)',
    title: 'Vulnerability Assessment & Penetration Testing',
    subtitle: 'Find your weaknesses before attackers do.',
    desc: 'Our certified security engineers conduct thorough vulnerability assessments and simulated attack scenarios across your network, applications, and infrastructure to identify and prioritise security gaps.',
    deliverables: ['Network vulnerability scanning & assessment','Web & mobile application security testing','Internal & external penetration testing','Social engineering assessments','Red team exercises','Detailed risk-rated reports with remediation roadmaps','Re-testing & validation after fixes'],
    certs: ['OSCP', 'CEH', 'OWASP Top 10', 'PTES'],
  },
  {
    id: 'soc',
    icon: 'eye', accent: '#2A6FDB', bg: 'rgba(42,111,219,0.1)',
    title: 'Security Operations Centre (SOC) as a Service',
    subtitle: '24/7 threat monitoring by certified security analysts.',
    desc: 'A fully managed SOC delivering continuous monitoring, detection, triage, and response. Our analysts watch your environment around the clock — so you don\'t have to build and staff an in-house capability.',
    deliverables: ['24/7 real-time threat monitoring','Alert triage & false-positive reduction','Incident detection & response','Threat hunting & behavioural analysis','Monthly executive reporting','Escalation & on-call analyst access','Playbook development & tuning'],
    certs: ['SOC 2', 'ISO 27001', 'NIST CSF', 'CIS Controls'],
  },
  {
    id: 'edr',
    icon: 'cpu', accent: '#7c3aed', bg: 'rgba(124,58,237,0.1)',
    title: 'Endpoint Detection & Response (EDR)',
    subtitle: 'Real-time threat containment across every device.',
    desc: 'Behavioural analytics and machine-learning-driven detection across laptops, servers, and mobile devices — with automated containment to stop threats before they spread.',
    deliverables: ['EDR platform deployment & tuning','Endpoint threat detection & analysis','Automated containment & isolation','Behavioural anomaly detection','Managed endpoint response','User and Entity Behaviour Analytics (UEBA)','Forensic investigation support'],
    certs: ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'Trend Micro'],
  },
  {
    id: 'cloud',
    icon: 'cloud', accent: '#4FA67D', bg: 'rgba(79,166,125,0.1)',
    title: 'Cloud Security Assessment',
    subtitle: 'Secure your AWS, Azure, or GCP environment.',
    desc: 'Cloud misconfigurations are the leading cause of breaches. Our cloud security practice audits your cloud environment against CIS benchmarks and compliance frameworks — and remediates what it finds.',
    deliverables: ['Cloud security posture assessment (CSPM)','Misconfiguration detection & remediation','Identity & access management (IAM) review','Cloud-native workload protection (CNAPP)','Container & Kubernetes security assessment','Serverless & API security review','Multi-cloud compliance mapping'],
    certs: ['AWS Well-Architected', 'CIS Benchmarks', 'CSA CCM', 'ISO 27017'],
  },
  {
    id: 'siem',
    icon: 'activity', accent: '#2A6FDB', bg: 'rgba(42,111,219,0.08)',
    title: 'SIEM & Threat Intelligence',
    subtitle: 'Centralised visibility and actionable threat intelligence.',
    desc: 'Cut through the noise with centralised log management, custom correlation rules, and real-time threat intelligence feeds. Our SIEM practice turns raw logs into actionable security insights.',
    deliverables: ['SIEM platform deployment & configuration','Log collection, parsing & normalisation','Custom detection rule development','Threat intelligence feed integration','Dark web & brand monitoring','Incident timeline reconstruction','Security dashboards & executive reporting'],
    certs: ['Splunk', 'Microsoft Sentinel', 'IBM QRadar', 'MITRE ATT&CK'],
  },
  {
    id: 'grc',
    icon: 'award', accent: '#d4940f', bg: 'rgba(244,179,36,0.08)',
    title: 'Compliance & Governance, Risk & Compliance (GRC)',
    subtitle: 'Achieve and maintain regulatory compliance.',
    desc: 'Structured advisory to help you achieve and sustain compliance with the frameworks your regulators, insurers, and clients require — without the consultancy overhead of larger firms.',
    deliverables: ['ISO 27001 gap analysis & implementation','PCI DSS scoping & compliance programme','HIPAA compliance assessment','NIST Cybersecurity Framework alignment','Regulatory compliance mapping','Policy & procedure development','Third-party risk management','Annual audit support'],
    certs: ['ISO 27001', 'PCI DSS', 'HIPAA', 'NIST CSF', 'GDPR'],
  },
  {
    id: 'network',
    icon: 'network', accent: '#e05252', bg: 'rgba(224,82,82,0.08)',
    title: 'Network Security Monitoring',
    subtitle: 'Deep visibility into your network traffic.',
    desc: 'Passive and active monitoring of your on-premise, cloud, and hybrid network — detecting lateral movement, exfiltration attempts, and anomalous traffic before damage is done.',
    deliverables: ['Network traffic analysis (NTA)','Intrusion Detection & Prevention (IDS/IPS)','Firewall policy audit & hardening','Zero Trust network design','Micro-segmentation strategy','VPN & remote access security review','Network access control (NAC) implementation'],
    certs: ['Palo Alto', 'Fortinet', 'Cisco', 'Zero Trust (NIST)'],
  },
  {
    id: 'darkweb',
    icon: 'globe', accent: '#7c3aed', bg: 'rgba(124,58,237,0.08)',
    title: 'Digital Risk & Dark Web Monitoring',
    subtitle: 'Know what attackers know about you.',
    desc: 'Continuous monitoring of dark web forums, breach databases, and threat actor channels for your organisation\'s data, credentials, and brand — with immediate alert and response protocols.',
    deliverables: ['Dark web credential monitoring','Data breach exposure detection','Brand impersonation monitoring','Threat actor tracking','Executive protection monitoring','Takedown services','Incident notification & response'],
    certs: ['OSINT', 'HUMINT', 'STIX/TAXII', 'MISP'],
  },
  {
    id: 'architecture',
    icon: 'settings', accent: '#4FA67D', bg: 'rgba(79,166,125,0.08)',
    title: 'Security Architecture & Design',
    subtitle: 'Build security in from the start.',
    desc: 'Zero-trust architecture design, secure network blueprints, and technology stack selection by certified security architects — ensuring security is engineered in, not bolted on.',
    deliverables: ['Zero Trust architecture design','Security reference architecture','Secure network design & segmentation','Identity & access management strategy','Privileged Access Management (PAM)','Cloud security architecture','Security technology stack selection'],
    certs: ['SABSA', 'TOGAF', 'Zero Trust (CISA)', 'NIST SP 800-207'],
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
            <span>Cybersecurity</span>
          </div>
          <div style={{ display: 'flex', marginBottom: 24 }}>
            <div className="cyber-badge">
              <span className="cyber-badge-dot" />
              Cybersecurity Practice
            </div>
          </div>
          <h1>The only endpoint-to-cloud,<br /><em>unified cybersecurity</em><br />practice you need.</h1>
          <p>
            OneTech&rsquo;s cybersecurity practice delivers the full spectrum of security services —
            from initial vulnerability assessment through to 24/7 SOC operations, cloud security,
            and compliance management. One team. Complete coverage. No vendor lock-in.
          </p>
          <div className="page-hero-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to a security engineer <Icon name="arrow" size={18}/></Link>
            <Link href="#vapt" className="btn btn-outline btn-lg">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustRow() {
  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '18px 0' }}>
      <div className="wrap">
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {['Vendor-Neutral Approach','Certified Security Engineers','24/7 SOC Coverage','Full Lifecycle Security','Compliance-Ready Reports'].map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
              <Icon name="check" size={13} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceGrid() {
  return (
    <section style={{ background: 'var(--dark)', padding: '80px 0 96px' }}>
      <div className="wrap">
        <div className="section-header" style={{ marginBottom: 56 }}>
          <span className="eyebrow light" style={{ display: 'block', marginBottom: 12 }}>Our Cybersecurity Services</span>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--white)', lineHeight: 1.05 }}>
            Nine services.<br />One integrated security programme.
          </h2>
        </div>
        <div className="cyber-grid">
          {CYBER_SERVICES.map((s) => (
            <a key={s.id} id={s.id} className="cyber-card" href={`/contact?service=${s.id}`} style={{ textDecoration: 'none' }}>
              <div className="cyber-card-icon" style={{ background: s.bg }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: s.accent }}>
                  <Icon name={s.icon} size={24} />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', margin: '-8px 0 4px' }}>{s.subtitle}</p>
              <p>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                {s.certs.map((c) => (
                  <span key={c} style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>{c}</span>
                ))}
              </div>
              <span className="cyber-card-link" style={{ marginTop: 16 }}>
                Enquire about this service <Icon name="arrow" size={13} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <div className="section-header center">
          <span className="eyebrow">Why OneTech for Cybersecurity</span>
          <h2 className="display-lg" style={{ color: 'var(--navy)' }}>Security that works<br />for your business.</h2>
          <p>We are not a product reseller. We are independent security engineers who specify and deploy the best tools for your environment — and then manage them.</p>
        </div>
        <div className="why-grid">
          {[
            { n:'01', title:'Vendor-Neutral', desc:'We don\'t earn commissions on the products we recommend. Your security stack is built around your needs, not ours.' },
            { n:'02', title:'Certified Engineers', desc:'Every engagement is led by a certified security professional — OSCP, CEH, CISSP — not a junior analyst or subcontractor.' },
            { n:'03', title:'Industry-Specific', desc:'We understand the unique security needs of data centers, smart buildings, healthcare environments, and financial services.' },
            { n:'04', title:'Compliance-Ready', desc:'Our deliverables are structured to support audits, board presentations, and regulatory submissions — not just technical remediation.' },
          ].map((r) => (
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

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="cta-inner">
          <h2 className="cta-headline">Start with a<br /><em>security assessment</em><br />today.</h2>
          <div className="cta-body">
            <p>Whether you need a one-time vulnerability assessment or a fully managed security programme, our engineers can scope and price it for you within 48 hours.</p>
            <div className="cta-actions">
              <Link href="/contact?service=vapt" className="btn btn-primary btn-lg">Request assessment <Icon name="arrow" size={18}/></Link>
              <Link href="/services" className="btn btn-outline btn-lg">Infrastructure services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CybersecurityPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <TrustRow />
        <ServiceGrid />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
