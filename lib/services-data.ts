export interface ServicePhoto {
  src: string
  alt: string
  caption: string
}

export interface ServiceData {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  content: string
  /** Real job photos, rendered below the content with next/image. Captions
   *  describe only what is visible; do not attribute a photo to a specific job,
   *  date or address unless the file itself confirms it. */
  photos?: { heading: string; items: ServicePhoto[] }
}

export const servicesData: ServiceData[] = [
  {
    slug: 'hardwood-flooring-installation',
    title: 'Hardwood Flooring Installation',
    metaTitle: 'Hardwood Flooring Installation Toronto | Solid & Engineered',
    metaDescription:
      'Professional hardwood flooring installation in Toronto and the GTA. Solid and engineered hardwood, all species. Free estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>If you're looking for hardwood flooring installation in Toronto, you're probably already aware of what a difference it makes, not just to how a room looks, but to how it feels underfoot and what it does for a home's long-term value. We've been installing hardwood throughout the GTA for years, and this page walks through everything you need to know before booking a job.</p>

  <h2>Why Hardwood Works So Well in Toronto Homes</h2>

  <p>Toronto's housing stock is unusually diverse. We regularly work in century-old Victorian semi-detacheds in the Annex and Roncesvalles, post-war bungalows in Etobicoke, and newer condo high-rises along the waterfront and Yonge corridor. Each setting has its own challenges.</p>

  <p>In older homes, subfloors are often uneven or softwood, requiring more prep work before any hardwood goes down. In condos, concrete subfloors and strict building noise bylaws mean we almost always recommend engineered hardwood over solid, since it floats better and transmits less sound to the unit below.</p>

  <p>Toronto's climate is another factor most homeowners underestimate. We get hot, humid summers and dry, cold winters, and wood expands and contracts with those swings. Choosing the right species, finish, and installation method makes the difference between a floor that lasts 30 years and one that starts cupping or gapping within a few seasons.</p>

  <h2>Types of Hardwood We Install</h2>

  <h3>Solid Red &amp; White Oak</h3>
  <p>Oak is the most popular hardwood species in the GTA for good reason. It's durable, takes stain well in dozens of shades, and suits both traditional and contemporary interiors. Solid oak is ideal for above-grade main floors in houses with wood subfloors.</p>

  <h3>Engineered Hardwood</h3>
  <p>Engineered hardwood has a real wood veneer over a stable plywood core, which makes it far more resistant to Toronto's humidity cycles than solid wood. It's the right call for condos, basements, and any space over concrete, and it's nearly indistinguishable from solid once installed. Customers in <a href="/locations/north-york">North York</a> and <a href="/locations/vaughan">Vaughan</a> new-builds frequently go this route.</p>

  <h3>Wide-Plank White Oak</h3>
  <p>Wide-plank white oak (typically 5" to 7" boards) has become the go-to for higher-end renovations in neighbourhoods like Lawrence Park, Forest Hill, and Leaside. The open grain and natural variation give it a lot of character, and it pairs well with both light and dark interiors.</p>

  <h3>Hard Maple</h3>
  <p>Maple is harder than oak and has a tighter, more uniform grain, which makes it popular for open-plan spaces where a cleaner, more modern look is wanted. It's also a common choice for home gyms and finished basements. Note that maple is trickier to stain evenly, so it's often left natural or with a light finish.</p>

  <h3>Black Walnut</h3>
  <p>Walnut is at the premium end of the spectrum, rich, dark, and striking. It's softer than oak or maple, so it's better suited for lower-traffic areas like bedrooms and formal dining rooms. We install walnut in heritage homes across <a href="/locations/scarborough">Scarborough</a> and <a href="/locations/markham">Markham</a> where clients want something distinctive.</p>

  <h2>Our Hardwood Installation Process</h2>

  <p>Every job starts with a subfloor inspection. We check for levelness, moisture, and structural integrity, because no amount of quality hardwood will compensate for a bad base. If remediation is needed (grinding high spots, shimming low areas, replacing damaged sections), we handle that before anything else goes down.</p>

  <p>We then conduct moisture testing on both the subfloor and the incoming flooring material. Wood needs to acclimate to the room's temperature and humidity, typically 3 to 5 days in the space, before installation begins. Skipping this step is the single most common cause of hardwood failure we see when fixing other contractors' work.</p>

  <p>Installation itself is either nail-down (for solid hardwood over wood subfloors), glue-down (for engineered over concrete), or floating (also common for engineered). After the field is complete, we fit and nail quarter-round or shoe moulding at the walls, install threshold transitions between rooms, and do a full site cleanup. We leave with a floor ready to use, typically within 24 hours for pre-finished, or 48–72 hours after the final coat cures for site-finished product.</p>

  <p>We also serve clients throughout <a href="/locations/mississauga">Mississauga</a> and <a href="/locations/pickering">Pickering</a> for hardwood installation projects of all sizes.</p>

  <p>If hardwood isn't quite the right fit for your project, it's worth comparing it against <a href="/services/laminate-flooring-installation">laminate flooring</a> or <a href="/services/vinyl-flooring-installation">vinyl/LVP flooring</a>, both of which we also install and which have their own advantages in the right circumstances.</p>

  <h2>Hardwood Flooring FAQs</h2>

  <h3>How much does hardwood flooring cost in Toronto?</h3>
  <p>Supply and installation for hardwood in Toronto typically runs between $8 and $18 per square foot, depending on the species, grade, and finish you choose. Engineered products tend to come in at the lower end of that range; wide-plank white oak or custom site-finished solid hardwood sits higher. Subfloor prep, stair nosings, and transitions are usually quoted separately.</p>

  <h3>How long does hardwood installation take?</h3>
  <p>A standard main floor, say, 600 to 800 sq ft, generally takes one to two days to install once the subfloor is ready and the wood has acclimated. Site finishing (sanding, staining, and applying polyurethane coats) adds another two to three days, plus dry time. We give you a firm timeline during the estimate so there are no surprises.</p>

  <h3>Can you install hardwood over concrete subfloors?</h3>
  <p>Solid hardwood cannot be glued or nailed to concrete, it needs the dimensional stability that a wood subfloor provides. Engineered hardwood, however, can be glued directly to a clean, level, moisture-tested concrete slab, which makes it the standard choice for condos and slab-on-grade homes. We always do a moisture test before committing to any installation method over concrete.</p>

  <h3>Engineered vs solid hardwood, which is better for Toronto homes?</h3>
  <p>For most Toronto homes, engineered hardwood is the more practical choice. It handles humidity fluctuations better, works over concrete, and performs well in both condos and houses. Solid hardwood makes sense for above-grade rooms in detached homes with wood subfloors, especially if the homeowner wants the option to sand and refinish multiple times over the decades. We'll recommend the right product for your specific situation during the site visit.</p>

  <h3>Do you offer hardwood floor refinishing?</h3>
  <p>Yes, we sand, stain, and refinish existing hardwood floors as a standalone service. Refinishing is a cost-effective way to restore a worn or dated floor without replacing it entirely, and most solid hardwood floors can be refinished three to five times over their lifespan. Contact us for a refinishing quote alongside or separate from any new installation work.</p>

  <div class="cta-block">
    <h2>Get Your Free Hardwood Flooring Estimate</h2>
    <p>We serve homeowners across Toronto and the GTA. Call us at <a href="tel:6479050050">(647) 905-0050</a> or fill out our contact form to schedule a free on-site estimate.</p>
    <a href="/contact" class="cta-button">Request a Free Estimate</a>
  </div>
</article>`,
  },
  {
    slug: 'laminate-flooring-installation',
    title: 'Laminate Flooring Installation',
    metaTitle: 'Laminate Flooring Installation Toronto & GTA',
    metaDescription:
      'Professional laminate flooring installation in Toronto and the GTA. Durable, affordable, and available in hundreds of styles. Free estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>Laminate flooring has come a long way from the thin, plastic-looking product it was two decades ago. Today's laminate, particularly in the AC4 and AC5 commercial-grade categories, is remarkably convincing, highly durable, and genuinely affordable. It's one of the most popular flooring choices we install across the GTA, and for good reason.</p>

  <h2>Why Laminate is a Smart Choice</h2>

  <p>For homeowners who want the look of hardwood without the price tag, laminate delivers. A quality laminate installation in Toronto typically costs $4 to $9 per square foot all-in, roughly half the price of comparable hardwood. It's scratch-resistant, fade-resistant, and holds up exceptionally well in high-traffic areas like hallways, kitchens, and family rooms. Landlords and investors frequently choose laminate for rental properties because it's cost-effective to install and built to last through tenant turnover.</p>

  <p>One important distinction: standard laminate is not waterproof. It can handle minor spills if wiped up promptly, but it will swell and warp if water seeps beneath the joints. For areas prone to moisture, bathrooms, laundry rooms, or basements, we typically recommend <a href="/services/vinyl-flooring-installation">vinyl/LVP flooring</a> instead, which is 100% waterproof. That said, many manufacturers now offer water-resistant laminate lines that provide better protection for kitchens and mudrooms.</p>

  <h2>Our Laminate Installation Process</h2>

  <p>We start with a subfloor assessment, checking for levelness, moisture, and any high spots or soft areas that need addressing before installation begins. A good laminate installation floats over an underlayment pad that provides cushion, sound absorption, and a moisture barrier. We use click-lock installation for most projects, which allows the floor to expand and contract naturally with Toronto's seasonal humidity changes without buckling. Transitions, baseboards, and quarter-round are fitted at the end to give a clean, finished look.</p>

  <p>We install laminate throughout <a href="/locations/toronto">Toronto</a>, <a href="/locations/scarborough">Scarborough</a>, <a href="/locations/north-york">North York</a>, and across the wider GTA. If you'd like to compare laminate against other options, see our pages on <a href="/services/hardwood-flooring-installation">hardwood flooring</a> and <a href="/services/vinyl-flooring-installation">vinyl/LVP</a>.</p>

  <div class="cta-block">
    <h2>Get Your Free Laminate Flooring Estimate</h2>
    <p>Call us at <a href="tel:6479050050">(647) 905-0050</a> or fill out our contact form. We'll come to your home, measure the space, and give you a written quote with no obligation.</p>
    <a href="/contact" class="cta-button">Request a Free Estimate</a>
  </div>
</article>`,
  },
  {
    slug: 'vinyl-flooring-installation',
    title: 'Vinyl / LVP Flooring Installation',
    metaTitle: 'Vinyl & LVP Flooring Installation Toronto | 100% Waterproof',
    metaDescription:
      'Waterproof luxury vinyl plank (LVP) and vinyl flooring installation in Toronto and the GTA. Perfect for kitchens, basements, and bathrooms. Free estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>Luxury vinyl plank, commonly called LVP, has become the fastest-growing flooring category in the GTA over the past several years, and it's not hard to see why. It's 100% waterproof, extremely durable, comfortable underfoot, and available in realistic wood and stone finishes that are genuinely difficult to distinguish from the real thing. We install vinyl and LVP in homes and commercial spaces across Toronto, and it's now one of our most requested services.</p>

  <h2>Where Vinyl / LVP Excels</h2>

  <p>The waterproof core is the defining advantage of LVP. Unlike hardwood or laminate, it won't swell, warp, or grow mould when water gets underneath, which makes it the obvious choice for basements, bathrooms, laundry rooms, and kitchens. In condos and apartment buildings, LVP also performs well because it installs over concrete without adhesive (most products float over an underlayment), has excellent dimensional stability, and many products achieve good sound ratings for multi-unit buildings. It's also one of the more forgiving products on slightly uneven subfloors, though we still recommend addressing major dips and humps before installation.</p>

  <p>LVP typically costs $5 to $11 per square foot installed in the Toronto area, depending on the wear layer thickness (12 mil to 20 mil), board dimensions, and brand. Thicker wear layers last longer in high-traffic areas. We carry and install products from leading brands with proven performance records.</p>

  <h2>Installation and What to Expect</h2>

  <p>Most LVP products use a click-lock floating method, no glue, no nails, which makes installation faster and cleaner than many other floor types. We assess your subfloor, install appropriate underlayment if needed, lay the field, fit transitions at doorways, and reinstall or replace baseboards. Most standard rooms are done in a day. We serve homeowners throughout <a href="/locations/mississauga">Mississauga</a>, <a href="/locations/vaughan">Vaughan</a>, <a href="/locations/markham">Markham</a>, and <a href="/locations/pickering">Pickering</a> for vinyl and LVP projects.</p>

  <p>Not sure if vinyl is the right choice? Compare it with <a href="/services/laminate-flooring-installation">laminate flooring</a> or <a href="/services/tile-flooring-installation">tile flooring</a> to find the best fit for your space and budget.</p>

  <div class="cta-block">
    <h2>Get Your Free Vinyl Flooring Estimate</h2>
    <p>Call us at <a href="tel:6479050050">(647) 905-0050</a> or use our contact form to book a free on-site estimate anywhere in the GTA.</p>
    <a href="/contact" class="cta-button">Request a Free Estimate</a>
  </div>
</article>`,
  },
  {
    slug: 'tile-flooring-installation',
    title: 'Tile Flooring Installation',
    metaTitle: 'Tile Flooring Installation Toronto | Bathrooms & Heated Floors',
    metaDescription:
      'Professional tile flooring installation in Toronto and the GTA. Porcelain, ceramic, and natural stone for floors, showers, and feature walls. Free estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>Tile is one of the most permanent and versatile flooring choices you can make. Done right, a well-laid tile floor can last the lifetime of the building, and in bathrooms, kitchens, and entryways, it's often the most practical option available. We install porcelain, ceramic, and natural stone tile for floors, shower surrounds, backsplashes, and feature walls across Toronto and the GTA.</p>

  <h2>Tile Types We Install</h2>

  <p>Porcelain tile is our most commonly installed product, it's denser than ceramic, handles moisture better, and comes in an enormous range of formats from small mosaics to large-format 24"x48" slabs that create a sleek, contemporary look. Ceramic tile is a cost-effective alternative for lower-moisture areas. Natural stone, including marble, travertine, slate, and limestone, requires more care in both installation and maintenance, but delivers a level of character and luxury that manufactured tile can't fully replicate. We also install subway tile, hexagonal floor tile, and wood-look porcelain planks that pair well with warm interior colour schemes.</p>

  <p>Large-format tiles require particularly flat subfloors, we check for lippage and use appropriate levelling systems to ensure the finished surface is perfectly flush. Proper substrate preparation (cement board, uncoupling membrane, or mortar bed) is essential for long-term performance, especially in wet areas.</p>

  <h2>What the Installation Involves</h2>

  <p>We begin with substrate prep, then lay out the tile pattern dry before committing to mortar, this ensures the layout is symmetrical and cuts are positioned in the least visible areas. We use the right thinset for each product and apply grout in the colour you select. Grout sealing is recommended on porous grouts. Projects range from a single bathroom floor to entire-home tile installations. We serve <a href="/locations/toronto">Toronto</a>, <a href="/locations/north-york">North York</a>, <a href="/locations/scarborough">Scarborough</a>, and the wider GTA. For areas where tile may feel too cold or hard underfoot, consider <a href="/services/vinyl-flooring-installation">vinyl/LVP</a> or <a href="/services/carpet-installation">carpet</a> as alternatives.</p>

  <div class="cta-block">
    <h2>Get Your Free Tile Installation Estimate</h2>
    <p>Call us at <a href="tel:6479050050">(647) 905-0050</a> or fill out our contact form to book a free on-site quote for your tile project.</p>
    <a href="/contact" class="cta-button">Request a Free Estimate</a>
  </div>
</article>`,
  },
  {
    slug: 'carpet-installation',
    title: 'Carpet Installation',
    metaTitle: 'Carpet Installation Toronto & GTA',
    metaDescription:
      'Professional carpet installation in Toronto and the GTA. Bedroom, stairs, and basement carpet. All styles and brands. Free estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>We supply and install carpet across Toronto and the GTA, from single bedrooms and stairs to whole floors of homes and offices. We keep our prices low by buying through long-standing supplier and warehouse connections, so you get a wide choice of carpet without paying extra for it. If you already have a written quote from another installer, show it to us and we will see if we can match it.</p>

  <h2>The job that turned out bigger than the quote</h2>

  <p>We were booked to replace the carpet in a mixed-use building on the Danforth, with a professional office on the ground floor. It looked like a routine carpet swap until we pulled the old carpet up and found years of water damage underneath. The floor was wet in places, and the old underpad had been stuck down hard by the damage.</p>

  <p>We cut the old underpad into pieces and removed it and the carpet without affecting any other part of the building, cleaned the floor thoroughly, and wore proper protective equipment throughout so the damage did not spread. Then we laid new underpad and installed the new carpet across three rooms of about 500, 800 and 1,400 square feet, plus the stairs, and finished the same day. The customer picked their carpet from a wide selection through our suppliers.</p>

  <p>The extra work was ours to absorb. The price we quoted did not change. If water has damaged a hard floor instead, see our <a href="/services/floor-repair">floor repair</a> page.</p>

  <h2>What carpet installation costs</h2>

  <p>We price every job after a free on-site measure, because the number depends on how much area you are covering, how long the work takes, the carpet you choose, and how many stairs there are. Underpad is included in every carpet quote. Bring us a written quote from another installer and we will see if we can match it.</p>

  <h2>Carpet styles and underpad</h2>

  <p>Cut pile carpet (plush, frieze, saxony) suits bedrooms and living rooms. Berber loop pile is tougher and easier to clean, which makes it a good fit for basements, home offices and stairs. For homes with pets or kids, stain-treated nylon holds up best. Underneath, we use 8 lb or 10 lb rebond underpad, which adds comfort, insulation and sound absorption and helps the carpet last longer.</p>

  <h2>How we install it</h2>

  <p>We remove and dispose of the old carpet and underpad, check the subfloor for nails, staples and damage, fit tack strip around the edges, lay the new underpad, and stretch the carpet so it stays flat without wrinkles. Stairs are wrapped one at a time.</p>

  <h2>What customers say</h2>

  <blockquote>
    <p>&ldquo;Great service, very honest and helpful team. Highly recommend for any floor installation needs&rdquo;</p>
    <cite>Nuraz, Google review</cite>
  </blockquote>

  <p><a href="https://www.google.com/maps?cid=279766174431934811">Read all of our reviews on Google</a>.</p>

  <p>We install carpet in <a href="/locations/scarborough">Scarborough</a>, <a href="/locations/markham">Markham</a>, <a href="/locations/vaughan">Vaughan</a>, <a href="/locations/pickering">Pickering</a>, and across the GTA. If carpet is not right for your space, look at our <a href="/services/hardwood-flooring-installation">hardwood</a> or <a href="/services/vinyl-flooring-installation">vinyl and LVP</a> options.</p>
</article>`,
  },
  {
    slug: 'floor-repair',
    title: 'Floor Repair',
    metaTitle: 'Floor Repair Toronto | Water & Flood Damaged Floors',
    metaDescription:
      'Floor repair in Toronto and the GTA: scratches, gaps, loose planks and water-damaged floors, including a Richmond Hill flood job after the September 2 storm. Free on-site estimates. Call (647) 905-0050.',
    content: `<article class="service-content">
  <p>Floor repair in Toronto and the GTA covers everything from scratches, gaps and loose planks to floors ruined by water. When a floor has sat in water too long to save, we take the damaged flooring out, make sure the concrete underneath is dry, and put new flooring down, then clean up so the space is ready to live in.</p>

  <h2>Flood damage in Richmond Hill after the September 2 storm</h2>

  <p>The severe thunderstorm that hit the GTA on September 2, 2026 flooded a home in Richmond Hill. The engineered hardwood downstairs was left sitting in water too long to save. A restoration company had already been in and torn out some of the flooring and drywall, and the owner wanted new flooring and tile.</p>

  <p>When we arrived, the downstairs was a mix of torn-up hardwood and cut-open drywall. We took out the rest of the damaged engineered hardwood, about 1,400 square feet, and made sure the concrete was dry before any new flooring went down. Then we replaced the floor.</p>

  <p>The restoration crew had left the drywall torn up in places, so we fixed it at no charge. We also did additional work upstairs in the same house. The whole job took two to three days, and we cleaned up after ourselves and left it looking new.</p>

  <h2>Repair or replace?</h2>

  <p>Scratches, gaps between boards and a few loose or damaged planks can usually be repaired without replacing the whole floor. A floor that has soaked in water is different: engineered hardwood and laminate swell and lift, and the lasting fix is to take it out and install new flooring on a dry base. We will tell you which one your floor needs once we see it.</p>

  <h2>Floor repairs we take on</h2>

  <p>Laminate flooring repair, hardwood floor repair and vinyl flooring repair: scratches and gaps, loose and lifting planks, and water-damaged floors, whether that means replacing a few boards or taking out a whole room. If a restoration company has already been in after a flood, we pick up from there and put the floor back.</p>

  <h2>What floor repair costs</h2>

  <p>Every repair is different, so we quote after a free on-site look at the damage. The price depends on how much flooring is damaged, whether it can be repaired or has to come out, and what goes in its place. If you already have a written quote from another company, show it to us and we will see if we can match it.</p>

  <p>Water under carpet is its own job: read about the <a href="/services/carpet-installation">carpet job on the Danforth</a> where we found years of water damage under the old underpad. For replacement floors, see our <a href="/services/vinyl-flooring-installation">vinyl and LVP</a> and <a href="/services/hardwood-flooring-installation">hardwood</a> installation pages.</p>
</article>`,
    photos: {
      heading: 'Water-damaged floor replacement, from our jobs',
      items: [
        {
          src: '/water-damaged-flooring-removed-hallway-concrete.jpg',
          alt: 'Hallway stripped down to the concrete slab after damaged flooring was removed',
          caption: 'Damaged flooring removed down to the concrete.',
        },
        {
          src: '/water-damaged-flooring-removed-main-room-concrete.jpg',
          alt: 'Main room stripped to the concrete slab mid-job, with new baseboards and tools on site',
          caption: 'Mid-job: floor out, new baseboards ready to go in.',
        },
        {
          src: '/new-plank-flooring-installed-bedroom.jpg',
          alt: 'Finished bedroom with new wood-look plank flooring and white baseboards',
          caption: 'Finished: new flooring and baseboards in.',
        },
      ],
    },
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug)
}
