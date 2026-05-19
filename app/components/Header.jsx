'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ transition: 'transform 0.2s' }}>
      <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const SERVICES_ITEMS = [
  { label: 'Data Center Consultancy',   href: '/services#data-center' },
  { label: 'Infrastructure Audits',     href: '/services#audits' },
  { label: 'Tier III/IV Design',        href: '/services#tier-design' },
  { label: 'Smart Building Systems',    href: '/services#smart-buildings' },
  { label: 'Fire & Life Safety',        href: '/services#fire-safety' },
  { label: 'Project Management (PMC)',  href: '/services#pmc' },
];

const CYBER_ITEMS = [
  { label: 'Vulnerability Assessment & VAPT', href: '/cybersecurity#vapt' },
  { label: 'SOC as a Service',               href: '/cybersecurity#soc' },
  { label: 'Endpoint Detection & Response',  href: '/cybersecurity#edr' },
  { label: 'Cloud Security',                 href: '/cybersecurity#cloud' },
  { label: 'SIEM & Threat Intelligence',     href: '/cybersecurity#siem' },
  { label: 'Compliance & GRC',              href: '/cybersecurity#grc' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // 'services' | 'cyber' | null
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDropdown(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleDropdown = (name) => {
    setDropdown(prev => (prev === name ? null : name));
  };

  const closeAll = () => {
    setDropdown(null);
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header${scrolled ? ' scrolled' : ''}`}
      ref={headerRef}
      role="banner"
    >
      <div className="wrap">
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" className="brand" aria-label="OneTech — home" onClick={closeAll}>
            <div className="brand-mark">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="7" fill="#F4B324"/>
                <text x="14" y="19.5" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill="#0E2240" letterSpacing="0.5">1T</text>
              </svg>
            </div>
            <div className="brand-name">One<em>Tech</em></div>
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/" className="nav-link" onClick={closeAll}>Home</Link>
            <Link href="/about" className="nav-link" onClick={closeAll}>About</Link>

            {/* Services dropdown */}
            <div className="nav-item">
              <button
                className="nav-link"
                onClick={() => toggleDropdown('services')}
                aria-expanded={dropdown === 'services'}
                aria-haspopup="true"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', display: 'flex', alignItems: 'center', gap: 5 }}
              >
                Services
                <span style={{ transform: dropdown === 'services' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'flex' }}>
                  <ChevronIcon />
                </span>
              </button>
              <div className={`nav-dropdown${dropdown === 'services' ? ' open' : ''}`} role="menu">
                {SERVICES_ITEMS.map((item) => (
                  <Link key={item.label} href={item.href} role="menuitem" onClick={closeAll}>
                    <span className="nav-dropdown-dot" />
                    {item.label}
                  </Link>
                ))}
                <div style={{ borderTop: '1px solid var(--border)', margin: '6px 0' }} />
                <Link href="/services" role="menuitem" onClick={closeAll} style={{ fontWeight: 600, color: 'var(--navy)' }}>
                  <span className="nav-dropdown-dot" style={{ background: 'var(--navy)' }} />
                  View all services →
                </Link>
              </div>
            </div>

            {/* Cybersecurity dropdown */}
            <div className="nav-item">
              <button
                className="nav-link"
                onClick={() => toggleDropdown('cyber')}
                aria-expanded={dropdown === 'cyber'}
                aria-haspopup="true"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', display: 'flex', alignItems: 'center', gap: 5 }}
              >
                Cybersecurity
                <span style={{ transform: dropdown === 'cyber' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'flex' }}>
                  <ChevronIcon />
                </span>
              </button>
              <div className={`nav-dropdown${dropdown === 'cyber' ? ' open' : ''}`} role="menu" style={{ minWidth: 280 }}>
                {CYBER_ITEMS.map((item) => (
                  <Link key={item.label} href={item.href} role="menuitem" onClick={closeAll}>
                    <span className="nav-dropdown-dot" style={{ background: 'var(--azure)' }} />
                    {item.label}
                  </Link>
                ))}
                <div style={{ borderTop: '1px solid var(--border)', margin: '6px 0' }} />
                <Link href="/cybersecurity" role="menuitem" onClick={closeAll} style={{ fontWeight: 600, color: 'var(--navy)' }}>
                  <span className="nav-dropdown-dot" style={{ background: 'var(--azure)' }} />
                  Full cybersecurity platform →
                </Link>
              </div>
            </div>

            <Link href="/about#credentials" className="nav-link" onClick={closeAll}>Credentials</Link>
            <Link href="/contact" className="nav-link" onClick={closeAll}>Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="header-actions">
            <Link href="/contact" className="btn btn-outline-dark btn-sm" onClick={closeAll}>
              Get in touch
            </Link>
            <Link href="/contact#book" className="btn btn-primary btn-sm" onClick={closeAll}>
              Book Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => { setMenuOpen(!menuOpen); setDropdown(null); }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" onClick={closeAll}>Home</Link>
        <Link href="/about" onClick={closeAll}>About</Link>

        <span style={{ padding: '10px 16px 4px', fontSize: '0.68rem', fontFamily: 'var(--f-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--amber-dark)', fontWeight: 600 }}>
          Services
        </span>
        {SERVICES_ITEMS.map((item) => (
          <Link key={item.label} href={item.href} onClick={closeAll} style={{ paddingLeft: 28 }}>
            {item.label}
          </Link>
        ))}
        <Link href="/services" onClick={closeAll} style={{ paddingLeft: 28, fontWeight: 700, color: 'var(--navy)' }}>
          View all services
        </Link>

        <span style={{ padding: '10px 16px 4px', fontSize: '0.68rem', fontFamily: 'var(--f-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--azure)', fontWeight: 600 }}>
          Cybersecurity
        </span>
        {CYBER_ITEMS.map((item) => (
          <Link key={item.label} href={item.href} onClick={closeAll} style={{ paddingLeft: 28 }}>
            {item.label}
          </Link>
        ))}
        <Link href="/cybersecurity" onClick={closeAll} style={{ paddingLeft: 28, fontWeight: 700, color: 'var(--navy)' }}>
          Full cybersecurity platform
        </Link>

        <Link href="/about#credentials" onClick={closeAll}>Credentials</Link>
        <Link href="/contact" onClick={closeAll} className="mobile-cta">
          Book Consultation →
        </Link>
      </nav>
    </header>
  );
}
