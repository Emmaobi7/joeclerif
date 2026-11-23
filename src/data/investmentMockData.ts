// ============================================================================
// J O C L A R I F — THE BUSINESS CASE
// Executive ROI, Commercial Strategy & Growth Opportunity Mock Data
// Currency: Nigerian Naira (₦ / NGN)
// Strictly follows the STILL WATERS luxury editorial aesthetic and commercial rules
// ============================================================================

export interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  description: string;
  commercialSynergy: string;
  revenueImpact: string;
  position: [number, number, number]; // 3D coordinates
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "accommodation",
    name: "Hotel Accommodation",
    category: "Core Asset",
    description: "Executive suites, deluxe rooms, and premium stay packages with frictionless direct digital reservations.",
    commercialSynergy: "Anchor asset providing baseline guest relationships, room revenue, and footfall for all ancillary services.",
    revenueImpact: "Captures 100% direct booking value, bypassing 18-25% OTA distribution commissions.",
    position: [0, 0.4, 0],
  },
  {
    id: "events",
    name: "Events & Weddings",
    category: "High-Margin Hospitality",
    description: "Banquet halls, royal wedding packages, corporate conference suites, and coordinated catering logistics.",
    commercialSynergy: "Drives multi-day group room blocks, high-ticket hall rentals, and whole-estate beverage sales.",
    revenueImpact: "₦3.5M - ₦12M per marquee banquet booking with coordinated digital enquiry pipeline.",
    position: [-2.2, 1.2, 0.8],
  },
  {
    id: "experiences",
    name: "Guest Experiences",
    category: "On-Property Services",
    description: "In-room fine dining, private terrace reservations, curated wellness sessions, and bespoke culinary requests.",
    commercialSynergy: "Increases average spend per occupied room (RevPAG) without requiring external guest acquisition.",
    revenueImpact: "+35% uplift in ancillary guest spend through high-touch digital service menus.",
    position: [2.1, 1.1, -0.6],
  },
  {
    id: "mobility",
    name: "Car Hire & Mobility",
    category: "Transit Extension",
    description: "Airport transfers (Kaduna / Abuja), executive chauffeur service, luxury intercity convoys, and partner fleets.",
    commercialSynergy: "Captures guest journey before arrival and after checkout; provides continuous transit revenue.",
    revenueImpact: "₦35,000 - ₦180,000 per transfer booking with 20-30% platform margin or direct fleet yield.",
    position: [-2.6, -0.8, -1.0],
  },
  {
    id: "companion",
    name: "Companion Discovery",
    category: "Separately Governed Network",
    description: "Lawful adult social companionship, verified introductions, dining escorts, and gala coordination.",
    commercialSynergy: "Private luxury digital ecosystem with verified KYC, escrow holding, and dual-PIN completion.",
    revenueImpact: "Optional platform marketplace commission (15-20%) on completed lawful bookings.",
    position: [2.8, -0.6, 1.1],
  },
  {
    id: "hospitality-services",
    name: "Hospitality Services",
    category: "Operational Touchpoints",
    description: "Digital concierge, express laundry, curated local excursions, bespoke room staging, and luggage logistics.",
    commercialSynergy: "Delivers effortless guest satisfaction while unlocking incremental billing per touchpoint.",
    revenueImpact: "Transforms cost-centre guest services into transparent, trackable profit centres.",
    position: [-1.4, -1.8, 1.4],
  },
  {
    id: "operations",
    name: "Hotel Operations",
    category: "Efficiency Backbone",
    description: "Housekeeping scheduling, preventative asset maintenance, front-desk workflows, and shift coordination.",
    commercialSynergy: "Reduces administrative burden, lowers overtime expenses, and maintains 5-star physical standards.",
    revenueImpact: "Recovers 280+ administrative hours monthly across front desk, housekeeping, and maintenance.",
    position: [1.3, -1.9, -1.3],
  },
  {
    id: "intelligence",
    name: "Business Intelligence",
    category: "Financial Cockpit",
    description: "Revenue reconciliation, procurement audit trails, payroll visibility, asset depreciation, and AI queries.",
    commercialSynergy: "Eliminates blind revenue leakage, detects supplier overbilling, and provides executive decision clarity.",
    revenueImpact: "Identifies 4-8% hidden leakage across inventory, unbilled services, and payment reconciliation.",
    position: [0, 2.4, -0.4],
  },
  {
    id: "regional-network",
    name: "Regional Commercial Networks",
    category: "Multi-Market Scale",
    description: "Inter-city hospitality partnerships across Zaria, Kaduna, Abuja, Kano, and national executive corridors.",
    commercialSynergy: "Aggregates corporate accounts, cross-city fleet dispatch, and national brand equity.",
    revenueImpact: "Compounds platform network effects, unlocking corporate master service agreements.",
    position: [0.2, -2.6, 0.5],
  },
];

// ============================================================================
// 2. THE REVENUE ENGINES
// ============================================================================

export interface RevenueEngine {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  capabilities: string[];
  commercialOpportunities: string[];
  governanceNotes?: string;
  monetizationStreams?: {
    name: string;
    model: string;
    description: string;
    whoPays: string;
  }[];
  networkEffects?: string[];
  competitiveAdvantage?: string;
}

