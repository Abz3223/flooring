import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { ServiceArea } from '@/types/database';
import { CONTACT_INFO } from '@/constants/contact';
import { FLOORING_SERVICES } from '@/constants/services';
import { PROJECT_IMAGES } from '@/constants/images';
import ServiceCard from '@/components/ServiceCard';
import LeadForm from '@/components/LeadForm';
import NearbyLocations from '@/components/NearbyLocations';
import LocationFAQ from '@/components/LocationFAQ';

const locationSlugs = [
  'toronto',
  'scarborough',
  'north-york',
  'vaughan',
  'markham',
  'mississauga',
  'pickering',
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: 'Location Not Found' };
}

export default async function LocationPage({ params }: Props) {
  notFound();
}
