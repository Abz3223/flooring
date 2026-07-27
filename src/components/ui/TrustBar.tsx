// Stats-bar style: big serif gold numbers with a small label below,
// 4 columns on desktop, 2 columns on mobile, vertical dividers between.
// Adopted from restorationprofessionals.ca pattern (Path B port: structure
// only, kept the flooring charcoal/gold/serif identity).

const stats = [
  { number: '500+', label: 'GTA Projects Completed' },
  { number: '15+', label: 'Years of Experience' },
  { number: '100+', label: '5-Star Reviews' },
  { number: '5-Year', label: 'Workmanship Warranty' },
];

export default function TrustBar() {
  return (
    <div className="bg-stone-100 border-y border-stone-200">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-center py-7 px-4 sm:py-8">
              <div className="font-serif text-gold text-3xl lg:text-4xl mb-1.5 leading-none">
                {number}
              </div>
              <div className="text-stone-500 text-[0.8125rem] font-medium leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