export const REVENUE_ENGINES: RevenueEngine[] = [
  {
    id: "core-hospitality",
    number: "01",
    title: "Core Hospitality Revenue",
    subtitle: "The Hotel's Existing Foundation",
    tagline: "Maximising the commercial value of existing customer demand.",
    overview:
      "Rather than assuming low occupancy, Engine 01 focuses on capturing the full economic yield of every guest relationship. By transitioning from third-party distribution dependencies into an exquisite direct digital channel, Joclarif improves enquiry conversion, captures corporate room blocks, and unlocks high-ticket banquet revenues.",
    capabilities: [
      "Direct room reservations with instant confirmation and preferred rates",
      "Bespoke digital guest profiles and stay customization",
      "Wedding reservations and coordinated ceremony planning",
      "Corporate conference and executive summit bookings",
      "Multi-purpose banquet hall rentals and gala catering",
      "Group accommodation blocks with single-invoice billing",
      "Contracted corporate rates for recurring business travellers",
      "Curated in-room dining and premium guest service requests",
      "Exclusive seasonal hospitality offerings and weekend retreats",
    ],
    commercialOpportunities: [
      "Improve enquiry-to-booking conversion through instant, responsive booking copilots",
      "Capture direct bookings to retain 18% - 25% commissions paid to external booking portals",
      "Increase on-property guest expenditure through personalized digital touchpoints",
      "Build sticky, direct guest relationships that generate recurring, predictable stays",
      "Structure multi-day wedding and corporate retreat packages with bundled services",
      "Standardize rate parity and yield management across seasonal demand cycles",
    ],
    competitiveAdvantage:
      "Transforms Joclarif from a passive listing on third-party OTAs into an autonomous luxury destination that owns its guest data, guest relationships, and pricing power.",
  },
  {
    id: "mobility",
    number: "02",
    title: "Car Hire & Mobility Services",
    subtitle: "Whole-Journey Transit Extension",
    tagline: "A natural, dignified extension of luxury hospitality.",
    overview:
      "Guest journeys do not begin at the hotel lobby—they begin when the executive steps off the aircraft at Kaduna Airport or Nnamdi Azikiwe International Airport in Abuja. By embedding high-touch mobility into the core guest flow, the hotel unlocks high-margin transportation revenue across both hotel-owned and vetted partner fleets.",
    capabilities: [
      "Airport pickup & drop-off with flight-tracking coordination",
      "Dedicated chauffeur-driven executive saloons & luxury SUVs",
      "Vetted self-drive vehicle options with digital verification",
      "Hourly, full-day, and multi-day vehicle bookings",
      "Event transportation logistics for weddings and summits",
      "Secure intercity travel convoys (Zaria — Kaduna — Abuja — Kano)",
      "Real-time vehicle availability, live tracking, and dispatch control",
      "Bundled accommodation + transit one-click billing",
    ],
    commercialOpportunities: [
      "Direct fleet revenue yield on hotel-owned luxury vehicles",
      "20% - 30% platform margin on bookings fulfilled by approved transport operators",
      "Annual corporate transportation service agreements",
      "High-converting airport transfer packages bundled with suite stays",
      "Premium intercity security convoy coordination for dignitaries",
      "Zero deadheading through intelligent multi-guest airport scheduling",
    ],
    competitiveAdvantage:
      "Flexible hybrid fleet model: Operates seamlessly whether the hotel invests in its own fleet or leverages vetted local transport operators under strict brand SLAs.",
  },
  {
    id: "companion",
    number: "03",
    title: "J O C L A R I F Companion",
    subtitle: "Separately Governed Private Marketplace",
    tagline: "Private social companionship, verified identity, and escrow trust.",
    overview:
      "A separately governed, private digital service tailored for adult social companionship, professional event escorts, fine dining accompaniment, and social coordination. Operating with sovereign NDPR-compliant privacy, upfront escrow protection, and dual-party PIN release, it establishes unprecedented market trust.",
    capabilities: [
      "Sovereign identity and verified government ID / age authentication",
      "Strict manual profile review and approval before visibility",
      "Complete companion autonomy over availability, boundaries, and acceptance",
      "Discreet guest browsing with role-based private credentialing",
      "Upfront escrow reservation locking through licensed payment gateways",
      "Dual-PIN completion handshake ensuring mutual verification",
      "Zero visibility of private details to unauthorized hotel staff",
    ],
    commercialOpportunities: [
      "Booking Commission: 15% - 20% platform fee on eligible, completed, lawful bookings",
      "Premium Membership: Optional recurring monthly subscriptions for enhanced profile analytics",
      "Professional Visibility: Transparent, labelled promotional placement for top-rated profiles",
      "Partner Services: Curated commercial partnerships for dining, hair/styling, and private transit",
    ],
    governanceNotes:
      "Strict Compliance Standard: The lawful scope of Joclarif Companion is strictly limited to adult social companionship, introductions, and event coordination. It does NOT facilitate prostitution, sexual services, trafficking, coercion, or unlawful activity. Excluded from default base-case ROI scenarios until formal management and legal governance approval.",
    networkEffects: [
      "More verified, approved participants enhance availability and dignity of choice.",
      "Attracts discerning high-value guests who prioritize security and discretion.",
      "Completed transactions generate recurring, compliant platform commission.",
      "Scales seamlessly into a city-by-city network across Northern Nigeria and national hubs.",
    ],
    competitiveAdvantage:
      "Eliminates informal, high-risk, unverified interactions by replacing them with institutional-grade KYC, financial escrow security, and mutual consent guarantees.",
  },
  {
    id: "executive-services",
    number: "04",
    title: "Premium Concierge & Executive Services",
    subtitle: "High-Profile Dignitary & Corporate Hospitality",
    tagline: "Exceptional hospitality. Personalised service. Respect for privacy.",
    overview:
      "Tailored for dignitaries, executives, government delegations, public figures, and international visitors to Zaria and Kaduna State. By combining high-touch white-glove service with cryptographic privacy guarantees, Joclarif captures lucrative corporate retainers and high-yield VIP delegations.",
    capabilities: [
      "Private VIP booking assistance with direct GM/executive desk line",
      "Tarmac and airport VIP transfer coordination with protocol assistance",
      "Dedicated personal guest concierge assigned throughout the stay",
      "Private dining arrangements and bespoke culinary staging",
      "Tailored corporate accommodation agreements with guaranteed SLAs",
      "Cryptographic role-based access to guest preferences and itinerary",
      "Zero staff leakage of sensitive guest identities or guest movements",
    ],
    commercialOpportunities: [
      "Premium room rate uplift (30% - 60% above standard rack rates)",
      "Multi-week corporate retainers for visiting executive teams and university delegations",
      "High repeat rate among high-net-worth travellers who prioritize discretion",
      "Private event and banquet coordination fees",
      "Exclusive corporate account billing agreements",
    ],
    competitiveAdvantage:
      "Privacy as a Competitive Advantage: In Northern Nigeria's executive market, discretion is paramount. Role-based access ensures minimal staff exposure to private guest itineraries, creating unmatched executive trust.",
  },
];

// ============================================================================
// 3. AUDIENCE MONETIZATION & PARTNERSHIPS
// ============================================================================

export interface MonetizationChannel {
  id: string;
  name: string;
  description: string;
  targetPartners: string[];
  commercialMechanic: string;
}

export const MONETIZATION_CHANNELS: MonetizationChannel[] = [
  {
    id: "sponsored-placements",
    name: "Sponsored Placements",
    description: "Carefully curated placements within relevant platform areas, offering non-intrusive discovery.",
    targetPartners: ["Local car hire operators", "Airport transfer services", "Fine dining establishments", "Artisan textile houses"],
    commercialMechanic: "Monthly flat placement fee or cost-per-qualified lead.",
  },
  {
    id: "featured-partners",
    name: "Featured Partners",
    description: "Vetted businesses enjoying elevated visibility in destination guides and guest service menus.",
    targetPartners: ["Ahmadu Bello University cultural tours", "Kaduna Golf Club", "Equestrian & Polo clubs", "Wellness spas"],
    commercialMechanic: "Quarterly partnership packages with verified guest endorsement badges.",
  },
  {
    id: "sponsored-campaigns",
    name: "Sponsored Campaigns",
    description: "Multi-channel digital hospitality campaigns timed with major regional events and holidays.",
    targetPartners: ["Annual Zaria Durbar festivals", "Convocation ceremonies", "National corporate retreats", "Bridal fashion houses"],
    commercialMechanic: "Campaign-based sponsorship fees ranging from ₦500,000 to ₦2,500,000 per marquee event.",
  },
  {
    id: "partnership-commissions",
    name: "Partnership Commissions",
    description: "Performance-linked revenue share from approved off-property bookings and guest experiences.",
    targetPartners: ["Luxury private charter flights", "Regional tour guides", "Curated event decorators", "Security logistics"],
    commercialMechanic: "10% - 20% commission on fulfilled gross order value.",
  },
];

