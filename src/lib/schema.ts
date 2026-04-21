const BUSINESS_ID = 'https://flooringinstallerstoronto.com/#organization'

const SERVICE_AREA_CITIES = [
  { '@type': 'City', name: 'Toronto' },
  { '@type': 'City', name: 'Scarborough' },
  { '@type': 'City', name: 'North York' },
  { '@type': 'City', name: 'Vaughan' },
  { '@type': 'City', name: 'Markham' },
  { '@type': 'City', name: 'Mississauga' },
  { '@type': 'City', name: 'Pickering' },
]

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: 'Toronto Flooring Installers',
    description:
      'Professional flooring installation company serving Toronto and the GTA. Specializing in hardwood, laminate, vinyl/LVP, tile, and carpet installation for residential and commercial properties.',
    url: 'https://flooringinstallerstoronto.com',
    telephone: '+1-647-905-0050',
    email: 'info@flooringinstallerstoronto.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2061 McCowan Rd',
      addressLocality: 'Scarborough',
      addressRegion: 'ON',
      postalCode: 'M1S 3Y6',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.795837,
      longitude: -79.2607885,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: SERVICE_AREA_CITIES,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Flooring Installation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hardwood Flooring Installation',
            url: 'https://flooringinstallerstoronto.com/services/hardwood-flooring-installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laminate Flooring Installation',
            url: 'https://flooringinstallerstoronto.com/services/laminate-flooring-installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl & LVP Flooring Installation',
            url: 'https://flooringinstallerstoronto.com/services/vinyl-flooring-installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tile Flooring Installation',
            url: 'https://flooringinstallerstoronto.com/services/tile-flooring-installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Installation',
            url: 'https://flooringinstallerstoronto.com/services/carpet-installation',
          },
        },
      ],
    },
  }
}

export interface FAQ {
  question: string
  answer: string
}

export function getFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export interface ServiceSchemaInput {
  name: string
  description: string
  serviceType: string
  url: string
}

export function getServiceSchema(input: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: input.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': BUSINESS_ID,
    },
    areaServed: SERVICE_AREA_CITIES,
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
