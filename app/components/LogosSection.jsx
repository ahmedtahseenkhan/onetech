// All logos sourced directly from onetech.live/wp-content/uploads/

const AFFILIATIONS = [
  { src: '/logos/affil-unnamed-9.png',    alt: 'OneTech Affiliation Partner' },
  { src: '/logos/affil-unnamed-8.png',    alt: 'OneTech Affiliation Partner' },
  { src: '/logos/affil-unnamed-2-2.jpg',  alt: 'OneTech Affiliation Partner' },
  { src: '/logos/affil-unnamed-10-1.png', alt: 'OneTech Affiliation Partner' },
  { src: '/logos/affil-unnamed-11-1.png', alt: 'OneTech Affiliation Partner' },
];

const ACCREDITATIONS = [
  { src: '/logos/accred-unnamed-1-300x98.png',   alt: 'OneTech Accreditation' },
  { src: '/logos/accred-unnamed-3-300x98.png',   alt: 'OneTech Accreditation' },
  { src: '/logos/accred-unnamed-4-300x98.png',   alt: 'OneTech Accreditation' },
  { src: '/logos/accred-unnamed-300x98.png',     alt: 'OneTech Accreditation' },
  { src: '/logos/accred-unnamed-300x98.jpg',     alt: 'OneTech Accreditation' },
  { src: '/logos/accred-unnamed-2-1-300x98.png', alt: 'OneTech Accreditation' },
];

const ASSOCIATIONS = [
  { src: '/logos/assoc-unnamed-3-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-4-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-5-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-6-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-8-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-9-1.jpg',   alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-12-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-13-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-14-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-16-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-17-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-18-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-19-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-20-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-21-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-22-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-23-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-24-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-25-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-26-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-27-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-28-1.png',  alt: 'Industry Association' },
  { src: '/logos/assoc-unnamed-30-1.png',  alt: 'Industry Association' },
];

const CLIENTS = [
  { src: '/logos/client-unnamed-12-2.png', alt: 'OneTech Client' },
  { src: '/logos/client-unnamed-13-2.png', alt: 'OneTech Client' },
  { src: '/logos/client-unnamed-9-2.jpg',  alt: 'OneTech Client' },
  { src: '/logos/client-unnamed-3-3.jpg',  alt: 'OneTech Client' },
];

/* Doubled list for seamless marquee loop */
const ASSOC_DOUBLED = [...ASSOCIATIONS, ...ASSOCIATIONS];

export default function LogosSection({ cream = false }) {
  return (
    <section className={`logos-section${cream ? ' cream' : ''}`} aria-label="Affiliations, Associations, Accreditations and Clients">
      <div className="wrap">

        {/* ── Affiliations ── */}
        <div className="logos-group">
          <div className="logos-group-header">
            <span className="logos-group-label">Affiliations</span>
            <div className="logos-group-divider" />
            <span className="logos-group-count">{AFFILIATIONS.length} affiliates</span>
          </div>
          <div className="logo-grid">
            {AFFILIATIONS.map((logo, i) => (
              <div key={i} className="logo-item" title={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Accreditations ── */}
        <div className="logos-group">
          <div className="logos-group-header">
            <span className="logos-group-label">Accreditations</span>
            <div className="logos-group-divider" />
            <span className="logos-group-count">{ACCREDITATIONS.length} accreditations</span>
          </div>
          <div className="logo-grid">
            {ACCREDITATIONS.map((logo, i) => (
              <div key={i} className="logo-item accredd" title={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Associations — scrolling marquee ── */}
        <div className="logos-group">
          <div className="logos-group-header">
            <span className="logos-group-label">Associations</span>
            <div className="logos-group-divider" />
            <span className="logos-group-count">{ASSOCIATIONS.length} associations</span>
          </div>
          <div className="assoc-marquee" aria-label="Scrolling list of industry associations">
            <div className="assoc-track" aria-hidden="true">
              {ASSOC_DOUBLED.map((logo, i) => (
                <div key={i} className="assoc-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Clients ── */}
        <div className="logos-group" style={{ marginBottom: 0 }}>
          <div className="logos-group-header">
            <span className="logos-group-label">Our Clients</span>
            <div className="logos-group-divider" />
            <span className="logos-group-count">Trusted by leading organisations</span>
          </div>
          <div className="clients-grid">
            {CLIENTS.map((logo, i) => (
              <div key={i} className="client-card" title={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