export const AUDIENCE_GROWTH_STAGES = [
  {
    stage: "Stage 01",
    name: "Early Flagship Stage",
    focus: "Hospitality Foundation & Guest Trust",
    description: "Focus entirely on hotel-owned services and tightly controlled partner experiences. Zero spam; guest experience and brand trust take absolute precedence.",
    revenuePotential: "Modest initial partner commissions (₦250k - ₦600k / mo)",
  },
  {
    stage: "Stage 02",
    name: "Growing Digital Ecosystem",
    focus: "Vetted Category Partners",
    description: "Introduce carefully selected sponsored placements for mobility operators, event vendors, and dining partners. Establish formal quarterly partner packages.",
    revenuePotential: "Established partner revenue stream (₦1.2M - ₦3.5M / mo)",
  },
  {
    stage: "Stage 03",
    name: "Multi-City Hospitality Network",
    focus: "Regional Brand & National Sponsorships",
    description: "Offer multi-city campaigns across Zaria, Kaduna, Abuja, and Kano. Large consumer and financial brands sponsor corporate travel, executive perks, and seasonal hospitality.",
    revenuePotential: "Scalable commercial network (₦5M - ₦15M+ / mo)",
  },
];

// ============================================================================
// 4. WORKFORCE EFFICIENCY OPPORTUNITY
// ============================================================================

export interface DepartmentWorkflow {
  id: string;
  department: string;
  beforeProcesses: string[];
  afterProcesses: string[];
  hoursRecoveredPerWeek: number;
  redeploymentBenefit: string;
}

export const DEPARTMENT_WORKFLOWS: DepartmentWorkflow[] = [
  {
    id: "reservations",
    department: "Reservations & Bookings",
    beforeProcesses: [
      "Manual phone and WhatsApp booking capture",
      "Manual bank transfer verification and screenshot cross-checks",
      "Paper-based availability ledgers prone to double-booking",
      "Delayed email responses to banquet and wedding enquiries",
    ],
    afterProcesses: [
      "Instant 24/7 autonomous booking engine with real-time room lock",
      "Automated payment gateway verification and instant invoice generation",
      "Centralized cloud reservation inventory synchronizing all channels",
      "Automated event enquiry qualification with instant rate estimate",
    ],
    hoursRecoveredPerWeek: 35,
    redeploymentBenefit: "Staff shift focus from administrative typing to high-touch VIP client relationship management.",
  },
  {
    id: "front-desk",
    department: "Front Desk & Reception",
    beforeProcesses: [
      "Physical paper registration cards filled out upon arrival",
      "Long check-in queues during peak conference arrivals",
      "Manual key-envelope sorting and paper receipt handovers",
      "Disjointed guest requests relayed via intercom or walkie-talkie",
    ],
    afterProcesses: [
      "Digital pre-arrival check-in on guest mobile device",
      "Express 30-second lobby key collection with pre-verified ID",
      "Digital receipts, amenity billing, and automated checkout",
      "Integrated digital concierge dispatch with live resolution tracking",
    ],
    hoursRecoveredPerWeek: 42,
    redeploymentBenefit: "Warm, attentive guest welcoming without administrative barriers or awkward waiting times.",
  },
  {
    id: "housekeeping",
    department: "Housekeeping & Facilities",
    beforeProcesses: [
      "Morning clipboard printouts of room cleaning schedules",
      "Housekeepers physically inspecting vacant rooms to confirm status",
      "Maintenance faults scribbled in logbooks with delayed technician alerts",
      "Excessive linen and amenities hoarding due to poor stock visibility",
    ],
    afterProcesses: [
      "Live mobile room status dispatch prioritized by incoming arrivals",
      "Instant one-tap 'Room Ready' updates directly alerting front desk",
      "Photo-documented maintenance tickets dispatched instantly to engineers",
      "Precise per-room amenity consumption tracking",
    ],
    hoursRecoveredPerWeek: 48,
    redeploymentBenefit: "Faster room turnaround during high occupancy; pristine physical standards and longer asset lifespans.",
  },
  {
    id: "hr",
    department: "Human Resources & Rostering",
    beforeProcesses: [
      "Paper sign-in attendance books prone to buddy-punching",
      "Manual shift roster creation in spreadsheets with frequent clashes",
      "Complicated overtime recalculations and dispute resolution",
      "Disorganized physical employee record binders",
    ],
    afterProcesses: [
      "Geofenced digital biometric attendance logging",
      "Dynamic shift scheduling matching real-time occupancy forecasts",
      "Automated overtime calculation with auditable shift sign-offs",
      "Centralized employee credentials, training records, and compliance files",
    ],
    hoursRecoveredPerWeek: 28,
    redeploymentBenefit: "Elimination of unverified overtime claims; structured staff training and performance tracking.",
  },
  {
    id: "finance",
    department: "Finance & Reconciliation",
    beforeProcesses: [
      "End-of-day cash counting and manual POS receipt tallying",
      "Delayed bank statement reconciliation taking 5-7 days post-month-end",
      "Unnoticed discrepancies between room bookings and restaurant tabs",
      "Paper supplier delivery notes mismatched with invoice payments",
    ],
    afterProcesses: [
      "Automated continuous reconciliation of card, transfer, and POS payments",
      "Instant daily financial summaries visible in executive cockpit",
      "Direct room-folio posting for restaurant and mobility services",
      "Three-way digital matching of purchase orders, goods received, and vendor invoices",
    ],
    hoursRecoveredPerWeek: 38,
    redeploymentBenefit: "Real-time cash flow certainty; complete audit readiness for owners and tax authorities.",
  },
  {
    id: "management",
    department: "Executive Management",
    beforeProcesses: [
      "Calling multiple department heads daily to compile operational status",
      "Scattered reports across WhatsApp groups, physical files, and emails",
      "Inability to answer simple financial or operational questions without delays",
      "Reactive decision-making after issues have already escalated",
    ],
    afterProcesses: [
      "Unified executive command cockpit with real-time operational pulse",
      "Traceable AI natural-language query assistant with citation audit trails",
      "Automated morning executive brief delivered via mobile",
      "Predictive alert notifications for inventory thresholds or margin anomalies",
    ],
    hoursRecoveredPerWeek: 25,
    redeploymentBenefit: "Strategic focus on commercial partnerships, regional expansion, and high-value client acquisition.",
  },
];

// ============================================================================
// 5. BUSINESS PROTECTION & INTELLIGENCE AUDIT
// ============================================================================

export interface ProtectionArea {
  id: string;
  title: string;
  riskDescription: string;
  intelligenceRemedy: string;
  evidenceType: "verified-ledger" | "document-ocr" | "simulated" | "real-time-sensor";
  illustrativeImpact: string;
}

