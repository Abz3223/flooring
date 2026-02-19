import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  flooringType?: string;
}

export default function TestimonialCard({ name, location, rating, review, flooringType }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-oak">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-oak fill-oak' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{review}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-navy">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        {flooringType && (
          <span className="text-xs bg-oak/10 text-oak px-3 py-1 rounded-full font-semibold">
            {flooringType}
          </span>
        )}
      </div>
    </div>
  );
}
