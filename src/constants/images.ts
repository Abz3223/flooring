export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  location: string;
  /** Service page this project links to. Fixes dead clicks on the gallery
   *  (Clarity logged dead clicks in 22% of sessions, Sept 2026) and gives the
   *  service pages a contextual in-body link from the homepage. */
  href: string;
}

export const PROJECT_IMAGES: ProjectImage[] = [
  {
    src: '/engineered-hardwood-flooring-installation-toronto.jpg',
    alt: 'Engineered hardwood flooring installation in Toronto living room',
    caption: 'Engineered hardwood in a modern Toronto living room',
    category: 'Hardwood',
    location: 'North York, Toronto',
    href: '/services/hardwood-flooring-installation',
  },
  {
    src: '/commercial-carpet-tile-flooring-installation-toronto-markham.jpg',
    alt: 'Commercial carpet tile flooring installation in Markham office',
    caption: 'Commercial carpet tile installation, Markham office',
    category: 'Carpet',
    location: 'Markham, York Region',
    href: '/services/carpet-installation',
  },
  {
    src: '/custom-staircase-renovation-wood-treads-toronto-installers.jpeg',
    alt: 'Custom staircase renovation with wood treads in Toronto',
    caption: 'Custom white oak open-riser staircase renovation',
    category: 'Hardwood',
    location: 'Vaughan, York Region',
    href: '/services/hardwood-flooring-installation',
  },
  {
    src: '/commercial-elevator-lobby-carpet-tile-flooring-toronto-installers.jpeg',
    alt: 'Commercial elevator lobby carpet tile flooring in Toronto',
    caption: 'Elevator lobby carpet tile, commercial project',
    category: 'Carpet',
    location: 'Downtown Toronto',
    href: '/services/carpet-installation',
  },
  {
    src: '/toronto-bathroom-renovation-tile-flooring-toronto..jpg',
    alt: 'Bathroom tile flooring renovation in Toronto home',
    caption: 'Large-format porcelain tile bathroom renovation',
    category: 'Tile',
    location: 'Mississauga, Peel Region',
    href: '/services/tile-flooring-installation',
  },
  {
    src: '/installers-commercial-wood-look-flooring-installation-toronto.jpeg',
    alt: 'Commercial wood-look flooring installation in Toronto',
    caption: 'Wood-look LVP in a Toronto commercial space',
    category: 'Vinyl / LVP',
    location: 'Scarborough, Toronto',
    href: '/services/vinyl-flooring-installation',
  },
];
