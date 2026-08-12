export const site = {
  name: "Linkline",
  legalName: "Linkline Nigeria Limited",
  url: "https://www.linklineltd.com.ng",
  description:
    "Linkline Nigeria Limited is a licensed Public Access Mobile Radio (PAMR) operator delivering fully managed two-way radio networks and Motorola radio sales, lease and rental across commercial Lagos — no license, no maintenance, no upfront capital.",
  tagline: "Just Plug & Play",
  subTagline: "Outsource your two-way radio communication needs",
  phonePrimary: "0700-123-4000",
  phonePrimaryRaw: "+2347001234000",
  phoneSecondary: "0803-400-3031",
  phoneSecondaryRaw: "+2348034003031",
  emailPrimary: "contact.linkline@gmail.com",
  emailSecondary: "linklineltd@gmail.com",
  hours: "Mon – Fri, 9:00am – 3:00pm",
  address: {
    street: "Suite 28, Race Course Complex, Onikan",
    city: "Lagos",
    region: "Lagos State",
    postal: "P.O. Box 70161, Victoria Island, Lagos",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services & Products", href: "/services", mega: "services" },
  { label: "Industries", href: "/industries", mega: "industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const about = {
  kicker: "Who We Are",
  heading: "Lagos's dedicated Public Access Mobile Radio operator",
  intro:
    "Linkline Nigeria Limited is a Communication Service Provider specialising in the provision of Two-Way Radio managed services to corporate organisations across Lagos State.",
  vision:
    "Our vision is to be the service provider of choice to businesses and corporate organisations in our defined area of operation.",
  proposition:
    "Our objective is to provide value to clients by eliminating the responsibility of owning and managing their two-way radio communication infrastructure — bringing the benefits of business radio communication to smaller organisations at a considerably lower cost. Under our Radio Managed Service scheme, Linkline is responsible for the provision, management and maintenance of your two-way radio infrastructure at a fixed monthly or quarterly cost, freeing your resources to focus on your core business activity.",
  points: [
    {
      title: "Communication service provider",
      body: "Licensed to build and operate a Public Access Mobile Radio network, so you never need a spectrum license of your own.",
    },
    {
      title: "Budget lock-down",
      body: "One fixed monthly or quarterly cost covers provision, management and maintenance of your radio infrastructure.",
    },
    {
      title: "Built for greater commercial Lagos",
      body: "A rooftop repeater network engineered specifically for the CBD out to Epe, Ikorodu, Otta, Sagamu, Badagry and the Lagos waterways.",
    },
  ],
} as const;

export const heroSlides = [
  {
    image: "/images/hero-crane.jpg",
    focal: "object-[70%_20%]",
    eyebrow: "Public Access Mobile Radio",
    heading: "Every voice on site, one channel away.",
    body: "Fully managed two-way radio infrastructure for Lagos operations that can't afford dropped calls.",
  },
  {
    image: "/images/hero-construction.png",
    focal: "object-[60%_30%]",
    eyebrow: "Just Plug & Play",
    heading: "No license. No maintenance. No upfront capital.",
    body: "Outsource your radio network to the operators who've run Lagos-wide PAMR since day one.",
  },
  {
    image: "/images/hero-coverage.jpg",
    focal: "object-[50%_30%]",
    eyebrow: "Wide-Area Coverage",
    heading: "Six corridors of coverage across commercial Lagos.",
    body: "From Lagos Island to Epe, Ikorodu, Otta, Sagamu and 60km out to sea — your team stays connected.",
  },
] as const;

export type ServicePanel = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
};

export const services: ServicePanel[] = [
  {
    kicker: "01 — Managed Network",
    title: "Fully Managed Two-Way Radio Network",
    body: "Our Public Access Mobile Radio (PAMR) network pools rooftop repeaters across commercial Lagos so your organisation gets private, wide-area two-way radio without building or owning a single tower.",
    points: [
      "Wide area coverage via rooftop repeater network",
      "Low, predictable flat quarterly rate",
      "Zero maintenance cost of owning infrastructure",
      "No large upfront capital required",
    ],
  },
  {
    kicker: "02 — Equipment",
    title: "2-Way Radio Sales, Lease & Rental",
    body: "Handheld, mobile and base-station radios from a wide range of manufacturers, available to buy outright, lease long-term, or rent for events and short-term projects.",
    points: [
      "Handheld portable radios — 5W, with or without keypad",
      "Mobile radios — 25W, magnetic or external Yagi antenna",
      "Base station & repeater installations",
      "Scrambler options for secure channels",
    ],
  },
  {
    kicker: "03 — Bundled Airtime",
    title: "Terminal & Network Access Packages",
    body: "Combine the radio hardware and the airtime into one simple flat monthly rate — the same convenience as cellular billing, without the cellular cost or congestion.",
    points: [
      "Radio + network access on one invoice",
      "Fixed, pre-budgeted operational cost",
      "Affordable down payment, buyout option on terminals",
      "Terminal & network access subject to terms & conditions",
    ],
  },
  {
    kicker: "04 — Peace of Mind",
    title: "Just Plug & Play",
    body: "No spectrum license to file, no technicians to hire, no depreciating asset sitting on your balance sheet. We are responsible for provisioning, managing and maintaining the infrastructure — you focus on your core business.",
    points: [
      "No license required — we hold it for you",
      "No initial set-up cost",
      "No maintenance responsibility",
      "Quick response for emergency situations",
    ],
  },
];

export type Product = {
  slug: string;
  image: string;
  name: string;
  category: string;
  power: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "handheld-portable-radio",
    image: "/images/product-handheld-1.jpg",
    name: "Handheld Portable Radio",
    category: "Handheld",
    power: "5W output",
    description:
      "Our entry-point handheld — a rugged, pocketable radio for site teams, security details and event crews who need instant, hands-free group communication.",
    features: ["With or without keypad", "Scrambler options available", "Combine radio + network access"],
  },
  {
    slug: "motorola-gp680",
    image: "/images/product-handheld-2.jpg",
    name: "Motorola GP680",
    category: "Handheld",
    power: "5W output",
    description:
      "A full-keypad Motorola handset built for teams that need on-radio channel and text control alongside the durability Motorola's professional range is known for.",
    features: ["Full keypad & display", "Wide manufacturer range", "Field-proven durability"],
  },
  {
    slug: "motorola-gp640",
    image: "/images/product-handheld-3.jpg",
    name: "Motorola GP640",
    category: "Handheld",
    power: "5W output",
    description:
      "A compact, single-channel Motorola handheld for straightforward, no-fuss coordination — light enough for all-day wear on site.",
    features: ["Compact, lightweight body", "Single-channel simplicity", "Ideal for site teams"],
  },
  {
    slug: "mobile-radio",
    image: "/images/product-mobile.jpg",
    name: "Mobile Radio",
    category: "Vehicle-mounted",
    power: "25W output",
    description:
      "A vehicle-mounted radio for pool cars, buses and dispatch fleets, supplied complete with microphone and power supply for a straightforward in-cab install.",
    features: ["Microphone & PSU included", "Magnetic or external Yagi antenna", "Combine radio + network access"],
  },
  {
    slug: "base-station-radio",
    image: "/images/product-base-station.jpg",
    name: "Base Station Radio",
    category: "Fixed Base",
    power: "Repeater-linked",
    description:
      "A fixed base unit for the control room or dispatch desk, linking into Linkline's rooftop repeater network to extend reach across your whole operation.",
    features: ["Rooftop repeater compatible", "Control room / dispatch ready", "Extends network-wide coverage"],
  },
  {
    slug: "motorola-cp200d",
    image: "/images/product-handheld-1.jpg",
    name: "Motorola CP200D",
    category: "Handheld",
    power: "5W output",
    description:
      "A digital-ready Motorola handheld in a rugged, IP-rated housing — available outright or on lease for teams planning ahead for a digital upgrade path.",
    features: ["Digital-ready platform", "Rugged, IP-rated housing", "Lease or outright purchase"],
  },
  {
    slug: "hytera-pd505",
    image: "/images/product-handheld-2.jpg",
    name: "Hytera PD505",
    category: "Handheld",
    power: "5W output",
    description:
      "A slim digital handset from Hytera with clear-voice noise cancellation, suited to busy sites where background noise makes cheaper radios hard to hear.",
    features: ["Slim digital handset", "Clear-voice noise cancellation", "Scrambler options available"],
  },
  {
    slug: "kenwood-tk-3207",
    image: "/images/product-handheld-3.jpg",
    name: "Kenwood TK-3207",
    category: "Handheld",
    power: "5W output",
    description:
      "An entry-level, budget-friendly Kenwood handheld for simple single-channel jobs — a popular short-term hire for events and one-off projects.",
    features: ["Entry-level, budget friendly", "Simple single-channel operation", "Ideal for event & short-term hire"],
  },
  {
    slug: "motorola-cm200d-mobile",
    image: "/images/product-mobile.jpg",
    name: "Motorola CM200d Mobile",
    category: "Vehicle-mounted",
    power: "25W output",
    description:
      "A dispatch-console compatible mobile unit built for fleet and pool-vehicle use, keeping drivers and control room on the same channel.",
    features: ["Dispatch-console compatible", "Fleet & pool-vehicle ready", "Combine radio + network access"],
  },
  {
    slug: "repeater-base-station-kit",
    image: "/images/product-base-station.jpg",
    name: "Repeater & Base Station Kit",
    category: "Fixed Base",
    power: "Repeater-linked",
    description:
      "A full duplex repeater and base station kit for coordinating large sites or warehouses, with a buyout option once your network need is proven.",
    features: ["Full duplex operation", "Site & warehouse coordination", "Buyout option available"],
  },
];

