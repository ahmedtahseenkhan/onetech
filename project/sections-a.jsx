/* global React */

/* ====== util ====== */
function Arrow({ size = 14 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ====== DOC BAR (title bar + nav) ====== */
function DocBar() {
  return (
    <header className="doc-bar">
      <div className="doc-bar-inner">
        <div className="doc-bar-cell brand-cell">
          <a href="#top" className="brand">
            <span className="brand-mark">1T</span>
            <span>One<em>Tech</em></span>
          </a>
        </div>
        <div className="doc-bar-cell">
          <div className="doc-meta">
            <span>DOC&nbsp;//&nbsp;OT-2026-WEB</span>
            <span className="dot-live">Practice active</span>
            <span>REV&nbsp;C · 05.2026</span>
          </div>
        </div>
        <div className="doc-bar-cell">
          <nav className="doc-nav">
            <a href="#capabilities" className="is-active">01 Capabilities</a>
            <a href="#principles">02 Principles</a>
            <a href="#credentials">03 Credentials</a>
            <a href="#presence">04 Presence</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ====== HERO ====== */
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid-bg" />
      <div className="wrap hero-inner">
        <div className="hero-left">
          <div className="plate-mark">
            <b>PLATE 00</b>
            <span>·</span>
            <span>Technology Consultancy · Karachi / Islamabad</span>
          </div>
          <h1>
            <span className="row">Engineering</span>
            <span className="row">the <em>mission-</em></span>
            <span className="row"><em>critical</em> from</span>
            <span className="row">first principle.</span>
          </h1>
          <span className="hero-tag">Est. 2008 · 17 Years in Practice</span>
          <p className="hero-sub">
            OneTech designs, audits and project-manages the data centers,
            smart buildings and life-safety systems that owners can&rsquo;t
            afford to get wrong.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn">Request consultation <Arrow /></a>
            <a href="#capabilities" className="btn ghost">View capabilities</a>
          </div>
        </div>

        <div className="hero-illu">
          <div className="illu-titleblock">
            <span>DWG&nbsp;01 · Reference Datacenter — Section A-A&prime;</span>
            <span><b>SCALE</b>&nbsp;1:200</span>
          </div>
          <div className="illu-canvas">
            <DatacenterSVG />
          </div>
          <div className="illu-foot">
            <div><b>Tier</b><span>III + IV</span></div>
            <div><b>White space</b><span>1,200 m²</span></div>
            <div><b>PUE target</b><span>1.32</span></div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="stat-strip">
          <div className="stat-cell">
            <span className="k">/ 01 — Practice</span>
            <span className="v">17<sup>YRS</sup></span>
          </div>
          <div className="stat-cell">
            <span className="k">/ 02 — Engineers</span>
            <span className="v">24</span>
          </div>
          <div className="stat-cell">
            <span className="k">/ 03 — Tier III/IV designs</span>
            <span className="v">38</span>
          </div>
          <div className="stat-cell">
            <span className="k">/ 04 — Portfolio uptime</span>
            <span className="v vsmall">99.982%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== Hero illustration: a stylised datacenter section view ====== */
function DatacenterSVG() {
  return (
    <svg viewBox="0 0 480 360" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="rgba(14,34,64,0.3)" />
        </pattern>
        <pattern id="dotsA" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="var(--accent)" opacity="0.4" />
        </pattern>
      </defs>

      {/* Ground line */}
      <line x1="20" y1="320" x2="460" y2="320" stroke="var(--navy)" strokeWidth="1" />
      {/* Tick marks */}
      {[40,80,120,160,200,240,280,320,360,400,440].map(x => (
        <line key={x} x1={x} y1="320" x2={x} y2="328" stroke="var(--navy)" strokeWidth="0.8" />
      ))}

      {/* Building outline */}
      <rect x="60" y="80" width="360" height="240" stroke="var(--navy)" strokeWidth="1.2" fill="rgba(14,34,64,0.03)" />

      {/* Roof slab */}
      <line x1="60" y1="80" x2="420" y2="80" stroke="var(--navy)" strokeWidth="2" />
      <line x1="60" y1="86" x2="420" y2="86" stroke="var(--navy)" strokeWidth="0.6" />

      {/* Floor divisions */}
      <line x1="60" y1="160" x2="420" y2="160" stroke="var(--navy)" strokeWidth="0.6" strokeDasharray="3 3" />
      <line x1="60" y1="240" x2="420" y2="240" stroke="var(--navy)" strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Server racks - upper floor */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <g key={i}>
          <rect x={80 + i*32} y="172" width="22" height="60" fill="url(#dots)" stroke="var(--navy)" strokeWidth="0.6" />
          <line x1={80 + i*32} y1="174" x2={80 + i*32 + 22} y2="174" stroke="var(--navy)" strokeWidth="0.6" />
          <line x1={80 + i*32} y1="182" x2={80 + i*32 + 22} y2="182" stroke="var(--navy)" strokeWidth="0.3" />
          <line x1={80 + i*32} y1="190" x2={80 + i*32 + 22} y2="190" stroke="var(--navy)" strokeWidth="0.3" />
          <line x1={80 + i*32} y1="198" x2={80 + i*32 + 22} y2="198" stroke="var(--navy)" strokeWidth="0.3" />
          <line x1={80 + i*32} y1="206" x2={80 + i*32 + 22} y2="206" stroke="var(--navy)" strokeWidth="0.3" />
          <line x1={80 + i*32} y1="214" x2={80 + i*32 + 22} y2="214" stroke="var(--navy)" strokeWidth="0.3" />
          <line x1={80 + i*32} y1="222" x2={80 + i*32 + 22} y2="222" stroke="var(--navy)" strokeWidth="0.3" />
        </g>
      ))}

      {/* MEP plant — lower */}
      <rect x="80" y="260" width="80" height="56" stroke="var(--navy)" strokeWidth="0.8" fill="rgba(14,34,64,0.05)" />
      <text x="120" y="294" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--navy)" letterSpacing="0.1em">UPS · A</text>

      <rect x="170" y="260" width="80" height="56" stroke="var(--navy)" strokeWidth="0.8" fill="rgba(14,34,64,0.05)" />
      <text x="210" y="294" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--navy)" letterSpacing="0.1em">UPS · B</text>

      <rect x="260" y="260" width="60" height="56" stroke="var(--navy)" strokeWidth="0.8" fill="url(#dotsA)" />
      <text x="290" y="294" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--navy)" letterSpacing="0.1em">CHILLER</text>

      <rect x="330" y="260" width="70" height="56" stroke="var(--navy)" strokeWidth="0.8" fill="rgba(14,34,64,0.05)" />
      <text x="365" y="294" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--navy)" letterSpacing="0.1em">GEN-SET</text>

      {/* CRAC units between racks - top */}
      <rect x="60" y="100" width="36" height="48" stroke="var(--navy)" strokeWidth="0.6" fill="url(#dotsA)" />
      <rect x="384" y="100" width="36" height="48" stroke="var(--navy)" strokeWidth="0.6" fill="url(#dotsA)" />
      <text x="78" y="128" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--navy)">CRAC</text>
      <text x="402" y="128" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--navy)">CRAC</text>

      {/* Hot/cold callout */}
      <circle cx="240" cy="124" r="3" fill="var(--accent)" />
      <line x1="240" y1="124" x2="240" y2="60" stroke="var(--navy)" strokeWidth="0.6" />
      <line x1="240" y1="60" x2="340" y2="60" stroke="var(--navy)" strokeWidth="0.6" />
      <text x="346" y="63" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--navy)" letterSpacing="0.1em">CONTAINMENT</text>

      {/* Dimension lines */}
      <line x1="60" y1="345" x2="420" y2="345" stroke="var(--navy)" strokeWidth="0.6" />
      <line x1="60" y1="340" x2="60" y2="350" stroke="var(--navy)" strokeWidth="0.6" />
      <line x1="420" y1="340" x2="420" y2="350" stroke="var(--navy)" strokeWidth="0.6" />
      <text x="240" y="358" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--navy)" letterSpacing="0.1em">48,000 mm</text>

      {/* North arrow */}
      <g transform="translate(440,30)">
        <circle cx="0" cy="0" r="14" stroke="var(--navy)" strokeWidth="0.8" fill="none" />
        <path d="M0 -10 L4 8 L0 4 L-4 8 Z" fill="var(--navy)" />
        <text x="0" y="-18" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--navy)" letterSpacing="0.1em">N</text>
      </g>
    </svg>
  );
}

