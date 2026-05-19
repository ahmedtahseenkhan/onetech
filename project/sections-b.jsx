/* global React */

/* ====== CERTIFICATIONS ====== */
const CERTS = [
  { mark: "CDCS", title: "Certified Data Centre Specialist", desc: "Advanced operational design competency.", issuer: "EPI / CNet" },
  { mark: "CDCP", title: "Certified Data Centre Professional", desc: "Foundational facility planning & operations.", issuer: "EPI / CNet" },
  { mark: "CDMS", title: "Certified Data Centre Migration Specialist", desc: "End-to-end migration governance.", issuer: "EPI" },
  { mark: "CTDC", title: "Certified TIA-942 Design Consultant", desc: "TIA-942 conformity design authority.", issuer: "TIA / EPI" },
];

function Certifications() {
  return (
    <section className="section cert-section" id="credentials">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <span className="plate-mark"><b>PLATE 03</b><span>·</span><span>Credentials &amp; Affiliations</span></span>
            <h2 className="display">The paperwork<br /><em>that actually matters.</em></h2>
          </div>
          <p className="lede">
            <strong>Anyone can claim expertise.</strong> Our team holds the
            certifications regulators, auditors and insurers actually recognise
            — and we keep them current.
          </p>
        </div>

        <div className="cert-grid">
          {CERTS.map((c) => (
            <div key={c.mark} className="cert">
              <div className="cert-stamp">{c.mark}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <span className="cert-issuer">Issued by {c.issuer}</span>
            </div>
          ))}
        </div>

        <div className="aff-row">
          <span className="label">/ Affiliations</span>
          <div className="aff-list">
            <span className="aff-item">Uptime Institute<small>Authorized Design Reviewer</small></span>
            <span className="aff-item">TIA<small>Telecom Industry Association</small></span>
            <span className="aff-item">NFPA<small>Fire Protection Association</small></span>
            <span className="aff-item">PSEB<small>Software Export Board</small></span>
            <span className="aff-item">BICSI<small>Cabling &amp; ICT Infrastructure</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== PROCESS (DIMENSIONED FLOW) ====== */
function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We interrogate the brief, the site and the operational reality — not the assumptions." },
    { n: "02", t: "Engineering", d: "Concept → schematic → tender. Every drawing carries an engineer's stamp." },
    { n: "03", t: "Procurement", d: "Vendor-neutral RFPs evaluated against the specification, not the relationship." },
    { n: "04", t: "Commissioning", d: "Level-5 commissioning, witnessed testing, and a runbook handed over on day one." },
  ];
  return (
    <section className="section dark" id="process">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <span className="plate-mark"><b>PLATE 04</b><span>·</span><span>Method</span></span>
            <h2 className="display">A method that<br /><em>survives</em> contact with reality.</h2>
          </div>
          <p className="lede">
            Four phases. One accountable principal from kickoff to handover.
            Documentation discipline that makes audits painless — and
            successors grateful.
          </p>
        </div>

        <div className="process-flow">
          {steps.map((s) => (
            <div key={s.n} className="proc-step">
              <span className="ph-tag">Phase / {s.n}</span>
              <span className="proc-node">{s.n}</span>
              <span className="proc-title display">{s.t}</span>
              <span className="proc-desc">{s.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== PARTNERS ====== */
const PARTNERS = [
  "Schneider Electric", "Siemens", "Honeywell", "ABB", "Cisco", "APC", "Vertiv",
  "Xtralis", "ViRDI", "ATTOM", "Skyworth", "Kansai", "Legrand", "CommScope",
];

function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners">
      <div className="wrap partners-head">
        <h3>Specified vendors &amp; trusted partners</h3>
        <span className="mono" style={{ color: "var(--ink-dim)" }}>14 active partnerships</span>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {doubled.map((p, i) => (
            <span key={i} className="partner-logo">
              <span className="dot" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== LOCATIONS ====== */
function Locations() {
  return (
    <section className="section" id="presence">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <span className="plate-mark"><b>PLATE 05</b><span>·</span><span>Presence</span></span>
            <h2 className="display">Two offices.<br /><em>One</em> standard of work.</h2>
          </div>
          <p className="lede">
            Headquartered in Pakistan, executing across the GCC and South Asia.
            Site-attended engineering, not remote-only consulting.
          </p>
        </div>

        <div className="loc-grid">
          <div className="loc">
            <MapSVG variant="a" />
            <div className="loc-head">
              <span className="loc-city display">Islamabad</span>
              <span className="loc-tag">
                <b>HQ</b>
                <span>33.6844° N<br />73.0479° E</span>
              </span>
            </div>
            <p className="loc-addr">
              1st Floor, The Onyx Plaza, Plot 2A/28<br />
              F-7 Markaz, Commercial Area<br />
              Islamabad, Pakistan
            </p>
            <div className="loc-meta">
              <div><span className="k">Phone</span><span className="v">+92 51 8311 222</span></div>
              <div><span className="k">Email</span><span className="v">info@onetech.live</span></div>
            </div>
          </div>

          <div className="loc">
            <MapSVG variant="b" />
            <div className="loc-head">
              <span className="loc-city display">Karachi</span>
              <span className="loc-tag">
                <b>SOUTH</b>
                <span>24.8607° N<br />67.0011° E</span>
              </span>
            </div>
            <p className="loc-addr">
              Office No. 306, 3rd Floor<br />
              Silver Trade Tower, SB-4, Block 13A<br />
              Gulshan-e-Iqbal, Karachi, Pakistan
            </p>
            <div className="loc-meta">
              <div><span className="k">Phone</span><span className="v">+92 21 3499 8989</span></div>
              <div><span className="k">Email</span><span className="v">karachi@onetech.live</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSVG({ variant }) {
  const pts = variant === "b"
    ? [[40,80],[90,60],[140,90],[110,140],[170,130],[150,180],[100,170],[180,80],[60,150]]
    : [[60,60],[100,40],[140,80],[80,120],[120,140],[170,100],[50,150],[150,160],[100,90]];
  return (
    <svg className="loc-map" viewBox="0 0 240 240" fill="none">
      <defs>
        <pattern id={`g-${variant}`} width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill={`url(#g-${variant})`} />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="2" fill="currentColor" />
        </g>
      ))}
      {/* paths */}
      <path d={`M ${pts[0][0]} ${pts[0][1]} ${pts.slice(1).map(p => `L ${p[0]} ${p[1]}`).join(' ')}`}
        stroke="currentColor" strokeWidth="0.6" fill="none" strokeDasharray="3 3" opacity="0.5" />
      {/* HQ marker */}
      <circle cx={pts[0][0]} cy={pts[0][1]} r="11" stroke="var(--accent)" strokeWidth="1.6" fill="none" />
      <circle cx={pts[0][0]} cy={pts[0][1]} r="3" fill="var(--accent)" />
    </svg>
  );
}

/* ====== CTA ====== */
function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-grid-bg" />
      <div className="wrap cta-inner">
        <h2 className="display">
          Ready to spec it<br /><em>right the first time?</em>
        </h2>
        <div className="cta-side">
          <span className="cta-eyebrow">/ Start a conversation</span>
          <p>
            Send the brief, the floorplan, or just a question. A principal
            engineer responds within one business day — no funnel, no SDR.
          </p>
          <div className="cta-btns">
            <a href="mailto:info@onetech.live" className="btn">info@onetech.live <Arrow /></a>
            <a href="#presence" className="btn ghost">Visit an office</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== FOOTER ====== */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">1T</span>
              <span>One<em>Tech</em></span>
            </a>
            <p>
              Independent technology consultancy. We design and audit the
              mission-critical infrastructure others can&rsquo;t afford to get
              wrong.
            </p>
            <span className="mono" style={{ color: "rgba(243,239,228,0.4)" }}>
              CR # 0099-2008 · PSEB Registered
            </span>
          </div>
          <div className="footer-col">
            <h5>Capabilities</h5>
            <ul>
              <li><a href="#capabilities">Data Center Consultancy</a></li>
              <li><a href="#capabilities">Project Management</a></li>
              <li><a href="#capabilities">Engineering Solutions</a></li>
              <li><a href="#capabilities">Smart Building Systems</a></li>
              <li><a href="#capabilities">Infrastructure Audits</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Practice</h5>
            <ul>
              <li><a href="#principles">Principles</a></li>
              <li><a href="#process">Method</a></li>
              <li><a href="#credentials">Credentials</a></li>
              <li><a href="#presence">Presence</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@onetech.live">info@onetech.live</a></li>
              <li><a href="tel:+925183112222">+92 51 8311 222</a></li>
              <li><a href="tel:+922134998989">+92 21 3499 8989</a></li>
            </ul>
          </div>
        </div>

        <div className="title-block">
          <div className="tb-cell">
            <b>Drawing</b>
            <span>OT—2026—WEB</span>
          </div>
          <div className="tb-cell">
            <b>Issued</b>
            <span>05 / 2026 · REV C</span>
          </div>
          <div className="tb-cell">
            <b>Scale</b>
            <span>NTS</span>
          </div>
          <div className="tb-cell">
            <b>Approved</b>
            <span>OneTech Practice</span>
          </div>
        </div>

        <div className="footer-end">
          <span>© 2008–2026 · OneTech Consultancy (Pvt.) Ltd.</span>
          <span className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">YouTube</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Certifications, Process, Partners, Locations, CTA, Footer,
});