export type Industry = {
  image: string;
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  { image: "/images/industry-oilgas.png", name: "Oil & Gas", blurb: "Offshore platforms and onshore facilities in constant contact." },
  { image: "/images/industry-aviation.png", name: "Aviation", blurb: "Ground handling and airside coordination, rain or shine." },
  { image: "/images/industry-security.png", name: "Security", blurb: "Private security and rapid response teams, always on channel." },
  { image: "/images/industry-logistics.png", name: "Logistics & Freight", blurb: "Yard, crane and dispatch teams moving in sync." },
  { image: "/images/industry-transport.png", name: "Transport & Fleet", blurb: "Taxi, car hire and pool fleets with live coordination." },
  { image: "/images/industry-taxi.png", name: "Taxi & Car Hire", blurb: "Dispatch-to-driver communication that beats cellular lag." },
];

export const industriesExtended = [
  "Manufacturing",
  "Construction & Engineering",
  "Government",
  "Cargo & Freight Forwarding",
  "Travels & Tours",
  "Hospitality",
  "Naval & Port Waiting Areas",
  "Cash-in-Transit / Bullion Vans",
  "Fleet Management",
  "Towing Associations",
  "Emergency Call Centres",
  "Private Security / RRS",
  "Port & Marine Services",
  "Telemetry & Alarm Systems",
  "Events Management",
  "Protocol Services (Embassies, CEOs in transit)",
  "Facility Management",
] as const;

