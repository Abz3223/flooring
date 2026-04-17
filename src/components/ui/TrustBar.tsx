import { Shield, Star, ClipboardList, CircleCheck as CheckCircle } from 'lucide-react';

const signals = [
  { icon: Shield, label: 'Licensed & Insured', sub: '$2M Liability · WSIB' },
  { icon: CheckCircle, label: '5-Year Warranty', sub: 'On All Workmanship' },
  { icon: ClipboardList, label: 'Free On-Site Estimates', sub: 'Written Quote Included' },
  { icon: Star, label: '100+ Five-Star Reviews', sub: 'Across the GTA' },
];

export default function TrustBar() {
  return (
    <div className="bg-stone-100 border-y border-stone-200">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200">
          {signals.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-4 sm:px-6 sm:py-5"
            >
              <div className="w-9 h-9 rounded-lg bg-gold-muted flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-gold" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-charcoal leading-tight">
                  {label}
                </p>
                <p className="text-[0.75rem] text-stone-500 leading-tight mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