export const PROTECTION_AREAS: ProtectionArea[] = [
  {
    id: "revenue-leakage",
    title: "Revenue Leakage Elimination",
    riskDescription: "Unbilled late checkouts, unposted room service trays, informal cash upgrades, and unrecorded hall hire hours.",
    intelligenceRemedy: "Continuous cross-reconciliation between electronic door lock logs, POS settlement streams, and central PMS folios.",
    evidenceType: "verified-ledger",
    illustrativeImpact: "Detects and recovers 3% - 6% of previously unrecorded incidental revenue.",
  },
  {
    id: "procurement-leakage",
    title: "Procurement & Inventory Audit",
    riskDescription: "Supplier invoice price creep, phantom deliveries, food & beverage inventory shrinkage, and duplicate vendor payments.",
    intelligenceRemedy: "Algorithmic three-way matching of digital purchase orders, delivery store scans, and bank disbursement records.",
    evidenceType: "document-ocr",
    illustrativeImpact: "Prevents 4% - 8% procurement overbilling and standardizes kitchen recipe ingredient yields.",
  },
  {
    id: "workforce-efficiency",
    title: "Workforce & Overtime Integrity",
    riskDescription: "Unmonitored overtime creep, ghost staffing on shift logs, and inefficient staff scheduling during low-occupancy troughs.",
    intelligenceRemedy: "Biometric geofenced attendance integrated with real-time room occupancy and banquet event schedules.",
    evidenceType: "real-time-sensor",
    illustrativeImpact: "Saves 15% - 25% on unverified overtime and temporary labour agency fees.",
  },
  {
    id: "maintenance-costs",
    title: "Preventative Asset Protection",
    riskDescription: "Running generators, chillers, and industrial laundry equipment until catastrophic failure, resulting in emergency repair markups.",
    intelligenceRemedy: "Equipment runtime telemetry, scheduled maintenance intervals, and digitized warranty / parts lifecycle logs.",
    evidenceType: "verified-ledger",
    illustrativeImpact: "Reduces emergency capital expenditures by 30% and prolongs primary generator/HVAC lifespans by 3-5 years.",
  },
  {
    id: "management-time",
    title: "Executive Clarity & Speed",
    riskDescription: "General Manager and Owner spending 10-15 hours per week manually requesting and cross-verifying departmental reports.",
    intelligenceRemedy: "Autonomous AI evidence assistant capable of answering complex multi-department questions with verifiable source documents.",
    evidenceType: "simulated",
    illustrativeImpact: "Reduces executive reporting compilation time by 80%, providing instant answers backed by document citations.",
  },
];

// ============================================================================
// 6. COMPETITIVE POSITIONING MATRIX
// ============================================================================

export interface ComparisonDimension {
  dimension: string;
  traditionalWeb: "none" | "partial" | "full";
  otaPlatforms: "none" | "partial" | "full";
  conventionalPms: "none" | "partial" | "full";
  standaloneConcierge: "none" | "partial" | "full";
  transportMarketplace: "none" | "partial" | "full";
  generalAi: "none" | "partial" | "full";
  joclarifEcosystem: "full";
  joclarifNote: string;
}

export const COMPETITIVE_DIMENSIONS: ComparisonDimension[] = [
  {
    dimension: "Guest Acquisition & Brand Elevation",
    traditionalWeb: "partial",
    otaPlatforms: "full",
    conventionalPms: "none",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Transforms hotel into an autonomous luxury brand, bypassing high OTA middleman fees.",
  },
  {
    dimension: "Direct Commission-Free Reservations",
    traditionalWeb: "partial",
    otaPlatforms: "none",
    conventionalPms: "partial",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Instant digital room locks with Nigerian payment gateway integrations (Paystack/Flutterwave).",
  },
  {
    dimension: "Wedding & Banquet Enquiry Pipeline",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "none",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Interactive 3D spatial hall layouts, banquet seat planners, and automated multi-tier quotations.",
  },
  {
    dimension: "Integrated Car Hire & Chauffeur Coordination",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "none",
    standaloneConcierge: "partial",
    transportMarketplace: "full",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Whole-journey transit bundled into stay folio with flight-tracking airport dispatch.",
  },
  {
    dimension: "High-Touch In-Stay Concierge & Amenity Orders",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "none",
    standaloneConcierge: "full",
    transportMarketplace: "none",
    generalAi: "partial",
    joclarifEcosystem: "full",
    joclarifNote: "Seamless mobile service ordering without downloading cumbersome third-party software.",
  },
  {
    dimension: "Whole-Property Operational Visibility",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "partial",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Connects housekeeping, front desk, maintenance, and kitchen into one synchronized pulse.",
  },
  {
    dimension: "Historical Document & Operational Intelligence",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "none",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "partial",
    joclarifEcosystem: "full",
    joclarifNote: "Domain-specific AI index with citation proofs, distinguishing ledger audits from simulations.",
  },
  {
    dimension: "Real-Time Financial & Revenue Leakage Audit",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "partial",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Continuous automated three-way matching of reservations, POS receipts, and bank credits.",
  },
  {
    dimension: "Workforce Rostering & Overtime Governance",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "partial",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Geofenced attendance linked to occupancy patterns to eliminate unverified overtime.",
  },
  {
    dimension: "Ancillary Marketplace Revenue Streams",
    traditionalWeb: "none",
    otaPlatforms: "none",
    conventionalPms: "none",
    standaloneConcierge: "none",
    transportMarketplace: "none",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Unlocks commissions from mobility, partner dining, sponsored placements, and private services.",
  },
  {
    dimension: "Multi-City Regional Scalability",
    traditionalWeb: "none",
    otaPlatforms: "full",
    conventionalPms: "none",
    standaloneConcierge: "none",
    transportMarketplace: "partial",
    generalAi: "none",
    joclarifEcosystem: "full",
    joclarifNote: "Architected to expand from Zaria flagship to Kaduna, Abuja, Kano, and national hubs.",
  },
];

// ============================================================================
// 7. REGIONAL EXPANSION STRATEGY & NIGERIA HUBS
// ============================================================================

