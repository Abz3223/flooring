import type { FAQ } from '../lib/schema'

export const hardwoodFAQs: FAQ[] = [
  {
    question: 'How much does hardwood flooring installation cost in Toronto?',
    answer:
      'Hardwood flooring installation in Toronto typically costs between $8 and $18 per square foot for supply and installation combined. Engineered hardwood sits at the lower end of that range, while wide-plank white oak or custom site-finished solid hardwood runs higher. Subfloor prep, stair nosings, and transitions are usually quoted as separate line items.',
  },
  {
    question: 'How long does hardwood installation take?',
    answer:
      'A standard main floor of 600 to 800 square feet generally takes one to two days to install once the subfloor is ready and the wood has acclimated to the space. Site finishing — sanding, staining, and applying polyurethane coats — adds another two to three days plus dry time. We provide a firm timeline during the on-site estimate so there are no surprises.',
  },
  {
    question: 'Can you install hardwood over concrete subfloors?',
    answer:
      'Solid hardwood cannot be glued or nailed directly to concrete — it requires the dimensional stability of a wood subfloor. Engineered hardwood, however, can be glued directly to a clean, level, moisture-tested concrete slab, making it the standard choice for condos and slab-on-grade homes. We always perform a moisture test before committing to any installation method over concrete.',
  },
  {
    question: 'Engineered vs solid hardwood — which is better for Toronto homes?',
    answer:
      'For most Toronto homes, engineered hardwood is the more practical choice. It handles the city\'s humidity fluctuations better than solid wood, works over concrete subfloors common in condos and newer builds, and is nearly indistinguishable from solid once installed. Solid hardwood makes the most sense for above-grade rooms in detached homes with wood subfloors where the owner wants the option to sand and refinish multiple times over the decades.',
  },
  {
    question: 'Do you offer hardwood floor refinishing?',
    answer:
      'Yes — we sand, stain, and refinish existing hardwood floors as a standalone service. Refinishing restores a worn or dated floor without the cost of full replacement, and most solid hardwood floors can be refinished three to five times over their lifespan. Contact us for a refinishing quote, which can be arranged alongside or separately from any new installation work.',
  },
]

export const serviceFAQs: Record<string, FAQ[]> = {
  'hardwood-flooring-installation': hardwoodFAQs,
}
