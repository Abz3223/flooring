import { redirect } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/locations/${slug}`);
}
