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

export const locationFAQs: Record<string, FAQ[]> = {
  toronto: [
    {
      question: 'Do you install flooring in downtown Toronto condos?',
      answer:
        'Yes. We work regularly in high-rise buildings throughout the downtown core, Yonge-Eglinton, and Harbourfront. We handle condo board approvals, select acoustic underlayment that meets each building\'s IIC requirements, and coordinate around elevator booking windows — no extra legwork needed from you.',
    },
    {
      question: 'What flooring is best for Toronto\'s humidity swings?',
      answer:
        'Engineered hardwood handles Toronto\'s seasonal humidity fluctuations better than solid. It stays dimensionally stable through cold, dry winters and humid summers while looking identical to solid once installed. For basements, kitchens, and bathrooms, waterproof LVP is the standard recommendation — it\'s fully moisture-proof and works directly over concrete.',
    },
    {
      question: 'Do you install flooring in heritage homes in the Annex or Roncesvalles?',
      answer:
        'Yes. Heritage-area homes in the Annex, Roncesvalles, and Cabbagetown often have original softwood or hardwood subfloors requiring careful assessment. We refinish original floors where the wood is sound and install new hardwood that complements the character of the home where replacement is the better option.',
    },
    {
      question: 'How long does flooring installation take in Toronto?',
      answer:
        'A standard main floor of 600–800 sq ft typically takes one to two days once materials have acclimated and subfloor prep is done. We accommodate building access schedules for condos and can sequence multi-room projects to minimize the time your home is out of commission.',
    },
  ],

  scarborough: [
    {
      question: 'Do you install flooring in Scarborough condos?',
      answer:
        'Yes, we\'re based on McCowan Rd in Scarborough and install flooring in high-rises along Kingston Rd and the McCowan corridor regularly. We handle condo board approvals, meet IIC acoustic requirements, and know the building management processes for the major residential towers in the area.',
    },
    {
      question: 'How much does hardwood flooring cost in Scarborough?',
      answer:
        'Supply and installation typically runs $8–$18/sq ft depending on species and finish. Because our shop is in Scarborough, there\'s no travel surcharge for local jobs — the estimate you receive reflects actual material and labour costs, not distance fees.',
    },
    {
      question: 'Can you refinish existing hardwood in older Scarborough homes?',
      answer:
        'Yes. Many 1960s–70s bungalows in Agincourt and Wexford have original hardwood hidden under carpet that\'s well worth saving. We assess the wood condition, test for subfloor issues, and refinish where viable — the results often exceed what homeowners expect once the carpet is pulled.',
    },
    {
      question: 'Do you work in Scarborough condo buildings on Kingston Road?',
      answer:
        'Yes. We\'re familiar with the building rules and approval processes for the major residential towers along Kingston Rd. We handle the paperwork, select underlayment that meets acoustic standards, and schedule around elevator access windows — so you don\'t need to manage any of that yourself.',
    },
  ],

  'north-york': [
    {
      question: 'Do you install flooring in North York condos along Yonge or Sheppard?',
      answer:
        'Yes. We work in high-rise and mid-rise buildings throughout the Yonge-Sheppard, Yonge-Eglinton, and Finch corridors regularly. We handle condo board documentation, select acoustic underlayment that meets each building\'s IIC requirements, and coordinate within elevator booking windows.',
    },
    {
      question: 'What\'s the best flooring for mid-century bungalows in Don Mills or Willowdale?',
      answer:
        'Original hardwood is common in North York\'s 1950s–70s bungalows and is often worth refinishing rather than replacing. Where replacement is needed, engineered hardwood provides the most authentic look and handles the temperature and humidity swings in older homes that may have less insulation than modern builds.',
    },
    {
      question: 'Do you install flooring in North York townhomes near Bayview Village or Newtonbrook?',
      answer:
        'Yes. Townhomes in these areas typically have wood subfloors above grade and concrete below, which shapes product selection for each level. We assess every level during the estimate and recommend accordingly — hardwood or laminate for upper floors, LVP for basements.',
    },
    {
      question: 'Can you match existing hardwood when adding a room or extension in North York?',
      answer:
        'We try. Matching depends on species, plank width, stain, and sheen — and the older the floor, the harder an exact match becomes. We bring samples during the estimate and advise honestly whether blending or a full-floor refinish after installation will give the most seamless result.',
    },
  ],

  vaughan: [
    {
      question: 'Do you serve new construction homes in Vaughan?',
      answer:
        'Yes. We frequently upgrade builder-grade flooring in new Vaughan developments in Woodbridge, Maple, and Vellore Village. Builder carpet and entry-level laminate are common starting points — we handle full main-floor replacements efficiently so you can enjoy the home you actually paid for.',
    },
    {
      question: 'How quickly can you schedule an estimate in Vaughan?',
      answer:
        'Typically within 1–2 business days. Vaughan is within our core GTA service area and we can usually confirm a site visit when you first call. Estimates are free, on-site, and followed by a written quote within 24 hours.',
    },
    {
      question: 'What flooring works best in Vaughan townhomes with concrete subfloors?',
      answer:
        'Most newer Vaughan builds have concrete subfloors throughout, including above-grade levels. Engineered hardwood glued directly to a moisture-tested slab is the premium option; LVP is the practical, fully waterproof alternative. We test moisture at every estimate to confirm the right product before anything is ordered.',
    },
    {
      question: 'Do you install hardwood in Kleinburg heritage properties?',
      answer:
        'Yes. Kleinburg\'s older character homes require different considerations than surrounding new construction. We\'re experienced with the plank sizing, species, and installation methods that suit heritage interiors, and we discuss options that respect the character of the property during the estimate.',
    },
  ],

  markham: [
    {
      question: 'Do you install flooring in Markham\'s newer communities like Cornell or Berczy Village?',
      answer:
        'Yes. Cornell, Berczy Village, and Legacy are among the most active areas we work in within Markham. New-build concrete subfloors are the norm in these communities, and our estimates always include a moisture assessment before recommending between engineered hardwood and LVP.',
    },
    {
      question: 'What flooring suits Unionville heritage homes?',
      answer:
        'Unionville\'s character homes call for materials that complement the period architecture. We typically recommend solid or wide-plank engineered hardwood in species like oak, maple, or hickory, installed parallel to the main sight lines of the room. Matching existing flooring in heritage properties is something we assess carefully at every estimate.',
    },
    {
      question: 'Can you match existing hardwood in older Markham homes?',
      answer:
        'Often yes, depending on the species, width, and finish of the original floor. We\'ll assess whether a close match or a full-floor blend is achievable during the estimate, and we can coordinate refinishing the entire floor after installation to create a seamless result if needed.',
    },
    {
      question: 'Do you serve Markham alongside nearby Scarborough and Pickering?',
      answer:
        'Yes. Our Scarborough base makes Markham a natural and efficient service area — there\'s no added travel cost, and scheduling is straightforward. Many of our Markham clients are referred by neighbours in Scarborough or Pickering.',
    },
  ],

  mississauga: [
    {
      question: 'Do you travel to Mississauga for flooring installation?',
      answer:
        'Yes. We serve Mississauga as part of our wider GTA coverage, with most jobs in Port Credit, Streetsville, Erin Mills, and the City Centre area. We typically schedule estimates within 2–3 business days for western GTA locations.',
    },
    {
      question: 'What flooring is best for Mississauga condos near Square One?',
      answer:
        'High-rise buildings in the City Centre require products that meet acoustic IIC standards — typically engineered hardwood or LVP with quality acoustic underlayment. We check each building\'s specific rules before recommending a product and help you prepare any required condo board documentation.',
    },
    {
      question: 'Is LVP a good choice for older Port Credit or Clarkson homes?',
      answer:
        'Yes. Port Credit and Clarkson\'s 1950s–70s homes often have wood subfloors in varying condition. LVP is forgiving over minor irregularities, fully waterproof (useful given lakeside humidity), and durable enough for active households. We do a subfloor assessment at every estimate to identify any prep work before installation.',
    },
    {
      question: 'Do you handle multi-unit flooring projects for Mississauga property investors?',
      answer:
        'Yes. We coordinate multi-room and multi-unit flooring projects for landlords and investors throughout Mississauga. We can sequence work across units to minimize vacancy time and maintain consistent product selection across a portfolio.',
    },
  ],

  pickering: [
    {
      question: 'Do you install flooring in Pickering?',
      answer:
        'Yes. Pickering is a regular part of our service area — we work in Bay Ridges, Dunbarton, Fairport Beach, Liverpool, Rosebank, and the newer Seaton communities in the north end. Call us for a free estimate and we\'ll confirm scheduling when you get in touch.',
    },
    {
      question: 'What flooring is recommended for Pickering waterfront homes?',
      answer:
        'Homes in Bay Ridges, Fairport Beach, and Rosebank face elevated humidity from proximity to Lake Ontario. We recommend engineered hardwood for main floors and LVP for kitchens, mudrooms, and basements where moisture resistance is a priority. We always conduct subfloor moisture testing at every estimate.',
    },
    {
      question: 'Can you handle a whole-home flooring replacement in Pickering?',
      answer:
        'Yes. Many Pickering clients do full-home refreshes — replacing carpet throughout the main and upper floors, adding new tile in bathrooms, and finishing basements. We coordinate these multi-phase projects with a single timeline and quote so the work is completed efficiently with minimal disruption.',
    },
    {
      question: 'Do you serve the newer Seaton communities in northern Pickering?',
      answer:
        'Yes. Seaton is one of the fastest-growing communities in Durham Region and we work in new-build homes throughout the area. Concrete subfloors are standard in these builds, making engineered hardwood and LVP the most practical product choices — both of which we install regularly in the area.',
    },
  ],
}
