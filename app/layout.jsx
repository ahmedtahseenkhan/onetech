import { Manrope, JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--f-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--f-mono',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--f-display',
  display: 'swap',
  axes: ['opsz', 'wdth'],
});

export const metadata = {
  metadataBase: new URL('https://onetech.live'),
  title: {
    default: 'OneTech | Mission-Critical Technology Consultancy — Data Centers & Smart Buildings',
    template: '%s | OneTech',
  },
  description:
    "OneTech is Pakistan's leading independent technology consultancy for data centers, smart buildings, and life-safety systems. 17 years of Tier III/IV expertise from Karachi and Islamabad.",
  keywords: [
    'data center consultancy Pakistan',
    'smart building systems',
    'technology consultancy Karachi',
    'technology consultancy Islamabad',
    'Tier III data center design',
    'Tier IV data center',
    'MEP engineering',
    'BMS building management system',
    'life safety systems',
    'CDCS certified',
    'TIA-942',
    'Uptime Institute',
    'OneTech',
    'infrastructure audit',
    'ELV systems',
  ],
  authors: [{ name: 'OneTech Consultancy (Pvt.) Ltd.' }],
  creator: 'OneTech Consultancy (Pvt.) Ltd.',
  publisher: 'OneTech Consultancy (Pvt.) Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://onetech.live',
    siteName: 'OneTech',
    title: 'OneTech | Mission-Critical Technology Consultancy',
    description:
      'Independent data center, smart building, and life-safety engineering consultancy. 17 years · Tier III/IV expertise · Karachi & Islamabad.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OneTech — Mission-Critical Technology Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneTech | Mission-Critical Technology Consultancy',
    description:
      'Independent data center, smart building, and life-safety engineering consultancy. 17 years of Tier III/IV expertise from Pakistan.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://onetech.live',
  },
  verification: {
    google: '',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://onetech.live/#organization',
      name: 'OneTech Consultancy (Pvt.) Ltd.',
      alternateName: 'OneTech',
      url: 'https://onetech.live',
      foundingDate: '2008',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 24 },
      description:
        'Independent technology consultancy specialising in data centers, smart buildings, and life-safety systems. Serving enterprise clients across Pakistan and the GCC.',
      email: 'info@onetech.live',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+92-51-8311-222',
          contactType: 'customer service',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-21-3499-8989',
          contactType: 'customer service',
          areaServed: 'PK',
        },
      ],
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '1st Floor, The Onyx Plaza, Plot 2A/28, F-7 Markaz, Commercial Area',
          addressLocality: 'Islamabad',
          addressRegion: 'ICT',
          addressCountry: 'PK',
        },
        {
          '@type': 'PostalAddress',
          streetAddress:
            'Office No. 306, 3rd Floor, Silver Trade Tower, SB-4, Block 13A, Gulshan-e-Iqbal',
          addressLocality: 'Karachi',
          addressRegion: 'Sindh',
          addressCountry: 'PK',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Consultancy Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Center Consultancy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Project Management (PMC)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engineering Solutions (ELV)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Building Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrastructure Audits' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://onetech.live/#website',
      url: 'https://onetech.live',
      name: 'OneTech',
      publisher: { '@id': 'https://onetech.live/#organization' },
      inLanguage: 'en-PK',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://onetech.live/#webpage',
      url: 'https://onetech.live',
      name: 'OneTech | Mission-Critical Technology Consultancy',
      isPartOf: { '@id': 'https://onetech.live/#website' },
      about: { '@id': 'https://onetech.live/#organization' },
      description:
        "OneTech designs, audits and project-manages the data centers, smart buildings and life-safety systems that owners can't afford to get wrong.",
      inLanguage: 'en-PK',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
