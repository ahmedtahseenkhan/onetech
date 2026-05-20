'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function ChevronIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const SERVICES_ITEMS = [
  { label: 'Data Center Consultancy',  href: '/services#data-center',    icon: '🏢' },
  { label: 'Infrastructure Audits',    href: '/services#audits',          icon: '🔍' },
  { label: 'Tier III/IV Design',       href: '/services#tier-design',     icon: '📐' },
  { label: 'Smart Building Systems',   href: '/services#smart-buildings', icon: '🏗️' },
  { label: 'Fire & Life Safety',       href: '/services#fire-safety',     icon: '🔥' },
  { label: 'Project Management (PMC)', href: '/services#pmc',             icon: '📋' },
];

const CYBER_ITEMS = [
  { label: 'Vulnerability Assessment & VAPT', href: '/cybersecurity#vapt',  icon: '🛡️' },
  { label: 'SOC as a Service',               href: '/cybersecurity#soc',   icon: '👁️' },
  { label: 'Endpoint Detection & Response',  href: '/cybersecurity#edr',   icon: '💻' },
  { label: 'Cloud Security',                 href: '/cybersecurity#cloud', icon: '☁️' },
  { label: 'SIEM & Threat Intelligence',     href: '/cybersecurity#siem',  icon: '📊' },
  { label: 'Compliance & GRC',               href: '/cybersecurity#grc',   icon: '✅' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) setDropdown(null);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDropdown(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleDropdown = (name) => setDropdown(prev => (prev === name ? null : name));
  const closeAll = () => { setDropdown(null); setMenuOpen(false); };

  return (
    <header ref={headerRef} role="banner" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: scrolled ? '0 4px 32px rgba(14,34,64,0.10)' : 'none',
      transition: 'box-shadow 0.3s, background 0.3s',
    }}>
      <div className="wrap">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          height: 88,
        }}>

          {/* Logo */}
          <Link href="/" aria-label="OneTech — home" onClick={closeAll} style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src="/onetech-logo.png"
              alt="OneTech ICT Consultancy"
              style={{ height: 160, width: 160, display: 'block', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav — pill container */}
          <nav aria-label="Main navigation" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flex: 1,
            justifyContent: 'center',
          }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} onClick={closeAll} style={{
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-2)',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                {label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('services')}
                aria-expanded={dropdown === 'services'}
                aria-haspopup="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 999,
                  fontSize: '0.9rem', fontWeight: 500,
                  color: dropdown === 'services' ? 'var(--amber)' : 'var(--text-2)',
                  background: dropdown === 'services' ? 'var(--amber-light)' : 'none',
                  border: 'none', cursor: 'pointer', font: 'inherit',
                  transition: 'all 0.15s',
                }}
              >
                Services
                <span style={{ transform: dropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'flex' }}>
                  <ChevronIcon />
                </span>
              </button>
              {dropdown === 'services' && (
                <DropdownMenu items={SERVICES_ITEMS} viewAll={{ label: 'View all services', href: '/services' }} accentColor="var(--amber)" onClose={closeAll} />
              )}
            </div>

            {/* Cybersecurity dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('cyber')}
                aria-expanded={dropdown === 'cyber'}
                aria-haspopup="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 999,
                  fontSize: '0.9rem', fontWeight: 500,
                  color: dropdown === 'cyber' ? 'var(--azure)' : 'var(--text-2)',
                  background: dropdown === 'cyber' ? 'var(--azure-light)' : 'none',
                  border: 'none', cursor: 'pointer', font: 'inherit',
                  transition: 'all 0.15s',
                }}
              >
                Cybersecurity
                <span style={{ transform: dropdown === 'cyber' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'flex' }}>
                  <ChevronIcon />
                </span>
              </button>
              {dropdown === 'cyber' && (
                <DropdownMenu items={CYBER_ITEMS} viewAll={{ label: 'Full cybersecurity platform', href: '/cybersecurity' }} accentColor="var(--azure)" onClose={closeAll} />
              )}
            </div>

            {[
              { label: 'Credentials', href: '/about#credentials' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} onClick={closeAll} style={{
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-2)',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link href="/contact" onClick={closeAll} style={{
              padding: '9px 20px', borderRadius: 999,
              fontSize: '0.875rem', fontWeight: 600,
              color: 'var(--navy)',
              border: '1.5px solid var(--border)',
              background: 'transparent',
              transition: 'all 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = 'var(--cream)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Get in touch
            </Link>
            <Link href="/contact#book" onClick={closeAll} style={{
              padding: '9px 22px', borderRadius: 999,
              fontSize: '0.875rem', fontWeight: 700,
              color: '#fff',
              background: 'var(--amber)',
              border: '1.5px solid var(--amber)',
              transition: 'all 0.15s',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 12px rgba(0,166,81,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--amber-dark)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,166,81,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--amber)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,166,81,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book Consultation
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => { setMenuOpen(!menuOpen); setDropdown(null); }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                display: 'none',
                flexDirection: 'column', justifyContent: 'center', gap: 5,
                width: 40, height: 40,
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                padding: '0 9px',
                cursor: 'pointer', background: 'none',
              }}
              className="hamburger-btn"
            >
              <span style={{ display: 'block', width: '100%', height: 1.5, background: 'var(--navy)', borderRadius: 2, transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <span style={{ display: 'block', width: '100%', height: 1.5, background: 'var(--navy)', borderRadius: 2, transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '100%', height: 1.5, background: 'var(--navy)', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" style={{
          display: 'flex', flexDirection: 'column',
          background: 'var(--white)',
          borderTop: '1px solid var(--border)',
          padding: '12px 16px 20px',
          gap: 2,
        }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} onClick={closeAll} style={{ padding: '11px 16px', borderRadius: 10, fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-2)' }}>{label}</Link>
          ))}
          <span style={{ padding: '10px 16px 4px', fontSize: '0.68rem', fontFamily: 'var(--f-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--amber-dark)', fontWeight: 600 }}>
            Services
          </span>
          {SERVICES_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeAll} style={{ padding: '9px 16px 9px 28px', borderRadius: 10, fontSize: '0.875rem', color: 'var(--text-2)' }}>
              {item.label}
            </Link>
          ))}
          <Link href="/services" onClick={closeAll} style={{ padding: '9px 16px 9px 28px', fontWeight: 700, color: 'var(--navy)', fontSize: '0.875rem' }}>View all services →</Link>

          <span style={{ padding: '10px 16px 4px', fontSize: '0.68rem', fontFamily: 'var(--f-mono)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--azure)', fontWeight: 600 }}>
            Cybersecurity
          </span>
          {CYBER_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeAll} style={{ padding: '9px 16px 9px 28px', borderRadius: 10, fontSize: '0.875rem', color: 'var(--text-2)' }}>
              {item.label}
            </Link>
          ))}
          <Link href="/cybersecurity" onClick={closeAll} style={{ padding: '9px 16px 9px 28px', fontWeight: 700, color: 'var(--navy)', fontSize: '0.875rem' }}>Full cybersecurity platform →</Link>

          {[
            { label: 'Credentials', href: '/about#credentials' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} onClick={closeAll} style={{ padding: '11px 16px', borderRadius: 10, fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-2)' }}>{label}</Link>
          ))}

          <Link href="/contact" onClick={closeAll} style={{
            marginTop: 8, padding: '13px 16px',
            background: 'var(--amber)', color: '#fff',
            borderRadius: 12, fontWeight: 700, textAlign: 'center', fontSize: '0.9rem',
          }}>
            Book Consultation →
          </Link>
        </nav>
      )}
    </header>
  );
}

function DropdownMenu({ items, viewAll, accentColor, onClose }) {
  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 14px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 18,
      boxShadow: '0 20px 60px rgba(14,34,64,0.16), 0 4px 16px rgba(14,34,64,0.08)',
      padding: 8,
      minWidth: 260,
      zIndex: 200,
    }}>
      {/* Arrow */}
      <div style={{
        position: 'absolute', top: -6, left: '50%',
        transform: 'translateX(-50%) rotate(45deg)',
        width: 12, height: 12,
        background: 'var(--white)',
        borderLeft: '1px solid var(--border)',
        borderTop: '1px solid var(--border)',
      }} />
      {items.map((item) => (
        <Link key={item.label} href={item.href} onClick={onClose} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 14px', borderRadius: 10,
          fontSize: '0.875rem', color: 'var(--text-2)',
          transition: 'all 0.13s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--navy)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-2)'; }}
        >
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
          {item.label}
        </Link>
      ))}
      <div style={{ borderTop: '1px solid var(--border)', margin: '6px 8px' }} />
      <Link href={viewAll.href} onClick={onClose} style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px', borderRadius: 10,
        fontSize: '0.875rem', fontWeight: 700,
        color: accentColor,
        textDecoration: 'none',
        transition: 'all 0.13s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
      >
        {viewAll.label} →
      </Link>
    </div>
  );
}