/* ====== SERVICES (SPEC TABLE) ====== */
const SERVICES = [
  {
    n: "01",
    name: "Data Center",
    em: "Consultancy",
    desc: "End-to-end design and oversight for Tier III & IV facilities — site selection, MEP, white-space and Level-5 commissioning.",
    tags: ["TIA-942", "Uptime III/IV", "MEP", "Commissioning"],
  },
  {
    n: "02",
    name: "Project Management",
    em: "(PMC)",
    desc: "Vendor-neutral PMC across cost, schedule, quality and risk — multi-discipline, multi-stakeholder build-outs.",
    tags: ["PMC", "PMO Setup", "Cost Control"],
  },
  {
    n: "03",
    name: "Engineering",
    em: "Solutions",
    desc: "ELV, life-safety and structured cabling engineering — specified once, built right the first time.",
    tags: ["ELV", "NFPA 75", "Structured Cabling"],
  },
  {
    n: "04",
    name: "Smart Building",
    em: "Systems",
    desc: "BMS, access control, surveillance and energy systems unified under a single auditable control plane.",
    tags: ["BMS", "Access Control", "IoT"],
  },
  {
    n: "05",
    name: "Infrastructure",
    em: "Audits",
    desc: "Independent assessment of resilience, capacity and compliance — with a defensible report you can take to the board.",
    tags: ["Resilience", "Capacity", "Compliance"],
  },
];