export interface RegionalHub {
  id: string;
  name: string;
  state: string;
  role: string;
  coordinates: { x: number; y: number }; // Relative map coordinates (%)
  demandProfile: string;
  fleetPartners: string;
  projectedNetworkMultiplier: string;
  status: "flagship" | "phase-2" | "phase-3" | "phase-4";
}

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: "zaria",
    name: "Zaria",
    state: "Kaduna State",
    role: "Flagship Property & Academic Hub",
    coordinates: { x: 50, y: 32 },
    demandProfile: "Ahmadu Bello University dignitaries, federal institutes, royal weddings, and Northern business delegations.",
    fleetPartners: "Primary hotel-owned executive fleet + 4 vetted local chauffeur operators.",
    projectedNetworkMultiplier: "1.0x (Flagship Anchor)",
    status: "flagship",
  },
  {
    id: "kaduna",
    name: "Kaduna City",
    state: "Kaduna State",
    role: "State Capital & Airport Corridor",
    coordinates: { x: 48, y: 39 },
    demandProfile: "Kaduna International Airport arrivals, state executive events, defense colleges, and agricultural agribusiness summits.",
    fleetPartners: "8 airport transfer partners + intercity shuttle dispatch.",
    projectedNetworkMultiplier: "1.8x combined corridor synergy",
    status: "phase-2",
  },
  {
    id: "abuja",
    name: "Abuja FCT",
    state: "Federal Capital Territory",
    role: "Diplomatic & Federal Government Hub",
    coordinates: { x: 49, y: 52 },
    demandProfile: "Diplomats, ministerial delegations, federal procurement summits, and high-net-worth weekend retreats to Zaria.",
    fleetPartners: "15 luxury vehicle partners + armoured executive convoy services.",
    projectedNetworkMultiplier: "3.2x network value uplift",
    status: "phase-3",
  },
  {
    id: "kano",
    name: "Kano Commercial Centre",
    state: "Kano State",
    role: "Northern Commercial & Industrial Capital",
    coordinates: { x: 56, y: 22 },
    demandProfile: "Major industrial conglomerates, trans-Saharan trade merchants, regional weddings, and international commercial flights.",
    fleetPartners: "12 vetted transport partners + cross-border trade coordinators.",
    projectedNetworkMultiplier: "2.5x regional trade expansion",
    status: "phase-3",
  },
  {
    id: "lagos",
    name: "Lagos Victoria Island / Ikoyi",
    state: "Lagos State",
    role: "Corporate HQ & Financial Capital",
    coordinates: { x: 26, y: 78 },
    demandProfile: "Corporate headquarters managing northern branch operations, oil & gas executives, and luxury lifestyle partners.",
    fleetPartners: "Tier-1 executive mobility providers + premium hospitality syndicates.",
    projectedNetworkMultiplier: "5.0x corporate client cross-sell",
    status: "phase-4",
  },
  {
    id: "port-harcourt",
    name: "Port Harcourt",
    state: "Rivers State",
    role: "Energy & Infrastructure Hub",
    coordinates: { x: 52, y: 84 },
    demandProfile: "Energy sector consultants and government infrastructure delegations travelling to Northern regional offices.",
    fleetPartners: "Specialized corporate mobility and airport security escorts.",
    projectedNetworkMultiplier: "2.1x energy corridor connectivity",
    status: "phase-4",
  },
];

export const EXPANSION_STAGES = [
  {
    stage: "Stage 01",
    title: "Establish the Flagship (Zaria)",
    timeline: "Months 1 - 4",
    milestones: [
      "Deploy core direct digital guest experience and booking engine",
      "Digitize wedding and banquet reservations pipeline with 3D layouts",
      "Launch whole-journey airport pickup and car hire coordination",
      "Operationalize housekeeping, maintenance, and front-desk workflows",
      "Activate executive intelligence dashboard and revenue reconciliation",
    ],
  },
  {
    stage: "Stage 02",
    title: "Build the Local Ecosystem (Kaduna Corridor)",
    timeline: "Months 5 - 8",
    milestones: [
      "Onboard approved Kaduna Airport transfer operators under strict SLAs",
      "Integrate local hospitality and dining partners with cross-charging",
      "Establish corporate master agreements with Kaduna and Zaria institutions",
      "Launch executive white-glove concierge and privacy-first protocols",
      "Initiate legal, compliance, and governance review for companion marketplace",
    ],
  },
  {
    stage: "Stage 03",
    title: "Expand Across Northern Corridors (Abuja & Kano)",
    timeline: "Months 9 - 14",
    milestones: [
      "Launch regular intercity executive transport routes (Zaria — Kaduna — Abuja — Kano)",
      "Sign corporate accommodation agreements with federal ministries and multinationals",
      "Roll out regional sponsored placement packages for top commercial partners",
      "Deploy cross-property management visibility for partnered guest properties",
      "Activate city-specific service discovery nodes",
    ],
  },
  {
    stage: "Stage 04",
    title: "Recognised National Hospitality Network",
    timeline: "Months 15+",
    milestones: [
      "Multi-property portfolio management across Northern and Southern executive hubs",
      "National advertising sponsorship agreements with premier financial & telecoms brands",
      "Centralized loyalty and corporate travel privilege program",
      "Unified multi-city guest profile portability with NDPR cryptographic controls",
      "Established brand recognized for security, discretion, and operational excellence",
    ],
  },
];

// ============================================================================
// 8. COMMERCIAL REVENUE MODEL MATRIX
// ============================================================================

export interface CommercialStream {
  stream: string;
  proposedModel: string;
  whoPays: string;
  valueReceived: string;
  howJoclarifEarns: string;
  modelType: "Recurring" | "Transaction-based" | "Hybrid";
  thirdPartyDependency: "None" | "Low" | "Medium" | "High";
  governanceDependency: string;
  ownershipAttribution: "Hotel Direct" | "Platform Operator" | "Shared Commission";
}

