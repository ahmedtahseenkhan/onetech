/* global React */

/* ========= SECTION: CERTIFICATIONS + AFFILIATIONS ========= */
const CERTS = [
  {
    mark: "CDCS",
    title: "Certified Data Centre Specialist",
    desc: "Advanced operational design competency.",
    issuer: "EPI / CNet",
  },
  {
    mark: "CDCP",
    title: "Certified Data Centre Professional",
    desc: "Foundational facility planning & operations.",
    issuer: "EPI / CNet",
  },
  {
    mark: "CDMS",
    title: "Certified Data Centre Migration Specialist",
    desc: "End-to-end migration governance.",
    issuer: "EPI",
  },
  {
    mark: "CTDC",
    title: "Certified TIA-942 Design Consultant",
    desc: "TIA-942 conformity design authority.",
    issuer: "TIA / EPI",
  },
];

function Certifications() {
  return (
    <section className="section cert-section" id="certifications">
      <span className="section-index">§ 03 / Credentials</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Credentials &amp; affiliations</span>
          <h2 className="serif">
            The paperwork<br />
            <em>that actually matters.</em>
          </h2>
          <p className="lede">
            <strong>Anyone can claim expertise.</strong> Our team holds the
            certifications regulators, auditors and insurers actually recognize
            — and we keep them current.
          </p>
        </div>

        <div className="cert-grid">
          {CERTS.map((c) => (
            <div key={c.mark} className="cert">
              <div className="cert-monogram">{c.mark}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <span className="cert-issuer">Issued by {c.issuer}</span>
            </div>
          ))}
        </div>

        <div className="aff-row">
          <span className="aff-label">/ Affiliations</span>
          <div className="aff-list">
            <span className="aff-item">
              Uptime Institute
              <small>Authorized Design Reviewer</small>
            </span>
            <span className="aff-item">
              TIA
              <small>Telecommunications Industry Association</small>
            </span>
            <span className="aff-item">
              NFPA
              <small>National Fire Protection Association</small>
            </span>
            <span className="aff-item">
              PSEB
              <small>Pakistan Software Export Board</small>
            </span>
            <span className="aff-item">
              BICSI
              <small>Cabling &amp; ICT Infrastructure</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= SECTION: PROCESS ========= */
function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We interrogate the brief, the site and the operational reality — not the assumptions." },
    { n: "02", t: "Engineering", d: "Concept → schematic → tendered design. Every drawing carries an engineer's stamp." },
    { n: "03", t: "Procurement", d: "Vendor-neutral RFPs. We evaluate against the specification, not the relationship." },
    { n: "04", t: "Commissioning", d: "Witnessed testing, Level-5 commissioning and a runbook handed to operations on day one." },
  ];
  return (
    <section className="section" id="process">
      <span className="section-index">§ 04 / Process</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How we work</span>
          <h2 className="serif">
            A method that<br />
            <em>survives</em> contact with reality.
          </h2>
          <p className="lede">
            Four phases. One accountable principal from kickoff to handover.
            Documentation discipline that makes audits painless and successors
            grateful.
          </p>
        </div>

        <div className="process">
          {steps.map((s) => (
            <div key={s.n} className="process-step">
              <span className="step-no">PHASE / {s.n}</span>
              <span className="step-title serif">{s.t}</span>
              <span className="step-desc">{s.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========= SECTION: PARTNERS ========= */
const PARTNERS = [
  "Schneider Electric",
  "Siemens",
  "Honeywell",
  "ABB",
  "Cisco",
  "APC",
  "Vertiv",
  "Xtralis",
  "ViRDI",
  "ATTOM",
  "Skyworth",
  "Kansai",
  "Legrand",
  "CommScope",
];

function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners">
      <div className="wrap partners-head">
        <h3 className="serif">Trusted partners &amp; specified vendors</h3>
        <span className="mono" style={{ color: "var(--text-muted)" }}>
          / 14 active partnerships
        </span>
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

/* ========= SECTION: LOCATIONS ========= */
function Locations() {
  return (
    <section className="section" id="locations">
      <span className="section-index">§ 05 / Presence</span>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Where we operate</span>
          <h2 className="serif">
            Two offices.<br />
            <em>One</em> standard of work.
          </h2>
          <p className="lede">
            Headquartered in Pakistan, executing across the GCC and South Asia.
            Site-attended engineering, not remote-only consulting.
          </p>
        </div>

        <div className="locations">
          <div className="loc">
            <MapSVG />
            <div className="loc-head">
              <span className="loc-city serif">Islamabad</span>
              <span className="loc-coord">
                <b>HQ — N 33° / E 73°</b>
                33.6844° N<br />
                73.0479° E
              </span>
            </div>
            <p className="loc-addr">
              1st Floor, The Onyx Plaza, Plot 2A/28<br />
              F-7 Markaz, Commercial Area<br />
              Islamabad, Pakistan
            </p>
            <div className="loc-meta">
              <div><b>Phone</b>+92 51 8311 222</div>
              <div><b>Email</b>info@onetech.live</div>
            </div>
          </div>

          <div className="loc">
            <MapSVG variant="b" />
            <div className="loc-head">
              <span className="loc-city serif">Karachi</span>
              <span className="loc-coord">
                <b>SOUTH — N 24° / E 67°</b>
                24.8607° N<br />
                67.0011° E
              </span>
            </div>
            <p className="loc-addr">
              Office No. 306, 3rd Floor<br />
              Silver Trade Tower, SB-4, Block 13A<br />
              Gulshan-e-Iqbal, Karachi, Pakistan
            </p>
            <div className="loc-meta">
              <div><b>Phone</b>+92 21 3499 8989</div>
              <div><b>Email</b>karachi@onetech.live</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSVG({ variant }) {
  const points = variant === "b"
    ? [[120,180],[180,140],[150,200],[210,170],[160,230],[200,100],[100,140]]
    : [[120,120],[160,90],[200,140],[140,170],[170,200],[110,160],[190,180]];
  return (
    <svg className="loc-map" viewBox="0 0 240 240" fill="none">
      <defs>
        <pattern id={`grid-${variant||'a'}`} width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill={`url(#grid-${variant||'a'})`} />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="currentColor" />
      ))}
      <circle cx={points[0][0]} cy={points[0][1]} r="10" stroke="var(--accent)" strokeWidth="1.4" fill="none" />
      <circle cx={points[0][0]} cy={points[0][1]} r="3" fill="var(--accent)" />
    </svg>
  );
}

/* ========= SECTION: CTA ========= */
function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-inner">
        <h2 className="serif">
          Ready to spec it<br />
          <em>right the first time?</em>
        </h2>
        <div className="cta-side">
          <span className="eyebrow">Start a conversation</span>
          <p className="lede">
            Send the brief, the floorplan, or just a question. A principal
            engineer responds within one business day — no funnel, no SDR.
          </p>
          <div className="cta-btns">
            <a href="mailto:info@onetech.live" className="btn dark">
              info@onetech.live <Arrow />
            </a>
            <a href="#locations" className="btn ghost">
              Visit an office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= SECTION: FOOTER ========= */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark"><span>1T</span></span>
              <span>One<em>Tech</em></span>
            </a>
            <p>
              Independent technology consultancy. We design and audit the
              mission-critical infrastructure others can&rsquo;t afford to get
              wrong.
            </p>
            <span className="mono" style={{ color: "var(--text-muted)" }}>
              CR # 0099-2008 · PSEB Registered
            </span>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Data Center Consultancy</a></li>
              <li><a href="#services">Project Management</a></li>
              <li><a href="#services">Engineering Solutions</a></li>
              <li><a href="#services">Smart Building Systems</a></li>
              <li><a href="#services">Infrastructure Audits</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#solutions">Principles</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#certifications">Credentials</a></li>
              <li><a href="#locations">Locations</a></li>
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
        <div className="footer-bottom">
          <span>© 2008–2026 · OneTech Consultancy (Pvt.) Ltd. — Envisioning the possibility.</span>
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
  Certifications,
  Process,
  Partners,
  Locations,
  CTA,
  Footer,
});
