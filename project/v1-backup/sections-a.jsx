/* global React */
const { useState, useEffect, useRef } = React;

/* ========= SECTION: NAV ========= */
function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark"><span>1T</span></span>
          <span>One<em>Tech</em></span>
        </a>
        <div className="nav-links">
          <a href="#top" className="is-active">Home</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#certifications">Credentials</a>
          <a href="#locations">Locations</a>
        </div>
        <div className="nav-right">
          <span className="status-pill">Available · PK / GCC</span>
          <a href="#contact" className="btn">
            Contact
            <Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ========= SECTION: HERO ========= */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-bg" />
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Technology Consultancy · Est. Karachi / Islamabad</span>
          <h1 className="serif">
            <span className="line">Engineering</span>
            <span className="line">the <em>infrastructure</em></span>
            <span className="line">behind your</span>
            <span className="line">next decade.</span>
          </h1>
          <p className="hero-sub">
            OneTech designs, audits and project-manages mission-critical
            facilities &mdash; data centers, smart buildings and life-safety
            systems &mdash; for owners who can&rsquo;t afford guesswork.
          </p>
          <div className="hero-cta-row">
            <a href="#contact" className="btn">Request consultation <Arrow /></a>
            <a href="#services" className="btn ghost">See capabilities</a>
          </div>
        </div>
        <div className="hero-meta">
          <div className="meta-block">
            <span className="meta-label">// Established</span>
            <span className="meta-value">2008<sup>17Y</sup></span>
            <span className="meta-text">Continuous practice across South Asia &amp; the Gulf.</span>
          </div>
          <div className="meta-row">
            <div className="meta-block">
              <span className="meta-label">// Certified Engineers</span>
              <span className="meta-value">24</span>
            </div>
            <div className="meta-block">
              <span className="meta-label">// Tier III + IV Designs</span>
              <span className="meta-value">38</span>
            </div>
          </div>
          <div className="meta-block">
            <span className="meta-label">// Standards</span>
            <span className="meta-text">
              Uptime Institute · TIA-942 · NFPA 75 / 76 · ANSI/BICSI 002
            </span>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="hero-strip">
          <div className="strip-cell">
            <span className="k">/01 — Data Center</span>
            <span className="v">Design &amp; Build</span>
          </div>
          <div className="strip-cell">
            <span className="k">/02 — Smart Building</span>
            <span className="v">BMS · ELV · Security</span>
          </div>
          <div className="strip-cell">
            <span className="k">/03 — Project Management</span>
            <span className="v">Vendor-neutral PMC</span>
          </div>
          <div className="strip-cell">
            <span className="k">/04 — Audits</span>
            <span className="v">Risk · Compliance · Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= SECTION: SERVICES ========= */