export const COMMERCIAL_STREAMS: CommercialStream[] = [
  {
    stream: "Hotel Accommodation",
    proposedModel: "Direct room reservations",
    whoPays: "Hotel guest / Corporate client",
    valueReceived: "Guaranteed luxury accommodation, seamless stay customization, preferred direct rates",
    howJoclarifEarns: "Retains 100% room revenue (avoids 18-25% OTA commissions)",
    modelType: "Transaction-based",
    thirdPartyDependency: "None",
    governanceDependency: "Hotel rate parity management and PMS synchronization",
    ownershipAttribution: "Hotel Direct",
  },
  {
    stream: "Weddings & Banquets",
    proposedModel: "Hall hire & catering contracts",
    whoPays: "Wedding couples / Corporate event planners",
    valueReceived: "Bespoke event planning, multi-day hall booking, guaranteed catering standards",
    howJoclarifEarns: "High-ticket booking values (₦3.5M - ₦15M per marquee contract)",
    modelType: "Transaction-based",
    thirdPartyDependency: "Low",
    governanceDependency: "Contractual cancellation policy and security deposit escrow",
    ownershipAttribution: "Hotel Direct",
  },
  {
    stream: "Car Hire & Mobility",
    proposedModel: "Direct fleet yield / Partner commission",
    whoPays: "Arriving guest / Executive traveller",
    valueReceived: "Flight-tracked airport pickup, vetted chauffeur, safe intercity convoy",
    howJoclarifEarns: "100% of hotel fleet yield OR 20-30% commission on partner-dispatched trips",
    modelType: "Transaction-based",
    thirdPartyDependency: "Medium",
    governanceDependency: "Driver background checks, vehicle inspection, and passenger insurance",
    ownershipAttribution: "Shared Commission",
  },
  {
    stream: "Joclarif Companion",
    proposedModel: "Platform transaction commission",
    whoPays: "Guest booking adult social companion",
    valueReceived: "Verified identity, safe introduction, upfront escrow, dual-PIN handshake",
    howJoclarifEarns: "15% - 20% commission on eligible completed lawful bookings",
    modelType: "Transaction-based",
    thirdPartyDependency: "High",
    governanceDependency: "Strict NDPR compliance, 18+ age verification, zero tolerance for unlawful conduct",
    ownershipAttribution: "Platform Operator",
  },
  {
    stream: "Premium Memberships",
    proposedModel: "Recurring subscription fees",
    whoPays: "Companions / Verified service professionals",
    valueReceived: "Enhanced profile visibility, priority booking requests, advanced schedule management",
    howJoclarifEarns: "Monthly subscription fee (₦25,000 - ₦75,000 / month)",
    modelType: "Recurring",
    thirdPartyDependency: "None",
    governanceDependency: "Fair, transparent marketplace placement rules",
    ownershipAttribution: "Platform Operator",
  },
  {
    stream: "Featured Partner Placements",
    proposedModel: "Paid commercial placements",
    whoPays: "Approved regional vendors (spas, restaurants, transport)",
    valueReceived: "Direct visibility to affluent guests in digital concierge and destination guide",
    howJoclarifEarns: "Quarterly promotional retainer (₦150,000 - ₦500,000 / quarter)",
    modelType: "Recurring",
    thirdPartyDependency: "Low",
    governanceDependency: "Quality SLA vetting and editorial standard compliance",
    ownershipAttribution: "Shared Commission",
  },
  {
    stream: "Sponsored Brand Campaigns",
    proposedModel: "High-visibility seasonal sponsorships",
    whoPays: "Consumer brands, telecoms, corporate banks",
    valueReceived: "Targeted engagement with luxury hospitality audience during key festivals (Durbar)",
    howJoclarifEarns: "Fixed campaign sponsorship fee (₦750,000 - ₦3,000,000 per campaign)",
    modelType: "Transaction-based",
    thirdPartyDependency: "Low",
    governanceDependency: "Brand safety guidelines and non-intrusive placement standards",
    ownershipAttribution: "Platform Operator",
  },
  {
    stream: "Corporate Hospitality Retainers",
    proposedModel: "Negotiated master service agreements",
    whoPays: "Multinational corporations, universities, government MDAs",
    valueReceived: "Guaranteed room availability, negotiated executive rates, single consolidated invoice",
    howJoclarifEarns: "High-volume recurring room nights and executive dining minimums",
    modelType: "Hybrid",
    thirdPartyDependency: "None",
    governanceDependency: "Credit terms, billing compliance, and corporate procurement approvals",
    ownershipAttribution: "Hotel Direct",
  },
  {
    stream: "Executive Concierge Services",
    proposedModel: "Service fee markup / Luxury service fee",
    whoPays: "High-profile dignitaries / VIP guests",
    valueReceived: "Discreet white-glove coordination, private jet tarmac handling, bespoke security",
    howJoclarifEarns: "20% - 35% service fee on coordinated private luxury itineraries",
    modelType: "Transaction-based",
    thirdPartyDependency: "Medium",
    governanceDependency: "Confidentiality agreements and role-based staff access restrictions",
    ownershipAttribution: "Hotel Direct",
  },
  {
    stream: "Partner Referral Commissions",
    proposedModel: "Affiliate referral fee",
    whoPays: "Third-party tour operators, cultural artisans, golf clubs",
    valueReceived: "Qualified, paying luxury guests directed to their premises",
    howJoclarifEarns: "10% - 15% referral commission per fulfilled guest booking",
    modelType: "Transaction-based",
    thirdPartyDependency: "High",
    governanceDependency: "Digital referral tracking code and partner settlement audit",
    ownershipAttribution: "Shared Commission",
  },
];

// ============================================================================
// 9. FINANCIAL ROI CALCULATOR DEFAULT PRESETS
// ============================================================================

export interface FinancialScenario {
  id: "conservative" | "expected" | "ambitious";
  label: string;
  tagline: string;
  description: string;

  // Core Hospitality Inputs
  annualBookingRevenue: number; // ₦ e.g. 180M
  directChannelImprovementPct: number; // e.g. 15%
  avoidedOtaCommissionRatePct: number; // e.g. 18%
  additionalMonthlyEvents: number; // e.g. 2
  profitPerEvent: number; // e.g. ₦1,800,000

  // Car Hire Inputs
  monthlyCarHireBookings: number; // e.g. 30
  avgCarHireValue: number; // e.g. ₦45,000
  hotelFleetSharePct: number; // e.g. 40% (rest partner)
  hotelFleetMarginPct: number; // e.g. 70%
  partnerCommissionPct: number; // e.g. 25%

  // Companion Inputs (Disabled by default)
  companionMonthlyBookings: number; // e.g. 40
  companionAvgBookingValue: number; // e.g. ₦80,000
  companionCommissionRatePct: number; // e.g. 18%
  companionMonthlyMemberships: number; // e.g. 12
  companionMembershipFee: number; // e.g. ₦35,000

  // Advertising & Partnerships
  monthlySponsoredCampaigns: number; // e.g. 1
  avgSponsorshipFee: number; // e.g. ₦650,000
  monthlyFeaturedPartners: number; // e.g. 4
  featuredPartnerFee: number; // e.g. ₦120,000
  monthlyPartnerReferrals: number; // e.g. ₦200,000

  // Executive Services
  monthlyCorporateBookings: number; // e.g. 15
  profitPerCorporateBooking: number; // e.g. ₦85,000

  // Operating Savings Inputs
  monthlyAdminHoursRecovered: number; // e.g. 180 hours
  staffHourlyCost: number; // e.g. ₦2,500/hr
  monthlyOvertimeReduction: number; // e.g. ₦450,000 (actual cash)
  monthlyTempLabourReduction: number; // e.g. ₦300,000 (actual cash)
  monthlyInventoryLossReduction: number; // e.g. ₦550,000 (actual cash)
  monthlyMaintenanceSavings: number; // e.g. ₦380,000 (actual cash)
  monthlyPaymentReconciliationImprovement: number; // e.g. ₦420,000 (actual cash)

  // Operating Costs Inputs
  // NOTE: Initial Project Investment is deliberately NOT set here; must be entered by presenter.
  monthlySoftwareInfraCost: number; // e.g. ₦350,000
  monthlySupportMaintenanceCost: number; // e.g. ₦250,000
  monthlyCustomerAcquisitionExpense: number; // e.g. ₦200,000
  monthlyPlatformAdminExpense: number; // e.g. ₦180,000
}

