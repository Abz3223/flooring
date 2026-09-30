export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  location: string;
  /** Where the card links. Keeps the dead-click fix (Clarity logged dead
   *  clicks in 22% of sessions, Sept 2026) but points at the LOCATION page for
   *  the city in `location` rather than the service page. The service grid
   *  above already links all six services, so the old hrefs were six duplicate
   *  links to four URLs; these six are distinct, and three of them
   *  (north-york, markham, mississauga) had no contextual in-body link from
   *  the homepage at all. */
  href: string;
}

export const PROJECT_IMAGES: ProjectImage[] = [
  {
    src: '/engineered-hardwood-flooring-installation-toronto.jpg',
    alt: 'Engineered hardwood flooring installation in Toronto living room',
    caption: 'Engineered hardwood in a modern Toronto living room',
    category: 'Hardwood',
    location: 'North York, Toronto',
    href: '/locations/north-york',
  },
  {
    src: '/commercial-carpet-tile-flooring-installation-toronto-markham.jpg',
    alt: 'Commercial carpet tile flooring installation in Markham office',
    caption: 'Commercial carpet tile installation, Markham office',
    category: 'Carpet',
    location: 'Markham, York Region',
    href: '/locations/markham',
  },
  {
    src: '/custom-staircase-renovation-wood-treads-toronto-installers.jpeg',
    alt: 'Custom staircase renovation with wood treads in Toronto',
    caption: 'Custom white oak open-riser staircase renovation',
    category: 'Hardwood',
    location: 'Vaughan, York Region',
    href: '/locations/vaughan',
  },
  {
    src: '/commercial-elevator-lobby-carpet-tile-flooring-toronto-installers.jpeg',
    alt: 'Commercial elevator lobby carpet tile flooring in Toronto',
    caption: 'Elevator lobby carpet tile, commercial project',
    category: 'Carpet',
    location: 'Downtown Toronto',
    href: '/locations/toronto',
  },
  {
    src: '/toronto-bathroom-renovation-tile-flooring-toronto..jpg',
    alt: 'Bathroom tile flooring renovation in Toronto home',
    caption: 'Large-format porcelain tile bathroom renovation',
    category: 'Tile',
    location: 'Mississauga, Peel Region',
    href: '/locations/mississauga',
  },
  {
    src: '/installers-commercial-wood-look-flooring-installation-toronto.jpeg',
    alt: 'Commercial wood-look flooring installation in Toronto',
    caption: 'Wood-look LVP in a Toronto commercial space',
    category: 'Vinyl / LVP',
    location: 'Scarborough, Toronto',
    href: '/locations/scarborough',
  },
];
