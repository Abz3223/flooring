import { BUSINESS_HOURS } from '@/src/constants/contact'

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
    email: 'torontoflooringinstallers@gmail.com',
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
    // Hours come from BUSINESS_HOURS so the schema cannot drift from the
    // hours shown on /contact and /thank-you. Sunday is "by appointment",
    // which openingHoursSpecification cannot express, so it is omitted.
    openingHoursSpecification: BUSINESS_HOURS.schema.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
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
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Floor Repair',
            url: 'https://flooringinstallerstoronto.com/services/floor-repair',
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

const BASE_URL = 'https://flooringinstallerstoronto.com'

export function getLocationBusinessSchema(city: string, locationUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: 'Toronto Flooring Installers',
    url: locationUrl,
    telephone: '+1-647-905-0050',
    email: 'torontoflooringinstallers@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2061 McCowan Rd',
      addressLocality: 'Scarborough',
      addressRegion: 'ON',
      postalCode: 'M1S 3Y6',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
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
