// Central business details for the DEMO site. Ironbark & Ivy is fictional.
export const site = {
  name: 'Ironbark & Ivy Hair Studio',
  shortName: 'Ironbark & Ivy',
  // Placeholder — replace with the real deployed URL.
  siteUrl: 'https://ironbark-ivy-salon-demo.onrender.com',
  title: 'Ironbark & Ivy Hair Studio — Demo salon website',
  description:
    'A fictional hair salon demo website by JS Web Services: cuts, colour, styling and treatments with example prices, gallery, team and online booking concept. Not a real business.',
  tagline: 'Hair that feels like you.',
  location: 'Somewhere in South-East Queensland (demo)',
  areaServed: 'Brisbane, QLD',
  locale: 'en-AU',
  themeColor: '#3b1f35',
  parking: 'Plenty of spots out front and in the side street.',
  agency: {
    name: 'JS Web Services',
    url: 'https://js-web-services.onrender.com',
  },
  demoBanner: 'Demo website — Ironbark & Ivy is a fictional salon. Concept by JS Web Services.',
  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Team', href: '/#team' },
    { label: 'Hours', href: '/#hours' },
    { label: 'Book', href: '/#book' },
  ],
  hours: [
    { day: 'Monday', short: 'Mon', open: null, close: null, display: 'Closed' },
    { day: 'Tuesday', short: 'Tue', open: '09:00', close: '17:30', display: '9:00 am – 5:30 pm' },
    { day: 'Wednesday', short: 'Wed', open: '09:00', close: '17:30', display: '9:00 am – 5:30 pm' },
    { day: 'Thursday', short: 'Thu', open: '09:00', close: '20:00', display: '9:00 am – 8:00 pm', note: 'Late night' },
    { day: 'Friday', short: 'Fri', open: '09:00', close: '17:30', display: '9:00 am – 5:30 pm' },
    { day: 'Saturday', short: 'Sat', open: '08:00', close: '15:00', display: '8:00 am – 3:00 pm' },
    { day: 'Sunday', short: 'Sun', open: null, close: null, display: 'Closed' },
  ],
  services: [
    {
      group: 'Cuts',
      blurb: 'Precision cuts, finished with a blow-dry so you leave ready to go.',
      items: [
        { name: "Women's cut & blow-dry", price: 'from $85' },
        { name: "Men's cut", price: '$45' },
        { name: 'Kids (under 12)', price: '$30' },
        { name: 'Fringe trim', price: '$15' },
      ],
    },
    {
      group: 'Colour',
      blurb: 'Low-ammonia colour, custom-mixed for your tone and lifestyle.',
      items: [
        { name: 'Root touch-up', price: 'from $95' },
        { name: 'Full colour', price: 'from $130' },
        { name: 'Balayage', price: 'from $240' },
        { name: 'Toner', price: '$45' },
      ],
    },
    {
      group: 'Styling',
      blurb: 'Smooth, bouncy or pinned up — styled for the day or the night.',
      items: [
        { name: 'Blow-dry', price: '$55' },
        { name: 'Up-style', price: 'from $95' },
        { name: 'Bridal trial', price: 'from $120' },
      ],
    },
    {
      group: 'Treatments',
      blurb: 'Repair, smooth and strengthen for hair that behaves in the humidity.',
      items: [
        { name: 'Keratin smoothing', price: 'from $280' },
        { name: 'Bond-repair treatment', price: '$40' },
      ],
    },
  ],
  team: [
    {
      name: 'Mara Ellison',
      initials: 'ME',
      role: 'Owner & senior stylist',
      bio: 'Fifteen years behind the chair and a soft spot for lived-in colour. Mara built the studio around unhurried appointments.',
      color: '#4a2340',
      accent: '#e8b4bc',
    },
    {
      name: 'Theo Nguyen',
      initials: 'TN',
      role: 'Colour specialist',
      bio: 'Balayage, glossing and colour corrections. Theo loves turning a vague Pinterest board into a shade that suits you.',
      color: '#8c3550',
      accent: '#faf3f2',
    },
    {
      name: 'Priya Kaur',
      initials: 'PK',
      role: 'Stylist & bridal',
      bio: 'Textured cuts, curls and up-styles that last through the dancing. Priya runs our bridal trials and on-the-day styling.',
      color: '#723f68',
      accent: '#e6cf9f',
    },
  ],
  reviews: [
    {
      quote: 'Best colour I have had in years — and they actually listened when I said low-maintenance.',
      name: 'Sample client A.',
      service: 'Balayage',
    },
    {
      quote: 'Booked online in a minute, walked out with a cut that still sits right three weeks later.',
      name: 'Sample client B.',
      service: "Men's cut",
    },
    {
      quote: 'Calm, friendly and my daughter did not want to leave. The kids cut is a bargain too.',
      name: 'Sample client C.',
      service: 'Kids cut',
    },
  ],
  gallery: [
    { src: '/gallery/balayage-waves.svg', alt: 'Illustrated flowing waves blending from deep brown to honey blonde', caption: 'Soft balayage waves' },
    { src: '/gallery/colour-swatches.svg', alt: 'Fan of hair colour swatches from copper to ash blonde', caption: 'Custom-mixed colour swatches' },
    { src: '/gallery/sleek-bob.svg', alt: 'Line illustration of a sleek chin-length bob silhouette', caption: 'Sleek chin-length bob' },
    { src: '/gallery/scissors.svg', alt: 'Illustration of open styling scissors and a comb', caption: 'Precision cutting' },
    { src: '/gallery/curls.svg', alt: 'Abstract spiral shapes representing defined curls', caption: 'Defined, frizz-free curls' },
    { src: '/gallery/up-style.svg', alt: 'Illustration of a low bridal bun with a sprig of leaves', caption: 'Bridal up-style' },
    { src: '/gallery/copper-gradient.svg', alt: 'Abstract gradient from rich copper to warm rose gold', caption: 'Copper to rose-gold gloss' },
    { src: '/gallery/salon-chair.svg', alt: 'Illustration of a salon chair beside a round mirror and potted plant', caption: 'Our (imaginary) studio' },
  ],
  faq: [
    {
      q: 'Do I need a consultation before colour?',
      a: 'For big changes like balayage or going lighter, we recommend a free 15-minute consultation and a patch test at least 48 hours before your appointment.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We ask for 24 hours notice so we can offer your spot to someone on the waitlist. Late cancellations may incur a fee (demo policy).',
    },
    {
      q: 'Why are prices listed as "from"?',
      a: 'Length, thickness and the products used all affect time. Your stylist will confirm a quote before starting — no surprises.',
    },
    {
      q: 'Is this a real salon?',
      a: 'No. Ironbark & Ivy is a fictional business created by JS Web Services to demonstrate what a local salon website could look like.',
    },
  ],
} as const;

export type Site = typeof site;
