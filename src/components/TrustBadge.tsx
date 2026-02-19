import { LucideIcon, ShieldCheck, Award, Clock, DollarSign } from 'lucide-react';

interface TrustBadgeProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  award: Award,
  clock: Clock,
  'dollar-sign': DollarSign,
};

export default function TrustBadge({ title, description, icon }: TrustBadgeProps) {
  const IconComponent = iconMap[icon] || ShieldCheck;

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-oak rounded-full flex items-center justify-center">
        <IconComponent className="w-6 h-6 text-navy" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-navy mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