export const FINANCIAL_SCENARIOS: Record<string, FinancialScenario> = {
  conservative: {
    id: "conservative",
    label: "Conservative Scenario",
    tagline: "Modest adoption, primary focus on direct room bookings & basic leakage control.",
    description: "Assumes cautious gradual guest adoption, steady shift of existing OTA traffic to direct website, and modest operational expense reductions.",
    annualBookingRevenue: 120000000, // ₦120M annual baseline
    directChannelImprovementPct: 10, // 10% shift
    avoidedOtaCommissionRatePct: 16, // 16% commission saved
    additionalMonthlyEvents: 1, // 1 event
    profitPerEvent: 1200000, // ₦1.2M profit
    monthlyCarHireBookings: 15, // 15 trips
    avgCarHireValue: 40000,
    hotelFleetSharePct: 30,
    hotelFleetMarginPct: 65,
    partnerCommissionPct: 20,
    companionMonthlyBookings: 20,
    companionAvgBookingValue: 65000,
    companionCommissionRatePct: 15,
    companionMonthlyMemberships: 6,
    companionMembershipFee: 25000,
    monthlySponsoredCampaigns: 0,
    avgSponsorshipFee: 0,
    monthlyFeaturedPartners: 2,
    featuredPartnerFee: 80000,
    monthlyPartnerReferrals: 100000,
    monthlyCorporateBookings: 8,
    profitPerCorporateBooking: 60000,
    monthlyAdminHoursRecovered: 120, // Capacity released
    staffHourlyCost: 2000,
    monthlyOvertimeReduction: 250000, // Cash
    monthlyTempLabourReduction: 150000, // Cash
    monthlyInventoryLossReduction: 300000, // Cash
    monthlyMaintenanceSavings: 200000, // Cash
    monthlyPaymentReconciliationImprovement: 250000, // Cash
    monthlySoftwareInfraCost: 250000,
    monthlySupportMaintenanceCost: 180000,
    monthlyCustomerAcquisitionExpense: 120000,
    monthlyPlatformAdminExpense: 100000,
  },
  expected: {
    id: "expected",
    label: "Expected Case (Realistic Target)",
    tagline: "Healthy direct booking conversion, active mobility dispatch, and comprehensive audit savings.",
    description: "Reflects standard luxury hospitality performance with coordinated digital marketing, active airport transfers, and automated reconciliation.",
    annualBookingRevenue: 180000000, // ₦180M annual baseline
    directChannelImprovementPct: 18, // 18% shift
    avoidedOtaCommissionRatePct: 18, // 18% commission saved
    additionalMonthlyEvents: 2, // 2 events
    profitPerEvent: 1800000, // ₦1.8M profit
    monthlyCarHireBookings: 35, // 35 trips
    avgCarHireValue: 45000,
    hotelFleetSharePct: 40,
    hotelFleetMarginPct: 70,
    partnerCommissionPct: 25,
    companionMonthlyBookings: 45,
    companionAvgBookingValue: 85000,
    companionCommissionRatePct: 18,
    companionMonthlyMemberships: 15,
    companionMembershipFee: 35000,
    monthlySponsoredCampaigns: 1,
    avgSponsorshipFee: 650000,
    monthlyFeaturedPartners: 5,
    featuredPartnerFee: 120000,
    monthlyPartnerReferrals: 250000,
    monthlyCorporateBookings: 18,
    profitPerCorporateBooking: 85000,
    monthlyAdminHoursRecovered: 220, // Capacity released
    staffHourlyCost: 2500,
    monthlyOvertimeReduction: 450000, // Cash
    monthlyTempLabourReduction: 350000, // Cash
    monthlyInventoryLossReduction: 600000, // Cash
    monthlyMaintenanceSavings: 420000, // Cash
    monthlyPaymentReconciliationImprovement: 480000, // Cash
    monthlySoftwareInfraCost: 380000,
    monthlySupportMaintenanceCost: 280000,
    monthlyCustomerAcquisitionExpense: 220000,
    monthlyPlatformAdminExpense: 180000,
  },
  ambitious: {
    id: "ambitious",
    label: "Ambitious Growth Scenario",
    tagline: "Corridor leadership across Kaduna & Abuja, high wedding pipeline, and premium corporate retainers.",
    description: "Captures full regional network multiplier with heavy intercity executive transit, premier brand campaigns, and maximum administrative automation.",
    annualBookingRevenue: 280000000, // ₦280M annual baseline
    directChannelImprovementPct: 28, // 28% shift
    avoidedOtaCommissionRatePct: 20, // 20% commission saved
    additionalMonthlyEvents: 4, // 4 events
    profitPerEvent: 2400000, // ₦2.4M profit
    monthlyCarHireBookings: 75, // 75 trips
    avgCarHireValue: 55000,
    hotelFleetSharePct: 50,
    hotelFleetMarginPct: 75,
    partnerCommissionPct: 30,
    companionMonthlyBookings: 90,
    companionAvgBookingValue: 110000,
    companionCommissionRatePct: 20,
    companionMonthlyMemberships: 30,
    companionMembershipFee: 50000,
    monthlySponsoredCampaigns: 2,
    avgSponsorshipFee: 1200000,
    monthlyFeaturedPartners: 8,
    featuredPartnerFee: 180000,
    monthlyPartnerReferrals: 500000,
    monthlyCorporateBookings: 35,
    profitPerCorporateBooking: 120000,
    monthlyAdminHoursRecovered: 350, // Capacity released
    staffHourlyCost: 3000,
    monthlyOvertimeReduction: 850000, // Cash
    monthlyTempLabourReduction: 600000, // Cash
    monthlyInventoryLossReduction: 1100000, // Cash
    monthlyMaintenanceSavings: 750000, // Cash
    monthlyPaymentReconciliationImprovement: 900000, // Cash
    monthlySoftwareInfraCost: 550000,
    monthlySupportMaintenanceCost: 400000,
    monthlyCustomerAcquisitionExpense: 350000,
    monthlyPlatformAdminExpense: 280000,
  },
};

// ============================================================================
// 10. COST OF DOING NOTHING — 10 RISK VECTORS
// ============================================================================

export interface InactionRisk {
  id: string;
  title: string;
  consequence: string;
  annualOpportunityCostEstimate: string;
  operationalFriction: string;
}

