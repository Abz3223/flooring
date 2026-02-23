export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  neighborhoods: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'City of Toronto',
    description: 'Serving all Toronto neighbourhoods from the Annex to the Beaches.',
    neighborhoods: ['Downtown Core', 'The Annex', 'Yorkville', 'Leslieville', 'The Beaches', 'Roncesvalles'],
  },
  {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'East Toronto',
    description: 'Complete flooring services across Scarborough and surrounding communities.',
    neighborhoods: ['Agincourt', 'Wexford', 'Malvern', 'Guildwood', 'Rouge Hill', 'Woburn'],
  },
  {
    slug: 'north-york',
    name: 'North York',
    region: 'City of Toronto',
    description: 'Premium flooring installation throughout North York and its vibrant communities.',
    neighborhoods: ['Willowdale', 'Don Mills', 'Bayview Village', 'Lawrence Park', 'Newtonbrook', 'Jane-Finch'],
  },
  {
    slug: 'vaughan',
    name: 'Vaughan',
    region: 'York Region',
    description: 'Expert flooring contractors serving Vaughan, Woodbridge, Maple, and Kleinburg.',
    neighborhoods: ['Woodbridge', 'Maple', 'Kleinburg', 'Concord', 'Thornhill (Vaughan)'],
  },
  {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region',
    description: 'Trusted flooring installers serving Markham, Richmond Hill, and Unionville.',
    neighborhoods: ['Unionville', 'Markham Village', 'Cornell', 'Wismer', 'Milliken Mills'],
  },
  {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region',
    description: 'Professional flooring services throughout Mississauga and Port Credit.',
    neighborhoods: ['Port Credit', 'Streetsville', 'Meadowvale', 'Cooksville', 'Erin Mills', 'Lakeview'],
  },
  {
    slug: 'pickering',
    name: 'Pickering',
    region: 'Durham Region',
    description: 'Reliable flooring installation in Pickering, Ajax, and the Durham Region.',
    neighborhoods: ['Bay Ridges', 'Liverpool', 'Dunbarton', 'Highbush', 'Rosebank'],
  },
];
