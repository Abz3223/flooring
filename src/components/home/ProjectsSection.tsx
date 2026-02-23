import { MapPin } from 'lucide-react';
import { PROJECT_IMAGES } from '../../constants/images';

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Our Work</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">Recent GTA Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real installations by our certified flooring contractors across Toronto and the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_IMAGES.map((project, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-oak text-navy text-xs font-bold px-3 py-1 rounded-full shadow">
                  {project.category}
                </span>
              </div>
              <figcaption className="p-4">
                <p className="text-navy font-semibold text-sm mb-1.5 leading-snug">{project.caption}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  {project.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
