import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { PROJECT_IMAGES } from '../../constants/images';

export default function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-100">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center mb-14">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
            Our Work
          </p>
          <h2 className="font-serif text-h2 text-charcoal mb-4">Recent GTA Projects</h2>
          <p className="text-stone-500 text-body-lg leading-relaxed">
            Real installations completed by our crew across Toronto and the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PROJECT_IMAGES.map((project, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-xl bg-white shadow-card border border-stone-200 hover:shadow-card-hover transition-all duration-300"
            >
              {/* These cards read as clickable (rounded, shadowed, category tag)
                  and previously were not linked, which produced dead clicks in
                  22% of sessions. Each goes to the location page for the city
                  in the caption; the service grid already links the services,
                  so linking them here again was six links to four URLs. */}
              <Link href={project.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-xl">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-gold text-white text-[0.6875rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md shadow">
                    {project.category}
                  </span>
                </div>
                <figcaption className="px-4 py-3.5">
                  <p className="font-sans font-medium text-charcoal text-[0.875rem] mb-1.5 leading-snug group-hover:text-gold transition-colors">
                    {project.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-stone-400 text-[0.75rem]">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.75} />
                    {project.location}
                  </div>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