export const coverage = [
  { route: "Lagos – Epe Expressway", extent: "4km after VGC Estate & Epe Town" },
  { route: "Lagos – Ikorodu Road", extent: "Mile 12 / Owode / Ikorodu LGA Secretariat" },
  { route: "Lagos – Abeokuta Expressway", extent: "Gateway Hotel, Otta" },
  { route: "Lagos – Ibadan Expressway", extent: "Sagamu / Abeokuta Interchange" },
  { route: "Lagos – Badagry Expressway", extent: "Alaba / Agbara Estate & Badagry Town" },
  { route: "Fairway Buoy (Outside Bar)", extent: "50–60km out to sea from Apapa" },
] as const;

export const stats = [
  { value: "6", label: "Lagos coverage corridors" },
  { value: "20+", label: "Industries served" },
  { value: "0", label: "License required" },
  { value: "24/7", label: "Group channel access" },
] as const;

export const whyUs = [
  {
    title: "Immediate, one-to-many voice",
    body: "No dialling, no ringing, no waiting for a free line. Press to talk and your whole team hears you at once, hands-free and eyes-free.",
  },
  {
    title: "Private communications community",
    body: "Your channel, your people. No telemarketers, no unauthorised contacts — restricted access keeps communication fast and clean.",
  },
  {
    title: "Built for safety-critical teams",
    body: "From cash-in-transit to construction sites, instant group information means faster decisions and stronger safety for people in the field.",
  },
  {
    title: "Lower cost than cellular",
    body: "A flat quarterly fee replaces per-minute cellular billing — unlimited communication with a cost you can budget against with certainty.",
  },
] as const;

export const faqs = [
  {
    q: "Do I need a license to operate a two-way radio through Linkline?",
    a: "No. Under our Radio Managed Service scheme, Linkline holds the network license and is responsible for provisioning, managing and maintaining your two-way radio infrastructure — you simply plug in and use it.",
  },
  {
    q: "What's included in the flat monthly / quarterly fee?",
    a: "Network access (airtime) and, where selected, the radio terminal itself can be combined into a single simple flat rate. Terminal & network access packages are subject to terms and conditions.",
  },
  {
    q: "Can I buy the equipment outright instead of leasing?",
    a: "Yes. Handheld, mobile and base-station radios are available for outright sale as well as lease or rental, and a buyout option is offered on leased terminals.",
  },
  {
    q: "What area does the network cover?",
    a: "Our commercial trunk radio network covers greater commercial Lagos — from the CBD on Lagos Island out to Epe, Ikorodu, Otta, Sagamu, Badagry and up to 60km out to sea from Apapa. See the coverage map for full detail.",
  },
  {
    q: "Which industries use Linkline's radio network?",
    a: "Manufacturing, construction, security, government, aviation, transport, cargo & freight forwarding, taxi & car hire fleets, travel & tours, logistics, hospitality, naval & port operations, oil & gas, and more — see the full list in the Industries section.",
  },
] as const;

export type SearchEntry = {
  label: string;
  group: string;
  href: string;
};

/** Flat, searchable index of the site's pages and products — powers the header search box. */
export const searchIndex: SearchEntry[] = [
  { label: "Home", group: "Page", href: "/" },
  { label: "Services & Products", group: "Page", href: "/services" },
  { label: "Industries & Coverage", group: "Page", href: "/industries" },
  { label: "About Linkline", group: "Page", href: "/about" },
  { label: "Contact & quotes", group: "Page", href: "/contact" },
  { label: "FAQ", group: "Page", href: "/contact#faq" },
  ...services.map((s) => ({ label: s.title, group: "Service", href: "/services#services" })),
  ...products.map((p) => ({ label: p.name, group: `Product · ${p.category}`, href: `/products/${p.slug}` })),
  ...industries.map((i) => ({ label: i.name, group: "Industry", href: "/industries#industries" })),
  ...industriesExtended.map((name) => ({ label: name, group: "Industry", href: "/industries#industries" })),
  ...coverage.map((c) => ({ label: c.route, group: "Coverage", href: "/industries#coverage" })),
];

