// All logos sourced directly from onetech.live/wp-content/uploads/

const AFFILIATIONS = [
  { src: '/logos/affil-unnamed-9.png',    name: 'Uptime Institute',  sub: 'Authorized Design Reviewer' },
  { src: '/logos/affil-unnamed-8.png',    name: 'TIA',               sub: 'Telecom Industry Association' },
  { src: '/logos/affil-unnamed-2-2.jpg',  name: 'NFPA',              sub: 'Fire Protection Association' },
  { src: '/logos/affil-unnamed-10-1.png', name: 'PSEB',              sub: 'Software Export Board' },
  { src: '/logos/affil-unnamed-11-1.png', name: 'BICSI',             sub: 'Cabling & ICT Infrastructure' },
];

const ACCREDITATIONS = [
  { src: '/logos/accred-unnamed-1-300x98.png',   name: 'CDCE',  sub: 'Certified Data Centre Expert' },
  { src: '/logos/accred-unnamed-3-300x98.png',   name: 'CDCS',  sub: 'Certified Data Centre Specialist' },
  { src: '/logos/accred-unnamed-4-300x98.png',   name: 'CDCP',  sub: 'Certified Data Centre Professional' },
  { src: '/logos/accred-unnamed-300x98.png',     name: 'CTDC',  sub: 'Certified TIA-942 Design Consultant' },
  { src: '/logos/accred-unnamed-300x98.jpg',     name: 'CDMS',  sub: 'Certified Data Centre Migration Specialist' },
  { src: '/logos/accred-unnamed-2-1-300x98.png', name: 'CDRP',  sub: 'Certified Data Centre Risk Professional' },
];

const ASSOCIATIONS = [
  { src: '/logos/assoc-unnamed-3-1.jpg',  name: 'Xtralis',          sub: 'Life Safety & Security' },
  { src: '/logos/assoc-unnamed-4-1.jpg',  name: 'ViRDI',            sub: 'Access Control Systems' },
  { src: '/logos/assoc-unnamed-5-1.jpg',  name: 'Skyworth',         sub: 'Smart Display Solutions' },
  { src: '/logos/assoc-unnamed-6-1.jpg',  name: 'Schneider Electric',sub: 'Energy Management' },
  { src: '/logos/assoc-unnamed-8-1.jpg',  name: 'Ruckus Wireless',  sub: 'Enterprise Networking' },
  { src: '/logos/assoc-unnamed-9-1.jpg',  name: 'Pakistan Cables',  sub: 'Structured Cabling' },
  { src: '/logos/assoc-unnamed-12-1.png', name: 'OPPLE',            sub: 'Lighting Solutions' },
  { src: '/logos/assoc-unnamed-13-1.png', name: 'NAFFCO',           sub: 'Fire & Safety' },
  { src: '/logos/assoc-unnamed-14-1.png', name: 'Mircom',           sub: 'Life Safety Systems' },
  { src: '/logos/assoc-unnamed-16-1.png', name: 'LONGI Solar',      sub: 'Solar Energy' },
  { src: '/logos/assoc-unnamed-17-1.png', name: 'JinKO Solar',      sub: 'Photovoltaic Modules' },
  { src: '/logos/assoc-unnamed-18-1.png', name: 'Huawei',           sub: 'ICT Infrastructure' },
  { src: '/logos/assoc-unnamed-19-1.png', name: 'Hikvision',        sub: 'Video Surveillance' },
  { src: '/logos/assoc-unnamed-20-1.png', name: 'ABB',              sub: 'Electrification' },
  { src: '/logos/assoc-unnamed-21-1.png', name: 'Cisco',            sub: 'Enterprise Networking' },
  { src: '/logos/assoc-unnamed-22-1.png', name: 'APC',              sub: 'Power Protection' },
  { src: '/logos/assoc-unnamed-23-1.png', name: 'Vertiv',           sub: 'Critical Infrastructure' },
  { src: '/logos/assoc-unnamed-24-1.png', name: 'Honeywell',        sub: 'Building Technologies' },
  { src: '/logos/assoc-unnamed-25-1.png', name: 'Kansai',           sub: 'Paint & Coatings' },
  { src: '/logos/assoc-unnamed-26-1.png', name: 'Legrand',          sub: 'Electrical Installations' },
  { src: '/logos/assoc-unnamed-27-1.png', name: 'CommScope',        sub: 'Network Infrastructure' },
  { src: '/logos/assoc-unnamed-28-1.png', name: 'Siemens',          sub: 'Smart Infrastructure' },
  { src: '/logos/assoc-unnamed-30-1.png', name: 'ATTOM',            sub: 'Technology Solutions' },
];

const CLIENTS = [
  { src: '/logos/client-unnamed-12-2.png', name: 'Islamabad High Court', sub: 'Islamabad' },
  { src: '/logos/client-unnamed-13-2.png', name: 'FWO',                  sub: 'Frontier Works Organisation' },
  { src: '/logos/client-unnamed-3-3.jpg',  name: 'NTC',                  sub: 'National Telecom Corporation' },
];

function GroupHeader({ label, count }) {
  return (
    <div className="logos-group-header">
      <span className="logos-group-label">/ {label}</span>
      <div className="logos-group-divider" />
      <span className="logos-group-count">{count}</span>
    </div>
  );
}

function NamedCard({ src, name, sub, wide = false, large = false }) {
  const cls = large ? 'named-logo-card client-card-lg' : wide ? 'named-logo-card wide' : 'named-logo-card';
  return (
    <div className={cls}>
      <div className="named-logo-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={name} loading="lazy" />
      </div>
      <div>
        <div className="named-logo-name">{name}</div>
        {sub && <div className="named-logo-sub">{sub}</div>}
      </div>
    </div>
  );
}

export default function LogosSection({ cream = false }) {
  return (
    <section
      className={`logos-section${cream ? ' cream' : ''}`}
      aria-label="Affiliations, Accreditations, Associations and Clients"
    >
      <div className="wrap">

        {/* ── Affiliations ── */}
        <div className="logos-group">
          <GroupHeader label="Affiliations" count={`${AFFILIATIONS.length} affiliates`} />
          <div className="named-logo-grid">
            {AFFILIATIONS.map((l) => (
              <NamedCard key={l.name} {...l} />
            ))}
          </div>
        </div>

        {/* ── Accreditations ── */}
        <div className="logos-group">
          <GroupHeader label="Accreditations" count={`${ACCREDITATIONS.length} accreditations`} />
          <div className="named-logo-grid">
            {ACCREDITATIONS.map((l) => (
              <NamedCard key={l.name} {...l} wide />
            ))}
          </div>
        </div>

        {/* ── Associations ── */}
        <div className="logos-group">
          <GroupHeader label="Associations & Technology Partners" count={`${ASSOCIATIONS.length} partners`} />
          <div className="named-logo-grid">
            {ASSOCIATIONS.map((l) => (
              <NamedCard key={l.name} {...l} />
            ))}
          </div>
        </div>

        {/* ── Clients ── */}
        <div className="logos-group" style={{ marginBottom: 0 }}>
          <GroupHeader label="Our Clients" count="Trusted by leading organisations" />
          <div className="named-logo-grid">
            {CLIENTS.map((l) => (
              <NamedCard key={l.name} {...l} large />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
