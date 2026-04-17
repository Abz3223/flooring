import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  light?: boolean;
}

export default function Breadcrumbs({ crumbs, light = false }: BreadcrumbsProps) {
  const textColor = light ? 'text-stone-300' : 'text-stone-500';
  const linkColor = light
    ? 'text-stone-300 hover:text-white'
    : 'text-stone-500 hover:text-charcoal';
  const activeColor = light ? 'text-white' : 'text-charcoal';
  const dividerColor = light ? 'text-stone-500' : 'text-stone-300';

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1 text-[0.8125rem] ${textColor}`}>
        {crumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight
                className={`w-3.5 h-3.5 flex-shrink-0 ${dividerColor}`}
                strokeWidth={2}
              />
            )}
            {crumb.href && i < crumbs.length - 1 ? (
              <Link href={crumb.href} className={`transition-colors ${linkColor}`}>
                {crumb.label}
              </Link>
            ) : (
              <span className={i === crumbs.length - 1 ? activeColor : ''}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