function Services() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <span className="plate-mark"><b>PLATE 01</b><span>·</span><span>Capabilities</span></span>
            <h2 className="display">Five disciplines.<br /><em>One</em> senior team.</h2>
          </div>
          <p className="lede">
            <strong>OneTech operates as a single, principal-led practice.</strong>{" "}
            You get certified engineers on every engagement — not a sales lead
            handing the brief to subcontractors after the kickoff dinner.
          </p>
        </div>

        <div className="spec-table">
          {SERVICES.map((s) => (
            <a key={s.n} className="spec-row" href="#contact">
              <div className="spec-no">/ {s.n}</div>
              <div>
                <div className="spec-name display">
                  {s.name}<br />
                  <em>{s.em}</em>
                </div>
              </div>
              <div>
                <p className="spec-desc">{s.desc}</p>
              </div>
              <div className="spec-tags">
                {s.tags.map((t) => (
                  <span key={t} className="spec-tag">{t}</span>
                ))}
              </div>
              <div className="spec-arr"><Arrow /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== PRINCIPLES (ASYMMETRIC GRID) ====== */
function Principles() {
  return (
    <section className="section" id="principles">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <span className="plate-mark"><b>PLATE 02</b><span>·</span><span>Operating Principles</span></span>
            <h2 className="display">Built for the<br />three things that <em>never bend.</em></h2>
          </div>
          <p className="lede">
            Technology that earns its place. Scalability that survives the next
            two refresh cycles. Reliability you can put in a contract.
          </p>
        </div>

        <div className="principles">
          {/* 01 - Technology - wide */}
          <div className="principle s7">
            <div className="principle-icon">
              <PrincipleIcon type="tech" />
            </div>
            <span className="principle-no">/ 01 — Discipline</span>
            <span className="principle-title display">Technology, specified <em>on merit.</em></span>
            <p className="principle-desc">
              Vendor-neutral by design. We specify what fits the brief, the budget
              and the operational reality — never what fits a channel commission.
            </p>
            <div className="principle-foot">
              <span className="principle-stat">12</span>
              <span className="principle-stat-l">Platforms<br/>Audited &amp; Approved</span>
            </div>
          </div>

          {/* 02 - Scalability - yellow */}
          <div className="principle s5 no-r bg-yellow">
            <div className="principle-icon">
              <PrincipleIcon type="scale" />
            </div>
            <span className="principle-no">/ 02 — Headroom</span>
            <span className="principle-title display">Scalability, by <em>default.</em></span>
            <p className="principle-desc">
              Modular MEP, structured cabling and BMS strategies that let capacity
              grow without re-engineering the building.
            </p>
            <div className="principle-foot">
              <span className="principle-stat">3.4×</span>
              <span className="principle-stat-l">Average<br/>Capacity Headroom</span>
            </div>
          </div>

          {/* 03 - Reliability - blue */}
          <div className="principle s5 bg-blue">
            <div className="principle-icon">
              <PrincipleIcon type="rel" inv />
            </div>
            <span className="principle-no">/ 03 — Standard</span>
            <span className="principle-title display">Reliability, <em>contractable.</em></span>
            <p className="principle-desc">
              Concurrent maintainability is the floor, not the ceiling. Every
              design ships with a runbook operations actually wants to read.
            </p>
            <div className="principle-foot">
              <span className="principle-stat">99.982<sup>%</sup></span>
              <span className="principle-stat-l">Portfolio Uptime<br/>(TTM)</span>
            </div>
          </div>

          {/* 04 - Independence - navy wide */}
          <div className="principle s7 no-r bg-navy">
            <div className="principle-icon">
              <PrincipleIcon type="ind" inv />
            </div>
            <span className="principle-no">/ 04 — Posture</span>
            <span className="principle-title display">Independent, <em>always.</em></span>
            <p className="principle-desc">
              No reseller relationships, no margin sharing, no vendor pressure on
              specifications. The brief comes first. Always.
            </p>
            <div className="principle-foot">
              <span className="principle-stat">0</span>
              <span className="principle-stat-l">Channel<br/>Commissions Taken</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleIcon({ type, inv }) {
  const c = inv ? "rgba(243,239,228,0.7)" : "var(--navy)";
  if (type === "tech") {
    return (
      <svg viewBox="0 0 60 60" fill="none">
        <rect x="6" y="6" width="48" height="48" stroke={c} strokeWidth="1" />
        <rect x="14" y="14" width="32" height="32" stroke={c} strokeWidth="1" />
        <rect x="22" y="22" width="16" height="16" stroke={c} strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="6" stroke={c} />
        <line x1="30" y1="54" x2="30" y2="60" stroke={c} />
        <line x1="0" y1="30" x2="6" y2="30" stroke={c} />
        <line x1="54" y1="30" x2="60" y2="30" stroke={c} />
      </svg>
    );
  }
  if (type === "scale") {
    return (
      <svg viewBox="0 0 60 60" fill="none">
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={4+i*4} y={50-i*8} width="6" height={i*8+4} stroke={c} strokeWidth="1" />
        ))}
        <path d="M4 54 L56 8" stroke={c} strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (type === "rel") {
    return (
      <svg viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="26" stroke={c} strokeWidth="1" />
        <circle cx="30" cy="30" r="16" stroke={c} strokeWidth="1" />
        <circle cx="30" cy="30" r="6" stroke={c} strokeWidth="1" />
        <line x1="30" y1="2" x2="30" y2="58" stroke={c} strokeDasharray="2 2" />
        <line x1="2" y1="30" x2="58" y2="30" stroke={c} strokeDasharray="2 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 60" fill="none">
      <path d="M30 4 L52 16 V40 L30 52 L8 40 V16 Z" stroke={c} strokeWidth="1" />
      <path d="M30 16 L42 22 V36 L30 42 L18 36 V22 Z" stroke={c} strokeWidth="1" />
      <circle cx="30" cy="29" r="3" fill={c} />
    </svg>
  );
}

Object.assign(window, { DocBar, Hero, Services, Principles, Arrow });
