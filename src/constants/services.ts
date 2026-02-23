export interface FlooringService {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  imageAlt: string;
}

export const FLOORING_SERVICES: FlooringService[] = [
  {
    id: 'hardwood',
    name: 'Hardwood Flooring',
    slug: 'hardwood-flooring-installation',
    icon: 'TreePine',
    shortDesc: 'Classic solid and engineered hardwood installation for lasting beauty and value.',
    description: 'Transform your home with premium hardwood flooring. Our expert installers work with solid and engineered hardwood to deliver stunning results that last decades.',
    benefits: ['Increases property value', 'Timeless aesthetic', 'Durable & long-lasting', 'Easy to refinish'],
    imageAlt: 'Engineered hardwood flooring installation in Toronto home',
  },
  {
    id: 'laminate',
    name: 'Laminate Flooring',
    slug: 'laminate-flooring-installation',
    icon: 'Layers',
    shortDesc: 'Affordable, durable laminate that mimics hardwood and tile at a fraction of the cost.',
    description: 'Laminate flooring offers the look of natural wood or stone with superior durability. Perfect for busy households and commercial spaces.',
    benefits: ['Cost-effective', 'Scratch resistant', 'Easy maintenance', 'Wide style selection'],
    imageAlt: 'Laminate flooring installation Toronto GTA',
  },
  {
    id: 'vinyl',
    name: 'Vinyl & LVP Flooring',
    slug: 'vinyl-flooring-installation',
    icon: 'SquareStack',
    shortDesc: '100% waterproof luxury vinyl plank — ideal for kitchens, bathrooms, and basements.',
    description: 'Luxury Vinyl Plank (LVP) is the fastest-growing flooring choice for good reason. Completely waterproof, realistic wood look, and comfortable underfoot.',
    benefits: ['100% waterproof', 'Pet & kid friendly', 'Comfortable underfoot', 'DIY-friendly profiles'],
    imageAlt: 'Luxury vinyl plank flooring installation in Toronto bathroom',
  },
  {
    id: 'tile',
    name: 'Tile Flooring',
    slug: 'tile-flooring-installation',
    icon: 'Grid',
    shortDesc: 'Professional tile installation for kitchens, bathrooms, and entryways throughout the GTA.',
    description: 'Expert tile installation for any space. From classic ceramic to premium porcelain and natural stone, we handle layouts of all complexities.',
    benefits: ['Hygienic & easy clean', 'Heat & water resistant', 'Infinite style options', 'Lifetime durability'],
    imageAlt: 'Professional tile flooring installation in Toronto kitchen',
  },
  {
    id: 'carpet',
    name: 'Carpet Installation',
    slug: 'carpet-installation',
    icon: 'Sofa',
    shortDesc: 'Cozy, sound-dampening carpet for bedrooms, staircases, and commercial spaces.',
    description: 'Professional carpet installation for residential and commercial projects. We handle everything from bedroom plush to commercial-grade loop pile.',
    benefits: ['Sound dampening', 'Warm & comfortable', 'Wide range of styles', 'Stain-resistant options'],
    imageAlt: 'Carpet installation on residential staircase in Toronto',
  },
];

export const FLOORING_TYPES = [
  'Hardwood',
  'Laminate',
  'Vinyl / LVP',
  'Tile',
  'Carpet',
  'Other / Not Sure',
];