export const INACTION_RISKS: InactionRisk[] = [
  {
    id: "ota-drain",
    title: "Continuous OTA Commission Drainage",
    consequence: "Paying 18% - 25% of top-line room revenue to external booking sites without acquiring direct customer relationship data.",
    annualOpportunityCostEstimate: "₦15M - ₦35M lost in avoidable intermediary commissions.",
    operationalFriction: "Guests identify with Booking.com rather than Joclarif; no direct re-engagement mechanism.",
  },
  {
    id: "lost-banquets",
    title: "Slow Event & Wedding Enquiry Conversion",
    consequence: "Prospective couples and corporate planners waiting 48-72 hours for quotations while competing venues respond instantly.",
    annualOpportunityCostEstimate: "₦12M - ₦28M in lost banquet and hall hire bookings annually.",
    operationalFriction: "Inquiries scattered across manager WhatsApps, paper notebooks, and lost phone logs.",
  },
  {
    id: "unmonetized-transit",
    title: "Surrendered Mobility & Chauffeur Revenue",
    consequence: "Guests arranging informal taxis or airport shuttles on their own, leaving transit revenue entirely off-property.",
    annualOpportunityCostEstimate: "₦6M - ₦18M in uncaptured airport transfer and chauffeur bookings.",
    operationalFriction: "Staff scrambling to find ad-hoc drivers without standardized pricing or safety guarantees.",
  },
  {
    id: "admin-paralysis",
    title: "Administrative Time Sunk in Repetitive Tasks",
    consequence: "Front desk, housekeeping, and finance teams spending 180+ hours monthly on spreadsheets, manual receipts, and phone calls.",
    annualOpportunityCostEstimate: "₦5M - ₦9M in productive capacity consumed by manual typing.",
    operationalFriction: "Staff are exhausted by administrative overhead instead of focusing on attentive guest hospitality.",
  },
  {
    id: "procurement-blindspots",
    title: "Procurement Overbilling & Inventory Loss",
    consequence: "Undetected ingredient shrinkage, duplicate vendor payments, and unverified bulk beverage stock deliveries.",
    annualOpportunityCostEstimate: "₦4M - ₦12M in untracked kitchen and facility inventory leakage.",
    operationalFriction: "Disputes between storekeepers and accounts with zero digital audit trail.",
  },
  {
    id: "unverified-overtime",
    title: "Uncontrolled Overtime & Temp Staff Creep",
    consequence: "Paper attendance sheets allowing buddy-punching and inflated overtime claims during busy weekends.",
    annualOpportunityCostEstimate: "₦3.5M - ₦8M in unverified payroll disbursements.",
    operationalFriction: "Friction between department managers and HR over payroll accuracy.",
  },
  {
    id: "reactive-maintenance",
    title: "Costly Emergency Asset Breakdowns",
    consequence: "Generators, HVAC units, and water pumps running until sudden failure, triggering expensive emergency call-outs.",
    annualOpportunityCostEstimate: "₦5M - ₦14M in emergency repair premiums and shortened asset longevity.",
    operationalFriction: "Guest complaints and negative reviews due to temporary power or cooling disruptions.",
  },
  {
    id: "fragmented-records",
    title: "Executive Blindness & Slow Management Decisions",
    consequence: "Owner and General Manager unable to see current day profit or department breakdown without asking 5 people.",
    annualOpportunityCostEstimate: "Incalculable strategic drag on commercial agility and pricing decisions.",
    operationalFriction: "Decisions made on anecdotal impressions rather than real-time verified data.",
  },
  {
    id: "zero-partner-yield",
    title: "Zero Monetization of Regional Influence",
    consequence: "Local car hire operators, florists, and tour providers profiting from hotel guests without paying referral fees.",
    annualOpportunityCostEstimate: "₦2.5M - ₦6M in lost affiliate and sponsorship income.",
    operationalFriction: "No structured partner network; unvetted third parties entering property without SLAs.",
  },
  {
    id: "geographic-lock-in",
    title: "Inability to Scale Beyond a Single Property",
    consequence: "Remaining a standalone physical property while regional hotel chains expand digital reach across Northern Nigeria.",
    annualOpportunityCostEstimate: "Loss of regional brand equity and high-value corporate travel contracts.",
    operationalFriction: "Competitors with digital platforms capture lucrative corporate master service agreements.",
  },
];

// ============================================================================
// 11. IMPLEMENTATION & COMMERCIAL GOVERNANCE (6 STAGES)
// ============================================================================

export interface ImplementationPhase {
  phase: number;
  title: string;
  focus: string;
  duration: string;
  deliverables: string[];
  governanceCategory: "Demonstration Ready" | "Proposed Production" | "Third-Party Contract" | "Regulatory Review";
}

export const IMPLEMENTATION_PHASES: ImplementationPhase[] = [
  {
    phase: 1,
    title: "Core Hotel Digital Experience & Direct Reservations",
    focus: "Flagship Foundation",
    duration: "Weeks 1 - 6",
    deliverables: [
      "Deployment of high-converting luxury editorial microsite and booking copilot",
      "Paystack & Flutterwave multi-currency payment gateway integration",
      "Automated reservation folios and instant SMS/WhatsApp booking confirmations",
      "Direct channel price parity guarantees and promotional code engine",
    ],
    governanceCategory: "Proposed Production",
  },
  {
    phase: 2,
    title: "Guest Services, Banquet Reservations & Mobility",
    focus: "Revenue Expansion",
    duration: "Weeks 7 - 12",
    deliverables: [
      "3D Spatial Pavilion & Banquet seat planner for weddings and conferences",
      "Whole-journey airport transfer dispatch (Kaduna & Abuja corridors)",
      "Digital concierge service ordering (dining, laundry, amenities)",
      "Standard operating procedure SLAs for chauffeur operators",
    ],
    governanceCategory: "Proposed Production",
  },
  {
    phase: 3,
    title: "Operations & Workforce Digitisation",
    focus: "Efficiency & Cost Control",
    duration: "Weeks 13 - 18",
    deliverables: [
      "Housekeeping mobile dispatch with live room turnaround tracking",
      "Geofenced biometric staff attendance and automated overtime auditing",
      "Digital maintenance ticket dispatch with photo inspection evidence",
      "Inventory store tracking for food, beverage, and cleaning chemicals",
    ],
    governanceCategory: "Proposed Production",
  },
  {
    phase: 4,
    title: "Intelligence & Financial Governance Cockpit",
    focus: "Protection & Executive Clarity",
    duration: "Weeks 19 - 24",
    deliverables: [
      "Continuous three-way reconciliation of room folios, POS, and bank deposits",
      "Traceable AI executive assistant with verifiable document citations",
      "Automated daily GM executive summary and anomaly alerts",
      "Preventative maintenance asset lifecycle tracking",
    ],
    governanceCategory: "Proposed Production",
  },
  {
    phase: 5,
    title: "Additional Partner & Marketplace Services",
    focus: "Ancillary Commercialization",
    duration: "Weeks 25 - 32",
    deliverables: [
      "Sponsored partner placements in digital concierge and destination guides",
      "Quarterly corporate partner packages for local dining and cultural tours",
      "Commercial review of private Companion marketplace protocols",
      "Escrow payment architecture testing with licensed banking partners",
    ],
    governanceCategory: "Regulatory Review",
  },
  {
    phase: 6,
    title: "Regional Network & Multi-Property Scaling",
    focus: "National Expansion",
    duration: "Month 9+",
    deliverables: [
      "Cross-property portfolio management dashboard",
      "Corporate master service agreements across Zaria, Kaduna, Abuja, and Kano",
      "Regional brand sponsorship campaigns for premier corporate events",
      "Unified multi-city guest profile portability with NDPR security controls",
    ],
    governanceCategory: "Proposed Production",
  },
];

// Helper for formatting Naira
export function formatNaira(amount: number): string {
  if (isNaN(amount) || amount === 0) return "₦0";
  return "₦" + Math.round(amount).toLocaleString("en-NG");
}