const SERVICES = [
  {
    n: "01",
    title: "Data Center",
    titleEm: "Consultancy",
    desc: "Full-lifecycle design and execution oversight for Tier III & IV facilities — from site selection and white-space layout to commissioning.",
    tags: ["TIA-942", "Uptime Tier III/IV", "MEP", "Commissioning"],
    span: 6,
  },
  {
    n: "02",
    title: "Project Management",
    titleEm: "Consultancy",
    desc: "Vendor-neutral PMC: cost, schedule, quality and risk control across multi-discipline build-outs.",
    tags: ["PMC", "PMO Setup", "Cost Control"],
    span: 6,
  },
  {
    n: "03",
    title: "Engineering",
    titleEm: "Solutions",
    desc: "Integrated low-voltage, life-safety and structured cabling engineering — designed once, built right.",
    tags: ["ELV", "NFPA 75", "Structured Cabling"],
    span: 4,
  },
  {
    n: "04",
    title: "Smart Building",
    titleEm: "Systems",
    desc: "BMS, access, surveillance and energy systems unified under a single, auditable control plane.",
    tags: ["BMS", "Access Control", "IoT"],
    span: 4,
  },
  {
    n: "05",
    title: "Infrastructure",
    titleEm: "Audits",
    desc: "Independent assessment of resilience, capacity and compliance posture — with a defensible report you can take to the board.",
    tags: ["Resilience", "Capacity", "Compliance"],
    span: 4,
    lastRow: true,
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <span className="section-index">§ 01 / Capabilities</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2 className="serif">
            Five disciplines.<br />
            <em>One</em> accountable team.
          </h2>
          <p className="lede">
            <strong>OneTech operates as a single, senior-led practice.</strong>{" "}
            You get certified engineers on every engagement — not a sales lead
            handing the work to subcontractors after the kickoff dinner.
          </p>
        </div>

        <div className="services">
          {SERVICES.map((s, i) => {
            const cls = [
              "svc",
              `span-${s.span}`,
              s.lastRow ? "last-row" : "",
              // last in row removes right border
              (s.span === 4 && (i === 4)) ||
              (s.span === 6 && (i === 1))
                ? "no-right"
                : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <a key={s.n} className={cls} href="#contact">
                <div className="svc-top">
                  <span className="svc-num">/ {s.n}</span>
                  <span className="svc-arrow"><Arrow /></span>
                </div>
                <h3 className="serif">
                  {s.title} <em>{s.titleEm}</em>
                </h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========= SECTION: PILLARS ========= */
function Pillars() {
  return (
    <section className="section" id="solutions">
      <span className="section-index">§ 02 / Why OneTech</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Operating principles</span>
          <h2 className="serif">
            Built for the<br />
            three things that <em>never</em> bend.
          </h2>
          <p className="lede">
            Technology that earns its place. Scalability that survives the next
            two refresh cycles. Reliability you can put in a contract.
          </p>
        </div>

        <div className="pillars">
          <div className="pillar">
            <span className="pillar-no">/ 01</span>
            <PillarSVG type="tech" />
            <h3 className="serif">Technology</h3>
            <p>
              Vendor-neutral by design. We specify what fits the brief, not what
              fits the channel commission.
            </p>
            <div className="pillar-foot">
              <span className="pillar-stat serif">12</span>
              <div>
                <span className="pillar-stat-label">/ Platforms</span><br />
                <span className="pillar-stat-label">/ Audited &amp; Approved</span>
              </div>
            </div>
          </div>

          <div className="pillar featured">
            <span className="pillar-no">/ 02</span>
            <PillarSVG type="scale" dark />
            <h3 className="serif">Scalability</h3>
            <p>
              Modular MEP, structured cabling and BMS strategies that let
              capacity grow without re-engineering the building.
            </p>
            <div className="pillar-foot">
              <span className="pillar-stat serif">3.4×</span>
              <div>
                <span className="pillar-stat-label">/ Avg. Capacity</span><br />
                <span className="pillar-stat-label">/ Headroom Delivered</span>
              </div>
            </div>
          </div>

          <div className="pillar">
            <span className="pillar-no">/ 03</span>
            <PillarSVG type="reliable" />
            <h3 className="serif">Reliability</h3>
            <p>
              Concurrent maintainability is the floor, not the ceiling. Every
              design ships with an operations runbook.
            </p>
            <div className="pillar-foot">
              <span className="pillar-stat serif">99.982<span style={{fontSize:'1.4rem'}}>%</span></span>
              <div>
                <span className="pillar-stat-label">/ Portfolio</span><br />
                <span className="pillar-stat-label">/ Uptime (TTM)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarSVG({ type, dark }) {
  const stroke = dark ? "rgba(12,14,16,0.7)" : "currentColor";
  if (type === "tech") {
    return (
      <svg className="pillar-svg" viewBox="0 0 120 120" fill="none">
        <rect x="20" y="20" width="80" height="80" stroke={stroke} strokeWidth="1" />
        <rect x="35" y="35" width="50" height="50" stroke={stroke} strokeWidth="1" />
        <rect x="50" y="50" width="20" height="20" stroke={stroke} strokeWidth="1" />
        <line x1="60" y1="0" x2="60" y2="20" stroke={stroke} />
        <line x1="60" y1="100" x2="60" y2="120" stroke={stroke} />
        <line x1="0" y1="60" x2="20" y2="60" stroke={stroke} />
        <line x1="100" y1="60" x2="120" y2="60" stroke={stroke} />
      </svg>
    );
  }
  if (type === "scale") {
    return (
      <svg className="pillar-svg" viewBox="0 0 120 120" fill="none">
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={10+i*8} y={100-i*15} width="14" height={i*15+8} stroke={stroke} strokeWidth="1" />
        ))}
        <path d="M10 110 L110 30" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    );
  }
  return (
    <svg className="pillar-svg" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="50" stroke={stroke} strokeWidth="1" />
      <circle cx="60" cy="60" r="32" stroke={stroke} strokeWidth="1" />
      <circle cx="60" cy="60" r="14" stroke={stroke} strokeWidth="1" />
      <path d="M60 10 L60 110 M10 60 L110 60" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

Object.assign(window, { Nav, Hero, Services, Pillars, Arrow });
