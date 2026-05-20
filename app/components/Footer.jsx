import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand">
              <img
                src="/onetech-logo.png"
                alt="OneTech ICT Consultancy"
                style={{ height: 40, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="footer-tagline">
              Independent ICT consultancy. Engineering the data centers, smart buildings,
              and cybersecurity infrastructure that modern enterprise depends on.
            </p>
            <div className="footer-reg">CR # 0099-2008 · PSEB Registered · Est. 2008</div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/services#data-center">Data Center Consultancy</Link></li>
              <li><Link href="/services#audits">Infrastructure Audits</Link></li>
              <li><Link href="/services#smart-buildings">Smart Building Systems</Link></li>
              <li><Link href="/services#fire-safety">Fire &amp; Life Safety</Link></li>
              <li><Link href="/services#pmc">Project Management (PMC)</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Cybersecurity</h5>
            <ul>
              <li><Link href="/cybersecurity#vapt">Vulnerability Assessment</Link></li>
              <li><Link href="/cybersecurity#soc">SOC as a Service</Link></li>
              <li><Link href="/cybersecurity#edr">Endpoint Detection &amp; Response</Link></li>
              <li><Link href="/cybersecurity#cloud">Cloud Security</Link></li>
              <li><Link href="/cybersecurity#grc">Compliance &amp; GRC</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About OneTech</Link></li>
              <li><Link href="/about#credentials">Credentials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="mailto:info@onetech.live">info@onetech.live</a></li>
              <li><a href="tel:+925127125163">+92 51 271 2563</a></li>
              <li><a href="tel:+922134836014">+92 21 3483 6014</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2008–2026 · OneTech Consultancy (Pvt.) Ltd. · All rights reserved.</span>
          <nav className="footer-socials" aria-label="Social media">
            <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">Facebook</a>
            <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">Twitter</a>
            <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">YouTube</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
