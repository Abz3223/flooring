import type { ServiceSchemaInput } from '../lib/schema'

const BASE_URL = 'https://flooringinstallerstoronto.com'

export const serviceSchemaData: Record<string, ServiceSchemaInput> = {
  'hardwood-flooring-installation': {
    name: 'Hardwood Flooring Installation',
    description:
      'Professional solid and engineered hardwood flooring installation for houses and condos across Toronto and the GTA. All species including oak, maple, walnut, and wide-plank white oak.',
    serviceType: 'Hardwood Flooring Installation',
    url: `${BASE_URL}/services/hardwood-flooring-installation`,
  },
  'laminate-flooring-installation': {
    name: 'Laminate Flooring Installation',
    description:
      'Durable laminate flooring installation for residential and commercial properties throughout Toronto and the GTA. AC4 and AC5 commercial-grade products available.',
    serviceType: 'Laminate Flooring Installation',
    url: `${BASE_URL}/services/laminate-flooring-installation`,
  },
  'vinyl-flooring-installation': {
    name: 'Vinyl & LVP Flooring Installation',
    description:
      '100% waterproof luxury vinyl plank (LVP) and vinyl flooring installation in Toronto and the GTA. Ideal for basements, kitchens, bathrooms, and condos.',
    serviceType: 'Vinyl Flooring Installation',
    url: `${BASE_URL}/services/vinyl-flooring-installation`,
  },
  'tile-flooring-installation': {
    name: 'Tile Flooring Installation',
    description:
      'Professional porcelain, ceramic, and natural stone tile installation for floors, shower surrounds, backsplashes, and feature walls across Toronto and the GTA.',
    serviceType: 'Tile Flooring Installation',
    url: `${BASE_URL}/services/tile-flooring-installation`,
  },
  'carpet-installation': {
    name: 'Carpet Installation',
    description:
      'Professional carpet installation for bedrooms, stairs, and basements throughout Toronto and the GTA. Cut pile, berber, and pattern carpets in all styles and brands.',
    serviceType: 'Carpet Installation',
    url: `${BASE_URL}/services/carpet-installation`,
  },
}
