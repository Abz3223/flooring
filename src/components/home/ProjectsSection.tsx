import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { PROJECT_IMAGES } from '../../constants/images';

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Real Completed Projects</p>
          <h2 className="font-heading font-bold text-navy mb-4 text-3xl md:text-4xl">
            Our Work Across the GTA
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            From luxury residential renovations to large-scale commercial installations — browse recent flooring projects completed by contractors in our network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_IMAGES.slice(0, 3).map((project, index) => (
            <figure
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md bg-white"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 bg-oak text-navy text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <figcaption className="p-4">
                <p className="text-navy font-semibold text-sm md:text-base leading-snug mb-1.5">
                  {project.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-500 text-xs gap-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {project.location}
                  </span>
                  <Link
                    href={`/services/${project.slug}`}
                    className="text-oak hover:text-oak-light text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    View Service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {PROJECT_IMAGES.slice(3).map((project, index) => (
            <figure
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md bg-white"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 bg-oak text-navy text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <figcaption className="p-4">
                <p className="text-navy font-semibold text-sm md:text-base leading-snug mb-1.5">
                  {project.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-500 text-xs gap-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {project.location}
                  </span>
                  <Link
                    href={`/services/${project.slug}`}
                    className="text-oak hover:text-oak-light text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    View Service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            About Our Network <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
